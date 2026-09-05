import * as THREE from 'three';
import { clamp01, smoothstep } from '@/core/MathUtil';

/**
 * Скриптовое разрушение: объект едет из начальной позы в конечную
 * по заданной длительности. Никакой честной физики — так обрушение
 * всегда происходит там, где нужно сценарию, и не ломает проходимость.
 */
export interface DestructibleOptions {
  id: string;
  object: THREE.Object3D;
  /** Конечное положение относительно начального. */
  endPosition: THREE.Vector3;
  endRotation: THREE.Euler;
  duration: number;
  /** Доля пути, после которой появляется коллайдер и звук удара. */
  impactAt?: number;
  /** Коллайдер, включающийся после падения. */
  colliderAfter?: THREE.Box3;
  onImpact?: () => void;
}

export class Destructible {
  readonly id: string;
  readonly object: THREE.Object3D;
  readonly colliderAfter?: THREE.Box3;

  private startPos: THREE.Vector3;
  private startRot: THREE.Euler;
  private endPos: THREE.Vector3;
  private endRot: THREE.Euler;
  private duration: number;
  private impactAt: number;
  private onImpact?: () => void;

  private elapsed = 0;
  private active = false;
  private impacted = false;

  finished = false;
  triggered = false;

  constructor(opts: DestructibleOptions) {
    this.id = opts.id;
    this.object = opts.object;
    this.colliderAfter = opts.colliderAfter;
    this.startPos = opts.object.position.clone();
    this.startRot = opts.object.rotation.clone();
    this.endPos = this.startPos.clone().add(opts.endPosition);
    this.endRot = opts.endRotation;
    this.duration = opts.duration;
    this.impactAt = opts.impactAt ?? 0.82;
    this.onImpact = opts.onImpact;
  }

  trigger(): void {
    if (this.triggered) return;
    this.triggered = true;
    this.active = true;
    this.elapsed = 0;
  }

  /** Мгновенно поставить в конечное положение — при откате к чекпойнту после обрушения. */
  snapToEnd(): void {
    this.object.position.copy(this.endPos);
    this.object.rotation.copy(this.endRot);
    this.elapsed = this.duration;
    this.active = false;
    this.triggered = true;
    this.finished = true;
    if (!this.impacted) {
      this.impacted = true;
      this.onImpact?.();
    }
  }

  /** Мгновенно вернуть в исходное состояние — используется при откате к чекпойнту. */
  reset(): void {
    this.object.position.copy(this.startPos);
    this.object.rotation.copy(this.startRot);
    this.elapsed = 0;
    this.active = false;
    this.triggered = false;
    this.impacted = false;
    this.finished = false;
  }

  update(dt: number): void {
    if (!this.active) return;

    this.elapsed += dt;
    const t = clamp01(this.elapsed / this.duration);

    // Падение с ускорением, поворот — плавно: смотрится как потеря опоры.
    const fall = t * t;
    const spin = smoothstep(t);

    this.object.position.lerpVectors(this.startPos, this.endPos, fall);
    this.object.rotation.set(
      this.startRot.x + (this.endRot.x - this.startRot.x) * spin,
      this.startRot.y + (this.endRot.y - this.startRot.y) * spin,
      this.startRot.z + (this.endRot.z - this.startRot.z) * spin,
    );

    if (!this.impacted && t >= this.impactAt) {
      this.impacted = true;
      this.onImpact?.();
    }

    if (t >= 1) {
      this.active = false;
      this.finished = true;
    }
  }
}
