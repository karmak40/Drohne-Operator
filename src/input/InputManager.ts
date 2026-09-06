import { cfg } from '@/core/Config';
import { clamp } from '@/core/MathUtil';

export interface JoystickVisual {
  active: boolean;
  originX: number;
  originY: number;
  knobX: number;
  knobY: number;
}

/**
 * Единый ввод для тача и клавиатуры с мышью.
 *
 * Тач: левая половина экрана — динамический джойстик (появляется там, где палец
 * коснулся), правая — свайп камеры. Кнопки живут в HUD и дёргают сюда флаги.
 * Десктоп: WASD + мышь, с захватом курсора по клику и запасным режимом
 * «тащить ЛКМ», если игрок захват не даёт.
 */
export class InputManager {
  /** -1..1, x — вбок, y — вперёд */
  moveX = 0;
  moveY = 0;
  /** -1..1 */
  climb = 0;

  /** Накопленный поворот камеры за кадр, в радианах. Считывается через consumeLook(). */
  private lookDx = 0;
  private lookDy = 0;
  /** Инерция свайпа. */
  private inertiaX = 0;
  private inertiaY = 0;

  foamHeld = false;
  /** Кнопка пены зажата пальцем или мышью; клавиатура опрашивается напрямую. */
  private foamPointer = false;
  private winchEdge = false;
  private thermalEdge = false;
  private pauseEdge = false;

  readonly joystick: JoystickVisual = { active: false, originX: 0, originY: 0, knobX: 0, knobY: 0 };

  /** true, когда игра принимает ввод. Меню и пауза его снимают. */
  enabled = false;
  /** Заблокировать конкретные действия (обучение открывает их по очереди). */
  allowFoam = true;
  allowWinch = true;
  allowThermal = true;

  private joystickPointer: number | null = null;
  private lookPointer: number | null = null;
  private lastLookX = 0;
  private lastLookY = 0;
  private keys = new Set<string>();
  private pointerLocked = false;
  /** Захват курсора запрещён браузером — работает запасная схема с ПКМ. */
  private lockUnavailable = false;
  private mouseDragLook = false;
  private disposers: (() => void)[] = [];

  constructor(
    private readonly surface: HTMLElement,
    private readonly canvas: HTMLElement,
  ) {
    this.bindPointer();
    this.bindKeyboard();
    this.bindMouse();
  }

  /* ---------------------------------------------------------------- */
  /* Тач и указатель                                                   */
  /* ---------------------------------------------------------------- */

  private bindPointer(): void {
    const onDown = (e: PointerEvent): void => {
      if (!this.enabled) return;
      // Кнопки HUD сами глотают свои события; сюда приходит только «пустой» экран.
      if ((e.target as HTMLElement).closest('[data-ui-control]')) return;

      const leftZone = e.clientX < window.innerWidth * 0.45;

      if (leftZone && this.joystickPointer === null) {
        this.joystickPointer = e.pointerId;
        this.joystick.active = true;
        this.joystick.originX = e.clientX;
        this.joystick.originY = e.clientY;
        this.joystick.knobX = e.clientX;
        this.joystick.knobY = e.clientY;
        this.surface.setPointerCapture(e.pointerId);
      } else if (!leftZone && this.lookPointer === null) {
        this.lookPointer = e.pointerId;
        this.lastLookX = e.clientX;
        this.lastLookY = e.clientY;
        this.surface.setPointerCapture(e.pointerId);
      }
    };

    const onMove = (e: PointerEvent): void => {
      if (e.pointerId === this.joystickPointer) {
        const radius = cfg.input.joystickRadius;
        let dx = e.clientX - this.joystick.originX;
        let dy = e.clientY - this.joystick.originY;
        const len = Math.hypot(dx, dy);

        // Если палец ушёл дальше радиуса, центр «догоняет» — стик не залипает.
        if (len > radius) {
          const excess = len - radius;
          this.joystick.originX += (dx / len) * excess;
          this.joystick.originY += (dy / len) * excess;
          dx = (dx / len) * radius;
          dy = (dy / len) * radius;
        }
        this.joystick.knobX = this.joystick.originX + dx;
        this.joystick.knobY = this.joystick.originY + dy;

        const nx = dx / radius;
        const ny = -dy / radius;
        this.applyStick(nx, ny);
      } else if (e.pointerId === this.lookPointer) {
        const dx = e.clientX - this.lastLookX;
        const dy = e.clientY - this.lastLookY;
        this.lastLookX = e.clientX;
        this.lastLookY = e.clientY;
        this.lookDx += dx * cfg.input.swipeSensitivity;
        this.lookDy += dy * cfg.input.swipeSensitivity;
        this.inertiaX = dx * cfg.input.swipeSensitivity;
        this.inertiaY = dy * cfg.input.swipeSensitivity;
      }
    };

    const onUp = (e: PointerEvent): void => {
      if (e.pointerId === this.joystickPointer) {
        this.joystickPointer = null;
        this.joystick.active = false;
        this.moveX = 0;
        this.moveY = 0;
        this.climb = 0;
      } else if (e.pointerId === this.lookPointer) {
        this.lookPointer = null;
      }
    };

    this.surface.addEventListener('pointerdown', onDown);
    this.surface.addEventListener('pointermove', onMove);
    this.surface.addEventListener('pointerup', onUp);
    this.surface.addEventListener('pointercancel', onUp);
    this.disposers.push(() => {
      this.surface.removeEventListener('pointerdown', onDown);
      this.surface.removeEventListener('pointermove', onMove);
      this.surface.removeEventListener('pointerup', onUp);
      this.surface.removeEventListener('pointercancel', onUp);
    });
  }

