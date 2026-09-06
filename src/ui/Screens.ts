import { control, el, mount, onTap } from './dom';
import { applyTranslations, getLocale, LOCALE_NAMES, setLocale, t, type LocaleCode } from '@/i18n';
import { bus } from '@/core/EventBus';
import { save } from '@/core/Save';
import { haptics } from '@/core/Haptics';
import { audio } from '@/audio/AudioEngine';
import { voice } from '@/audio/Voice';
import { formatTime } from '@/core/MathUtil';
import { cfg } from '@/core/Config';
import { computeStats, effectOf, MAX_LEVEL, nextCost, UPGRADE_BRANCHES } from '@/core/Upgrades';
import type { MissionResultData } from '@/core/EventBus';

/** Пока миссия одна — идентификатор для чтения рекордов из профиля. */
const MISSION_ID = 'mission01';

export interface ScreenCallbacks {
  onStartMission: () => void;
  onOpenBriefing: () => void;
  onOpenHangar: () => void;
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
  private hangar: HTMLElement;
  private hangarGrid: HTMLElement;
  private hangarBalance: HTMLElement;
  private briefing: HTMLElement;
  private briefBattery: HTMLElement;
  private briefFoam: HTMLElement;
  private briefWinch: HTMLElement;
  private pause: HTMLElement;
  private result: HTMLElement;

  private menuBalance: HTMLElement;
  private menuReputation: HTMLElement;
  private langButtons: HTMLButtonElement[] = [];

  private resultTitle: HTMLElement;
  private resultGrade: HTMLElement;
  private resultScore: HTMLElement;
  private resultStats: HTMLElement;
  private resultReward: HTMLElement;
  private resultAmount: HTMLElement;
  private resultNote: HTMLElement;
  private resultUnlock: HTMLElement;
  private hapticsBtn?: HTMLButtonElement;
  private voiceBtn?: HTMLButtonElement;
  private voiceOn = true;
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

