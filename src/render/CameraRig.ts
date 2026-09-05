import * as THREE from 'three';
import { cfg } from '@/core/Config';
import { clamp, damp, dampAngle } from '@/core/MathUtil';

/**
 * Камера от третьего лица. Рыскание задаёт игрок (свайп/мышь), дрон доворачивает
 * нос следом — это делает управление предсказуемым: «вперёд» всегда там, куда смотришь.
 */
export class CameraRig {
  /** Целевое рыскание, задаётся вводом. */
  yaw = 0;
  /** Целевой тангаж. */
  pitch = 0.12;

  private smoothYaw = 0;
  private smoothPitch = 0.12;
  private readonly position = new THREE.Vector3();
  private readonly lookAt = new THREE.Vector3();
  private readonly desired = new THREE.Vector3();
  private readonly raycaster = new THREE.Raycaster();
  private readonly rayDir = new THREE.Vector3();
  private fov: number;
  private initialised = false;

  /** Меши, сквозь которые камера проходить не должна. */
  obstacles: THREE.Object3D[] = [];

  constructor(private readonly camera: THREE.PerspectiveCamera) {
    this.fov = cfg.camera.fov;
    this.raycaster.far = 40;
  }

  reset(targetPos: THREE.Vector3, yaw: number): void {
    this.yaw = yaw;
    this.smoothYaw = yaw;
    this.pitch = 0.12;
    this.smoothPitch = 0.12;
    this.initialised = false;
    this.update(0.016, targetPos, 0);
    this.initialised = true;
  }

  /** Вращение от ввода: dx/dy уже переведены в радианы. */
  rotate(dx: number, dy: number): void {
    this.yaw -= dx;
    this.pitch = clamp(this.pitch + dy, cfg.camera.pitchMin, cfg.camera.pitchMax);
  }

  /** Сглаженное рыскание — именно им управляется нос дрона. */
  get heading(): number {
    return this.smoothYaw;
  }

  /** Мгновенное направление взгляда в горизонтальной плоскости. */
  get forward(): THREE.Vector3 {
    return new THREE.Vector3(Math.sin(this.smoothYaw), 0, Math.cos(this.smoothYaw));
  }

  get right(): THREE.Vector3 {
    return new THREE.Vector3(Math.cos(this.smoothYaw), 0, -Math.sin(this.smoothYaw));
  }

  update(dt: number, targetPos: THREE.Vector3, speedRatio: number): void {
    const c = cfg.camera;

    if (this.initialised) {
      this.smoothYaw = dampAngle(this.smoothYaw, this.yaw, c.rotateResponse, dt);
      this.smoothPitch = damp(this.smoothPitch, this.pitch, c.rotateResponse, dt);
    } else {
      this.smoothYaw = this.yaw;
      this.smoothPitch = this.pitch;
    }

    // Желаемая точка: позади дрона по рысканию, приподнята по тангажу.
    const horizontal = Math.cos(this.smoothPitch) * c.distance;
    const vertical = Math.sin(this.smoothPitch) * c.distance;

    this.desired.set(
      targetPos.x - Math.sin(this.smoothYaw) * horizontal,
      targetPos.y + c.height + vertical,
      targetPos.z - Math.cos(this.smoothYaw) * horizontal,
    );

    this.avoidGeometry(targetPos);

    // Камера не ныряет под землю и не режет асфальт.
    this.desired.y = Math.max(this.desired.y, c.minGroundClearance);

    if (this.initialised) {
      const k = 1 - Math.exp(-c.followResponse * dt);
      this.position.lerp(this.desired, k);
    } else {
      this.position.copy(this.desired);
    }

    this.lookAt.set(targetPos.x, targetPos.y + c.lookAheadY, targetPos.z);

    this.camera.position.copy(this.position);
    this.camera.lookAt(this.lookAt);

    // На скорости поле зрения раскрывается — дешёвый, но очень читаемый признак разгона.
    const targetFov = c.fov + c.fovSpeedBoost * speedRatio;
    this.fov = damp(this.fov, targetFov, 3.5, dt);
    if (Math.abs(this.camera.fov - this.fov) > 0.01) {
      this.camera.fov = this.fov;
      this.camera.updateProjectionMatrix();
    }
  }

  /** Если между дроном и камерой стена — подтягиваем камеру ближе. */
  private avoidGeometry(targetPos: THREE.Vector3): void {
    if (this.obstacles.length === 0) return;

    this.rayDir.copy(this.desired).sub(targetPos);
    const distance = this.rayDir.length();
    if (distance < 0.05) return;
    this.rayDir.divideScalar(distance);

    this.raycaster.set(targetPos, this.rayDir);
    this.raycaster.far = distance;
    const hits = this.raycaster.intersectObjects(this.obstacles, true);
    if (hits.length === 0) return;

    const safe = Math.max(0.9, hits[0].distance - 0.5);
    this.desired.copy(targetPos).addScaledVector(this.rayDir, safe);
  }
}
