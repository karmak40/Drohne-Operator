export const clamp = (v: number, lo: number, hi: number): number => (v < lo ? lo : v > hi ? hi : v);

export const clamp01 = (v: number): number => clamp(v, 0, 1);

export const lerp = (a: number, b: number, t: number): number => a + (b - a) * t;

export const invLerp = (a: number, b: number, v: number): number => (b === a ? 0 : clamp01((v - a) / (b - a)));

export const smoothstep = (t: number): number => {
  const x = clamp01(t);
  return x * x * (3 - 2 * x);
};

/**
 * Кадронезависимое экспоненциальное сглаживание.
 * response — «сколько раз в секунду значение почти догоняет цель».
 */
export const damp = (current: number, target: number, response: number, dt: number): number =>
  lerp(current, target, 1 - Math.exp(-response * dt));

export const dampAngle = (current: number, target: number, response: number, dt: number): number => {
  let delta = shortestAngle(current, target);
  delta *= 1 - Math.exp(-response * dt);
  return current + delta;
};

/** Кратчайшая разница между углами в диапазоне [-PI, PI]. */
export const shortestAngle = (from: number, to: number): number => {
  let d = (to - from) % (Math.PI * 2);
  if (d > Math.PI) d -= Math.PI * 2;
  if (d < -Math.PI) d += Math.PI * 2;
  return d;
};

export const randRange = (min: number, max: number): number => min + Math.random() * (max - min);

export const randSign = (): number => (Math.random() < 0.5 ? -1 : 1);

/** Детерминированный шум по одному аргументу — для порывов ветра и мерцания огня. */
export const noise1 = (x: number): number =>
  Math.sin(x * 1.0) * 0.5 + Math.sin(x * 2.37 + 1.7) * 0.3 + Math.sin(x * 5.11 + 4.2) * 0.2;

export const formatTime = (seconds: number): string => {
  const s = Math.max(0, Math.floor(seconds));
  return `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;
};