    const hangarBtn = control(mount(menuActions, el('button', 'btn btn--ghost'))) as HTMLButtonElement;
    hangarBtn.dataset.i18n = 'menu.hangar';
    onTap(hangarBtn, () => {
      void audio.start().then(() => audio.click());
      this.cb.onOpenHangar();
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
    /* Ангар                                                             */
    /* ---------------------------------------------------------------- */
    this.hangar = mount(parent, el('div', 'screen'));
    this.hangar.hidden = true;
    const hgPanel = mount(this.hangar, el('div', 'panel panel--wide'));

    const hgHead = mount(hgPanel, el('div', 'row'));
    const hgTitles = mount(hgHead, el('div'));
    const hgTitle = mount(hgTitles, el('h2', 'title'));
    hgTitle.style.fontSize = 'clamp(20px, 3.4vw, 30px)';
    hgTitle.dataset.i18n = 'hangar.title';
    const hgSub = mount(hgTitles, el('div', 'eyebrow'));
    hgSub.dataset.i18n = 'hangar.subtitle';
    mount(hgHead, el('div', 'spacer'));
    this.hangarBalance = mount(hgHead, el('div', 'hangar-balance'));

    mount(hgPanel, el('div', 'rule'));

    this.hangarGrid = mount(hgPanel, el('div', 'hangar-grid'));

    const hgActions = mount(hgPanel, el('div', 'row row--end'));
    hgActions.style.marginTop = '18px';
    const hgBack = control(mount(hgActions, el('button', 'btn btn--ghost'))) as HTMLButtonElement;
    hgBack.dataset.i18n = 'hangar.back';
    onTap(hgBack, () => {
      audio.click();
      this.cb.onBackToMenu();
    });
    const hgLaunch = control(mount(hgActions, el('button', 'btn btn--primary'))) as HTMLButtonElement;
    hgLaunch.dataset.i18n = 'menu.play';
    onTap(hgLaunch, () => {
      void audio.start().then(() => audio.click());
      this.cb.onOpenBriefing();
    });

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

    // Карточки снаряжения заполняются в refreshBriefing(): после ангара
    // цифры обязаны показывать реальный борт, а не базовую комплектацию.
    const loadout = mount(brPanel, el('div', 'loadout'));
    const card = (key: string): HTMLElement => {
      const box = mount(loadout, el('div', 'loadout-card'));
      const name = mount(box, el('div', 'name'));
      name.dataset.i18n = key;
      return mount(box, el('div', 'value'));
    };
    this.briefBattery = card('brief.battery');
    this.briefFoam = card('brief.foam');
    this.briefWinch = card('brief.winch');

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

    // Тумблер вибрации показываем только там, где вибромотор вообще есть.
    if (haptics.available) {
      this.hapticsBtn = control(mount(pauseActions, el('button', 'btn btn--ghost'))) as HTMLButtonElement;
      onTap(this.hapticsBtn, () => {
        haptics.setEnabled(!haptics.isEnabled);
        audio.click();
        if (haptics.isEnabled) haptics.landing();
        this.refreshHaptics();
      });
      this.refreshHaptics();
    }

    // Голос диспетчера отключаем отдельно от общего звука: синтезатор на
    // чужом устройстве может звучать так, что его захочется выключить,
    // не теряя при этом гул винтов и звук огня.
    this.voiceBtn = control(mount(pauseActions, el('button', 'btn btn--ghost'))) as HTMLButtonElement;
    onTap(this.voiceBtn, () => {
      this.voiceOn = !this.voiceOn;
      voice.setMuted(!this.voiceOn);
      audio.click();
      this.refreshVoice();
    });
    this.refreshVoice();

    mkPauseBtn('pause.debug', 'btn--ghost', () => this.cb.onToggleDebug());
    mkPauseBtn('pause.quit', 'btn--ghost', () => this.cb.onBackToMenu());

    /* ---------------------------------------------------------------- */
    /* Итоги миссии                                                      */
    /* ---------------------------------------------------------------- */
    this.result = mount(parent, el('div', 'screen'));
    this.result.hidden = true;
    const resPanel = mount(this.result, el('div', 'panel'));

    // Заголовок и ранг стоят в одной строке: буква — первое, что видит игрок.
    const resHead = mount(resPanel, el('div', 'row'));
    const resTitles = mount(resHead, el('div'));
    this.resultTitle = mount(resTitles, el('h2', 'title'));
    this.resultTitle.style.fontSize = 'clamp(22px, 4vw, 34px)';
    this.resultScore = mount(resTitles, el('div', 'eyebrow'));
    mount(resHead, el('div', 'spacer'));
    this.resultGrade = mount(resHead, el('div', 'grade'));

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

    // Тумблеры и карточки ангара пишут текст вручную, а applyTranslations
    // обновляет только узлы с data-i18n — без этой подписки они застревают
    // на языке, который был активен в момент их последней перерисовки.
    bus.on('i18n:changed', () => {
      this.refreshVoice();
      this.refreshHaptics();
      this.refreshMenu();
      if (!this.hangar.hidden) this.refreshHangar();
      if (!this.briefing.hidden) this.refreshBriefing();
    });
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

  private refreshVoice(): void {
    if (!this.voiceBtn) return;
    this.voiceBtn.textContent = `${t('pause.voice')}: ${t(this.voiceOn ? 'common.on' : 'common.off')}`;
  }

  private refreshHaptics(): void {
    if (!this.hapticsBtn) return;
    this.hapticsBtn.textContent = `${t('pause.haptics')}: ${t(haptics.isEnabled ? 'common.on' : 'common.off')}`;
  }

  refreshMenu(): void {
    const data = save.get();
    this.menuBalance.textContent = t('menu.balance', { money: data.money });
    this.menuReputation.textContent = t('menu.reputation', { rep: data.reputation });
  }

  /** Снаряжение в брифинге — с учётом установленных в ангаре модулей. */
  refreshBriefing(): void {
    const stats = computeStats(save.get().upgrades);
    this.briefBattery.textContent = `${Math.round(stats.batteryCapacity)} Wh`;
    this.briefFoam.textContent = `${Math.round(stats.foamTank)} L`;
    this.briefWinch.textContent = `${Math.round(stats.maxTakeoff - cfg.mass.empty)} kg`;
  }

  /* ------------------------------------------------------------------ */
  /* Ангар                                                               */
  /* ------------------------------------------------------------------ */

  /**
   * Перерисовывает карточки целиком. Веток четыре, перерисовка идёт только
   * по открытию экрана и после покупки, поэтому точечное обновление узлов
   * тут не окупается.
   */
  refreshHangar(): void {
    const data = save.get();
    this.hangarBalance.textContent = t('menu.balance', { money: data.money });
    this.hangarGrid.innerHTML = '';

    for (const branch of UPGRADE_BRANCHES) {
      const level = data.upgrades[branch.id];
      const cost = nextCost(branch.id, level);
      const maxed = cost === null;
      const affordable = !maxed && cost <= data.money;

      const card = mount(this.hangarGrid, el('div', 'upgrade-card'));
      if (maxed) card.classList.add('is-maxed');

      const head = mount(card, el('div', 'upgrade-card__head'));
      mount(head, el('div', 'upgrade-card__glyph', branch.glyph));
      const titles = mount(head, el('div'));
      mount(titles, el('div', 'upgrade-card__name', t(branch.nameKey)));
      mount(titles, el('div', 'upgrade-card__desc', t(branch.descKey)));

      // Полоска уровней: заполненные сегменты — уже установленные модули.
      const pips = mount(card, el('div', 'upgrade-card__pips'));
      for (let i = 0; i < MAX_LEVEL; i++) {
        const pip = mount(pips, el('i'));
        if (i < level) pip.classList.add('is-on');
      }

      const status = mount(card, el('div', 'upgrade-card__status'));
      status.textContent = level === 0 ? t('hangar.stock') : t('hangar.level', { level, max: MAX_LEVEL });

      // На базовой комплектации показываем только то, что даст первый модуль:
      // «+0% · −0% → +22% · −12%» читается как мусор.
      const gain = mount(card, el('div', 'upgrade-card__gain'));
      if (maxed) gain.textContent = effectOf(branch.id, level);
      else if (level === 0) gain.textContent = effectOf(branch.id, 1);
      else gain.textContent = `${effectOf(branch.id, level)}  →  ${effectOf(branch.id, level + 1)}`;

      const buy = control(mount(card, el('button', 'btn btn--primary upgrade-card__buy'))) as HTMLButtonElement;
      if (maxed) {
        buy.textContent = t('hangar.maxed');
        buy.disabled = true;
      } else {
        buy.textContent = `${t('hangar.buy')} · ${cost} $`;
        buy.disabled = !affordable;
        onTap(buy, () => {
          if (!save.buyUpgrade(branch.id, cost)) {
            audio.chime(false);
            return;
          }
          audio.chime(true);
          this.refreshHangar();
          this.refreshMenu();
        });
      }
    }
  }

  /* ------------------------------------------------------------------ */
  /* Переключение                                                        */
  /* ------------------------------------------------------------------ */

  show(name: 'menu' | 'hangar' | 'briefing' | 'pause' | 'result' | 'none'): void {
    this.menu.hidden = name !== 'menu';
    this.hangar.hidden = name !== 'hangar';
    this.briefing.hidden = name !== 'briefing';
    this.pause.hidden = name !== 'pause';
    this.result.hidden = name !== 'result';
    if (name === 'menu') this.refreshMenu();
    if (name === 'hangar') this.refreshHangar();
    if (name === 'briefing') this.refreshBriefing();
  }

  /* ------------------------------------------------------------------ */
  /* Итоги                                                               */
  /* ------------------------------------------------------------------ */

  showResult(data: MissionResultData, success: boolean, failReason?: string): void {
    this.resultTitle.textContent = t(success ? 'result.success' : 'result.failed');
    this.resultTitle.style.color = success ? 'var(--good)' : 'var(--bad)';

    // Ранг показываем только за успешный вылет: за провал буквы не ставят.
    this.resultGrade.textContent = success ? data.grade : '';
    this.resultGrade.dataset.grade = success ? data.grade : '';
    this.resultGrade.style.display = success ? '' : 'none';
    this.resultScore.textContent = success ? t('result.score', { score: data.score }) : '';

    const best = save.get().missions[MISSION_ID]?.bestGrade;
    if (success && best && best !== data.grade) {
      this.resultScore.textContent += ` · ${t('result.best', { grade: best })}`;
    }

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
