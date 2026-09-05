import { clamp01 } from './MathUtil';
import type { MissionResultData } from './EventBus';

/**
 * Оценка вылета.
 *
 * Считается по четырём слагаемым, каждое со своим весом. Спасение людей
 * весит больше всего: диспетчер прощает помятый корпус и потраченное время,
 * но не оставленного на крыше человека. Поэтому неполная эвакуация ставит
 * потолок на ранге — без этого можно было бы получить «A», бросив цель
 * и красиво вернувшись на площадку.
 */

export type Grade = 'S' | 'A' | 'B' | 'C' | 'D';

export interface GradeBreakdown {
  grade: Grade;
  /** Итоговый балл 0..100 */
  score: number;
  /** Вклад каждой составляющей, для разбора на экране итогов */
  parts: { key: 'rescue' | 'fire' | 'damage' | 'time'; earned: number; max: number }[];
}

/**
 * Веса слагаемых. Выполнение задачи даёт 45 из 100 — этого мало для высокого
 * ранга: остальное нужно заработать чистотой и темпом. При весах 45/20 за одно
 * лишь «долетел и вытащил» разбитый вдребезги дрон, потративший втрое больше
 * норматива, получал «B», и оценка переставала что-либо значить.
 */
const WEIGHTS = { rescue: 30, fire: 15, damage: 30, time: 25 };

/** Насколько строго штрафуется урон: >1 делает первые проценты дешёвыми, а последние — дорогими. */
const DAMAGE_CURVE = 1.5;

/** Окно норматива: полный балл до 0.8 от par, ноль — после 1.6. */
const TIME_FAST = 0.8;
const TIME_SLOW = 1.6;

/** Пороги рангов по итоговому баллу. */
const THRESHOLDS: [Grade, number][] = [
  ['S', 93],
  ['A', 80],
  ['B', 64],
  ['C', 45],
];

export function computeGrade(result: MissionResultData, parTime: number): GradeBreakdown {
  const rescueRatio = result.survivorsTotal > 0 ? result.survivorsRescued / result.survivorsTotal : 1;
  const fireRatio = result.firesTotal > 0 ? result.firesExtinguished / result.firesTotal : 1;

  // Кривая, а не прямая: пара царапин почти не штрафует, а вот развалить
  // половину корпуса стоит гораздо дороже, чем «минус половина балла».
  const damageRatio = clamp01(1 - result.damagePercent / 100) ** DAMAGE_CURVE;

  // Полный балл — заметно быстрее норматива; после полутора нормативов ноль.
  const fast = parTime * TIME_FAST;
  const slow = parTime * TIME_SLOW;
  const timeRatio = clamp01((slow - result.timeSeconds) / (slow - fast));

  const parts: GradeBreakdown['parts'] = [
    { key: 'rescue', earned: rescueRatio * WEIGHTS.rescue, max: WEIGHTS.rescue },
    { key: 'fire', earned: fireRatio * WEIGHTS.fire, max: WEIGHTS.fire },
    { key: 'damage', earned: damageRatio * WEIGHTS.damage, max: WEIGHTS.damage },
    { key: 'time', earned: timeRatio * WEIGHTS.time, max: WEIGHTS.time },
  ];

  const score = Math.round(parts.reduce((sum, p) => sum + p.earned, 0));

  let grade: Grade = 'D';
  for (const [candidate, threshold] of THRESHOLDS) {
    if (score >= threshold) {
      grade = candidate;
      break;
    }
  }

  // Кого-то не вывезли — выше «C» вылет не оценивается, каким бы чистым он ни был.
  if (rescueRatio < 1 && (grade === 'S' || grade === 'A' || grade === 'B')) grade = 'C';

  return { grade, score, parts };
}

/** Порядок для сравнения: чем больше, тем лучше. Нужен для «лучшего ранга». */
export function gradeRank(grade: Grade): number {
  return { D: 0, C: 1, B: 2, A: 3, S: 4 }[grade];
}

/** Лучший из двух рангов; undefined трактуется как «ещё не было». */
export function bestGrade(a: Grade | undefined, b: Grade): Grade {
  if (!a) return b;
  return gradeRank(a) >= gradeRank(b) ? a : b;
}
