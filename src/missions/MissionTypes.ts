import type * as THREE from 'three';
import type { StringKey } from '@/i18n';
import type { Drone } from '@/entities/Drone';
import type { FlightModel } from '@/systems/FlightModel';
import type { FireSystem } from '@/systems/FireSystem';
import type { FoamSystem } from '@/systems/FoamSystem';
import type { RescueSystem } from '@/systems/RescueSystem';
import type { LevelData } from '@/world/LevelTypes';
import type { Hud } from '@/ui/Hud';
import type { InputManager } from '@/input/InputManager';
import type { RenderSystem } from '@/render/Renderer';

/** Всё, к чему сценарий миссии имеет доступ. */
export interface MissionContext {
  drone: Drone;
  flight: FlightModel;
  fires: FireSystem;
  foam: FoamSystem;
  rescue: RescueSystem;
  level: LevelData;
  hud: Hud;
  input: InputManager;
  render: RenderSystem;
  /** Секунды с начала миссии */
  elapsed: number;
  /** Замедление времени для обучающих врезок; 1 — норма */
  setTimeScale: (value: number) => void;
  /** Поставить реплику в очередь рации */
  say: (speaker: StringKey, line: StringKey, options?: { delay?: number; hold?: number }) => void;
  /** Сбросить очередь реплик */
  clearRadio: () => void;
}

export interface PhaseDef {
  id: string;
  /** Ключ текста задачи в HUD */
  objective: StringKey;
  /** Имя маркера из level.markers */
  marker?: string;
  /** Маркер зелёный (цель спасения), а не оранжевый */
  goal?: boolean;
  /** Подсказка управления; возвращает null, если подсказка не нужна */
  tutorial?: (ctx: MissionContext) => StringKey | null;
  enter?: (ctx: MissionContext) => void;
  update?: (ctx: MissionContext, dt: number) => void;
  done: (ctx: MissionContext) => boolean;
  /** Восстановление состояния мира при откате к этой фазе */
  restore?: (ctx: MissionContext) => void;
}

export interface MissionDef {
  id: string;
  phases: PhaseDef[];
  /** Куда ставится дрон при старте фазы (чекпойнт) */
  checkpointFor: (phaseIndex: number, level: LevelData) => { position: THREE.Vector3; yaw: number };
  /** Сколько очагов считается целью миссии */
  objectiveFireGroups: string[];
  /** Норматив времени, с. Уложился — полный балл, вдвое дольше — ноль. */
  parTime: number;
}
