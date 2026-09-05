import * as THREE from 'three';
import { cfg } from '@/core/Config';
import { bus } from '@/core/EventBus';
import { clamp01, noise1, randRange } from '@/core/MathUtil';
import { ParticleSystem } from './Particles';
import { emberSprite, flameSprite, smokeSprite } from '@/world/Textures';
import type { FireSpec } from '@/world/LevelTypes';

interface Fire {
  spec: FireSpec;
  health: number;
  active: boolean;
  light?: THREE.PointLight;
  flameAccum: number;
  smokeAccum: number;
  emberAccum: number;
  /** Время с последнего попадания пены — до восстановления должно пройти время */
  sinceFoam: number;
  flickerSeed: number;
}

/**
 * Очаги возгорания: визуал, дым, восходящие потоки, тепловой урон.
 *
 * Огонь — не декорация: он гонит вверх тёплый воздух (дрон подбрасывает),
 * забивает воздух дымом (падает видимость) и греет обшивку (тикает урон).
 */
export class FireSystem {
  readonly group = new THREE.Group();

  private fires: Fire[] = [];
  private byId = new Map<string, Fire>();
  private flames: ParticleSystem;
  private smoke: ParticleSystem;
  private embers: ParticleSystem;
  private time = 0;

  private readonly flameHot = new THREE.Color(0xffd76a);
  private readonly flameCool = new THREE.Color(0xff4a12);
  private readonly smokeNear = new THREE.Color(0x4a4038);
  private readonly smokeFar = new THREE.Color(0x8f8880);
  private readonly emberHot = new THREE.Color(0xffd08a);
  private readonly emberCool = new THREE.Color(0x9c2a08);

  constructor(quality: 'low' | 'medium' | 'high') {
    const scale = quality === 'low' ? 0.45 : quality === 'medium' ? 0.7 : 1;

    this.flames = new ParticleSystem(flameSprite(), Math.round(900 * scale), { additive: true, sortOrder: 12 });
    this.smoke = new ParticleSystem(smokeSprite(), Math.round(1100 * scale), { fog: true, sortOrder: 8 });
    this.embers = new ParticleSystem(emberSprite(), Math.round(320 * scale), { additive: true, sortOrder: 13 });

    this.group.add(this.smoke.points, this.flames.points, this.embers.points);
    this.emissionScale = scale;
  }

  private emissionScale: number;

  setViewportHeight(pixels: number): void {
    this.flames.setViewportHeight(pixels);
    this.smoke.setViewportHeight(pixels);
    this.embers.setViewportHeight(pixels);
  }

  load(specs: FireSpec[]): void {
    this.dispose(false);
    this.fires = [];
    this.byId.clear();

    for (const spec of specs) {
      const fire: Fire = {
        spec,
        health: cfg.fire.health * spec.scale,
        active: spec.startActive,
        flameAccum: 0,
        smokeAccum: 0,
        emberAccum: 0,
        sinceFoam: 99,
        flickerSeed: Math.random() * 100,
      };

      if (spec.light) {
        const light = new THREE.PointLight(0xff8a30, 0, 34, 2);
        light.position.copy(spec.position).setY(spec.position.y + spec.scale * 0.9);
        this.group.add(light);
        fire.light = light;
      }

      this.fires.push(fire);
      this.byId.set(spec.id, fire);
    }
  }

  /** Зажигает группу очагов — используется скриптом миссии. */
  igniteGroup(group: string): void {
    for (const fire of this.fires) {
      if (fire.spec.group === group && !fire.active) {
        fire.active = true;
        fire.health = cfg.fire.health * fire.spec.scale;
      }
    }
  }

  get all(): readonly { id: string; group: string; position: THREE.Vector3; active: boolean; objective: boolean }[] {
    return this.fires.map((f) => ({
      id: f.spec.id,
      group: f.spec.group,
      position: f.spec.position,
      active: f.active,
      objective: f.spec.objective,
    }));
  }

  isGroupActive(group: string): boolean {
    return this.fires.some((f) => f.spec.group === group && f.active);
  }

  countActive(group?: string): number {
    return this.fires.filter((f) => f.active && (group === undefined || f.spec.group === group)).length;
  }

  /** Ближайший горящий очаг — для подсказки прицела и маркеров. */
  nearestActive(from: THREE.Vector3, group?: string): THREE.Vector3 | null {
    let best: THREE.Vector3 | null = null;
    let bestDist = Infinity;
    for (const fire of this.fires) {
      if (!fire.active) continue;
      if (group && fire.spec.group !== group) continue;
      const d = fire.spec.position.distanceToSquared(from);
      if (d < bestDist) {
        bestDist = d;
        best = fire.spec.position;
      }
    }
    return best;
  }

