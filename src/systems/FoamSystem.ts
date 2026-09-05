import * as THREE from 'three';
import { cfg } from '@/core/Config';
import { bus } from '@/core/EventBus';
import { randRange } from '@/core/MathUtil';
import { ParticleSystem } from './Particles';
import { emberSprite, foamSprite } from '@/world/Textures';
import { LAYER } from '@/render/Renderer';
import type { Collider } from '@/world/LevelTypes';
import type { FireSystem } from './FireSystem';
import type { DroneState } from '@/entities/Drone';

const TRAJECTORY_STEPS = 34;

/**
 * Модуль пожаротушения.
 *
 * Струя летит по баллистике, поэтому целиться нужно с упреждением — и по этой же
 * траектории считается точка попадания. Прицельная линия рисуется по той же
 * математике, что и струя: то, что видит игрок, ровно то и происходит.
 */
export class FoamSystem {
  readonly group = new THREE.Group();

  private particles: ParticleSystem;
  private guideLine: THREE.Line;
  private guideDots: THREE.Points;
  private guidePositions: Float32Array;
  private impactRing: THREE.Mesh;

  private readonly foamNear = new THREE.Color(0xffffff);
  private readonly foamFar = new THREE.Color(0xc8d8e8);

  private readonly point = new THREE.Vector3();
  private readonly vel = new THREE.Vector3();
  private readonly impact = new THREE.Vector3();
  private hasImpact = false;
  private impactDistance = 0;

  private guideVisible = false;
  private firing = false;
  private spawnAccum = 0;
  private emptyAnnounced = false;

  constructor(quality: 'low' | 'medium' | 'high') {
    const scale = quality === 'low' ? 0.5 : quality === 'medium' ? 0.75 : 1;
    this.particles = new ParticleSystem(foamSprite(), Math.round(700 * scale), { fog: true, sortOrder: 11 });
    this.group.add(this.particles.points);
    this.emissionScale = scale;

    // Прицельная дуга.
    this.guidePositions = new Float32Array(TRAJECTORY_STEPS * 3);
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(this.guidePositions, 3));
    geo.setDrawRange(0, 0);
    this.guideLine = new THREE.Line(
      geo,
      new THREE.LineBasicMaterial({
        color: 0x7ff0ff,
        transparent: true,
        opacity: 0.65,
        depthTest: true,
        depthWrite: false,
      }),
    );
    this.guideLine.frustumCulled = false;
    this.guideLine.layers.set(LAYER.ATMOSPHERE);
    this.guideLine.renderOrder = 20;
    this.guideLine.visible = false;
    this.group.add(this.guideLine);

    // Линия толщиной в 1 px на телефоне почти не видна, поэтому поверх неё
    // идёт цепочка светящихся точек по той же геометрии.
    this.guideDots = new THREE.Points(
      geo,
      new THREE.PointsMaterial({
        map: emberSprite(),
        color: 0x9ff6ff,
        size: 0.34,
        sizeAttenuation: true,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }),
    );
    this.guideDots.frustumCulled = false;
    this.guideDots.layers.set(LAYER.ATMOSPHERE);
    this.guideDots.renderOrder = 20;
    this.guideDots.visible = false;
    this.group.add(this.guideDots);

