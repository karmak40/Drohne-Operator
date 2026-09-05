import { bestGrade, type Grade } from './Grade';

/**
 * Прогресс игрока в localStorage. Схема версионируется — при несовпадении
 * версии профиль сбрасывается, а не ломает игру.
 */

const STORAGE_KEY = 'do.save.v1';
const SCHEMA_VERSION = 1;

export interface DroneUpgrades {
  /** Уровни четырёх веток прокачки, 0 = базовая комплектация */
  power: number;
  payload: number;
  suppression: number;
  frame: number;
}

export interface MissionRecord {
  completed: boolean;
  bestTime: number;
  bestDamage: number;
  survivorsRescued: number;
  /** Лучший ранг за все прохождения */
  bestGrade?: Grade;
}

export interface SaveData {
  version: number;
  money: number;
  reputation: number;
  upgrades: DroneUpgrades;
  unlocked: string[];
  missions: Record<string, MissionRecord>;
  /** Сколько раз игрок смотрел рекламу — для аналитики баланса */
  adsWatched: number;
  /** Уже показывали ли обучение */
  tutorialSeen: boolean;
}

function freshSave(): SaveData {
  return {
    version: SCHEMA_VERSION,
    money: 0,
    reputation: 0,
    upgrades: { power: 0, payload: 0, suppression: 0, frame: 0 },
    unlocked: [],
    missions: {},
    adsWatched: 0,
    tutorialSeen: false,
  };
}

class SaveManager {
  private data: SaveData = freshSave();

  constructor() {
    this.load();
  }

  private load(): void {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw) as SaveData;
      if (parsed.version !== SCHEMA_VERSION) {
        console.warn('[Save] версия профиля устарела, начинаем заново');
        return;
      }
      // Мягкое слияние: новые поля из freshSave() не теряются при апдейте игры.
      this.data = { ...freshSave(), ...parsed, upgrades: { ...freshSave().upgrades, ...parsed.upgrades } };
    } catch (err) {
      console.warn('[Save] не удалось прочитать профиль:', err);
    }
  }

  get(): Readonly<SaveData> {
    return this.data;
  }

  flush(): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.data));
    } catch (err) {
      console.warn('[Save] не удалось записать профиль:', err);
    }
  }

  addMoney(amount: number): void {
    this.data.money = Math.max(0, Math.round(this.data.money + amount));
    this.flush();
  }

  addReputation(amount: number): void {
    this.data.reputation = Math.max(0, Math.round(this.data.reputation + amount));
    this.flush();
  }

  /**
   * Списывает деньги и поднимает ветку на уровень. Возвращает false, если
   * не хватило бюджета — проверка живёт здесь, чтобы UI не мог рассинхронно
   * выдать апгрейд бесплатно.
   */
  buyUpgrade(id: keyof DroneUpgrades, cost: number): boolean {
    if (cost > this.data.money) return false;
    this.data.money -= cost;
    this.data.upgrades[id] += 1;
    this.flush();
    return true;
  }

  unlock(id: string): void {
    if (!this.data.unlocked.includes(id)) {
      this.data.unlocked.push(id);
      this.flush();
    }
  }

  isUnlocked(id: string): boolean {
    return this.data.unlocked.includes(id);
  }

  recordMission(id: string, record: Partial<MissionRecord>): void {
    const prev = this.data.missions[id] ?? {
      completed: false,
      bestTime: Infinity,
      bestDamage: 100,
      survivorsRescued: 0,
    };
    this.data.missions[id] = {
      completed: prev.completed || (record.completed ?? false),
      bestTime: Math.min(prev.bestTime, record.bestTime ?? Infinity),
      bestDamage: Math.min(prev.bestDamage, record.bestDamage ?? 100),
      survivorsRescued: Math.max(prev.survivorsRescued, record.survivorsRescued ?? 0),
      bestGrade: record.bestGrade ? bestGrade(prev.bestGrade, record.bestGrade) : prev.bestGrade,
    };
    this.flush();
  }

  markTutorialSeen(): void {
    this.data.tutorialSeen = true;
    this.flush();
  }

  countAd(): void {
    this.data.adsWatched += 1;
    this.flush();
  }

  hasProgress(): boolean {
    return this.data.money > 0 || Object.keys(this.data.missions).length > 0;
  }

  reset(): void {
    this.data = freshSave();
    localStorage.removeItem(STORAGE_KEY);
  }
}

export const save = new SaveManager();
