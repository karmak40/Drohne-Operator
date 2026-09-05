import * as THREE from 'three';
import type { MaterialLibrary } from '@/world/Materials';
import { bakeHeat, HEAT } from '@/render/HeatMaterial';
import { clamp01, damp } from '@/core/MathUtil';
import { models } from '@/world/ModelRegistry';
import type { SurvivorSpec } from '@/world/LevelTypes';

export type SurvivorState = 'waiting' | 'boarding' | 'onboard' | 'delivered';

/**
 * Выживший. Фигура собрана из примитивов, но анимирована так, чтобы её было
 * видно и понятно с воздуха: машет руками, кашляет от дыма, приседает.
 * В тепловизоре — самая яркая цель на уровне.
 */
export class Survivor {
  readonly root = new THREE.Group();
  readonly spec: SurvivorSpec;

  state: SurvivorState = 'waiting';

  private leftArm = new THREE.Group();
  private rightArm = new THREE.Group();
  private torso = new THREE.Group();
  private head = new THREE.Group();
  private time = 0;
  private coughTimer = 3;
  private coughing = 0;
  private boardProgress = 0;
  private boardFrom = new THREE.Vector3();

  constructor(spec: SurvivorSpec, mat: MaterialLibrary) {
    this.spec = spec;
    this.root.position.copy(spec.position);
    this.root.rotation.y = spec.facing;

    const custom = models.instantiate('character.worker');
    if (custom) {
      this.root.add(custom);
    } else {
      this.build(mat);
    }

    bakeHeat(this.root, HEAT.human);
  }

