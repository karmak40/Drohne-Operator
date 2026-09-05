import { control, el, mount, onTap } from './dom';
import { applyTranslations, getLocale, LOCALE_NAMES, setLocale, t, type LocaleCode } from '@/i18n';
import { save } from '@/core/Save';
import { audio } from '@/audio/AudioEngine';
import { formatTime } from '@/core/MathUtil';
import { cfg } from '@/core/Config';
import type { MissionResultData } from '@/core/EventBus';

export interface ScreenCallbacks {
  onStartMission: () => void;
  onOpenBriefing: () => void;
  onBackToMenu: () => void;
  onResume: () => void;
  onRestart: () => void;
  onToggleDebug: () => void;
  onDoubleReward: () => void;
}

/**
 * Экраны вне полёта: меню, брифинг, пауза, итоги.
 * Все они — обычные DOM-панели поверх канваса, поэтому переключаются мгновенно.
 */
export class Screens {
  private menu: HTMLElement;
  private briefing: HTMLElement;
  private pause: HTMLElement;
  private result: HTMLElement;

  private menuBalance: HTMLElement;
  private menuReputation: HTMLElement;
  private langButtons: HTMLButtonElement[] = [];

  private resultTitle: HTMLElement;
  private resultStats: HTMLElement;
  private resultReward: HTMLElement;
  private resultAmount: HTMLElement;
  private resultNote: HTMLElement;
  private resultUnlock: HTMLElement;
  private doubleBtn: HTMLButtonElement;
  private continueBtn: HTMLButtonElement;
  private retryBtn: HTMLButtonElement;

