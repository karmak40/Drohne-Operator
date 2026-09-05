/**
 * Тактильная отдача.
 *
 * Тонкая обёртка над Vibration API. Работает только там, где вибромотор
 * действительно есть — на десктопе `navigator.vibrate` либо отсутствует,
 * либо молча ничего не делает, но проверять указатель всё равно нужно:
 * иначе ноутбук с сенсорным экраном начнёт получать команды вибрации.
 *
 * Отдача — усилитель, а не источник информации: всё, что она подчёркивает,
 * уже сказано звуком и картинкой. Поэтому её отключение ничего не ломает.
 */

type Pattern = number | number[];

const STORAGE_KEY = 'do.haptics';

class Haptics {
  private supported = false;
  private enabled = true;
  /** Не чаще одного срабатывания в этот интервал — мотор не должен трещать. */
  private readonly minInterval = 0.06;
  private lastFire = -Infinity;

  constructor() {
    const hasApi = typeof navigator !== 'undefined' && typeof navigator.vibrate === 'function';
    const isTouch = typeof matchMedia === 'function' && matchMedia('(pointer: coarse)').matches;
    this.supported = hasApi && isTouch;

    try {
      this.enabled = localStorage.getItem(STORAGE_KEY) !== 'off';
    } catch {
      this.enabled = true;
    }
  }

  get available(): boolean {
    return this.supported;
  }

  get isEnabled(): boolean {
    return this.enabled;
  }

  setEnabled(value: boolean): void {
    this.enabled = value;
    try {
      localStorage.setItem(STORAGE_KEY, value ? 'on' : 'off');
    } catch {
      /* приватный режим — настройка проживёт до перезагрузки */
    }
  }

  private fire(pattern: Pattern): void {
    if (!this.supported || !this.enabled) return;

    const now = performance.now() / 1000;
    if (now - this.lastFire < this.minInterval) return;
    this.lastFire = now;

    try {
      navigator.vibrate(pattern);
    } catch {
      // Некоторые браузеры кидают при вызове без жеста пользователя.
      this.supported = false;
    }
  }

  /* --- Игровые поводы ----------------------------------------------- */

  /** Удар о препятствие. Длительность растёт с уроном, но с потолком. */
  impact(damage: number): void {
    const ms = Math.round(12 + Math.min(1, damage / 25) * 48);
    this.fire(ms);
  }

  /** Отрыв от площадки — короткий толчок. */
  takeoff(): void {
    this.fire(18);
  }

  /** Касание опоры. */
  landing(): void {
    this.fire(26);
  }

  /** Выживший в люльке: двойной импульс, «щёлк-щёлк». */
  pickup(): void {
    this.fire([22, 60, 34]);
  }

  /** Очаг потушен. */
  fireOut(): void {
    this.fire([16, 40, 16]);
  }

  /** Упёрлись в границу зоны — сухой отбой. */
  boundary(): void {
    this.fire(14);
  }

  /** Миссия завершена: успех длиннее и с раскачкой, провал — один глухой удар. */
  missionEnd(success: boolean): void {
    this.fire(success ? [30, 70, 30, 70, 90] : 140);
  }

  /** Гасит вибрацию — например, при уходе в паузу. */
  stop(): void {
    if (!this.supported) return;
    try {
      navigator.vibrate(0);
    } catch {
      /* не критично */
    }
  }
}

export const haptics = new Haptics();