  private build(mat: MaterialLibrary): void {
    const limb = (w: number, h: number, d: number, material: THREE.Material): THREE.Mesh => {
      const geo = new THREE.BoxGeometry(w, h, d);
      // Смещаем начало координат в «плечо», чтобы вращение шло от него.
      geo.translate(0, -h / 2, 0);
      const mesh = new THREE.Mesh(geo, material);
      mesh.castShadow = true;
      return mesh;
    };

    // Ноги
    for (const sx of [-1, 1]) {
      const leg = limb(0.14, 0.78, 0.16, mat.cloth);
      leg.position.set(sx * 0.11, 0.82, 0);
      this.root.add(leg);
      const shoe = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.09, 0.26), mat.droneDark);
      shoe.position.set(sx * 0.11, 0.045, 0.04);
      shoe.castShadow = true;
      this.root.add(shoe);
    }

    // Торс со светоотражающим жилетом — так его видно в дыму.
    const chest = new THREE.Mesh(new THREE.BoxGeometry(0.44, 0.6, 0.24), mat.cloth);
    chest.position.y = 1.14;
    chest.castShadow = true;
    this.torso.add(chest);

    const vest = new THREE.Mesh(new THREE.BoxGeometry(0.47, 0.44, 0.27), mat.vest);
    vest.position.y = 1.16;
    vest.castShadow = true;
    this.torso.add(vest);

    for (const sy of [1.06, 1.26]) {
      const stripe = new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.055, 0.28), mat.vanTrim);
      stripe.position.y = sy;
      this.torso.add(stripe);
    }

    // Голова
    const skull = new THREE.Mesh(new THREE.SphereGeometry(0.13, 14, 10), mat.skin);
    skull.castShadow = true;
    const hair = new THREE.Mesh(new THREE.SphereGeometry(0.135, 14, 10, 0, Math.PI * 2, 0, Math.PI * 0.55), mat.droneDark);
    hair.position.y = 0.01;
    this.head.add(skull, hair);
    this.head.position.y = 1.56;
    this.torso.add(this.head);

    // Руки
    const lUpper = limb(0.12, 0.32, 0.12, mat.cloth);
    const lLower = limb(0.11, 0.32, 0.11, mat.skin);
    lLower.position.y = -0.32;
    this.leftArm.add(lUpper, lLower);
    this.leftArm.position.set(-0.27, 1.4, 0);

    const rUpper = limb(0.12, 0.32, 0.12, mat.cloth);
    const rLower = limb(0.11, 0.32, 0.11, mat.skin);
    rLower.position.y = -0.32;
    this.rightArm.add(rUpper, rLower);
    this.rightArm.position.set(0.27, 1.4, 0);

    this.torso.add(this.leftArm, this.rightArm);
    this.root.add(this.torso);
  }

  /** Куда должен зависнуть дрон — центр зелёной зоны. */
  get zoneCenter(): THREE.Vector3 {
    return this.spec.position;
  }

  update(dt: number, droneNear: boolean): void {
    if (this.state === 'onboard' || this.state === 'delivered') return;

    this.time += dt;

    if (this.state === 'boarding') {
      this.updateBoarding(dt);
      return;
    }

    // Приступы кашля от дыма — не даёт фигуре выглядеть заводной игрушкой.
    this.coughTimer -= dt;
    if (this.coughTimer <= 0) {
      this.coughTimer = 4.5 + Math.random() * 4;
      this.coughing = 1.4;
    }
    this.coughing = Math.max(0, this.coughing - dt);

    if (this.coughing > 0) {
      const c = Math.sin(this.time * 16) * 0.5 + 0.5;
      this.torso.rotation.x = damp(this.torso.rotation.x, 0.42 + c * 0.12, 8, dt);
      this.leftArm.rotation.x = damp(this.leftArm.rotation.x, -2.1, 10, dt);
      this.rightArm.rotation.x = damp(this.rightArm.rotation.x, -2.2, 10, dt);
      this.leftArm.rotation.z = damp(this.leftArm.rotation.z, 0.5, 10, dt);
      this.rightArm.rotation.z = damp(this.rightArm.rotation.z, -0.5, 10, dt);
      this.head.rotation.x = damp(this.head.rotation.x, 0.5, 8, dt);
    } else {
      // Машет руками — тем активнее, чем ближе дрон.
      const speed = droneNear ? 7.5 : 4.2;
      const amp = droneNear ? 0.55 : 0.35;
      const wave = Math.sin(this.time * speed);
      this.torso.rotation.x = damp(this.torso.rotation.x, 0, 6, dt);
      this.head.rotation.x = damp(this.head.rotation.x, droneNear ? -0.35 : -0.1, 6, dt);
      this.leftArm.rotation.x = damp(this.leftArm.rotation.x, -2.5 + wave * amp, 9, dt);
      this.rightArm.rotation.x = damp(this.rightArm.rotation.x, -2.5 - wave * amp, 9, dt);
      this.leftArm.rotation.z = damp(this.leftArm.rotation.z, 0.35 - wave * 0.25, 9, dt);
      this.rightArm.rotation.z = damp(this.rightArm.rotation.z, -0.35 + wave * 0.25, 9, dt);
      this.torso.position.y = Math.sin(this.time * speed * 0.5) * 0.02;
    }
  }

  /** Запускает посадку в люльку; target — мировая точка корзины. */
  beginBoarding(target: THREE.Vector3): void {
    if (this.state !== 'waiting') return;
    this.state = 'boarding';
    this.boardProgress = 0;
    this.boardFrom.copy(this.root.position);
    this.boardTarget.copy(target);
  }

  private boardTarget = new THREE.Vector3();

  /** Цель обновляется каждый кадр — корзина висит на движущемся дроне. */
  setBoardingTarget(target: THREE.Vector3): void {
    this.boardTarget.copy(target);
  }

  private updateBoarding(dt: number): void {
    this.boardProgress = clamp01(this.boardProgress + dt / 0.9);
    const t = this.boardProgress;

    // Дуга: сначала подпрыгивает, потом втягивается в корзину.
    this.root.position.lerpVectors(this.boardFrom, this.boardTarget, t * t);
    this.root.position.y += Math.sin(t * Math.PI) * 0.35;
    this.root.scale.setScalar(1 - t * 0.35);

    this.leftArm.rotation.x = -2.9;
    this.rightArm.rotation.x = -2.9;
    this.torso.rotation.x = -0.2;

    if (t >= 1) {
      this.state = 'onboard';
      this.root.visible = false;
    }
  }

  markDelivered(): void {
    this.state = 'delivered';
    this.root.visible = false;
  }

  reset(): void {
    this.state = 'waiting';
    this.root.visible = true;
    this.root.position.copy(this.spec.position);
    this.root.rotation.y = this.spec.facing;
    this.root.scale.setScalar(1);
    this.boardProgress = 0;
    this.coughTimer = 3;
    this.coughing = 0;
    this.torso.rotation.set(0, 0, 0);
    this.torso.position.y = 0;
  }

  dispose(): void {
    this.root.traverse((child) => {
      (child as THREE.Mesh).geometry?.dispose();
    });
  }
}
