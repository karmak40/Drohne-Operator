import { control, el, mount, onHold, onTap } from './dom';
import { t, type StringKey } from '@/i18n';
import { audio } from '@/audio/AudioEngine';
import type { InputManager } from '@/input/InputManager';
import { clamp01 } from '@/core/MathUtil';

export interface MarkerData {
  id: string;
  x: number;
  y: number;
  /** Точка за спиной — маркер прижимается к краю экрана */
  offscreen: boolean;
  label: string;
  goal: boolean;
}

export interface HudData {
  batteryRatio: number;
  foamRatio: number;
  hullRatio: number;
  payload: number;
  altitude: number;
  speed: number;
  batteryCritical: boolean;
}

const HOIST_CIRCUMFERENCE = 2 * Math.PI * 52;

/**
 * Игровой интерфейс. Собран на DOM поверх канваса: так он остаётся чётким на
 * любом DPI, легко локализуется и не тратит вызовы отрисовки.
 */
export class Hud {
  readonly root: HTMLElement;

  private gaugeBattery: HTMLElement;
  private gaugeHull: HTMLElement;
  private gaugePayload: HTMLElement;
  private barBattery: HTMLElement;
  private barFoam: HTMLElement;
  private barHull: HTMLElement;
  private barPayload: HTMLElement;
  private valBattery: HTMLElement;
  private valFoam: HTMLElement;
  private valHull: HTMLElement;
  private valPayload: HTMLElement;

  private altValue: HTMLElement;
  private spdValue: HTMLElement;

  private objectiveBox: HTMLElement;
  private objectiveText: HTMLElement;
  private objectiveDist: HTMLElement;

  private markerLayer: HTMLElement;
  private markerPool = new Map<string, HTMLElement>();

  private crosshair: HTMLElement;
  private hoist: HTMLElement;
  private hoistValue: SVGCircleElement;
  private hoistHint: HTMLElement;

  private joystick: HTMLElement;
  private joystickKnob: HTMLElement;
  private joystickHint: HTMLElement;

  private climbUp: HTMLButtonElement;
  private climbDown: HTMLButtonElement;

  private foamBtn: HTMLButtonElement;
  private winchBtn: HTMLButtonElement;
  private thermalBtn: HTMLButtonElement;
  private adBtn: HTMLButtonElement;
  private pauseBtn: HTMLButtonElement;

  private radio: HTMLElement;
  private radioWho: HTMLElement;
  private radioLine: HTMLElement;
  private radioTimer = 0;

  private tutorial: HTMLElement;
  private geofence!: HTMLElement;
  private geofenceTitle!: HTMLElement;
  private geofenceHint!: HTMLElement;
  private toasts: HTMLElement;
  private damageFlash: HTMLElement;
  private thermalFrame: HTMLElement;

  private disposers: (() => void)[] = [];

  onPause: () => void = () => {};
  onAd: () => void = () => {};

