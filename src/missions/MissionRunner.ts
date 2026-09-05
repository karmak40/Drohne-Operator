import { bus } from '@/core/EventBus';
import { t, type StringKey } from '@/i18n';
import { audio } from '@/audio/AudioEngine';
import type { MissionContext, MissionDef } from './MissionTypes';

interface RadioLine {
  speaker: StringKey;
  line: StringKey;
  delay: number;
  hold: number;
}

/** Длительность реплики по числу слов — короткие фразы не висят на экране лишнее. */
function estimateDuration(text: string): number {
  return Math.min(11, 1.9 + text.split(/\s+/).length * 0.26);
}

/**
 * Проигрыватель сценария: ведёт фазы, очередь радиопереговоров и чекпойнты.
 * Сама миссия описывается декларативно (см. Mission01), поэтому уровни 2+
 * добавляются без правок этого файла.
 */
export class MissionRunner {
  private phaseIndex = -1;
  private queue: RadioLine[] = [];
  private currentDelay = 0;
  private currentHold = 0;
  private speaking = false;
  private lastCheckpointIndex = 0;

  elapsed = 0;
  finished = false;

  constructor(
    private readonly def: MissionDef,
    private readonly ctx: MissionContext,
  ) {
    ctx.say = (speaker, line, options) => this.say(speaker, line, options);
    ctx.clearRadio = () => this.clearRadio();
  }

  get currentPhase(): number {
    return this.phaseIndex;
  }

  get phaseId(): string {
    return this.def.phases[this.phaseIndex]?.id ?? '';
  }

  get totalPhases(): number {
    return this.def.phases.length;
  }

  start(fromPhase = 0): void {
    this.elapsed = 0;
    this.finished = false;
    this.queue = [];
    this.speaking = false;
    this.currentDelay = 0;
    this.currentHold = 0;
    this.phaseIndex = -1;
    this.enterPhase(fromPhase);
  }

  /** Возврат к последнему пройденному чекпойнту после провала. */
  restart(): void {
    this.queue = [];
    this.speaking = false;
    this.currentDelay = 0;
    this.currentHold = 0;
    this.finished = false;
    const index = this.lastCheckpointIndex;
    this.phaseIndex = -1;
    this.enterPhase(index, true);
  }

  get checkpointIndex(): number {
    return this.lastCheckpointIndex;
  }

  private enterPhase(index: number, restoring = false): void {
    if (index >= this.def.phases.length) {
      this.finished = true;
      return;
    }

    this.phaseIndex = index;
    this.lastCheckpointIndex = index;

    const phase = this.def.phases[index];

    // При откате сначала восстанавливаем мир, потом ставим борт на чекпойнт.
    if (restoring) {
      for (let i = 0; i <= index; i++) {
        this.def.phases[i].restore?.(this.ctx);
      }
      const cp = this.def.checkpointFor(index, this.ctx.level);
      this.ctx.flight.reset(cp.position, cp.yaw);
      this.ctx.flight.landed = index === 0;
      this.ctx.drone.root.position.copy(cp.position);
    }

    phase.enter?.(this.ctx);
    this.ctx.hud.setObjective(t(phase.objective), null);
    bus.emit('mission:phase', { index, id: phase.id });
  }

  update(dt: number): void {
    if (this.finished) return;

    this.elapsed += dt;
    this.ctx.elapsed = this.elapsed;

    this.updateRadio(dt);

    const phase = this.def.phases[this.phaseIndex];
    if (!phase) return;

    phase.update?.(this.ctx, dt);

    // Подсказка управления обновляется каждый кадр: она зависит от устройства.
    const hint = phase.tutorial?.(this.ctx);
    this.ctx.hud.showTutorial(hint ? t(hint) : null);

    // Дистанция до маркера фазы.
    if (phase.marker) {
      const target = this.ctx.level.markers[phase.marker];
      if (target) {
        this.ctx.hud.setObjective(t(phase.objective), target.distanceTo(this.ctx.flight.position));
      }
    }

    if (phase.done(this.ctx)) {
      this.enterPhase(this.phaseIndex + 1);
    }
  }

  /* ---------------------------------------------------------------- */
  /* Радио                                                             */
  /* ---------------------------------------------------------------- */

  say(speaker: StringKey, line: StringKey, options: { delay?: number; hold?: number } = {}): void {
    this.queue.push({
      speaker,
      line,
      delay: options.delay ?? 0,
      hold: options.hold ?? 0,
    });
  }

  clearRadio(): void {
    this.queue = [];
    this.speaking = false;
    this.currentDelay = 0;
    this.currentHold = 0;
    this.ctx.hud.hideRadio();
  }

  private updateRadio(dt: number): void {
    if (this.speaking) {
      this.currentHold -= dt;
      if (this.currentHold <= 0) {
        this.speaking = false;
        audio.radioClose();
        this.ctx.hud.hideRadio();
        // Небольшая пауза между репликами — иначе разговор звучит как поток.
        this.currentDelay = 0.35;
      }
      return;
    }

    if (this.currentDelay > 0) {
      this.currentDelay -= dt;
      return;
    }

    const next = this.queue.shift();
    if (!next) return;

    if (next.delay > 0) {
      this.currentDelay = next.delay;
      next.delay = 0;
      this.queue.unshift(next);
      return;
    }

    const text = t(next.line);
    const hold = next.hold > 0 ? next.hold : estimateDuration(text);
    this.ctx.hud.showRadio(t(next.speaker), text, hold + 0.4);
    this.speaking = true;
    this.currentHold = hold;
    bus.emit('radio:line', { speaker: next.speaker, key: next.line, duration: hold });
  }
}