  /**
   * Один стик отвечает и за плоскость, и за высоту: вертикаль стика — это набор
   * высоты только в мёртвой зоне по горизонтали? Нет — так неудобно. Поэтому
   * вертикаль джойстика = движение вперёд/назад, а высота вынесена на отдельные
   * кнопки HUD (стрелки вверх/вниз), как в реальных пультах с двумя стиками.
   */
  private applyStick(nx: number, ny: number): void {
    const dead = cfg.input.joystickDeadzone;
    const len = Math.hypot(nx, ny);
    if (len < dead) {
      this.moveX = 0;
      this.moveY = 0;
      return;
    }
    // Пересчёт с учётом мёртвой зоны, чтобы на её краю не было скачка.
    const scaled = Math.min(1, (len - dead) / (1 - dead));
    this.moveX = (nx / len) * scaled;
    this.moveY = (ny / len) * scaled;
  }

  /** Кнопки «вверх/вниз» на HUD. */
  setClimbButton(value: number): void {
    this.climbButton = value;
  }
  private climbButton = 0;

  /* ---------------------------------------------------------------- */
  /* Клавиатура                                                        */
  /* ---------------------------------------------------------------- */

  private bindKeyboard(): void {
    const onDown = (e: KeyboardEvent): void => {
      if (e.repeat) return;
      const code = e.code;
      this.keys.add(code);

      if (code === 'Escape') this.pauseEdge = true;
      if (!this.enabled) return;
      // Трос уехал с E на R: пена нужна куда чаще, и удобную клавишу под
      // указательным пальцем логичнее отдать ей, а не одному нажатию за вылет.
      if (code === 'KeyR' && this.allowWinch) this.winchEdge = true;
      if (code === 'KeyF' && this.allowThermal) this.thermalEdge = true;
      if (code === 'Space') e.preventDefault();
    };
    const onUp = (e: KeyboardEvent): void => {
      this.keys.delete(e.code);
    };
    const onBlur = (): void => {
      this.keys.clear();
      this.foamPointer = false;
      this.foamHeld = false;
    };

    window.addEventListener('keydown', onDown);
    window.addEventListener('keyup', onUp);
    window.addEventListener('blur', onBlur);
    this.disposers.push(() => {
      window.removeEventListener('keydown', onDown);
      window.removeEventListener('keyup', onUp);
      window.removeEventListener('blur', onBlur);
    });
  }

  /* ---------------------------------------------------------------- */
  /* Мышь и захват курсора                                             */
  /* ---------------------------------------------------------------- */

