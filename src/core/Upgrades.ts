import { cfg } from './Config';
import type { DroneUpgrades } from './Save';
import { t, type StringKey } from '@/i18n';

/**
 * Дерево прокачки дрона.
 *
 * Модуль намеренно ничего не знает ни про localStorage, ни про UI: он берёт
 * уровни веток и отдаёт готовые характеристики борта. Базой служит `cfg`,
 * поэтому дебаг-панель продолжает работать — прокачка накладывается поверх
 * текущих значений, а не подменяет их.
 */

export type UpgradeId = 'power' | 'payload' | 'suppression' | 'frame';

export const UPGRADE_IDS: UpgradeId[] = ['power', 'payload', 'suppression', 'frame'];

/** Уровней прокачки в каждой ветке, не считая базовой комплектации. */
export const MAX_LEVEL = 3;

/* ------------------------------------------------------------------ */
/* Таблицы эффектов. Индекс — уровень ветки, 0 — базовая комплектация. */
/* ------------------------------------------------------------------ */

const POWER_CAPACITY = [1, 1.22, 1.48, 1.8];
/** Экономайзер: прокачанная энергосистема мягче реагирует на груз. */
const POWER_PAYLOAD_DRAIN = [1, 0.88, 0.76, 0.62];

const PAYLOAD_EXTRA_KG = [0, 18, 40, 70];
/** Смягчение штрафов массы на скорость, отклик и скороподъёмность. */
const PAYLOAD_PENALTY = [1, 0.84, 0.68, 0.52];

const SUPPRESSION_TANK = [1, 1.28, 1.6, 2.0];
const SUPPRESSION_DPS = [1, 1.16, 1.36, 1.62];

const FRAME_HULL_BONUS = [0, 28, 62, 105];
const FRAME_IMPACT = [1, 0.78, 0.6, 0.42];

/** Цены за переход на уровень 1, 2 и 3. Первая покупка — после одного вылета. */
const COSTS: Record<UpgradeId, number[]> = {
  power: [450, 1100, 2400],
  payload: [520, 1250, 2700],
  suppression: [400, 980, 2150],
  frame: [380, 940, 2050],
};

export interface UpgradeBranch {
  id: UpgradeId;
  nameKey: StringKey;
  descKey: StringKey;
  /** Символ для карточки — рисуется шрифтом, без картинок. */
  glyph: string;
  /** Что даёт каждый уровень: короткая строка для карточки. */
  effectAt: (level: number) => string;
}

export const UPGRADE_BRANCHES: UpgradeBranch[] = [
  {
    id: 'power',
    nameKey: 'upgrade.power',
    descKey: 'upgrade.power.desc',
    glyph: '⚡',
    effectAt: (l) => `+${Math.round((POWER_CAPACITY[l] - 1) * 100)}% · −${Math.round((1 - POWER_PAYLOAD_DRAIN[l]) * 100)}%`,
  },
  {
    id: 'payload',
    nameKey: 'upgrade.payload',
    descKey: 'upgrade.payload.desc',
    glyph: '⬆',
    effectAt: (l) => `+${PAYLOAD_EXTRA_KG[l]} ${t('hud.kg')} · −${Math.round((1 - PAYLOAD_PENALTY[l]) * 100)}%`,
  },
  {
    id: 'suppression',
    nameKey: 'upgrade.suppression',
    descKey: 'upgrade.suppression.desc',
    glyph: '≈',
    effectAt: (l) => `+${Math.round((SUPPRESSION_TANK[l] - 1) * 100)}% · +${Math.round((SUPPRESSION_DPS[l] - 1) * 100)}%`,
  },
  {
    id: 'frame',
    nameKey: 'upgrade.frame',
    descKey: 'upgrade.frame.desc',
    glyph: '⛨',
    effectAt: (l) => `+${FRAME_HULL_BONUS[l]} · −${Math.round((1 - FRAME_IMPACT[l]) * 100)}%`,
  },
];

/** Характеристики борта после установки всех модулей. */
export interface DroneStats {
  batteryCapacity: number;
  /** Множитель расхода заряда на килограмм груза */
  payloadDrainMul: number;
  foamTank: number;
  foamDpsMul: number;
  hullMax: number;
  impactDamageMul: number;
  maxTakeoff: number;
  /** Множитель штрафов массы: скорость, отклик, скороподъёмность */
  massPenaltyMul: number;
}

const clampLevel = (level: number): number => Math.max(0, Math.min(MAX_LEVEL, Math.round(level || 0)));

/**
 * Считает характеристики борта. Вызывается на старте вылета и при каждой
 * покупке, поэтому дешёвая и без побочных эффектов.
 */
export function computeStats(upgrades: DroneUpgrades): DroneStats {
  const power = clampLevel(upgrades.power);
  const payload = clampLevel(upgrades.payload);
  const suppression = clampLevel(upgrades.suppression);
  const frame = clampLevel(upgrades.frame);

  return {
    batteryCapacity: cfg.battery.capacity * POWER_CAPACITY[power],
    payloadDrainMul: POWER_PAYLOAD_DRAIN[power],
    foamTank: cfg.foam.tank * SUPPRESSION_TANK[suppression],
    foamDpsMul: SUPPRESSION_DPS[suppression],
    hullMax: cfg.hull.max + FRAME_HULL_BONUS[frame],
    impactDamageMul: FRAME_IMPACT[frame],
    maxTakeoff: cfg.mass.maxTakeoff + PAYLOAD_EXTRA_KG[payload],
    massPenaltyMul: PAYLOAD_PENALTY[payload],
  };
}

/** Базовая комплектация — для случаев, когда профиль ещё не прочитан. */
export function baseStats(): DroneStats {
  return computeStats({ power: 0, payload: 0, suppression: 0, frame: 0 });
}

/** Цена следующего уровня; null, если ветка прокачана полностью. */
export function nextCost(id: UpgradeId, currentLevel: number): number | null {
  const level = clampLevel(currentLevel);
  if (level >= MAX_LEVEL) return null;
  return COSTS[id][level];
}

export function effectOf(id: UpgradeId, level: number): string {
  const branch = UPGRADE_BRANCHES.find((b) => b.id === id)!;
  return branch.effectAt(clampLevel(level));
}
