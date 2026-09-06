import { clamp01, lerp } from '@/core/MathUtil';

/** Страховка от NaN/Infinity: WebAudio на таком значении бросает исключение. */
const finite = (v: number, fallback: number): number => (Number.isFinite(v) ? v : fallback);

/**
 * Весь звук синтезируется на WebAudio — ни одного аудиофайла.
 *
 * Гул винтов собирается из гармоник частоты прохода лопастей: она растёт с
 * тягой, а лёгкая расстройка между «моторами» даёт характерное биение.
 * Остальное — фильтрованный шум с разными огибающими.
 */
export class AudioEngine {
  private ctx?: AudioContext;
  private master?: GainNode;
  private compressor?: DynamicsCompressorNode;

  private noiseBuffer?: AudioBuffer;

  private rotorOscs: OscillatorNode[] = [];
  private rotorGain?: GainNode;
  private rotorFilter?: BiquadFilterNode;
  private rotorNoiseGain?: GainNode;
  private rotorBeat?: OscillatorNode;

  private windGain?: GainNode;
  private windFilter?: BiquadFilterNode;

  private fireGain?: GainNode;
  private fireFilter?: BiquadFilterNode;
  private crackleTimer = 0;

  private foamGain?: GainNode;

  private alarmTimer = 0;

  private started = false;
  private muted = false;
  private volume = 0.8;

  private currentRotorFreq = 60;

  get isReady(): boolean {
    return this.started;
  }

  /** Должно вызываться из обработчика жеста пользователя. */
  async start(): Promise<void> {
    if (this.started) {
      await this.ctx?.resume().catch(() => undefined);
      return;
    }

    const Ctor = window.AudioContext ?? (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!Ctor) return;

    const ctx = new Ctor();
    this.ctx = ctx;

    // Граф собирается синхронно, до resume(): узлы прекрасно создаются и в
    // suspended-контексте. Раньше здесь стоял await, и между «ctx уже есть» и
    // «граф ещё не построен» любой звук падал на connect(undefined) — а звук
    // зовётся прямо из игрового цикла, так что падал весь кадр.
    this.compressor = ctx.createDynamicsCompressor();
    this.compressor.threshold.value = -18;
    this.compressor.knee.value = 22;
    this.compressor.ratio.value = 8;
    this.compressor.attack.value = 0.004;
    this.compressor.release.value = 0.2;

    this.master = ctx.createGain();
    this.master.gain.value = this.muted ? 0 : this.volume;

    this.compressor.connect(this.master);
    this.master.connect(ctx.destination);

    this.buildNoiseBuffer();
    this.buildRotors();
    this.buildWind();
    this.buildFire();
    this.buildFoam();

    this.started = true;

    // Если политика автовоспроизведения отклонит resume, движок останется
    // рабочей беззвучной заглушкой: игра не должна падать из-за звука.
    await ctx.resume().catch(() => undefined);
  }

  setVolume(v: number): void {
    this.volume = clamp01(v);
    if (this.master) this.master.gain.value = this.muted ? 0 : this.volume;
  }

  setMuted(muted: boolean): void {
    this.muted = muted;
    if (this.master) this.master.gain.value = muted ? 0 : this.volume;
  }

  get isMuted(): boolean {
    return this.muted;
  }

  suspend(): void {
    void this.ctx?.suspend();
  }

  resume(): void {
    void this.ctx?.resume();
  }

  /* ---------------------------------------------------------------- */
  /* Постоянные источники                                              */
  /* ---------------------------------------------------------------- */