  private bindMouse(): void {
    /**
     * Клик по сцене при отпущенном курсоре сначала забирает курсор и на этом
     * заканчивается — пену он не льёт. Раньше ЛКМ одновременно захватывала
     * курсор, крутила камеру перетаскиванием и открывала ствол: осмотреться,
     * не поливая всё вокруг, было физически невозможно.
     */
    const onCanvasDown = (e: MouseEvent): void => {
      if (!this.enabled) return;
      if ((e.target as HTMLElement).closest('[data-ui-control]')) return;

      if (e.button === 0) {
        if (!this.pointerLocked && !this.lockUnavailable) {
          this.requestLock();
          return;
        }
        this.foamPointer = true;
      } else if (e.button === 2) {
        // Запасной обзор для тех, у кого захвата курсора нет или кто вышел
        // из него по Escape. Пока курсор захвачен, ПКМ не нужна.
        if (!this.pointerLocked) this.mouseDragLook = true;
      }
    };

    const onUp = (e: MouseEvent): void => {
      if (e.button === 0) this.foamPointer = false;
      if (e.button === 2) this.mouseDragLook = false;
    };

    const onMove = (e: MouseEvent): void => {
      if (!this.enabled) return;
      if (this.pointerLocked) {
        this.lookDx += e.movementX * cfg.input.mouseSensitivity;
        this.lookDy += e.movementY * cfg.input.mouseSensitivity;
      } else if (this.mouseDragLook) {
        this.lookDx += e.movementX * cfg.input.mouseSensitivity * 1.6;
        this.lookDy += e.movementY * cfg.input.mouseSensitivity * 1.6;
      }
    };

    const onLockChange = (): void => {
      this.pointerLocked = document.pointerLockElement === this.canvas;
      // Вышли из захвата (Escape) — отпускаем и ствол, иначе он останется
      // «зажатым» с того клика, которым игрок входил в захват.
      if (!this.pointerLocked) this.foamPointer = false;
    };

    // Захват могут запретить: iframe без разрешения, политика браузера,
    // отказ пользователя. Тогда переходим на схему «ЛКМ — пена, ПКМ — обзор»,
    // и игра остаётся полностью управляемой.
    const onLockError = (): void => {
      this.lockUnavailable = true;
      this.pointerLocked = false;
    };

    const onContext = (e: Event): void => {
      if (this.enabled) e.preventDefault();
    };

    const onWheel = (e: WheelEvent): void => {
      if (!this.enabled) return;
      e.preventDefault();
      cfg.camera.distance = clamp(cfg.camera.distance + Math.sign(e.deltaY) * 0.4, 2.4, 14);
    };

    this.surface.addEventListener('mousedown', onCanvasDown);
    window.addEventListener('mouseup', onUp);
    window.addEventListener('mousemove', onMove);
    document.addEventListener('pointerlockchange', onLockChange);
    document.addEventListener('pointerlockerror', onLockError);
    this.surface.addEventListener('contextmenu', onContext);
    this.surface.addEventListener('wheel', onWheel, { passive: false });

    this.disposers.push(() => {
      this.surface.removeEventListener('mousedown', onCanvasDown);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('pointerlockchange', onLockChange);
      document.removeEventListener('pointerlockerror', onLockError);
      this.surface.removeEventListener('contextmenu', onContext);
      this.surface.removeEventListener('wheel', onWheel);
    });
  }

  /** Запрос захвата курсора; отказ переводит управление на запасную схему. */
  private requestLock(): void {
    const request = this.canvas.requestPointerLock as
      | ((options?: { unadjustedMovement?: boolean }) => Promise<void> | void)
      | undefined;
    if (!request) {
      this.lockUnavailable = true;
      return;
    }
    try {
      const result = request.call(this.canvas);
      // В свежих браузерах метод возвращает промис; в старых — undefined,
      // и об отказе там сообщает только событие pointerlockerror.
      if (result && typeof (result as Promise<void>).catch === 'function') {
        (result as Promise<void>).catch(() => {
          this.lockUnavailable = true;
        });
      }
    } catch {
      this.lockUnavailable = true;
    }
  }

  releasePointerLock(): void {
    if (document.pointerLockElement === this.canvas) document.exitPointerLock();
  }