  constructor(parent: HTMLElement, private readonly cb: ScreenCallbacks) {
    /* ---------------------------------------------------------------- */
    /* Главное меню                                                      */
    /* ---------------------------------------------------------------- */
    this.menu = mount(parent, el('div', 'screen'));
    const menuPanel = mount(this.menu, el('div', 'panel'));

    const title = mount(menuPanel, el('h1', 'title'));
    title.dataset.i18n = 'game.title';
    const subtitle = mount(menuPanel, el('div', 'subtitle'));
    subtitle.dataset.i18n = 'game.subtitle';

    mount(menuPanel, el('div', 'rule'));

    const stats = mount(menuPanel, el('div', 'row'));
    this.menuBalance = mount(stats, el('div', 'eyebrow'));
    this.menuReputation = mount(stats, el('div', 'eyebrow'));

    const menuActions = mount(menuPanel, el('div', 'row'));
    menuActions.style.marginTop = '20px';

    const playBtn = control(mount(menuActions, el('button', 'btn btn--primary'))) as HTMLButtonElement;
    playBtn.dataset.i18n = 'menu.play';
    onTap(playBtn, () => {
      void audio.start().then(() => audio.click());
      this.cb.onOpenBriefing();
    });

    const resetBtn = control(mount(menuActions, el('button', 'btn btn--ghost'))) as HTMLButtonElement;
    resetBtn.dataset.i18n = 'menu.reset';
    onTap(resetBtn, () => {
      if (confirm(t('menu.resetConfirm'))) {
        save.reset();
        this.refreshMenu();
      }
    });

    mount(menuActions, el('div', 'spacer'));
    menuActions.appendChild(this.buildLanguageSwitch());

    const credits = mount(menuPanel, el('div', 'eyebrow'));
    credits.style.marginTop = '22px';
    credits.dataset.i18n = 'menu.credits';

    /* ---------------------------------------------------------------- */
    /* Брифинг                                                           */
    /* ---------------------------------------------------------------- */
    this.briefing = mount(parent, el('div', 'screen'));
    this.briefing.hidden = true;
    const brPanel = mount(this.briefing, el('div', 'panel'));

    const brEyebrow = mount(brPanel, el('div', 'eyebrow'));
    brEyebrow.dataset.i18n = 'brief.location';
    const brTitle = mount(brPanel, el('h2', 'title'));
    brTitle.style.fontSize = 'clamp(20px, 3.4vw, 30px)';
    brTitle.dataset.i18n = 'brief.title';

    const brText = mount(brPanel, el('p', 'body-text'));
    brText.dataset.i18n = 'brief.summary';

    mount(brPanel, el('div', 'rule'));

    const brDrone = mount(brPanel, el('div', 'eyebrow'));
    brDrone.dataset.i18n = 'brief.drone';

    const loadout = mount(brPanel, el('div', 'loadout'));
    const card = (key: string, value: string): void => {
      const box = mount(loadout, el('div', 'loadout-card'));
      const name = mount(box, el('div', 'name'));
      name.dataset.i18n = key;
      mount(box, el('div', 'value', value));
    };
    card('brief.battery', `${Math.round(cfg.battery.capacity)} Wh`);
    card('brief.foam', `${Math.round(cfg.foam.tank)} L`);
    card('brief.winch', `${Math.round(cfg.mass.maxTakeoff - cfg.mass.empty)} kg`);

    const brActions = mount(brPanel, el('div', 'row row--end'));
    brActions.style.marginTop = '22px';
    const backBtn = control(mount(brActions, el('button', 'btn btn--ghost'))) as HTMLButtonElement;
    backBtn.dataset.i18n = 'brief.back';
    onTap(backBtn, () => {
      audio.click();
      this.cb.onBackToMenu();
    });
    const launchBtn = control(mount(brActions, el('button', 'btn btn--primary'))) as HTMLButtonElement;
    launchBtn.dataset.i18n = 'brief.start';
    onTap(launchBtn, () => {
      void audio.start().then(() => audio.click());
      this.cb.onStartMission();
    });

    /* ---------------------------------------------------------------- */
    /* Пауза                                                             */
    /* ---------------------------------------------------------------- */
    this.pause = mount(parent, el('div', 'screen'));
    this.pause.hidden = true;
    const pausePanel = mount(this.pause, el('div', 'panel'));
    pausePanel.style.maxWidth = '380px';
    const pauseTitle = mount(pausePanel, el('h2', 'title'));
    pauseTitle.style.fontSize = '26px';
    pauseTitle.dataset.i18n = 'pause.title';
    mount(pausePanel, el('div', 'rule'));

    const pauseActions = mount(pausePanel, el('div', 'row'));
    pauseActions.style.flexDirection = 'column';
    pauseActions.style.alignItems = 'stretch';

    const mkPauseBtn = (key: string, cls: string, handler: () => void): void => {
      const btn = control(mount(pauseActions, el('button', `btn ${cls}`))) as HTMLButtonElement;
      btn.dataset.i18n = key;
      onTap(btn, () => {
        audio.click();
        handler();
      });
    };
    mkPauseBtn('pause.resume', 'btn--primary', () => this.cb.onResume());
    mkPauseBtn('pause.restart', '', () => this.cb.onRestart());
    mkPauseBtn('pause.debug', 'btn--ghost', () => this.cb.onToggleDebug());
    mkPauseBtn('pause.quit', 'btn--ghost', () => this.cb.onBackToMenu());

    /* ---------------------------------------------------------------- */
    /* Итоги миссии                                                      */
    /* ---------------------------------------------------------------- */
    this.result = mount(parent, el('div', 'screen'));
    this.result.hidden = true;
    const resPanel = mount(this.result, el('div', 'panel'));

    this.resultTitle = mount(resPanel, el('h2', 'title'));
    this.resultTitle.style.fontSize = 'clamp(22px, 4vw, 34px)';
    this.resultStats = mount(resPanel, el('div', 'stats'));

    this.resultReward = mount(resPanel, el('div', 'reward'));
    this.resultAmount = mount(this.resultReward, el('div', 'amount'));
    this.resultNote = mount(this.resultReward, el('div', 'note'));

    this.resultUnlock = mount(resPanel, el('div', 'eyebrow'));
    this.resultUnlock.style.marginTop = '14px';
    this.resultUnlock.style.color = 'var(--good)';

    const resActions = mount(resPanel, el('div', 'row row--end'));
    resActions.style.marginTop = '22px';

    this.doubleBtn = control(mount(resActions, el('button', 'btn btn--ad'))) as HTMLButtonElement;
    this.doubleBtn.dataset.i18n = 'result.double';
    onTap(this.doubleBtn, () => {
      audio.click();
      this.cb.onDoubleReward();
    });

    this.retryBtn = control(mount(resActions, el('button', 'btn'))) as HTMLButtonElement;
    this.retryBtn.dataset.i18n = 'result.retry';
    onTap(this.retryBtn, () => {
      audio.click();
      this.cb.onRestart();
    });

    this.continueBtn = control(mount(resActions, el('button', 'btn btn--primary'))) as HTMLButtonElement;
    this.continueBtn.dataset.i18n = 'result.continue';
    onTap(this.continueBtn, () => {
      audio.click();
      this.cb.onBackToMenu();
    });

    /* --- Экран поворота устройства --------------------------------- */
    const gate = mount(parent, el('div', 'rotate-gate'));
    mount(gate, el('div', 'phone'));
    const gateTitle = mount(gate, el('div', 'title'));
    gateTitle.style.fontSize = '20px';
    gateTitle.dataset.i18n = 'rotate.title';
    const gateText = mount(gate, el('div', 'body-text'));
    gateText.dataset.i18n = 'rotate.text';

    applyTranslations(parent);
    this.refreshMenu();
  }