  constructor(parent: HTMLElement, private readonly input: InputManager) {
    this.root = mount(parent, el('div', 'hud'));
    this.root.hidden = true;

    /* --- Приборы -------------------------------------------------- */
    const gauges = mount(this.root, el('div', 'gauges'));
    const makeGauge = (key: StringKey, color: string) => {
      const box = mount(gauges, el('div', 'gauge'));
      box.style.setProperty('--fill', color);
      const label = mount(box, el('div', 'label'));
      const name = mount(label, el('span'));
      name.dataset.i18n = key;
      name.textContent = t(key);
      const value = mount(label, el('b'));
      const track = mount(box, el('div', 'track'));
      const bar = mount(track, el('div', 'bar'));
      return { box, bar, value };
    };

    const battery = makeGauge('hud.battery', 'var(--good)');
    const foam = makeGauge('hud.foam', 'var(--info)');
    const hull = makeGauge('hud.hull', 'var(--text-dim)');
    const payload = makeGauge('hud.payload', 'var(--accent)');

    this.gaugeBattery = battery.box;
    this.barBattery = battery.bar;
    this.valBattery = battery.value;
    this.barFoam = foam.bar;
    this.valFoam = foam.value;
    this.gaugeHull = hull.box;
    this.barHull = hull.bar;
    this.valHull = hull.value;
    this.gaugePayload = payload.box;
    this.barPayload = payload.bar;
    this.valPayload = payload.value;
    this.gaugePayload.style.display = 'none';

    /* --- Телеметрия ----------------------------------------------- */
    const telemetry = mount(this.root, el('div', 'telemetry'));
    const altBox = mount(telemetry, el('span'));
    altBox.innerHTML = `<span data-i18n="hud.altitude">${t('hud.altitude')}</span> <b>0</b>`;
    this.altValue = altBox.querySelector('b')!;
    const spdBox = mount(telemetry, el('span'));
    spdBox.innerHTML = `<span data-i18n="hud.speed">${t('hud.speed')}</span> <b>0</b>`;
    this.spdValue = spdBox.querySelector('b')!;

    /* --- Задача --------------------------------------------------- */
    this.objectiveBox = mount(this.root, el('div', 'objective'));
    const eyebrow = mount(this.objectiveBox, el('div', 'eyebrow'));
    eyebrow.dataset.i18n = 'hud.objective';
    eyebrow.textContent = t('hud.objective');
    this.objectiveText = mount(this.objectiveBox, el('div', 'text'));
    this.objectiveDist = mount(this.objectiveBox, el('div', 'dist'));
    this.objectiveBox.style.display = 'none';

    /* --- Кнопки сверху справа ------------------------------------- */
    const topRight = mount(this.root, el('div', 'top-right'));

    this.adBtn = control(mount(topRight, el('button', 'icon-btn', '⚡'))) as HTMLButtonElement;
    this.adBtn.title = t('hud.watchAd');
    this.adBtn.style.display = 'none';
    this.disposers.push(onTap(this.adBtn, () => this.onAd()));

    this.thermalBtn = control(mount(topRight, el('button', 'icon-btn', '◉'))) as HTMLButtonElement;
    this.thermalBtn.title = t('hud.thermal');
    this.disposers.push(onTap(this.thermalBtn, () => this.input.pressThermal()));

    this.pauseBtn = control(mount(topRight, el('button', 'icon-btn', '❚❚'))) as HTMLButtonElement;
    this.pauseBtn.title = t('hud.pause');
    this.disposers.push(onTap(this.pauseBtn, () => this.onPause()));

    /* --- Маркеры --------------------------------------------------- */
    this.markerLayer = mount(this.root, el('div', 'markers'));

    /* --- Прицел и шкала подъёма ------------------------------------ */
    this.crosshair = mount(this.root, el('div', 'crosshair'));

    this.hoist = mount(this.root, el('div', 'hoist'));
    this.hoist.innerHTML = `
      <svg viewBox="0 0 116 116">
        <circle class="track" cx="58" cy="58" r="52"></circle>
        <circle class="value" cx="58" cy="58" r="52"
          stroke-dasharray="${HOIST_CIRCUMFERENCE}" stroke-dashoffset="${HOIST_CIRCUMFERENCE}"></circle>
      </svg>
      <div class="hint"></div>`;
    this.hoistValue = this.hoist.querySelector('.value')!;
    this.hoistHint = this.hoist.querySelector('.hint')!;

    /* --- Джойстик -------------------------------------------------- */
    this.joystick = mount(this.root, el('div', 'joystick'));
    this.joystickKnob = mount(this.joystick, el('div', 'knob'));
    this.joystickHint = mount(this.root, el('div', 'joystick-hint', '<div class="arrow">▲</div>'));

    /* --- Кнопки высоты --------------------------------------------- */
    const climb = mount(this.root, el('div', 'climb'));
    this.climbUp = control(mount(climb, el('button', '', '▲'))) as HTMLButtonElement;
    this.climbDown = control(mount(climb, el('button', '', '▼'))) as HTMLButtonElement;
    this.disposers.push(
      onHold(
        this.climbUp,
        () => this.input.setClimbButton(1),
        () => this.input.setClimbButton(0),
      ),
      onHold(
        this.climbDown,
        () => this.input.setClimbButton(-1),
        () => this.input.setClimbButton(0),
      ),
    );

    /* --- Действия --------------------------------------------------- */
    const actions = mount(this.root, el('div', 'actions'));

    this.winchBtn = control(
      mount(actions, el('button', 'action-btn action-btn--winch', `<span class="glyph">⇩</span><span data-i18n="hud.winchBtn">${t('hud.winchBtn')}</span>`)),
    ) as HTMLButtonElement;
    this.disposers.push(onTap(this.winchBtn, () => this.input.pressWinch()));

    this.foamBtn = control(
      mount(actions, el('button', 'action-btn action-btn--foam', `<span class="glyph">≈</span><span data-i18n="hud.foamBtn">${t('hud.foamBtn')}</span>`)),
    ) as HTMLButtonElement;
    this.disposers.push(
      onHold(
        this.foamBtn,
        () => this.input.setFoam(true),
        () => this.input.setFoam(false),
      ),
    );

    /* --- Радио, подсказки, тосты ------------------------------------ */
    // Реплика и подсказка живут в одной колонке снизу: у радио высота плавает
    // от длины текста, и при фиксированных отступах длинная реплика наезжала
    // на подсказку. column-reverse ставит радио вниз, подсказку — над ним.
    const bottomStack = mount(this.root, el('div', 'bottom-stack'));
    this.radio = mount(bottomStack, el('div', 'radio'));
    this.radio.innerHTML = `
      <div class="signal"><i></i><i></i><i></i></div>
      <div class="who"></div>
      <div class="line"></div>`;
    this.radioWho = this.radio.querySelector('.who')!;
    this.radioLine = this.radio.querySelector('.line')!;

    this.tutorial = mount(bottomStack, el('div', 'tutorial'));
    this.toasts = mount(this.root, el('div', 'toasts'));

    /* --- Предупреждение о границе зоны ------------------------------ */
    this.geofence = mount(this.root, el('div', 'geofence'));
    this.geofence.innerHTML = `
      <div class="geofence__frame"></div>
      <div class="geofence__label">
        <span class="geofence__title"></span>
        <span class="geofence__hint"></span>
      </div>`;
    this.geofenceTitle = this.geofence.querySelector('.geofence__title')!;
    this.geofenceHint = this.geofence.querySelector('.geofence__hint')!;

    this.damageFlash = mount(parent, el('div', 'damage-flash'));
    this.thermalFrame = mount(parent, el('div', 'thermal-frame'));
  }