  private buildNoiseBuffer(): void {
    const ctx = this.ctx!;
    const length = ctx.sampleRate * 2;
    const buffer = ctx.createBuffer(1, length, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    // Слегка «розовый» шум: белый через однополюсный фильтр — звучит теплее.
    let last = 0;
    for (let i = 0; i < length; i++) {
      const white = Math.random() * 2 - 1;
      last = (last + 0.02 * white) / 1.02;
      data[i] = last * 3.5;
    }
    this.noiseBuffer = buffer;
  }

  private makeNoiseSource(): AudioBufferSourceNode {
    const src = this.ctx!.createBufferSource();
    src.buffer = this.noiseBuffer!;
    src.loop = true;
    src.start();
    return src;
  }

  private buildRotors(): void {
    const ctx = this.ctx!;

    this.rotorGain = ctx.createGain();
    this.rotorGain.gain.value = 0;

    this.rotorFilter = ctx.createBiquadFilter();
    this.rotorFilter.type = 'lowpass';
    this.rotorFilter.frequency.value = 900;
    this.rotorFilter.Q.value = 0.8;

    this.rotorGain.connect(this.rotorFilter);
    this.rotorFilter.connect(this.compressor!);

    // Гармоники частоты прохода лопастей; расстройка даёт «живой» хор моторов.
    const harmonics = [
      { mult: 1, gain: 0.5, detune: -7, type: 'sawtooth' as OscillatorType },
      { mult: 2.01, gain: 0.3, detune: 5, type: 'square' as OscillatorType },
      { mult: 3.02, gain: 0.16, detune: -11, type: 'sawtooth' as OscillatorType },
      { mult: 4.98, gain: 0.08, detune: 9, type: 'sawtooth' as OscillatorType },
    ];

    for (const h of harmonics) {
      const osc = ctx.createOscillator();
      osc.type = h.type;
      osc.frequency.value = this.currentRotorFreq * h.mult;
      osc.detune.value = h.detune;
      const gain = ctx.createGain();
      gain.gain.value = h.gain;
      osc.connect(gain);
      gain.connect(this.rotorGain);
      osc.start();
      this.rotorOscs.push(osc);
      (osc as OscillatorNode & { _mult?: number })._mult = h.mult;
    }

    // Медленное биение — как будто моторы чуть рассинхронизированы.
    this.rotorBeat = ctx.createOscillator();
    this.rotorBeat.frequency.value = 3.2;
    const beatGain = ctx.createGain();
    beatGain.gain.value = 0.09;
    this.rotorBeat.connect(beatGain);
    beatGain.connect(this.rotorGain.gain);
    this.rotorBeat.start();

    // Шумовая составляющая — воздух, рассекаемый лопастями.
    const noise = this.makeNoiseSource();
    const noiseFilter = ctx.createBiquadFilter();
    noiseFilter.type = 'bandpass';
    noiseFilter.frequency.value = 1600;
    noiseFilter.Q.value = 0.7;
    this.rotorNoiseGain = ctx.createGain();
    this.rotorNoiseGain.gain.value = 0;
    noise.connect(noiseFilter);
    noiseFilter.connect(this.rotorNoiseGain);
    this.rotorNoiseGain.connect(this.compressor!);
  }

  private buildWind(): void {
    const ctx = this.ctx!;
    const noise = this.makeNoiseSource();
    this.windFilter = ctx.createBiquadFilter();
    this.windFilter.type = 'bandpass';
    this.windFilter.frequency.value = 480;
    this.windFilter.Q.value = 0.5;
    this.windGain = ctx.createGain();
    this.windGain.gain.value = 0;
    noise.connect(this.windFilter);
    this.windFilter.connect(this.windGain);
    this.windGain.connect(this.compressor!);
  }

  private buildFire(): void {
    const ctx = this.ctx!;
    const noise = this.makeNoiseSource();
    this.fireFilter = ctx.createBiquadFilter();
    this.fireFilter.type = 'lowpass';
    this.fireFilter.frequency.value = 700;
    this.fireFilter.Q.value = 1.1;
    this.fireGain = ctx.createGain();
    this.fireGain.gain.value = 0;
    noise.connect(this.fireFilter);
    this.fireFilter.connect(this.fireGain);
    this.fireGain.connect(this.compressor!);
  }

  private buildFoam(): void {
    const ctx = this.ctx!;
    const noise = this.makeNoiseSource();
    const filter = ctx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.value = 2400;
    const shaper = ctx.createBiquadFilter();
    shaper.type = 'peaking';
    shaper.frequency.value = 5200;
    shaper.gain.value = 8;
    this.foamGain = ctx.createGain();
    this.foamGain.gain.value = 0;
    noise.connect(filter);
    filter.connect(shaper);
    shaper.connect(this.foamGain);
    this.foamGain.connect(this.compressor!);
  }

  /* ---------------------------------------------------------------- */
  /* Покадровое обновление                                             */
  /* ---------------------------------------------------------------- */

  update(
    dt: number,
    params: {
      throttle: number;
      airborne: boolean;
      speed: number;
      fireProximity: number;
      foaming: boolean;
      batteryRatio: number;
    },
  ): void {
    if (!this.started || !this.ctx) return;
    const now = this.ctx.currentTime;
    const smooth = 0.08;

    // WebAudio бросает исключение на нечисловом значении, а зовут нас из
    // игрового цикла — один NaN в физике не должен уносить с собой весь кадр.
    dt = finite(dt, 1 / 60);
    const throttle = clamp01(finite(params.throttle, 0));
    const speed = finite(params.speed, 0);
    const proximity = clamp01(finite(params.fireProximity, 0));
    const batteryRatio = clamp01(finite(params.batteryRatio, 1));

    /* --- Винты --------------------------------------------------- */
    const targetFreq = params.airborne ? lerp(74, 168, throttle) : lerp(0, 58, throttle);
    this.currentRotorFreq = lerp(this.currentRotorFreq, targetFreq, Math.min(1, dt * 6));

    for (const osc of this.rotorOscs) {
      const mult = (osc as OscillatorNode & { _mult?: number })._mult ?? 1;
      osc.frequency.setTargetAtTime(Math.max(20, this.currentRotorFreq * mult), now, smooth);
    }
    const rotorLevel = params.airborne ? lerp(0.1, 0.24, throttle) : throttle * 0.08;
    this.rotorGain!.gain.setTargetAtTime(rotorLevel, now, smooth);
    this.rotorFilter!.frequency.setTargetAtTime(lerp(600, 2100, throttle), now, smooth);
    this.rotorNoiseGain!.gain.setTargetAtTime(params.airborne ? lerp(0.012, 0.05, throttle) : 0, now, smooth);
    if (this.rotorBeat) this.rotorBeat.frequency.setTargetAtTime(2.4 + throttle * 3.4, now, 0.2);

    /* --- Набегающий поток ----------------------------------------- */
    const speedRatio = clamp01(speed / 16);
    this.windGain!.gain.setTargetAtTime(speedRatio * 0.16, now, 0.12);
    this.windFilter!.frequency.setTargetAtTime(lerp(320, 1200, speedRatio), now, 0.12);

    /* --- Огонь ---------------------------------------------------- */
    const fire = proximity;
    this.fireGain!.gain.setTargetAtTime(fire * 0.3, now, 0.25);
    this.fireFilter!.frequency.setTargetAtTime(lerp(420, 1100, fire), now, 0.25);

    // Отдельные потрескивания поверх ровного гула.
    if (fire > 0.05) {
      this.crackleTimer -= dt * (0.6 + fire * 6);
      if (this.crackleTimer <= 0) {
        this.crackleTimer = 0.08 + Math.random() * 0.35;
        this.crackle(fire);
      }
    }

    /* --- Пена ----------------------------------------------------- */
    this.foamGain!.gain.setTargetAtTime(params.foaming ? 0.14 : 0, now, 0.05);

    /* --- Сигнал разряда ------------------------------------------- */
    const critical = batteryRatio > 0 && batteryRatio < 0.2;
    if (critical) {
      this.alarmTimer -= dt;
      if (this.alarmTimer <= 0) {
        this.alarmTimer = batteryRatio < 0.08 ? 0.4 : 0.95;
        this.beep(batteryRatio < 0.08 ? 1180 : 880, 0.09, 0.09);
      }
    }
  }

  /* ---------------------------------------------------------------- */
  /* Разовые звуки                                                     */
  /* ---------------------------------------------------------------- */

  private envelope(gain: GainNode, peak: number, attack: number, decay: number): void {
    const now = this.ctx!.currentTime;
    gain.gain.cancelScheduledValues(now);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.linearRampToValueAtTime(peak, now + attack);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + attack + decay);
  }