  private buildLanguageSwitch(): HTMLElement {
    const box = control(el('div', 'lang'));
    for (const code of Object.keys(LOCALE_NAMES) as LocaleCode[]) {
      const btn = mount(box, el('button', '', code.toUpperCase())) as HTMLButtonElement;
      btn.title = LOCALE_NAMES[code];
      btn.setAttribute('aria-pressed', String(getLocale() === code));
      onTap(btn, () => {
        setLocale(code);
        audio.click();
        this.langButtons.forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
        this.refreshMenu();
      });
      this.langButtons.push(btn);
    }
    return box;
  }

  refreshMenu(): void {
    const data = save.get();
    this.menuBalance.textContent = t('menu.balance', { money: data.money });
    this.menuReputation.textContent = t('menu.reputation', { rep: data.reputation });
  }

  /* ------------------------------------------------------------------ */
  /* Переключение                                                        */
  /* ------------------------------------------------------------------ */

  show(name: 'menu' | 'briefing' | 'pause' | 'result' | 'none'): void {
    this.menu.hidden = name !== 'menu';
    this.briefing.hidden = name !== 'briefing';
    this.pause.hidden = name !== 'pause';
    this.result.hidden = name !== 'result';
    if (name === 'menu') this.refreshMenu();
  }

  /* ------------------------------------------------------------------ */
  /* Итоги                                                               */
  /* ------------------------------------------------------------------ */

  showResult(data: MissionResultData, success: boolean, failReason?: string): void {
    this.resultTitle.textContent = t(success ? 'result.success' : 'result.failed');
    this.resultTitle.style.color = success ? 'var(--good)' : 'var(--bad)';

    const rows: [string, string][] = [
      [t('result.rescued'), `${data.survivorsRescued} / ${data.survivorsTotal}`],
      [t('result.fires'), `${data.firesExtinguished} / ${data.firesTotal}`],
      [t('result.damage'), `${Math.round(data.damagePercent)}%`],
      [t('result.time'), formatTime(data.timeSeconds)],
      [t('result.batteryLeft'), `${Math.round(data.batteryLeft * 100)}%`],
    ];

    this.resultStats.innerHTML = '';
    for (const [label, value] of rows) {
      const row = mount(this.resultStats, el('div'));
      mount(row, el('span', '', label));
      mount(row, el('span', '', value));
    }

    if (!success && failReason) {
      const row = mount(this.resultStats, el('div'));
      const note = mount(row, el('span', '', failReason));
      note.style.color = 'var(--bad)';
    }

    this.resultAmount.textContent = `+${data.reward} $`;
    this.resultNote.textContent = `${t('result.reward')} · ${t('result.reputation')} +${data.reputation}`;
    this.resultReward.style.display = data.reward > 0 ? '' : 'none';

    this.resultUnlock.textContent = success ? t('result.unlock') : '';
    this.doubleBtn.style.display = success && data.reward > 0 ? '' : 'none';
    this.doubleBtn.disabled = false;
    this.doubleBtn.textContent = t('result.double');
    this.retryBtn.style.display = success ? 'none' : '';
    this.continueBtn.textContent = t(success ? 'result.continue' : 'result.continue');

    this.show('result');
    audio.chime(success);
  }

  markRewardDoubled(newAmount: number): void {
    this.resultAmount.textContent = `+${newAmount} $`;
    this.doubleBtn.disabled = true;
    this.doubleBtn.textContent = t('result.doubled');
  }
}