  /**
   * Пена накрывает область. Возвращает суммарный нанесённый урон —
   * по нему звук и HUD понимают, что игрок попал.
   */
  damageArea(point: THREE.Vector3, radius: number, amountPerSecond: number, dt: number): number {
    let total = 0;
    for (const fire of this.fires) {
      if (!fire.active) continue;
      const dist = fire.spec.position.distanceTo(point);
      const reach = radius + fire.spec.scale * 0.8;
      if (dist > reach) continue;

      // В центре струи урон полный, по краю — вдвое меньше.
      const falloff = 1 - (dist / reach) * 0.5;
      const damage = amountPerSecond * falloff * dt;
      fire.health -= damage;
      fire.sinceFoam = 0;
      total += damage;

      if (fire.health <= 0) {
        fire.health = 0;
        fire.active = false;
        fire.light && (fire.light.intensity = 0);
        bus.emit('fire:extinguished', { fireId: fire.spec.id });
        if (!this.isGroupActive(fire.spec.group)) {
          bus.emit('fire:groupCleared', { group: fire.spec.group });
        }
      }
    }
    return total;
  }

  /**
   * Восходящий поток в точке. Внутри столба над огнём дрон подбрасывает
   * и болтает — это главное тактильное ощущение работы у пожара.
   */
  getUpdraft(position: THREE.Vector3, out: THREE.Vector3): void {
    out.set(0, 0, 0);
    const f = cfg.fire;

    for (const fire of this.fires) {
      if (!fire.active) continue;
      const p = fire.spec.position;
      const dy = position.y - p.y;
      if (dy < -1 || dy > f.thermalHeight * fire.spec.scale) continue;

      const dx = position.x - p.x;
      const dz = position.z - p.z;
      // Столб расширяется с высотой — как настоящий факел.
      const spread = 1 + (dy / (f.thermalHeight * fire.spec.scale)) * 1.6;
      const radius = f.thermalRadius * fire.spec.scale * spread;
      const distSq = dx * dx + dz * dz;
      if (distSq > radius * radius) continue;

      const dist = Math.sqrt(distSq);
      const radial = 1 - dist / radius;
      const vertical = 1 - clamp01(dy / (f.thermalHeight * fire.spec.scale));
      const strength = radial * radial * vertical * fire.spec.scale;

      out.y += f.thermalForce * strength;

      // Турбулентность: псевдослучайные рывки вбок, свои у каждого очага.
      const t = this.time * 2.4 + fire.flickerSeed;
      out.x += noise1(t) * f.turbulence * strength * 0.6;
      out.z += noise1(t + 3.7) * f.turbulence * strength * 0.6;
      out.y += noise1(t + 7.1) * f.turbulence * strength * 0.35;
    }
  }

  /** Тепловая нагрузка на обшивку в точке, 0..1. */
  getHeat(position: THREE.Vector3): number {
    let heat = 0;
    for (const fire of this.fires) {
      if (!fire.active) continue;
      const dist = fire.spec.position.distanceTo(position);
      const radius = cfg.fire.heatRadius * (0.55 + fire.spec.scale * 0.45);
      if (dist > radius) continue;
      heat += (1 - dist / radius) ** 2;
    }
    return Math.min(1.6, heat);
  }

  /** Насколько густо в точке, 0..1 — из этого считается плотность тумана. */
  getSmokeDensity(position: THREE.Vector3): number {
    let density = 0;
    for (const fire of this.fires) {
      if (!fire.active) continue;
      const p = fire.spec.position;
      const dx = position.x - p.x;
      const dz = position.z - p.z;
      const dy = position.y - p.y;
      // Дым сносит ветром и он поднимается, поэтому область шире и выше очага.
      const horizontal = Math.sqrt(dx * dx + dz * dz);
      const radius = 10 * (0.6 + fire.spec.scale * 0.4);
      const ceiling = 20 * (0.6 + fire.spec.scale * 0.4);
      if (horizontal > radius || dy < -2 || dy > ceiling) continue;
      const falloff = (1 - horizontal / radius) * (1 - clamp01(dy / ceiling) * 0.55);
      density += falloff * fire.spec.scale * 0.55;
    }
    return clamp01(density);
  }