  /**
   * Мышь ещё не крутит камеру: курсор не захвачен, но захват доступен.
   * Если браузер захват запретил, подсказка не нужна — работает ПКМ.
   */
  get needsCursorCapture(): boolean {
    return !this.pointerLocked && !this.lockUnavailable;
  }

  /* ---------------------------------------------------------------- */
  /* Опрос                                                             */
  /* ---------------------------------------------------------------- */

  /** Сводит клавиатуру и тач в одни значения. Вызывать раз за кадр до физики. */
  poll(dt: number): void {
    if (!this.enabled) {
      this.moveX = 0;
      this.moveY = 0;
      this.climb = 0;
      // Управление отобрали (пауза, посадка, провал) — струю тоже глушим.
      this.foamHeld = false;
      return;
    }

    // Клавиатура перекрывает джойстик, если по ней есть ввод.
    let kx = 0;
    let ky = 0;
    if (this.keys.has('KeyA') || this.keys.has('ArrowLeft')) kx -= 1;
    if (this.keys.has('KeyD') || this.keys.has('ArrowRight')) kx += 1;
    if (this.keys.has('KeyW') || this.keys.has('ArrowUp')) ky += 1;
    if (this.keys.has('KeyS') || this.keys.has('ArrowDown')) ky -= 1;

    if (kx !== 0 || ky !== 0) {
      const len = Math.hypot(kx, ky);
      this.moveX = kx / len;
      this.moveY = ky / len;
    } else if (!this.joystick.active) {
      this.moveX = 0;
      this.moveY = 0;
    }

    let climb = this.climbButton;
    if (this.keys.has('Space')) climb += 1;
    if (this.keys.has('ShiftLeft') || this.keys.has('ShiftRight') || this.keys.has('KeyC')) climb -= 1;
    this.climb = clamp(climb, -1, 1);

    // Пена пересобирается каждый кадр из всех источников. Раньше клавиатура
    // только взводила флаг и никогда его не снимала — Ctrl отпущен, а бак
    // продолжал опустошаться до нуля.
    this.foamHeld =
      this.allowFoam && (this.foamPointer || this.keys.has('KeyE') || this.keys.has('ControlLeft'));

    // Затухающая инерция свайпа — камера не останавливается как вкопанная.
    if (this.lookPointer === null) {
      const decay = Math.exp(-cfg.input.swipeDamping * dt);
      this.lookDx += this.inertiaX;
      this.lookDy += this.inertiaY;
      this.inertiaX *= decay;
      this.inertiaY *= decay;
      if (Math.abs(this.inertiaX) < 1e-5) this.inertiaX = 0;
      if (Math.abs(this.inertiaY) < 1e-5) this.inertiaY = 0;
    } else {
      this.inertiaX = 0;
      this.inertiaY = 0;
    }
  }

  consumeLook(): { dx: number; dy: number } {
    const result = { dx: this.lookDx, dy: this.lookDy };
    this.lookDx = 0;
    this.lookDy = 0;
    return result;
  }

  consumeWinch(): boolean {
    const v = this.winchEdge;
    this.winchEdge = false;
    return v;
  }

  consumeThermal(): boolean {
    const v = this.thermalEdge;
    this.thermalEdge = false;
    return v;
  }

  consumePause(): boolean {
    const v = this.pauseEdge;
    this.pauseEdge = false;
    return v;
  }

  /** Вызывается кнопками HUD. */
  pressWinch(): void {
    if (this.enabled && this.allowWinch) this.winchEdge = true;
  }
  pressThermal(): void {
    if (this.enabled && this.allowThermal) this.thermalEdge = true;
  }
  setFoam(held: boolean): void {
    this.foamPointer = held;
  }

  reset(): void {
    this.moveX = 0;
    this.moveY = 0;
    this.climb = 0;
    this.climbButton = 0;
    this.lookDx = 0;
    this.lookDy = 0;
    this.inertiaX = 0;
    this.inertiaY = 0;
    this.foamHeld = false;
    this.winchEdge = false;
    this.thermalEdge = false;
    this.joystick.active = false;
    this.joystickPointer = null;
    this.lookPointer = null;
    this.keys.clear();
  }

  dispose(): void {
    this.disposers.forEach((fn) => fn());
    this.disposers = [];
  }
}
