import * as THREE from 'three';
import { cfg } from '@/core/Config';
import { clamp, clamp01, damp, dampAngle } from '@/core/MathUtil';
import { bus } from '@/core/EventBus';
import type { Collider } from '@/world/LevelTypes';

export interface FlightInput {
  /** x — вбок, y — вперёд, в системе координат камеры; длина ≤ 1 */
  moveX: number;
  moveY: number;
  /** -1 вниз … +1 вверх */
  climb: number;
  /** Куда смотрит камера — туда же доворачивается нос */
  cameraYaw: number;
}

export interface ExternalForce {
  x: number;
  y: number;
  z: number;
}

/**
 * Аркадная модель полёта.
 *
 * Джойстик задаёт не тягу, а желаемую скорость — так дрон не «уплывает»
 * и новичок не тратит внимание на удержание горизонта. Инерция берётся из
 * времени отклика, поэтому тяжёлый дрон ощущается вязким, но остаётся управляемым.
 * Внешние силы (ветер, восходящий поток) добавляются поверх и автопилотом
 * компенсируются лишь частично — иначе пожар не ощущался бы опасным.
 */
export class FlightModel {
  readonly position = new THREE.Vector3();
  readonly velocity = new THREE.Vector3();
  yaw = 0;

  /** Дрон стоит на поверхности. */
  landed = true;
  /** Есть контакт с опорой в этом кадре (не обязательно посадка). */
  grounded = true;
  /** Высота, которую держит автоподвес. */
  holdAltitude = 0;
  /** Насколько нагружены моторы, 0..1 — для звука и вращения винтов. */
  throttle = 0;
  /** Поверхность, на которой стоим (y верхней грани). */
  supportY = 0;

  /** Точка, которую удерживает автопилот при отпущенном стике. */
  private anchorX = 0;
  private anchorZ = 0;
  /** Пилот не даёт команд в этом кадре — условие для посадки. */
  private pilotIdle = true;

  justTookOff = false;
  justLanded = false;

  /** Дрон упёрся в границу зоны в этом кадре — HUD показывает предупреждение. */
  boundaryBlocked = false;

  private readonly wind = new THREE.Vector3();
  private readonly updraft = new THREE.Vector3();
  private readonly tmp = new THREE.Vector3();
  private readonly closest = new THREE.Vector3();
  private readonly normal = new THREE.Vector3();

  private impactCooldown = 0;

  reset(position: THREE.Vector3, yaw: number): void {
    this.position.copy(position);
    this.velocity.set(0, 0, 0);
    this.yaw = yaw;
    this.landed = true;
    this.grounded = true;
    this.holdAltitude = position.y;
    this.anchorX = position.x;
    this.anchorZ = position.z;
    this.supportY = position.y - cfg.flight.radius;
    this.throttle = 0;
    this.justTookOff = false;
    this.justLanded = false;
    this.impactCooldown = 0;
  }

  setWind(x: number, y: number, z: number): void {
    this.wind.set(x, y, z);
  }

  setUpdraft(x: number, y: number, z: number): void {
    this.updraft.set(x, y, z);
  }

  /** Множитель максимальной скорости от массы груза. */
  private speedFactor(payload: number): number {
    return clamp(1 - payload * cfg.mass.speedPenaltyPerKg, 0.32, 1);
  }

  private responseFactor(payload: number): number {
    return clamp(1 - payload * cfg.mass.responsePenaltyPerKg, 0.3, 1);
  }

  private climbFactor(payload: number): number {
    return clamp(1 - payload * cfg.mass.climbPenaltyPerKg, 0.18, 1);
  }

