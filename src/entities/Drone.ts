import * as THREE from 'three';
import type { MaterialLibrary } from '@/world/Materials';
import { makeBox, makeCylinder } from '@/world/BuildUtils';
import { bakeHeat, HEAT } from '@/render/HeatMaterial';
import { cfg } from '@/core/Config';
import { clamp, clamp01, damp, lerp } from '@/core/MathUtil';
import { models } from '@/world/ModelRegistry';

const ARM = 0.78;
const PROP_R = 0.42;

export interface DroneState {
  battery: number;
  batteryMax: number;
  foam: number;
  foamMax: number;
  hull: number;
  /** Масса груза на борту, кг */
  payload: number;
}

/**
 * «Стриж-1» — тяжёлый спасательный квадрокоптер.
 * Геометрия собрана из примитивов, но с деталями, по которым читается техника:
 * гимбал-камера, брандспойт пены, барабан лебёдки, посадочные лыжи, АНО.
 */
export class Drone {
  readonly root = new THREE.Group();
  readonly state: DroneState;

  /** Точка вылета струи пены в локальных координатах. */
  readonly nozzleLocal = new THREE.Vector3(0, -0.06, 0.62);
  /** Точка крепления троса. */
  readonly winchLocal = new THREE.Vector3(0, -0.16, -0.04);

  private body = new THREE.Group();
  private rotors: THREE.Group[] = [];
  private blurDiscs: THREE.Mesh[] = [];
  private navLights: THREE.Mesh[] = [];
  private strobe!: THREE.Mesh;
  private gimbal = new THREE.Group();
  private searchlight!: THREE.SpotLight;

  private cable!: THREE.Mesh;
  private basket = new THREE.Group();

  private rotorSpin = 0;
  private rotorRpm = 0;
  private strobePhase = 0;
  private tiltPitch = 0;
  private tiltRoll = 0;

  constructor(private readonly mat: MaterialLibrary) {
    this.state = {
      battery: cfg.battery.capacity,
      batteryMax: cfg.battery.capacity,
      foam: cfg.foam.tank,
      foamMax: cfg.foam.tank,
      hull: cfg.hull.max,
      payload: 0,
    };

    const custom = models.instantiate('drone.swift1');
    if (custom) {
      this.body.add(custom);
      this.buildWinch();
    } else {
      this.buildAirframe();
      this.buildWinch();
    }

    this.root.add(this.body);
    bakeHeat(this.root, HEAT.machine);
  }

  /* ---------------------------------------------------------------- */
  /* Сборка планера                                                    */
  /* ---------------------------------------------------------------- */