  private crackle(intensity: number): void {
    if (!this.started || !this.ctx) return;
    const src = this.ctx.createBufferSource();
    src.buffer = this.noiseBuffer!;
    src.playbackRate.value = 0.6 + Math.random() * 1.6;
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 800 + Math.random() * 2600;
    filter.Q.value = 3 + Math.random() * 6;
    const gain = this.ctx.createGain();
    src.connect(filter);
    filter.connect(gain);
    gain.connect(this.compressor!);
    this.envelope(gain, 0.06 + intensity * 0.14, 0.002, 0.06 + Math.random() * 0.1);
    src.start();
    src.stop(this.ctx.currentTime + 0.3);
  }

  beep(frequency: number, duration: number, peak = 0.12, type: OscillatorType = 'square'): void {
    if (!this.started || !this.ctx) return;
    frequency = finite(frequency, 880);
    duration = finite(duration, 0.1);
    const osc = this.ctx.createOscillator();
    osc.type = type;
    osc.frequency.value = frequency;
    const gain = this.ctx.createGain();
    osc.connect(gain);
    gain.connect(this.compressor!);
    this.envelope(gain, peak, 0.005, duration);
    osc.start();
    osc.stop(this.ctx.currentTime + duration + 0.05);
  }

  /** Удар корпуса: низкий стук плюс всплеск шума. */
  impact(strength: number): void {
    if (!this.started || !this.ctx) return;
    const s = clamp01(finite(strength, 0.3));

    const osc = this.ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(160 + s * 90, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(48, this.ctx.currentTime + 0.22);
    const oscGain = this.ctx.createGain();
    osc.connect(oscGain);
    oscGain.connect(this.compressor!);
    this.envelope(oscGain, 0.15 + s * 0.35, 0.003, 0.25);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.4);

    const noise = this.ctx.createBufferSource();
    noise.buffer = this.noiseBuffer!;
    noise.playbackRate.value = 1.4;
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 2200;
    filter.Q.value = 1.2;
    const noiseGain = this.ctx.createGain();
    noise.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(this.compressor!);
    this.envelope(noiseGain, 0.1 + s * 0.25, 0.002, 0.13);
    noise.start();
    noise.stop(this.ctx.currentTime + 0.3);
  }