  update(dt: number, input: FlightInput, payload: number, colliders: Collider[], bounds: THREE.Box3): void {
    const f = cfg.flight;
    this.justTookOff = false;
    this.justLanded = false;
    this.impactCooldown = Math.max(0, this.impactCooldown - dt);

    const speedMul = this.speedFactor(payload);
    const respMul = this.responseFactor(payload);
    const climbMul = this.climbFactor(payload);

    const stickLen = Math.min(1, Math.hypot(input.moveX, input.moveY));
    const overweight = cfg.mass.empty + payload > cfg.mass.maxTakeoff;
    this.pilotIdle = stickLen < 0.15 && input.climb < 0.05;

    /* --- Взлёт / стоянка ------------------------------------------ */

    if (this.landed) {
      // Взлетаем и по кнопке высоты, и по отклонению стика: иначе, случайно
      // присев на крышу, игрок не поймёт, почему дрон не реагирует на «вперёд».
      if ((input.climb > 0.08 || stickLen > 0.15) && !overweight) {
        this.landed = false;
        this.justTookOff = true;
        this.holdAltitude = this.position.y;
        this.anchorX = this.position.x;
        this.anchorZ = this.position.z;
      } else {
        // На земле дрон никуда не едет, но моторы уже подкручиваются.
        this.velocity.multiplyScalar(Math.exp(-12 * dt));
        this.throttle = damp(this.throttle, Math.max(0, input.climb) * 0.5, 6, dt);
        this.yaw = dampAngle(this.yaw, input.cameraYaw, f.yawResponse * 0.5, dt);
        return;
      }
    }

    /* --- Горизонталь ---------------------------------------------- */

    // Ввод из системы камеры переводится в мир.
    const sin = Math.sin(input.cameraYaw);
    const cos = Math.cos(input.cameraYaw);
    const maxSpeed = f.maxSpeed * speedMul;

    let targetVx: number;
    let targetVz: number;

    if (stickLen > 0.02) {
      targetVx = (input.moveY * sin + input.moveX * cos) * maxSpeed;
      targetVz = (input.moveY * cos - input.moveX * sin) * maxSpeed;
      this.anchorX = this.position.x;
      this.anchorZ = this.position.z;
    } else {
      // Удержание точки. Без него ровный ветер за полминуты уносит дрон
      // на десятки метров, и «зависни над целью» становится невыполнимым.
      // Полномочия автопилота ограничены, поэтому у огня всё равно болтает.
      const maxCorrection = f.positionHoldMaxSpeed;
      targetVx = clamp((this.anchorX - this.position.x) * f.positionHold, -maxCorrection, maxCorrection);
      targetVz = clamp((this.anchorZ - this.position.z) * f.positionHold, -maxCorrection, maxCorrection);
    }

    const horizResponse = (stickLen > 0.02 ? f.accelResponse : f.brakeResponse) * respMul;
    this.velocity.x = damp(this.velocity.x, targetVx, horizResponse, dt);
    this.velocity.z = damp(this.velocity.z, targetVz, horizResponse, dt);

    /* --- Вертикаль и автоподвес ----------------------------------- */

    let targetVy: number;
    if (Math.abs(input.climb) > 0.05) {
      targetVy = input.climb * f.maxClimbSpeed * climbMul;
      if (overweight) targetVy = Math.min(targetVy, -0.6);
      this.holdAltitude = this.position.y;
    } else {
      // Автоподвес держит высоту, но его «власть» ограничена — поток всё равно бросает.
      targetVy = clamp((this.holdAltitude - this.position.y) * f.holdStrength, -f.maxClimbSpeed, f.maxClimbSpeed);
      if (overweight) targetVy = -1.2;
    }
    this.velocity.y = damp(this.velocity.y, targetVy, f.climbResponse, dt);

    /* --- Внешние силы --------------------------------------------- */

    this.tmp.copy(this.wind).add(this.updraft).multiplyScalar(dt);
    this.velocity.add(this.tmp);

    /* --- Рыскание -------------------------------------------------- */

    this.yaw = dampAngle(this.yaw, input.cameraYaw, f.yawResponse, dt);

    /* --- Интегрирование ------------------------------------------- */

    this.position.addScaledVector(this.velocity, dt);

    // Потолок.
    if (this.position.y > f.maxAltitude) {
      this.position.y = f.maxAltitude;
      this.velocity.y = Math.min(this.velocity.y, 0);
      this.holdAltitude = Math.min(this.holdAltitude, f.maxAltitude);
    }

    this.clampToBounds(bounds, dt);
    this.resolveCollisions(colliders);

    /* --- Нагрузка на моторы для звука и винтов --------------------- */

    const effort = clamp01(
      0.42 +
        stickLen * 0.3 +
        Math.abs(this.velocity.y) / Math.max(1, f.maxClimbSpeed) * 0.35 +
        payload / Math.max(1, cfg.mass.maxTakeoff) * 0.5,
    );
    this.throttle = damp(this.throttle, effort, 5, dt);
  }