  /**
   * @param proximity 0 — далеко от края, 1 — уткнулся в барьер
   * @param blocked   автопилот уже заворачивает дрон назад
   */
  setGeofence(proximity: number, blocked: boolean): void {
    const on = proximity > 0.02;
    this.geofence.classList.toggle('is-on', on);
    this.geofence.classList.toggle('is-blocked', blocked);
    if (!on) return;
    this.geofence.style.setProperty('--strength', String(Math.min(1, proximity)));
    this.geofenceTitle.textContent = t('hud.geofence');
    this.geofenceHint.textContent = t('hud.geofenceHint');
  }

  setVisible(visible: boolean): void {
    this.root.hidden = !visible;
    if (!visible) {
      this.thermalFrame.classList.remove('is-on');
    }
  }

  /* ------------------------------------------------------------------ */
  /* Покадровое обновление                                               */
  /* ------------------------------------------------------------------ */

  update(dt: number, data: HudData): void {
    this.setBar(this.barBattery, this.valBattery, data.batteryRatio, `${Math.round(data.batteryRatio * 100)}%`);
    this.setBar(this.barFoam, this.valFoam, data.foamRatio, `${Math.round(data.foamRatio * 100)}%`);
    this.setBar(this.barHull, this.valHull, data.hullRatio, `${Math.round(data.hullRatio * 100)}%`);

    this.gaugeBattery.style.setProperty(
      '--fill',
      data.batteryRatio < 0.2 ? 'var(--bad)' : data.batteryRatio < 0.45 ? 'var(--warn)' : 'var(--good)',
    );
    this.gaugeBattery.classList.toggle('is-critical', data.batteryCritical);
    this.gaugeHull.style.setProperty(
      '--fill',
      data.hullRatio < 0.3 ? 'var(--bad)' : data.hullRatio < 0.6 ? 'var(--warn)' : 'var(--text-dim)',
    );

    if (data.payload > 0.5) {
      this.gaugePayload.style.display = '';
      this.setBar(this.barPayload, this.valPayload, clamp01(data.payload / 100), `${Math.round(data.payload)} ${t('hud.kg')}`);
    } else {
      this.gaugePayload.style.display = 'none';
    }

    this.altValue.textContent = data.altitude.toFixed(1);
    this.spdValue.textContent = data.speed.toFixed(1);

    // Джойстик рисуется в тех же координатах, что и пальцы.
    const j = this.input.joystick;
    this.joystick.classList.toggle('is-active', j.active);
    if (j.active) {
      this.joystick.style.transform = `translate(${j.originX}px, ${j.originY}px)`;
      this.joystickKnob.style.transform = `translate(${j.knobX - j.originX}px, ${j.knobY - j.originY}px)`;
    }

    if (this.radioTimer > 0) {
      this.radioTimer -= dt;
      if (this.radioTimer <= 0) this.radio.classList.remove('is-on');
    }
  }

  private setBar(bar: HTMLElement, label: HTMLElement, ratio: number, text: string): void {
    bar.style.transform = `scaleX(${clamp01(ratio)})`;
    label.textContent = text;
  }

  /* ------------------------------------------------------------------ */
  /* Задача и маркеры                                                    */
  /* ------------------------------------------------------------------ */