  /** Обрушение: длинный низкочастотный рокот с треском. */
  collapse(): void {
    if (!this.started || !this.ctx) return;
    const noise = this.ctx.createBufferSource();
    noise.buffer = this.noiseBuffer!;
    noise.playbackRate.value = 0.35;
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1200, this.ctx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(140, this.ctx.currentTime + 1.6);
    const gain = this.ctx.createGain();
    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.compressor!);

    const now = this.ctx.currentTime;
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.linearRampToValueAtTime(0.5, now + 0.06);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.0);
    noise.start();
    noise.stop(now + 2.2);

    const sub = this.ctx.createOscillator();
    sub.type = 'sine';
    sub.frequency.setValueAtTime(70, now);
    sub.frequency.exponentialRampToValueAtTime(28, now + 1.4);
    const subGain = this.ctx.createGain();
    sub.connect(subGain);
    subGain.connect(this.compressor!);
    this.envelope(subGain, 0.42, 0.02, 1.5);
    sub.start();
    sub.stop(now + 1.8);
  }

  /** Щелчок тангенты рации перед репликой. */
  radioOpen(): void {
    if (!this.started || !this.ctx) return;
    this.staticBurst(0.09, 0.1);
    this.beep(1500, 0.04, 0.05, 'sine');
  }

  radioClose(): void {
    if (!this.started || !this.ctx) return;
    this.staticBurst(0.06, 0.07);
  }

  private staticBurst(duration: number, peak: number): void {
    const noise = this.ctx!.createBufferSource();
    noise.buffer = this.noiseBuffer!;
    noise.playbackRate.value = 2.4;
    const filter = this.ctx!.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 2600;
    filter.Q.value = 1.6;
    const gain = this.ctx!.createGain();
    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.compressor!);
    this.envelope(gain, peak, 0.004, duration);
    noise.start();
    noise.stop(this.ctx!.currentTime + duration + 0.1);
  }

  /**
   * Процедурная «речь» рации: слоговые импульсы вместо слов.
   *
   * Работает откатом, когда у устройства нет синтезатора для текущего языка.
   * Слоги нарезаются по самому тексту, поэтому длинная реплика бормочет
   * дольше короткой, а на запятых и точках возникают паузы — на слух это
   * читается как фраза, а не как ровная очередь писков.
   *
   * @returns функция отмены — оборвать бормотание, если реплику сняли
   */
  babble(text: string, pitch = 1): () => void {
    if (!this.started || !this.ctx) return () => {};

    const words = text.split(/\s+/).filter(Boolean);
    const base = 196 * pitch;
    const timers: number[] = [];
    let cursor = 0;

    for (const word of words) {
      // Слог ≈ три буквы; знаки препинания в счёт не идут.
      const letters = word.replace(/[^\p{L}]/gu, '').length;
      const syllables = Math.max(1, Math.round(letters / 3));

      for (let i = 0; i < syllables; i++) {
        // Интонация: лёгкий подъём внутри слова плюс случайный разброс.
        const step = syllables > 1 ? i / (syllables - 1) : 0.5;
        const freq = base * (0.88 + step * 0.24) * (0.94 + Math.random() * 0.12);
        timers.push(window.setTimeout(() => this.syllable(freq, 0.085), Math.round(cursor * 1000)));
        cursor += 0.105 + Math.random() * 0.03;
      }
      cursor += /[,.;:!?—]$/.test(word) ? 0.26 : 0.07;
    }

    return () => {
      for (const id of timers) clearTimeout(id);
    };
  }

  /** Один слог: узкополосный тон с быстрой огибающей — «голос» в динамике рации. */
  private syllable(frequency: number, duration: number): void {
    if (!this.started || !this.ctx) return;
    const now = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    osc.type = 'square';
    osc.frequency.setValueAtTime(finite(frequency, 200), now);
    // Спад к концу слога — иначе звучит как сигнал, а не как речь.
    osc.frequency.linearRampToValueAtTime(finite(frequency * 0.93, 190), now + duration);

    // Полоса рации: всё за её пределами режется, как в настоящем эфире.
    const band = this.ctx.createBiquadFilter();
    band.type = 'bandpass';
    band.frequency.value = 1500;
    band.Q.value = 0.9;

    const gain = this.ctx.createGain();
    osc.connect(band);
    band.connect(gain);
    gain.connect(this.compressor!);

    this.envelope(gain, 0.055, 0.008, duration);
    osc.start(now);
    osc.stop(now + duration + 0.06);
  }

  /** Сервопривод лебёдки. */
  winch(down: boolean): void {
    if (!this.started || !this.ctx) return;
    const osc = this.ctx.createOscillator();
    osc.type = 'sawtooth';
    const now = this.ctx.currentTime;
    osc.frequency.setValueAtTime(down ? 320 : 210, now);
    osc.frequency.linearRampToValueAtTime(down ? 210 : 340, now + 0.45);
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 900;
    filter.Q.value = 5;
    const gain = this.ctx.createGain();
    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.compressor!);
    this.envelope(gain, 0.09, 0.03, 0.45);
    osc.start();
    osc.stop(now + 0.6);
  }

  /** Короткая мелодия успеха. */
  chime(success = true): void {
    if (!this.started || !this.ctx) return;
    const notes = success ? [523.25, 659.25, 783.99, 1046.5] : [392, 329.63, 261.63];
    notes.forEach((freq, i) => {
      setTimeout(() => this.beep(freq, 0.32, 0.11, 'triangle'), i * 110);
    });
  }

  click(): void {
    this.beep(1800, 0.03, 0.05, 'square');
  }

  /** Переключение тепловизора: щелчок реле плюс подъём несущей. */
  thermalToggle(on: boolean): void {
    if (!this.started || !this.ctx) return;
    this.click();
    const osc = this.ctx.createOscillator();
    osc.type = 'sine';
    const now = this.ctx.currentTime;
    osc.frequency.setValueAtTime(on ? 320 : 900, now);
    osc.frequency.exponentialRampToValueAtTime(on ? 900 : 320, now + 0.18);
    const gain = this.ctx.createGain();
    osc.connect(gain);
    gain.connect(this.compressor!);
    this.envelope(gain, 0.07, 0.01, 0.2);
    osc.start();
    osc.stop(now + 0.3);
  }

  dispose(): void {
    this.rotorOscs.forEach((o) => o.stop());
    this.rotorBeat?.stop();
    void this.ctx?.close();
    this.started = false;
  }
}

export const audio = new AudioEngine();