  /**
   * Возврат в разрешённую зону.
   *
   * Сначала мягкий отбой: в полосе brakeDistance автопилот гасит составляющую
   * скорости «наружу» и подталкивает обратно тем сильнее, чем ближе край.
   * Жёсткий кламп остаётся как последний рубеж — до него в нормальном полёте
   * дело не доходит, и стена не ощущается как внезапный удар о невидимое.
   */
  private clampToBounds(bounds: THREE.Box3, dt: number): void {
    const r = cfg.flight.radius;
    const b = cfg.boundary;

    const limitMinX = bounds.min.x + r;
    const limitMaxX = bounds.max.x - r;
    const limitMinZ = bounds.min.z + r;
    const limitMaxZ = bounds.max.z - r;

    // Запас до каждой из стенок; отрицательный — уже за чертой.
    const gap = Math.min(
      this.position.x - limitMinX,
      limitMaxX - this.position.x,
      this.position.z - limitMinZ,
      limitMaxZ - this.position.z,
    );

    if (gap < b.brakeDistance) {
      const push = clamp01(1 - Math.max(0, gap) / b.brakeDistance);
      const authority = b.pushStrength * push * push;
      const cap = b.pushMaxSpeed;

      // Тормозим только движение к ближайшей стенке — вдоль границы летится свободно.
      const applyAxis = (pos: number, min: number, max: number, vel: number): number => {
        const toMin = pos - min;
        const toMax = max - pos;
        if (toMin < b.brakeDistance && vel < 0) {
          const k = clamp01(1 - Math.max(0, toMin) / b.brakeDistance);
          return damp(vel, clamp(toMin * b.pushStrength, 0, cap), authority + k * 4, dt);
        }
        if (toMax < b.brakeDistance && vel > 0) {
          const k = clamp01(1 - Math.max(0, toMax) / b.brakeDistance);
          return damp(vel, -clamp(toMax * b.pushStrength, 0, cap), authority + k * 4, dt);
        }
        return vel;
      };

      this.velocity.x = applyAxis(this.position.x, limitMinX, limitMaxX, this.velocity.x);
      this.velocity.z = applyAxis(this.position.z, limitMinZ, limitMaxZ, this.velocity.z);
    }

    this.boundaryBlocked = gap < b.brakeDistance * 0.55;

    // Последний рубеж: за черту не выпускаем ни при каких обстоятельствах.
    if (this.position.x < limitMinX) {
      this.position.x = limitMinX;
      this.velocity.x = Math.max(0, this.velocity.x);
    } else if (this.position.x > limitMaxX) {
      this.position.x = limitMaxX;
      this.velocity.x = Math.min(0, this.velocity.x);
    }
    if (this.position.z < limitMinZ) {
      this.position.z = limitMinZ;
      this.velocity.z = Math.max(0, this.velocity.z);
    } else if (this.position.z > limitMaxZ) {
      this.position.z = limitMaxZ;
      this.velocity.z = Math.min(0, this.velocity.z);
    }

    // Якорь удержания точки тоже загоняем внутрь: иначе, отпустив стик у
    // границы, игрок увидит, как дрон упорно жмётся в стену.
    this.anchorX = clamp(this.anchorX, limitMinX, limitMaxX);
    this.anchorZ = clamp(this.anchorZ, limitMinZ, limitMaxZ);
  }

