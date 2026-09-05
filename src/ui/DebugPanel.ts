import { control, el, mount, onTap } from './dom';
import { getTunable, resetConfig, setTunable, TUNABLES } from '@/core/Config';
import { t } from '@/i18n';

/**
 * Панель тюнинга ощущений: все коэффициенты полёта, пены, троса и камеры
 * правятся на лету, без перезапуска миссии. F9 — открыть/закрыть.
 */
export class DebugPanel {
  private root: HTMLElement;
  private fpsBox: HTMLElement;
  private sliders: { input: HTMLInputElement; label: HTMLElement; path: string }[] = [];

  private frames = 0;
  private accum = 0;
  private worst = 0;

  constructor(parent: HTMLElement) {
    this.root = control(mount(parent, el('div', 'debug')));

    const header = mount(this.root, el('div', 'row'));
    const title = mount(header, el('h3'));
    title.dataset.i18n = 'debug.title';
    title.textContent = t('debug.title');
    mount(header, el('div', 'spacer'));
    const closeBtn = mount(header, el('button', 'btn btn--ghost', '✕')) as HTMLButtonElement;
    closeBtn.style.padding = '4px 10px';
    onTap(closeBtn, () => this.toggle(false));

    this.fpsBox = mount(this.root, el('div', 'fps', 'FPS —'));

    let currentGroup = '';
    for (const tunable of TUNABLES) {
      if (tunable.group !== currentGroup) {
        currentGroup = tunable.group;
        mount(this.root, el('div', 'group-title', currentGroup));
      }

      const field = mount(this.root, el('div', 'field'));
      const label = mount(field, el('label'));
      mount(label, el('span', '', tunable.label));
      const value = mount(label, el('b'));

      const input = mount(field, el('input')) as HTMLInputElement;
      input.type = 'range';
      input.min = String(tunable.min);
      input.max = String(tunable.max);
      input.step = String(tunable.step);
      input.value = String(getTunable(tunable.path));
      value.textContent = this.format(Number(input.value));

      input.addEventListener('input', () => {
        const v = Number(input.value);
        setTunable(tunable.path, v);
        value.textContent = this.format(v);
      });

      this.sliders.push({ input, label: value, path: tunable.path });
    }

    const footer = mount(this.root, el('div', 'row'));
    footer.style.marginTop = '18px';
    const resetBtn = mount(footer, el('button', 'btn btn--ghost')) as HTMLButtonElement;
    resetBtn.dataset.i18n = 'debug.reset';
    resetBtn.textContent = t('debug.reset');
    onTap(resetBtn, () => {
      resetConfig();
      this.syncFromConfig();
    });

    const hint = mount(this.root, el('div', 'group-title'));
    hint.textContent = t('debug.hint');

    window.addEventListener('keydown', (e) => {
      if (e.code === 'F9') {
        e.preventDefault();
        this.toggle();
      }
    });
  }

  private format(v: number): string {
    if (Math.abs(v) >= 100) return v.toFixed(0);
    if (Math.abs(v) >= 1) return v.toFixed(2);
    return v.toFixed(4);
  }

  syncFromConfig(): void {
    for (const slider of this.sliders) {
      const v = getTunable(slider.path);
      slider.input.value = String(v);
      slider.label.textContent = this.format(v);
    }
  }

  toggle(force?: boolean): void {
    const open = force ?? !this.root.classList.contains('is-open');
    this.root.classList.toggle('is-open', open);
    if (open) this.syncFromConfig();
  }

  get isOpen(): boolean {
    return this.root.classList.contains('is-open');
  }

  /** Счётчик кадров: показывает среднее и худший кадр за секунду. */
  tick(dt: number): void {
    this.frames++;
    this.accum += dt;
    this.worst = Math.max(this.worst, dt);

    if (this.accum >= 0.5) {
      const fps = this.frames / this.accum;
      const worstMs = this.worst * 1000;
      this.fpsBox.textContent = `FPS ${fps.toFixed(0)}  ·  worst ${worstMs.toFixed(1)} ms`;
      this.fpsBox.style.color = fps > 50 ? 'var(--good)' : fps > 30 ? 'var(--warn)' : 'var(--bad)';
      this.frames = 0;
      this.accum = 0;
      this.worst = 0;
    }
  }
}
