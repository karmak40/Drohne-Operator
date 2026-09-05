import * as THREE from 'three';
import { cfg } from '@/core/Config';
import { bus } from '@/core/EventBus';
import { clamp01, damp } from '@/core/MathUtil';
import { LAYER } from '@/render/Renderer';
import { Survivor } from '@/entities/Survivor';
import type { MaterialLibrary } from '@/world/Materials';
import type { SurvivorSpec } from '@/world/LevelTypes';
import type { Drone } from '@/entities/Drone';

export type WinchState = 'stowed' | 'lowering' | 'hoisting' | 'raising';

export type HoverIssue = 'ok' | 'outOfZone' | 'tooFast' | 'tooHigh' | 'tooLow';

/**
 * Спасательная лебёдка.
 *
 * Игрок должен удержать дрон в зелёной зоне заданное время. Прогресс не просто
 * тикает: он останавливается при сносе и откатывается при выходе из зоны, поэтому
 * ветер и восходящие потоки превращают простое «зависни» в настоящую задачу.
 */
export class RescueSystem {
  readonly group = new THREE.Group();

  survivors: Survivor[] = [];
  target: Survivor | null = null;

  state: WinchState = 'stowed';
  progress = 0;
  cableLength = 0;
  issue: HoverIssue = 'outOfZone';

  private zoneRing: THREE.Mesh;
  private zoneColumn: THREE.Mesh;
  private zoneMaterial: THREE.ShaderMaterial;
  private time = 0;
  private readonly basketWorld = new THREE.Vector3();

  constructor(private readonly mat: MaterialLibrary) {
    // Зелёная зона: кольцо на поверхности + мягкий световой столб над ним.
    this.zoneMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uProgress: { value: 0 },
        uColor: { value: new THREE.Color(0x4dffa0) },
      },
      vertexShader: /* glsl */ `
        varying vec2 vUv;
        varying vec3 vLocal;
        void main() {
          vUv = uv;
          vLocal = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: /* glsl */ `
        precision highp float;
        uniform float uTime;
        uniform float uProgress;
        uniform vec3 uColor;
        varying vec2 vUv;
        varying vec3 vLocal;

