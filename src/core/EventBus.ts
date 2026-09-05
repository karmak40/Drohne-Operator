import type { Grade } from './Grade';

/**
 * Минимальная типизированная шина событий.
 * Системы общаются только через неё, чтобы не тянуть ссылки друг на друга.
 */

export interface GameEvents {
  /** Дрон оторвался от площадки */
  'drone:takeoff': void;
  /** Дрон коснулся площадки H (посадка) */
  'drone:landed': { onHelipad: boolean };
  /** Столкновение с препятствием, сила удара в м/с */
  'drone:impact': { speed: number; damage: number; kind: 'solid' | 'wire' | 'soft' | 'ground' };
  /** Дрон перегрелся рядом с огнём */
  'drone:overheat': { amount: number };
  /** Заряд упал до нуля */
  'drone:batteryEmpty': void;
  /** Дрон уничтожен (урон 100%) */
  'drone:destroyed': void;

  /** Выстрел пеной начат / закончен */
  'foam:start': void;
  'foam:stop': void;
  /** Пена попала в очаг */
  'foam:hit': { fireId: string; amount: number };
  /** Бак пены пуст */
  'foam:empty': void;

  /** Очаг потушен */
  'fire:extinguished': { fireId: string };
  /** Все очаги группы потушены */
  'fire:groupCleared': { group: string };

  /** Люлька пошла вниз */
  'winch:deploy': void;
  /** Люлька убрана без груза */
  'winch:retract': void;
  /** Прогресс подъёма выжившего 0..1 */
  'winch:progress': { value: number };
  /** Выживший на борту */
  'survivor:pickedUp': { id: string; mass: number };
  /** Выживший сдан медикам */
  'survivor:delivered': { id: string };

  /** Скриптовое обрушение */
  'destruction:collapse': { id: string };

  /** Переключение тепловизора */
  'vision:thermal': { enabled: boolean };

  /** Фаза миссии сменилась */
  'mission:phase': { index: number; id: string };
  /** Реплика диспетчера */
  'radio:line': { speaker: string; key: string; duration: number };
  /** Миссия завершена */
  'mission:complete': MissionResultData;
  /** Миссия провалена */
  'mission:failed': { reason: 'battery' | 'destroyed' | 'timeout' };
  /** Откат к чекпойнту */
  'mission:checkpoint': { phaseIndex: number };

  /** Смена экрана */
  'ui:screen': { name: ScreenName };
  /** Локаль сменилась */
  'i18n:changed': { locale: string };
}

export type ScreenName = 'menu' | 'briefing' | 'game' | 'result' | 'paused';

export interface MissionResultData {
  survivorsRescued: number;
  survivorsTotal: number;
  firesExtinguished: number;
  firesTotal: number;
  damagePercent: number;
  timeSeconds: number;
  batteryLeft: number;
  reward: number;
  reputation: number;
  /** Итоговая оценка вылета и её разбор */
  grade: Grade;
  score: number;
}

type Handler<T> = (payload: T) => void;

export class EventBus {
  private handlers = new Map<string, Set<Handler<any>>>();

  on<K extends keyof GameEvents>(event: K, fn: Handler<GameEvents[K]>): () => void {
    let set = this.handlers.get(event as string);
    if (!set) {
      set = new Set();
      this.handlers.set(event as string, set);
    }
    set.add(fn);
    return () => this.off(event, fn);
  }

  once<K extends keyof GameEvents>(event: K, fn: Handler<GameEvents[K]>): () => void {
    const off = this.on(event, (payload) => {
      off();
      fn(payload);
    });
    return off;
  }

  off<K extends keyof GameEvents>(event: K, fn: Handler<GameEvents[K]>): void {
    this.handlers.get(event as string)?.delete(fn);
  }

  emit<K extends keyof GameEvents>(
    event: K,
    ...args: GameEvents[K] extends void ? [] : [GameEvents[K]]
  ): void {
    const set = this.handlers.get(event as string);
    if (!set) return;
    // Копия — обработчик может отписаться прямо во время вызова.
    for (const fn of [...set]) {
      try {
        fn(args[0]);
      } catch (err) {
        console.error(`[EventBus] обработчик "${String(event)}" упал:`, err);
      }
    }
  }

  /** Полная очистка — используется при рестарте миссии. */
  clear(): void {
    this.handlers.clear();
  }
}

export const bus = new EventBus();