    // Кольцо в точке попадания.
    const ringGeo = new THREE.RingGeometry(0.5, 0.78, 28);
    ringGeo.rotateX(-Math.PI / 2);
    this.impactRing = new THREE.Mesh(
      ringGeo,
      new THREE.MeshBasicMaterial({
        color: 0x7ff0ff,
        transparent: true,
        opacity: 0.55,
        side: THREE.DoubleSide,
        depthWrite: false,
      }),
    );
    this.impactRing.layers.set(LAYER.ATMOSPHERE);
    this.impactRing.renderOrder = 21;
    this.impactRing.visible = false;
    this.group.add(this.impactRing);
  }

  private emissionScale: number;

  setViewportHeight(pixels: number): void {
    this.particles.setViewportHeight(pixels);
  }

  setGuideVisible(visible: boolean): void {
    this.guideVisible = visible;
  }

  get isFiring(): boolean {
    return this.firing;
  }

  /**
   * @param wantFire игрок держит кнопку
   * @param origin  мировая точка сопла
   * @param dir     направление ствола (нормализованное)
   */
  update(
    dt: number,
    wantFire: boolean,
    origin: THREE.Vector3,
    dir: THREE.Vector3,
    state: DroneState,
    colliders: Collider[],
    fires: FireSystem,
  ): void {
    const f = cfg.foam;
    const canFire = wantFire && state.foam > 0;

    if (wantFire && state.foam <= 0 && !this.emptyAnnounced) {
      this.emptyAnnounced = true;
      bus.emit('foam:empty');
    }
    if (!wantFire) this.emptyAnnounced = false;

    if (canFire !== this.firing) {
      this.firing = canFire;
      bus.emit(canFire ? 'foam:start' : 'foam:stop');
    }

    this.traceTrajectory(origin, dir, colliders);
    this.updateGuide();

    if (canFire) {
      state.foam = Math.max(0, state.foam - f.drainRate * dt);
      this.emitStream(dt, origin, dir);

      if (this.hasImpact) {
        const dealt = fires.damageArea(this.impact, f.splashRadius, f.dps, dt);
        this.emitSplash(dt, dealt > 0);
      }
    }

    this.particles.update(dt);
  }

  /** Пошаговый прогон баллистики до первого препятствия. */
  private traceTrajectory(origin: THREE.Vector3, dir: THREE.Vector3, colliders: Collider[]): void {
    const f = cfg.foam;
    const step = 0.028;

    this.point.copy(origin);
    this.vel.copy(dir).multiplyScalar(f.muzzleSpeed);
    this.hasImpact = false;
    this.impactDistance = 0;

    let travelled = 0;
    let written = 0;

    for (let i = 0; i < TRAJECTORY_STEPS; i++) {
      this.guidePositions[written * 3] = this.point.x;
      this.guidePositions[written * 3 + 1] = this.point.y;
      this.guidePositions[written * 3 + 2] = this.point.z;
      written++;

      const prevY = this.point.y;
      this.vel.y -= f.gravity * step;
      this.point.addScaledVector(this.vel, step);
      travelled += this.vel.length() * step;

      if (this.point.y <= 0) {
        // Точное пересечение с землёй по линейной интерполяции.
        const t = prevY / Math.max(0.0001, prevY - this.point.y);
        this.point.lerpVectors(
          new THREE.Vector3(
            this.guidePositions[(written - 1) * 3],
            prevY,
            this.guidePositions[(written - 1) * 3 + 2],
          ),
          this.point,
          t,
        );
        this.point.y = 0;
        this.markImpact(travelled, written);
        return;
      }

      for (const collider of colliders) {
        // Провода струя проходит насквозь, мягкие барьеры — тоже: стена огня
        // в воротах именно такой барьер, и очаги стоят внутри его коробки.
        // Иначе пена гасится в двух метрах перед пламенем, в которое целишься.
        if (!collider.enabled || collider.kind === 'wire' || collider.kind === 'soft') continue;
        if (collider.box.containsPoint(this.point)) {
          this.markImpact(travelled, written);
          return;
        }
      }

      if (travelled > f.range) {
        this.markImpact(travelled, written);
        return;
      }
    }

    this.markImpact(travelled, written);
  }

  private markImpact(distance: number, written: number): void {
    this.impact.copy(this.point);
    this.impactDistance = distance;
    this.hasImpact = true;
    this.guidePointCount = written;
    this.guidePositions[(written - 1) * 3] = this.point.x;
    this.guidePositions[(written - 1) * 3 + 1] = this.point.y;
    this.guidePositions[(written - 1) * 3 + 2] = this.point.z;
  }

  private guidePointCount = 0;

  private updateGuide(): void {
    const visible = this.guideVisible;
    this.guideLine.visible = visible;
    this.guideDots.visible = visible;
    this.impactRing.visible = visible && this.hasImpact;

    if (!visible) return;

    this.guideLine.geometry.setDrawRange(0, this.guidePointCount);
    (this.guideDots.material as THREE.PointsMaterial).opacity = this.firing ? 1 : 0.55;
    (this.guideLine.geometry.attributes.position as THREE.BufferAttribute).needsUpdate = true;
    this.guideLine.geometry.computeBoundingSphere();

    if (this.hasImpact) {
      this.impactRing.position.copy(this.impact).addScaledVector(new THREE.Vector3(0, 1, 0), 0.06);
      const scale = 0.7 + this.impactDistance * 0.02;
      this.impactRing.scale.setScalar(scale);
      const mat = this.impactRing.material as THREE.MeshBasicMaterial;
      mat.opacity = this.firing ? 0.85 : 0.42;
    }
  }

  private emitStream(dt: number, origin: THREE.Vector3, dir: THREE.Vector3): void {
    const f = cfg.foam;
    this.spawnAccum += dt * f.particleRate * this.emissionScale;

    while (this.spawnAccum >= 1) {
      this.spawnAccum -= 1;
      const spread = 0.055;
      this.particles.spawn({
        x: origin.x,
        y: origin.y,
        z: origin.z,
        vx: dir.x * f.muzzleSpeed + randRange(-spread, spread) * f.muzzleSpeed,
        vy: dir.y * f.muzzleSpeed + randRange(-spread, spread) * f.muzzleSpeed,
        vz: dir.z * f.muzzleSpeed + randRange(-spread, spread) * f.muzzleSpeed,
        life: f.particleLife * randRange(0.7, 1.15),
        size: randRange(0.25, 0.5),
        sizeEnd: randRange(0.8, 1.5),
        color: this.foamNear,
        colorEnd: this.foamFar,
        alpha: randRange(0.5, 0.85),
        drag: 0.9,
        gravity: -f.gravity,
        rotSpeed: randRange(-3, 3),
      });
    }
  }

  private splashAccum = 0;

  private emitSplash(dt: number, onFire: boolean): void {
    this.splashAccum += dt * 55 * this.emissionScale;
    while (this.splashAccum >= 1) {
      this.splashAccum -= 1;
      this.particles.spawn({
        x: this.impact.x + randRange(-0.4, 0.4),
        y: this.impact.y + 0.1,
        z: this.impact.z + randRange(-0.4, 0.4),
        vx: randRange(-3.2, 3.2),
        vy: randRange(0.6, 3.4),
        vz: randRange(-3.2, 3.2),
        life: randRange(0.7, 1.8),
        size: randRange(0.4, 0.8),
        sizeEnd: randRange(1.6, 3.0),
        color: this.foamNear,
        colorEnd: onFire ? new THREE.Color(0xb8c6d2) : this.foamFar,
        alpha: randRange(0.35, 0.7),
        drag: 2.4,
        gravity: -3.5,
        rotSpeed: randRange(-2, 2),
      });
    }
  }

  reset(): void {
    this.particles.clear();
    this.firing = false;
    this.spawnAccum = 0;
    this.splashAccum = 0;
    this.emptyAnnounced = false;
    this.guideVisible = false;
    this.guideLine.visible = false;
    this.guideDots.visible = false;
    this.impactRing.visible = false;
  }

  dispose(): void {
    this.particles.dispose();
    this.guideLine.geometry.dispose();
    (this.guideLine.material as THREE.Material).dispose();
    (this.guideDots.material as THREE.Material).dispose();
    this.impactRing.geometry.dispose();
    (this.impactRing.material as THREE.Material).dispose();
  }
}