        void main() {
          float r = length(vLocal.xz);
          float edge = smoothstep(0.72, 1.0, r);
          float pulse = 0.55 + 0.45 * sin(uTime * 3.0 - r * 8.0);
          float ring = smoothstep(0.86, 0.96, r) * (1.0 - smoothstep(0.99, 1.02, r));

          // Сектор заполнения показывает прогресс подъёма прямо на земле.
          float angle = atan(vLocal.z, vLocal.x) / 6.2831853 + 0.5;
          float filled = step(angle, uProgress);

          float alpha = edge * 0.28 * pulse + ring * 0.85 + filled * (1.0 - edge) * 0.16;
          gl_FragColor = vec4(uColor * (0.7 + pulse * 0.5), alpha);
        }
      `,
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
    });

    const ringGeo = new THREE.CircleGeometry(1, 48);
    ringGeo.rotateX(-Math.PI / 2);
    this.zoneRing = new THREE.Mesh(ringGeo, this.zoneMaterial);
    this.zoneRing.layers.set(LAYER.ATMOSPHERE);
    this.zoneRing.renderOrder = 5;
    this.zoneRing.visible = false;

    const colGeo = new THREE.CylinderGeometry(1, 1, 1, 32, 1, true);
    this.zoneColumn = new THREE.Mesh(
      colGeo,
      new THREE.ShaderMaterial({
        uniforms: { uTime: { value: 0 }, uColor: { value: new THREE.Color(0x4dffa0) } },
        vertexShader: /* glsl */ `
          varying float vH;
          void main() {
            vH = uv.y;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: /* glsl */ `
          precision highp float;
          uniform float uTime;
          uniform vec3 uColor;
          varying float vH;
          void main() {
            float fade = pow(1.0 - vH, 2.2);
            float scan = 0.6 + 0.4 * sin(vH * 22.0 - uTime * 4.0);
            gl_FragColor = vec4(uColor, fade * 0.22 * scan);
          }
        `,
        transparent: true,
        depthWrite: false,
        side: THREE.DoubleSide,
        blending: THREE.AdditiveBlending,
      }),
    );
    this.zoneColumn.layers.set(LAYER.ATMOSPHERE);
    this.zoneColumn.renderOrder = 4;
    this.zoneColumn.visible = false;

    this.group.add(this.zoneRing, this.zoneColumn);
  }

  load(specs: SurvivorSpec[]): void {
    for (const s of this.survivors) {
      this.group.remove(s.root);
      s.dispose();
    }
    this.survivors = specs.map((spec) => {
      const survivor = new Survivor(spec, this.mat);
      this.group.add(survivor.root);
      return survivor;
    });
    this.target = this.survivors[0] ?? null;
  }

  /** Показывать ли зону спасения (включает сценарий миссии). */
  setZoneVisible(visible: boolean): void {
    this.zoneRing.visible = visible;
    this.zoneColumn.visible = visible;
    if (visible && this.target) {
      const c = this.target.zoneCenter;
      const r = cfg.winch.zoneRadius;
      this.zoneRing.position.set(c.x, c.y + 0.05, c.z);
      this.zoneRing.scale.setScalar(r);
      this.zoneColumn.position.set(c.x, c.y + cfg.winch.maxHoverHeight / 2, c.z);
      this.zoneColumn.scale.set(r, cfg.winch.maxHoverHeight, r);
    }
  }

  /** Игрок нажал кнопку «ТРОС». */
  toggleWinch(dronePos: THREE.Vector3): boolean {
    if (this.state === 'stowed') {
      if (!this.canReach(dronePos)) return false;
      this.state = 'lowering';
      bus.emit('winch:deploy');
      return true;
    }
    if (this.state === 'lowering' || this.state === 'hoisting') {
      this.state = 'raising';
      this.progress = 0;
      bus.emit('winch:retract');
      return true;
    }
    return false;
  }

  private canReach(dronePos: THREE.Vector3): boolean {
    if (!this.target || this.target.state !== 'waiting') return false;
    const c = this.target.zoneCenter;
    const horizontal = Math.hypot(dronePos.x - c.x, dronePos.z - c.z);
    const height = dronePos.y - c.y;
    return horizontal <= cfg.winch.zoneRadius && height >= cfg.winch.minHoverHeight && height <= cfg.winch.maxHoverHeight;
  }

  /** Разбор, почему подъём не идёт — HUD показывает это игроку текстом. */
  private evaluate(dronePos: THREE.Vector3, speed: number): HoverIssue {
    if (!this.target) return 'outOfZone';
    const c = this.target.zoneCenter;
    const horizontal = Math.hypot(dronePos.x - c.x, dronePos.z - c.z);
    if (horizontal > cfg.winch.zoneRadius) return 'outOfZone';
    const height = dronePos.y - c.y;
    if (height > cfg.winch.maxHoverHeight) return 'tooHigh';
    if (height < cfg.winch.minHoverHeight) return 'tooLow';
    if (speed > cfg.winch.maxDriftSpeed) return 'tooFast';
    return 'ok';
  }

  update(dt: number, drone: Drone, dronePos: THREE.Vector3, speed: number): void {
    this.time += dt;
    this.zoneMaterial.uniforms.uTime.value = this.time;
    (this.zoneColumn.material as THREE.ShaderMaterial).uniforms.uTime.value = this.time;

    const near = this.target ? this.target.zoneCenter.distanceTo(dronePos) < 14 : false;
    for (const s of this.survivors) s.update(dt, near);

    this.issue = this.evaluate(dronePos, speed);

    switch (this.state) {
      case 'stowed':
        this.cableLength = damp(this.cableLength, 0, 8, dt);
        this.progress = damp(this.progress, 0, 6, dt);
        break;

      case 'lowering': {
        const targetLength = this.target ? Math.max(0.6, dronePos.y - this.target.zoneCenter.y - 0.7) : 3;
        this.cableLength = Math.min(targetLength, this.cableLength + cfg.winch.cableSpeed * dt);
        if (this.cableLength >= targetLength - 0.15) this.state = 'hoisting';
        break;
      }

      case 'hoisting': {
        if (this.target && this.target.state === 'waiting') {
          const targetLength = Math.max(0.6, dronePos.y - this.target.zoneCenter.y - 0.7);
          this.cableLength = damp(this.cableLength, targetLength, 5, dt);

          if (this.issue === 'ok') {
            this.progress = clamp01(this.progress + dt / cfg.winch.holdTime);
          } else if (this.issue === 'outOfZone') {
            this.progress = Math.max(0, this.progress - cfg.winch.decayRate * dt);
          }
          // При превышении скорости или высоты прогресс просто замирает —
          // так игрок понимает, что нужно поправиться, а не начинать заново.

          bus.emit('winch:progress', { value: this.progress });

          if (this.progress >= 1) {
            this.basketWorld.set(dronePos.x, dronePos.y - this.cableLength - 0.3, dronePos.z);
            this.target.beginBoarding(this.basketWorld);
          }
        } else if (this.target && this.target.state === 'boarding') {
          this.basketWorld.set(dronePos.x, dronePos.y - this.cableLength - 0.3, dronePos.z);
          this.target.setBoardingTarget(this.basketWorld);
        } else if (this.target && this.target.state === 'onboard') {
          this.state = 'raising';
          drone.state.payload += this.target.spec.mass;
          bus.emit('survivor:pickedUp', { id: this.target.spec.id, mass: this.target.spec.mass });
          this.setZoneVisible(false);
        }
        break;
      }

      case 'raising':
        this.cableLength = Math.max(0, this.cableLength - cfg.winch.cableSpeed * dt);
        if (this.cableLength <= 0.01) {
          this.cableLength = 0;
          this.state = 'stowed';
          this.progress = 0;
        }
        break;
    }

    drone.setCable(this.cableLength);
  }

  /** Сдача спасённых медикам после посадки на площадку. */
  deliverAll(drone: Drone): number {
    let delivered = 0;
    for (const s of this.survivors) {
      if (s.state === 'onboard') {
        s.markDelivered();
        drone.state.payload = Math.max(0, drone.state.payload - s.spec.mass);
        bus.emit('survivor:delivered', { id: s.spec.id });
        delivered++;
      }
    }
    return delivered;
  }

  get rescuedCount(): number {
    return this.survivors.filter((s) => s.state === 'onboard' || s.state === 'delivered').length;
  }

  get deliveredCount(): number {
    return this.survivors.filter((s) => s.state === 'delivered').length;
  }

  get onboardCount(): number {
    return this.survivors.filter((s) => s.state === 'onboard').length;
  }

  setProgressVisual(): void {
    this.zoneMaterial.uniforms.uProgress.value = this.progress;
  }

  reset(): void {
    this.state = 'stowed';
    this.progress = 0;
    this.cableLength = 0;
    this.issue = 'outOfZone';
    for (const s of this.survivors) s.reset();
    this.target = this.survivors[0] ?? null;
    this.setZoneVisible(false);
  }

  dispose(): void {
    for (const s of this.survivors) s.dispose();
    this.zoneRing.geometry.dispose();
    this.zoneColumn.geometry.dispose();
    this.zoneMaterial.dispose();
    (this.zoneColumn.material as THREE.Material).dispose();
  }
}