  private buildAirframe(): void {
    const m = this.mat;

    // Центральный фюзеляж: нижняя платформа + верхний обтекатель.
    const hull = makeBox(0.52, 0.16, 0.78, m.droneShell, 0, 0, 0, { tile: 0.5, heat: HEAT.machine });
    this.body.add(hull);

    const canopyGeo = new THREE.SphereGeometry(0.3, 20, 12, 0, Math.PI * 2, 0, Math.PI / 2);
    canopyGeo.scale(1.0, 0.62, 1.35);
    const canopy = new THREE.Mesh(canopyGeo, m.droneShell);
    canopy.position.y = 0.07;
    canopy.castShadow = true;
    canopy.userData.heat = HEAT.machine;
    this.body.add(canopy);

    // Оранжевая полоса МЧС по верху корпуса.
    this.body.add(makeBox(0.2, 0.035, 0.72, m.droneAccent, 0, 0.24, 0, { tile: 0.4, heat: HEAT.machine }));
    this.body.add(makeBox(0.46, 0.04, 0.14, m.droneAccent, 0, 0.2, -0.28, { tile: 0.4, heat: HEAT.machine }));

    // Батарейный блок снизу.
    this.body.add(makeBox(0.34, 0.13, 0.44, m.droneDark, 0, -0.13, -0.05, { tile: 0.4, heat: HEAT.machine }));

    // Бак пены и брандспойт.
    const tankGeo = new THREE.CapsuleGeometry(0.11, 0.3, 6, 12);
    tankGeo.rotateX(Math.PI / 2);
    const tank = new THREE.Mesh(tankGeo, m.droneAccent);
    tank.position.set(0, -0.05, 0.18);
    tank.castShadow = true;
    tank.userData.heat = HEAT.machine;
    this.body.add(tank);
    this.body.add(makeCylinder(0.035, 0.05, 0.22, m.droneDark, 0, -0.06, 0.52, 10, { rotX: Math.PI / 2, heat: HEAT.machine }));

    // Гимбал с камерой — слегка «живой», доворачивается по тангажу.
    const gimbalArm = makeCylinder(0.05, 0.05, 0.1, m.droneDark, 0, -0.12, 0.3, 10, { heat: HEAT.machine });
    this.body.add(gimbalArm);
    const ballGeo = new THREE.SphereGeometry(0.09, 14, 10);
    const ball = new THREE.Mesh(ballGeo, m.droneDark);
    ball.castShadow = true;
    ball.userData.heat = HEAT.machine;
    const lensGeo = new THREE.CylinderGeometry(0.045, 0.045, 0.03, 12);
    lensGeo.rotateX(Math.PI / 2);
    const lens = new THREE.Mesh(
      lensGeo,
      new THREE.MeshStandardMaterial({ color: 0x0a1a24, roughness: 0.08, metalness: 0.9, emissive: 0x0a3040, emissiveIntensity: 0.6 }),
    );
    lens.position.z = 0.075;
    this.gimbal.add(ball, lens);
    this.gimbal.position.set(0, -0.2, 0.3);
    this.body.add(this.gimbal);

    // Прожектор — в дыму без него никуда.
    this.searchlight = new THREE.SpotLight(0xfff0d6, 32, 34, 0.55, 0.45, 1.4);
    this.searchlight.position.set(0, -0.16, 0.36);
    this.searchlight.target.position.set(0, -2.4, 3.2);
    this.body.add(this.searchlight);
    this.body.add(this.searchlight.target);

    // Лучи-балки, моторы, винты.
    const arms: [number, number][] = [
      [1, 1],
      [-1, 1],
      [-1, -1],
      [1, -1],
    ];
    for (const [sx, sz] of arms) {
      const ax = sx * ARM * 0.707;
      const az = sz * ARM * 0.707;

      const armMesh = makeBox(0.07, 0.06, ARM, m.droneShell, ax / 2, 0.0, az / 2, {
        tile: 0.4,
        rotY: Math.atan2(ax, az),
        heat: HEAT.machine,
      });
      this.body.add(armMesh);

      // Моторный узел
      this.body.add(makeCylinder(0.075, 0.09, 0.13, m.droneDark, ax, 0.05, az, 12, { heat: HEAT.machine }));
      this.body.add(makeCylinder(0.055, 0.055, 0.05, m.droneAccent, ax, 0.13, az, 12, { heat: HEAT.machine }));

      // Винт: две лопасти в отдельной группе, чтобы крутить целиком.
      const rotor = new THREE.Group();
      rotor.position.set(ax, 0.17, az);
      for (const angle of [0, Math.PI]) {
        const bladeGeo = new THREE.BoxGeometry(PROP_R, 0.012, 0.07);
        bladeGeo.translate(PROP_R / 2, 0, 0);
        const blade = new THREE.Mesh(bladeGeo, m.droneDark);
        blade.rotation.y = angle;
        blade.rotation.z = 0.16 * (sx * sz > 0 ? 1 : -1);
        blade.castShadow = true;
        blade.userData.heat = HEAT.machine;
        rotor.add(blade);
      }
      this.body.add(rotor);
      this.rotors.push(rotor);

      // Диск размытия появляется на оборотах.
      const discGeo = new THREE.CircleGeometry(PROP_R, 24);
      discGeo.rotateX(-Math.PI / 2);
      const disc = new THREE.Mesh(discGeo, m.rotorBlur.clone());
      disc.position.set(ax, 0.172, az);
      disc.userData.heat = HEAT.machine;
      this.body.add(disc);
      this.blurDiscs.push(disc);

      // Защитная дуга над винтом.
      const guardGeo = new THREE.TorusGeometry(PROP_R + 0.04, 0.012, 6, 20, Math.PI);
      guardGeo.rotateX(-Math.PI / 2);
      const guard = new THREE.Mesh(guardGeo, m.droneShell);
      guard.position.set(ax, 0.2, az);
      guard.rotation.y = Math.atan2(-ax, -az);
      guard.userData.heat = HEAT.machine;
      this.body.add(guard);
    }

    // Посадочные лыжи.
    for (const sx of [-1, 1]) {
      this.body.add(makeBox(0.045, 0.045, 0.66, m.droneDark, sx * 0.24, -0.31, 0.02, { tile: 0.4, heat: HEAT.machine }));
      this.body.add(makeBox(0.04, 0.2, 0.04, m.droneDark, sx * 0.24, -0.21, 0.24, { tile: 0.3, heat: HEAT.machine }));
      this.body.add(makeBox(0.04, 0.2, 0.04, m.droneDark, sx * 0.24, -0.21, -0.2, { tile: 0.3, heat: HEAT.machine }));
    }

    // Аэронавигационные огни: зелёный правый, красный левый, белый хвостовой.
    const navGeo = new THREE.SphereGeometry(0.035, 8, 6);
    const makeLamp = (color: number, x: number, z: number): THREE.Mesh => {
      const lamp = new THREE.Mesh(
        navGeo,
        new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: 2.2, roughness: 0.3 }),
      );
      lamp.position.set(x, 0.02, z);
      lamp.userData.heat = HEAT.machine;
      this.body.add(lamp);
      return lamp;
    };
    this.navLights.push(makeLamp(0x33ff66, ARM * 0.707, ARM * 0.707));
    this.navLights.push(makeLamp(0xff3344, -ARM * 0.707, ARM * 0.707));
    this.strobe = makeLamp(0xffffff, 0, -0.42);
  }

  /* ---------------------------------------------------------------- */
  /* Лебёдка                                                           */
  /* ---------------------------------------------------------------- */

  private buildWinch(): void {
    const m = this.mat;

    // Барабан.
    this.body.add(makeCylinder(0.07, 0.07, 0.16, m.droneDark, 0, -0.14, -0.06, 10, { rotZ: Math.PI / 2, heat: HEAT.machine }));

    const cableGeo = new THREE.CylinderGeometry(0.012, 0.012, 1, 6);
    cableGeo.translate(0, -0.5, 0);
    this.cable = new THREE.Mesh(cableGeo, m.cable);
    this.cable.position.copy(this.winchLocal);
    this.cable.visible = false;
    this.cable.userData.heat = HEAT.cold;
    this.body.add(this.cable);

    // Спасательная люлька: рама + днище + оранжевые борта.
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.34, 0.025, 6, 18), m.droneAccent);
    ring.rotation.x = Math.PI / 2;
    ring.userData.heat = HEAT.machine;
    const floorGeo = new THREE.CylinderGeometry(0.33, 0.33, 0.03, 18);
    const floor = new THREE.Mesh(floorGeo, m.droneDark);
    floor.position.y = -0.32;
    floor.userData.heat = HEAT.machine;
    const lower = new THREE.Mesh(new THREE.TorusGeometry(0.34, 0.02, 6, 18), m.droneAccent);
    lower.rotation.x = Math.PI / 2;
    lower.position.y = -0.3;
    lower.userData.heat = HEAT.machine;
    this.basket.add(ring, lower, floor);
    for (let i = 0; i < 4; i++) {
      const a = (i / 4) * Math.PI * 2;
      const post = makeCylinder(0.014, 0.014, 0.32, m.droneAccent, Math.cos(a) * 0.33, -0.16, Math.sin(a) * 0.33, 6, {
        heat: HEAT.machine,
      });
      this.basket.add(post);
      const sling = makeCylinder(0.008, 0.008, 0.36, m.cable, Math.cos(a) * 0.17, 0.17, Math.sin(a) * 0.17, 4, {
        rotZ: Math.cos(a) * 0.5,
        rotX: -Math.sin(a) * 0.5,
      });
      this.basket.add(sling);
    }
    this.basket.visible = false;
    this.body.add(this.basket);
  }

  /* ---------------------------------------------------------------- */
  /* Визуальное состояние                                              */
  /* ---------------------------------------------------------------- */

  /** Длина выпущенного троса в метрах; 0 — убран. */
  setCable(length: number): void {
    const visible = length > 0.02;
    this.cable.visible = visible;
    this.basket.visible = visible;
    if (!visible) return;
    this.cable.scale.y = length;
    this.basket.position.set(this.winchLocal.x, this.winchLocal.y - length, this.winchLocal.z);
  }

  setSearchlight(enabled: boolean): void {
    if (this.searchlight) this.searchlight.intensity = enabled ? 32 : 0;
  }

  /**
   * Обновляет наклон корпуса, вращение винтов и мигание огней.
   * throttle 0..1 — насколько нагружены моторы, влияет на скорость винтов и звук.
   */
  updateVisuals(dt: number, velocity: THREE.Vector3, yaw: number, throttle: number, airborne: boolean): void {
    const f = cfg.flight;

    // Наклон в сторону движения — главный визуальный признак ускорения.
    const local = velocity.clone().applyAxisAngle(new THREE.Vector3(0, 1, 0), -yaw);
    const maxSpeed = Math.max(1, f.maxSpeed);
    const targetPitch = clamp(local.z / maxSpeed, -1, 1) * f.maxTilt;
    const targetRoll = -clamp(local.x / maxSpeed, -1, 1) * f.maxTilt;

    this.tiltPitch = damp(this.tiltPitch, airborne ? targetPitch : 0, f.tiltResponse, dt);
    this.tiltRoll = damp(this.tiltRoll, airborne ? targetRoll : 0, f.tiltResponse, dt);

    this.body.rotation.set(this.tiltPitch, 0, this.tiltRoll);
    this.root.rotation.y = yaw;

    // Гимбал компенсирует наклон корпуса — камера остаётся в горизонте.
    this.gimbal.rotation.x = -this.tiltPitch * 0.85;

    // Винты: обороты следуют за тягой, диск размытия проявляется на скорости.
    const targetRpm = airborne ? lerp(26, 46, clamp01(throttle)) : lerp(0, 6, clamp01(throttle));
    this.rotorRpm = damp(this.rotorRpm, targetRpm, 4.5, dt);
    this.rotorSpin += this.rotorRpm * dt;
    for (let i = 0; i < this.rotors.length; i++) {
      this.rotors[i].rotation.y = this.rotorSpin * (i % 2 === 0 ? 1 : -1);
      const blur = clamp01((this.rotorRpm - 8) / 22);
      (this.blurDiscs[i].material as THREE.MeshBasicMaterial).opacity = blur * 0.14;
      this.rotors[i].visible = blur < 0.98;
    }

    // Проблесковый огонь: короткая двойная вспышка, как у настоящего борта.
    this.strobePhase += dt;
    const cycle = this.strobePhase % 1.5;
    const flash = cycle < 0.05 || (cycle > 0.15 && cycle < 0.2) ? 2.6 : 0.04;
    (this.strobe.material as THREE.MeshStandardMaterial).emissiveIntensity = flash;

    for (const lamp of this.navLights) {
      (lamp.material as THREE.MeshStandardMaterial).emissiveIntensity = airborne ? 2.0 : 0.8;
    }
  }

  get totalMass(): number {
    return cfg.mass.empty + this.state.payload;
  }

  resetState(): void {
    this.state.battery = this.state.batteryMax = cfg.battery.capacity;
    this.state.foam = this.state.foamMax = cfg.foam.tank;
    this.state.hull = cfg.hull.max;
    this.state.payload = 0;
    this.tiltPitch = 0;
    this.tiltRoll = 0;
    this.rotorRpm = 0;
    this.setCable(0);
  }

  dispose(): void {
    this.root.traverse((child) => {
      const mesh = child as THREE.Mesh;
      mesh.geometry?.dispose();
    });
  }
}