  update(dt: number, windX: number, windZ: number): void {
    this.time += dt;
    const emissionScale = this.emissionScale;

    for (const fire of this.fires) {
      if (!fire.active) {
        if (fire.light && fire.light.intensity > 0) {
          fire.light.intensity = Math.max(0, fire.light.intensity - dt * 90);
        }
        continue;
      }

      fire.sinceFoam += dt;
      const s = fire.spec.scale;
      const p = fire.spec.position;

      // Недотушенный очаг разгорается обратно — нельзя «клюнуть и улететь».
      if (fire.sinceFoam > 1.6 && fire.health < cfg.fire.health * s) {
        fire.health = Math.min(cfg.fire.health * s, fire.health + cfg.fire.regen * s * dt);
      }

      const vigor = clamp01(fire.health / (cfg.fire.health * s));
      const flicker = 0.72 + noise1(this.time * 7 + fire.flickerSeed) * 0.28;

      if (fire.light) {
        fire.light.intensity = 26 * s * vigor * flicker;
        fire.light.distance = 30 * s;
      }

      /* --- Пламя ------------------------------------------------- */
      fire.flameAccum += dt * 30 * s * vigor * emissionScale;
      while (fire.flameAccum >= 1) {
        fire.flameAccum -= 1;
        const r = s * 0.5;
        this.flames.spawn({
          x: p.x + randRange(-r, r),
          y: p.y + randRange(-0.1, 0.3),
          z: p.z + randRange(-r, r),
          vx: randRange(-0.5, 0.5) + windX * 0.15,
          vy: randRange(2.4, 4.6) * s,
          vz: randRange(-0.5, 0.5) + windZ * 0.15,
          life: randRange(0.45, 0.95) * (0.6 + s * 0.4),
          size: randRange(0.7, 1.4) * s,
          sizeEnd: randRange(0.15, 0.45) * s,
          color: this.flameHot,
          colorEnd: this.flameCool,
          alpha: randRange(0.5, 0.85) * vigor,
          drag: 1.1,
          gravity: 2.6,
          rotSpeed: randRange(-2.5, 2.5),
        });
      }

      /* --- Дым --------------------------------------------------- */
      fire.smokeAccum += dt * 13 * s * (0.35 + vigor * 0.65) * emissionScale;
      while (fire.smokeAccum >= 1) {
        fire.smokeAccum -= 1;
        const r = s * 0.7;
        this.smoke.spawn({
          x: p.x + randRange(-r, r),
          y: p.y + s * 1.2,
          z: p.z + randRange(-r, r),
          vx: randRange(-0.6, 0.6) + windX * 0.8,
          vy: cfg.smoke.riseSpeed * randRange(0.75, 1.3) * s,
          vz: randRange(-0.6, 0.6) + windZ * 0.8,
          life: randRange(4.5, 8.5),
          size: randRange(1.6, 3.0) * s,
          sizeEnd: randRange(7, 13) * s,
          color: this.smokeNear,
          colorEnd: this.smokeFar,
          alpha: randRange(0.24, 0.42),
          drag: 0.18,
          gravity: 0.55,
          rotSpeed: randRange(-0.5, 0.5),
        });
      }

      /* --- Искры ------------------------------------------------- */
      fire.emberAccum += dt * 5 * s * vigor * emissionScale;
      while (fire.emberAccum >= 1) {
        fire.emberAccum -= 1;
        this.embers.spawn({
          x: p.x + randRange(-s * 0.4, s * 0.4),
          y: p.y + randRange(0, s * 0.6),
          z: p.z + randRange(-s * 0.4, s * 0.4),
          vx: randRange(-1.4, 1.4) + windX,
          vy: randRange(3.5, 7.5) * s,
          vz: randRange(-1.4, 1.4) + windZ,
          life: randRange(1.4, 3.2),
          size: randRange(0.06, 0.16),
          sizeEnd: randRange(0.02, 0.05),
          color: this.emberHot,
          colorEnd: this.emberCool,
          alpha: 1,
          drag: 0.55,
          gravity: -1.6,
          rotSpeed: 0,
        });
      }
    }

    this.flames.update(dt);
    this.smoke.update(dt);
    this.embers.update(dt);
  }

  /** Разовый выброс дыма и пыли — обрушение, удар, взрыв. */
  burstDust(position: THREE.Vector3, amount: number, spread: number): void {
    for (let i = 0; i < amount; i++) {
      this.smoke.spawn({
        x: position.x + randRange(-spread, spread),
        y: position.y + randRange(0, spread * 0.5),
        z: position.z + randRange(-spread, spread),
        vx: randRange(-4, 4),
        vy: randRange(1.2, 4.5),
        vz: randRange(-4, 4),
        life: randRange(2.5, 5),
        size: randRange(1.4, 3.2),
        sizeEnd: randRange(5, 9),
        color: new THREE.Color(0x9c9186),
        colorEnd: new THREE.Color(0x6f665e),
        alpha: randRange(0.3, 0.55),
        drag: 1.5,
        gravity: 0.2,
        rotSpeed: randRange(-1, 1),
      });
    }
  }

  /** Искры от удара о препятствие. */
  burstSparks(position: THREE.Vector3, amount: number): void {
    for (let i = 0; i < amount; i++) {
      this.embers.spawn({
        x: position.x,
        y: position.y,
        z: position.z,
        vx: randRange(-5, 5),
        vy: randRange(0.5, 5),
        vz: randRange(-5, 5),
        life: randRange(0.4, 1.0),
        size: randRange(0.05, 0.11),
        sizeEnd: 0.01,
        color: this.emberHot,
        colorEnd: this.emberCool,
        alpha: 1,
        drag: 1.8,
        gravity: -9,
        rotSpeed: 0,
      });
    }
  }

  reset(): void {
    this.flames.clear();
    this.smoke.clear();
    this.embers.clear();
    for (const fire of this.fires) {
      fire.active = fire.spec.startActive;
      fire.health = cfg.fire.health * fire.spec.scale;
      fire.sinceFoam = 99;
      if (fire.light) fire.light.intensity = 0;
    }
  }

  dispose(full = true): void {
    for (const fire of this.fires) {
      if (fire.light) this.group.remove(fire.light);
    }
    if (full) {
      this.flames.dispose();
      this.smoke.dispose();
      this.embers.dispose();
    }
  }
}