  /**
   * Сфера против набора AABB. Два прохода: сначала все препятствия,
   * затем земля — так дрон не проваливается в угол между стеной и полом.
   */
  private resolveCollisions(colliders: Collider[]): void {
    const r = cfg.flight.radius;
    let contact = false;
    let supportY = -Infinity;

    for (let pass = 0; pass < 2; pass++) {
      for (const collider of colliders) {
        if (!collider.enabled) continue;
        const box = collider.box;

        this.closest.set(
          clamp(this.position.x, box.min.x, box.max.x),
          clamp(this.position.y, box.min.y, box.max.y),
          clamp(this.position.z, box.min.z, box.max.z),
        );
        this.normal.copy(this.position).sub(this.closest);
        const distSq = this.normal.lengthSq();
        if (distSq >= r * r) continue;

        const dist = Math.sqrt(distSq);
        if (dist < 1e-5) {
          // Центр внутри бокса — выталкиваем по кратчайшей грани.
          this.pushOutOfBox(box, r);
          contact = true;
          continue;
        }

        this.normal.divideScalar(dist);
        this.position.addScaledVector(this.normal, r - dist);

        const along = this.velocity.dot(this.normal);
        if (along < 0) {
          const impact = -along;
          const bounce = collider.kind === 'wire' ? 0.1 : cfg.flight.bounce;
          this.velocity.addScaledVector(this.normal, -along * (1 + bounce));
          if (pass === 0) this.reportImpact(impact, collider.kind);
        }

        if (this.normal.y > 0.6) {
          contact = true;
          supportY = Math.max(supportY, box.max.y);
        }
      }

      // Земля.
      if (this.position.y < r) {
        const impact = -this.velocity.y;
        this.position.y = r;
        if (this.velocity.y < 0) {
          this.velocity.y = 0;
          if (pass === 0) this.reportImpact(impact, 'ground');
        }
        contact = true;
        supportY = Math.max(supportY, 0);
      }
    }

    this.grounded = contact;
    if (contact) this.supportY = supportY === -Infinity ? 0 : supportY;

    // Посадка: касание опоры сверху при малой скорости и без активного ввода.
    // Проверка ввода нужна, чтобы дрон не «прилипал» к крыше контейнера,
    // над которой игрок проходит на бреющем.
    const speed = this.velocity.length();
    if (!this.landed && this.pilotIdle && contact && speed < 1.1 && this.position.y - r <= this.supportY + 0.12) {
      this.landed = true;
      this.justLanded = true;
      this.velocity.set(0, 0, 0);
      this.holdAltitude = this.position.y;
    }
  }

  private pushOutOfBox(box: THREE.Box3, r: number): void {
    const dxMin = this.position.x - box.min.x;
    const dxMax = box.max.x - this.position.x;
    const dyMin = this.position.y - box.min.y;
    const dyMax = box.max.y - this.position.y;
    const dzMin = this.position.z - box.min.z;
    const dzMax = box.max.z - this.position.z;

    const best = Math.min(dxMin, dxMax, dyMin, dyMax, dzMin, dzMax);
    if (best === dyMax) this.position.y = box.max.y + r;
    else if (best === dyMin) this.position.y = box.min.y - r;
    else if (best === dxMax) this.position.x = box.max.x + r;
    else if (best === dxMin) this.position.x = box.min.x - r;
    else if (best === dzMax) this.position.z = box.max.z + r;
    else this.position.z = box.min.z - r;

    this.velocity.multiplyScalar(0.3);
  }

  private reportImpact(speed: number, kind: 'solid' | 'wire' | 'soft' | 'ground'): void {
    if (this.impactCooldown > 0) return;
    if (speed <= cfg.hull.safeImpactSpeed) return;

    // Мягкие препятствия (стена огня) не бьют корпус — там опасен жар, а не удар.
    // Провода тонкие и плохо читаются в дыму, поэтому цена касания чуть ниже
    // лобового удара о бетон: раньше одна зацепка на крейсерской съедала весь корпус.
    const multiplier = kind === 'soft' ? 0 : kind === 'wire' ? 1.15 : 1;
    const damage = (speed - cfg.hull.safeImpactSpeed) * cfg.hull.impactDamagePerSpeed * multiplier;

    this.impactCooldown = 0.35;
    bus.emit('drone:impact', { speed, damage, kind });
  }
}
