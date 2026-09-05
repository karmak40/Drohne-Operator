import * as THREE from 'three';
import type { Destructible } from './Destructible';

export type ColliderKind = 'solid' | 'wire' | 'soft';

export interface Collider {
  box: THREE.Box3;
  kind: ColliderKind;
  id: string;
  /** Выключенные коллайдеры игнорируются — так работают ещё не упавшие обломки. */
  enabled: boolean;
}

export interface FireSpec {
  id: string;
  group: string;
  position: THREE.Vector3;
  /** Визуальный масштаб очага, 1 ≈ костёр в человеческий рост */
  scale: number;
  /** Считается ли в статистике миссии */
  objective: boolean;
  /** Горит ли с самого начала */
  startActive: boolean;
  /** Даёт ли собственный источник света (дорого, включаем не всем) */
  light: boolean;
}

export interface SurvivorSpec {
  id: string;
  position: THREE.Vector3;
  /** Масса в кг — влияет на управляемость после подбора */
  mass: number;
  /** Куда смотрит */
  facing: number;
}

export interface LevelData {
  root: THREE.Group;
  colliders: Collider[];
  /** Меши для рейкаста камеры (только крупные, чтобы не тормозило) */
  cameraBlockers: THREE.Object3D[];
  spawn: { position: THREE.Vector3; yaw: number };
  helipad: { position: THREE.Vector3; radius: number };
  fires: FireSpec[];
  survivors: SurvivorSpec[];
  markers: Record<string, THREE.Vector3>;
  destructibles: Map<string, Destructible>;
  /** Игровая зона; выйти за неё нельзя */
  bounds: THREE.Box3;
  /** Мигалки, вентиляторы и прочая анимируемая мелочь */
  animate: (time: number, dt: number) => void;
  dispose: () => void;
}
