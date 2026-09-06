import { audio } from './AudioEngine';
import { getLocale } from '@/i18n';

/**
 * Голос радиообмена.
 *
 * Синтезатор браузера пишет звук напрямую в выход и в наш AudioContext не
 * заводится, поэтому фильтр рации на речь наложить нельзя — эфирный характер
 * дают сквелчи до и после реплики, они идут через обычный аудиотракт.
 *
 * Набор голосов — лотерея устройства: на macOS есть русская Milena, на голом
 * Windows русского может не быть вовсе, а среди англоязычных macOS-голосов
 * половина — «приколы» вроде Bells и Zarvox. Поэтому голос выбирается по
 * белому списку, а если ничего пригодного нет, включается процедурное
 * бормотание из AudioEngine: без голоса игрок не остаётся никогда.
 */

/** Женские голоса, которые реально стоит слышать в роли диспетчера. */
const PREFERRED: Record<string, string[]> = {
  ru: ['milena', 'katya', 'yandex', 'alena', 'google русский'],
  en: ['samantha', 'karen', 'moira', 'tessa', 'victoria', 'fiona', 'serena', 'allison', 'ava', 'susan', 'zoe', 'zira', 'google uk english female', 'google us english'],
  de: ['anna', 'helena', 'petra', 'katja', 'hedda', 'google deutsch'],
};

/**
 * Голоса-аттракционы из macOS: формально en-US, но диспетчер из них никакой.
 * Без этого списка «Bad News» вполне может зачитать вводную миссии.
 */
const NOVELTY = [
  'albert', 'bad news', 'bahh', 'bells', 'boing', 'bubbles', 'cellos', 'good news',
  'jester', 'organ', 'superstar', 'trinoids', 'whisper', 'wobble', 'zarvox', 'junior',
  'kathy', 'ralph', 'fred', 'grandma', 'grandpa', 'flo', 'eddy', 'rocko', 'sandy', 'shelley', 'reed',
];

export type VoiceMode = 'speech' | 'babble' | 'off';

class VoiceEngine {
  private synth?: SpeechSynthesis;
  private voices: SpeechSynthesisVoice[] = [];
  private muted = false;
  private cancelBabble: (() => void) | null = null;
  private current?: SpeechSynthesisUtterance;
  private speakingFlag = false;

  constructor() {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;
    this.synth = window.speechSynthesis;
    this.refreshVoices();
    // Список голосов в Chrome приезжает асинхронно, уже после первого вызова.
    this.synth.addEventListener?.('voiceschanged', () => this.refreshVoices());
  }

  private refreshVoices(): void {
    this.voices = this.synth?.getVoices() ?? [];
  }

  /** Голос для текущего языка или null, если пригодного нет. */
  private pickVoice(): SpeechSynthesisVoice | null {
    const locale = getLocale();
    const forLocale = this.voices.filter((v) => v.lang.toLowerCase().startsWith(locale));
    if (forLocale.length === 0) return null;

    const usable = forLocale.filter((v) => !NOVELTY.some((n) => v.name.toLowerCase().includes(n)));
    const pool = usable.length > 0 ? usable : [];
    if (pool.length === 0) return null;

    const wanted = PREFERRED[locale] ?? [];
    // Предпочитаем встроенные голоса: сетевые молчат в офлайне и лагают.
    const score = (v: SpeechSynthesisVoice): number => {
      const name = v.name.toLowerCase();
      const named = wanted.findIndex((w) => name.includes(w));
      return (named >= 0 ? 100 - named : 0) + (v.localService ? 10 : 0);
    };
    return pool.slice().sort((a, b) => score(b) - score(a))[0] ?? null;
  }

  get mode(): VoiceMode {
    if (this.muted) return 'off';
    return this.synth && this.pickVoice() ? 'speech' : 'babble';
  }

  /** Идёт ли реплика прямо сейчас — субтитр держится, пока Елена говорит. */
  get isSpeaking(): boolean {
    return this.speakingFlag;
  }

  setMuted(muted: boolean): void {
    this.muted = muted;
    if (muted) this.cancel();
  }

  /**
   * Произносит реплику. Предыдущая обрывается: две говорящие Елены
   * одновременно звучат хуже, чем оборванная фраза.
   *
   * @param pitch множитель тона для второго спикера (кладовщик ниже)
   */
  speak(text: string, pitch = 1): void {
    this.cancel();
    if (this.muted || !text) return;

    const voice = this.synth ? this.pickVoice() : null;
    if (!this.synth || !voice) {
      this.speakingFlag = true;
      const stop = audio.babble(text, pitch);
      // Длительность бормотания известна только приблизительно, поэтому
      // флаг снимаем по таймеру, оценивая её так же, как это делает субтитр.
      const ms = Math.min(11000, 1200 + text.length * 55);
      const timer = window.setTimeout(() => {
        this.speakingFlag = false;
      }, ms);
      this.cancelBabble = () => {
        stop();
        clearTimeout(timer);
        this.speakingFlag = false;
      };
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = voice;
    utterance.lang = voice.lang;
    // Диспетчер говорит собранно и чуть быстрее обычного.
    utterance.rate = 1.06;
    utterance.pitch = pitch;
    utterance.volume = 1;
    utterance.onend = () => {
      if (this.current === utterance) this.speakingFlag = false;
    };
    utterance.onerror = () => {
      if (this.current === utterance) this.speakingFlag = false;
    };

    this.current = utterance;
    this.speakingFlag = true;
    this.synth.speak(utterance);
  }

  cancel(): void {
    this.cancelBabble?.();
    this.cancelBabble = null;
    this.current = undefined;
    this.speakingFlag = false;
    try {
      this.synth?.cancel();
    } catch {
      /* Safari изредка бросает на cancel() без активной реплики. */
    }
  }
}

export const voice = new VoiceEngine();