  setObjective(text: string | null, distance: number | null): void {
    if (!text) {
      this.objectiveBox.style.display = 'none';
      return;
    }
    this.objectiveBox.style.display = '';
    this.objectiveText.textContent = text;
    this.objectiveDist.textContent = distance === null ? '' : t('hud.distance', { d: Math.round(distance) });
  }

  setMarkers(markers: MarkerData[]): void {
    const seen = new Set<string>();

    for (const marker of markers) {
      seen.add(marker.id);
      let node = this.markerPool.get(marker.id);
      if (!node) {
        node = el('div', 'marker', '<div class="diamond"></div><div class="caption"></div>');
        this.markerLayer.appendChild(node);
        this.markerPool.set(marker.id, node);
      }
      node.style.transform = `translate(${marker.x}px, ${marker.y}px) translate(-50%, -50%)`;
      node.classList.toggle('is-offscreen', marker.offscreen);
      node.classList.toggle('is-goal', marker.goal);
      const caption = node.querySelector('.caption')!;
      if (caption.textContent !== marker.label) caption.textContent = marker.label;
      node.style.display = '';
    }

    for (const [id, node] of this.markerPool) {
      if (!seen.has(id)) node.style.display = 'none';
    }
  }

  /* ------------------------------------------------------------------ */
  /* Прицел, подъём, кнопки                                              */
  /* ------------------------------------------------------------------ */

  setCrosshair(visible: boolean): void {
    this.crosshair.classList.toggle('is-on', visible);
  }

  setHoist(visible: boolean, progress: number, blocked: boolean, hint: string): void {
    this.hoist.classList.toggle('is-on', visible);
    if (!visible) return;
    this.hoist.classList.toggle('is-blocked', blocked);
    this.hoistValue.style.strokeDashoffset = String(HOIST_CIRCUMFERENCE * (1 - clamp01(progress)));
    if (this.hoistHint.textContent !== hint) this.hoistHint.textContent = hint;
  }

  setButtons(opts: { foam: boolean; winch: boolean; thermal: boolean; winchArmed: boolean }): void {
    this.foamBtn.disabled = !opts.foam;
    this.winchBtn.disabled = !opts.winch;
    this.thermalBtn.disabled = !opts.thermal;
    this.winchBtn.classList.toggle('is-armed', opts.winchArmed && opts.winch);
  }

  setThermal(on: boolean): void {
    this.thermalBtn.classList.toggle('is-on', on);
    this.thermalFrame.classList.toggle('is-on', on);
  }

  setAdAvailable(available: boolean): void {
    this.adBtn.style.display = available ? '' : 'none';
    this.adBtn.disabled = !available;
  }

  setHints(opts: { joystick: boolean; climb: boolean }): void {
    this.joystickHint.classList.toggle('is-on', opts.joystick);
    this.climbUp.classList.toggle('is-hinted', opts.climb);
  }

  /* ------------------------------------------------------------------ */
  /* Сообщения                                                           */
  /* ------------------------------------------------------------------ */

  showRadio(speaker: string, line: string, duration: number): void {
    this.radioWho.textContent = speaker;
    this.radioLine.textContent = line;
    this.radio.classList.add('is-on');
    this.radioTimer = duration;
    audio.radioOpen();
  }

  hideRadio(): void {
    this.radio.classList.remove('is-on');
    this.radioTimer = 0;
  }

  showTutorial(text: string | null): void {
    if (!text) {
      this.tutorial.classList.remove('is-on');
      return;
    }
    this.tutorial.textContent = text;
    this.tutorial.classList.add('is-on');
  }

  toast(text: string, kind: 'info' | 'good' | 'bad' = 'info', duration = 2.2): void {
    const node = mount(this.toasts, el('div', `toast is-${kind}`, text));
    setTimeout(() => {
      node.style.transition = 'opacity 0.3s';
      node.style.opacity = '0';
      setTimeout(() => node.remove(), 320);
    }, duration * 1000);
  }

  flashDamage(): void {
    this.damageFlash.classList.remove('is-on');
    // Перезапуск анимации: без принудительного reflow второй кадр не сработает.
    void this.damageFlash.offsetWidth;
    this.damageFlash.classList.add('is-on');
  }

  clearMessages(): void {
    this.hideRadio();
    this.showTutorial(null);
    this.toasts.innerHTML = '';
    this.setGeofence(0, false);
  }

  dispose(): void {
    this.disposers.forEach((fn) => fn());
    this.root.remove();
    this.damageFlash.remove();
    this.thermalFrame.remove();
  }
}
