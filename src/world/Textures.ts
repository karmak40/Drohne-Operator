import * as THREE from 'three';

/**
 * Все текстуры рисуются на canvas при загрузке — ни одного внешнего файла.
 * Это даёт примитивам настоящую поверхность (зерно бетона, рёбра профнастила,
 * потёки ржавчины) вместо плоской заливки.
 */

const cache = new Map<string, THREE.Texture>();
const surfaceCache = new Map<string, SurfaceTextures>();

function makeCanvas(size: number): { canvas: HTMLCanvasElement; ctx: CanvasRenderingContext2D } {
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d', { willReadFrequently: true })!;
  return { canvas, ctx };
}

/* ------------------------------------------------------------------ */
/* Шум                                                                 */
/* ------------------------------------------------------------------ */

function hash2(x: number, y: number, seed: number): number {
  let h = x * 374761393 + y * 668265263 + seed * 2246822519;
  h = (h ^ (h >>> 13)) * 1274126177;
  return ((h ^ (h >>> 16)) >>> 0) / 4294967295;
}

/** Бесшовный value-noise: решётка замыкается по модулю period. */
function valueNoise(x: number, y: number, period: number, seed: number): number {
  const xi = Math.floor(x);
  const yi = Math.floor(y);
  const xf = x - xi;
  const yf = y - yi;

  const u = xf * xf * (3 - 2 * xf);
  const v = yf * yf * (3 - 2 * yf);

  const wrap = (n: number) => ((n % period) + period) % period;
  const x0 = wrap(xi);
  const x1 = wrap(xi + 1);
  const y0 = wrap(yi);
  const y1 = wrap(yi + 1);

  const a = hash2(x0, y0, seed);
  const b = hash2(x1, y0, seed);
  const c = hash2(x0, y1, seed);
  const d = hash2(x1, y1, seed);

  return (a * (1 - u) + b * u) * (1 - v) + (c * (1 - u) + d * u) * v;
}

function fbm(x: number, y: number, octaves: number, basePeriod: number, seed: number): number {
  let sum = 0;
  let amp = 0.5;
  let total = 0;
  let freq = basePeriod;
  for (let o = 0; o < octaves; o++) {
    sum += valueNoise((x * freq) / basePeriod, (y * freq) / basePeriod, freq, seed + o * 17) * amp;
    total += amp;
    amp *= 0.5;
    freq *= 2;
  }
  return sum / total;
}

/* ------------------------------------------------------------------ */
/* Карта нормалей из яркости                                           */
/* ------------------------------------------------------------------ */

function normalFromHeight(height: Float32Array, size: number, strength: number): THREE.CanvasTexture {
  const { canvas, ctx } = makeCanvas(size);
  const img = ctx.createImageData(size, size);
  const at = (x: number, y: number) => height[((y + size) % size) * size + ((x + size) % size)];

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const dx = (at(x + 1, y) - at(x - 1, y)) * strength;
      const dy = (at(x, y + 1) - at(x, y - 1)) * strength;
      let nx = -dx;
      let ny = -dy;
      const nz = 1;
      const len = Math.hypot(nx, ny, nz);
      nx /= len;
      ny /= len;
      const i = (y * size + x) * 4;
      img.data[i] = (nx * 0.5 + 0.5) * 255;
      img.data[i + 1] = (ny * 0.5 + 0.5) * 255;
      img.data[i + 2] = (nz / len) * 255;
      img.data[i + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  return tex;
}

function finish(canvas: HTMLCanvasElement, repeat: number, srgb = true): THREE.CanvasTexture {
  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(repeat, repeat);
  tex.anisotropy = 8;
  if (srgb) tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export interface SurfaceTextures {
  map: THREE.Texture;
  normalMap: THREE.Texture;
  roughnessMap?: THREE.Texture;
}

/* ------------------------------------------------------------------ */
/* Бетон                                                               */
/* ------------------------------------------------------------------ */

export function concreteTextures(): SurfaceTextures {
  const key = 'concrete';
  if (surfaceCache.has(key)) return surfaceCache.get(key)!;

  const size = 256;
  const { canvas, ctx } = makeCanvas(size);
  const img = ctx.createImageData(size, size);
  const height = new Float32Array(size * size);

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const grain = fbm(x, y, 5, 8, 11);
      const patch = fbm(x, y, 3, 2, 42);
      let v = 0.52 + (grain - 0.5) * 0.34 + (patch - 0.5) * 0.16;

      // Редкие тёмные каверны — бетон никогда не бывает ровным.
      const pit = fbm(x, y, 2, 32, 77);
      if (pit > 0.78) v -= (pit - 0.78) * 1.6;

      v = Math.max(0.08, Math.min(1, v));
      height[y * size + x] = v;

      const i = (y * size + x) * 4;
      img.data[i] = v * 176;
      img.data[i + 1] = v * 174;
      img.data[i + 2] = v * 168;
      img.data[i + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);

  const result: SurfaceTextures = {
    map: finish(canvas, 1),
    normalMap: normalFromHeight(height, size, 2.2),
  };
  surfaceCache.set(key, result);
  return result;
}

/* ------------------------------------------------------------------ */
/* Асфальт                                                             */
/* ------------------------------------------------------------------ */

export function asphaltTextures(): SurfaceTextures {
  const key = 'asphalt';
  if (surfaceCache.has(key)) return surfaceCache.get(key)!;

  const size = 256;
  const { canvas, ctx } = makeCanvas(size);
  const img = ctx.createImageData(size, size);
  const height = new Float32Array(size * size);

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const grit = hash2(x, y, 5);
      const blotch = fbm(x, y, 4, 4, 23);
      let v = 0.3 + (blotch - 0.5) * 0.22 + (grit - 0.5) * 0.28;
      v = Math.max(0.05, Math.min(1, v));
      height[y * size + x] = v;

      const i = (y * size + x) * 4;
      img.data[i] = v * 118;
      img.data[i + 1] = v * 118;
      img.data[i + 2] = v * 124;
      img.data[i + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);

  const result: SurfaceTextures = {
    map: finish(canvas, 1),
    normalMap: normalFromHeight(height, size, 1.4),
  };
  surfaceCache.set(key, result);
  return result;
}

/* ------------------------------------------------------------------ */
/* Профнастил (стены склада)                                           */
/* ------------------------------------------------------------------ */

export function corrugatedTextures(tint: string): SurfaceTextures {
  const key = `corrugated:${tint}`;
  if (surfaceCache.has(key)) return surfaceCache.get(key)!;

  const size = 256;
  const { canvas, ctx } = makeCanvas(size);

  ctx.fillStyle = tint;
  ctx.fillRect(0, 0, size, size);

  const height = new Float32Array(size * size);
  const img = ctx.getImageData(0, 0, size, size);
  const ribPeriod = 32;

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      // Синусоидальные рёбра профлиста.
      const rib = Math.sin((x / ribPeriod) * Math.PI * 2) * 0.5 + 0.5;
      const shade = 0.72 + rib * 0.42;

      // Потёки ржавчины сверху вниз.
      const streak = fbm(x * 0.6, y * 0.12, 4, 8, 91);
      const rust = Math.max(0, streak - 0.58) * 2.1 * Math.min(1, y / size + 0.15);

      const dirt = fbm(x, y, 3, 16, 5) * 0.18;

      height[y * size + x] = rib * 0.8 + streak * 0.2;

      const i = (y * size + x) * 4;
      const r = img.data[i] * shade * (1 - dirt);
      const g = img.data[i + 1] * shade * (1 - dirt);
      const b = img.data[i + 2] * shade * (1 - dirt);

      img.data[i] = r * (1 - rust) + 138 * rust;
      img.data[i + 1] = g * (1 - rust) + 74 * rust;
      img.data[i + 2] = b * (1 - rust) + 38 * rust;
    }
  }
  ctx.putImageData(img, 0, 0);

  const result: SurfaceTextures = {
    map: finish(canvas, 1),
    normalMap: normalFromHeight(height, size, 3.4),
  };
  surfaceCache.set(key, result);
  return result;
}

/* ------------------------------------------------------------------ */
/* Ржавый металл                                                       */
/* ------------------------------------------------------------------ */

export function rustTextures(): SurfaceTextures {
  const key = 'rust';
  if (surfaceCache.has(key)) return surfaceCache.get(key)!;

  const size = 256;
  const { canvas, ctx } = makeCanvas(size);
  const img = ctx.createImageData(size, size);
  const height = new Float32Array(size * size);

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const base = fbm(x, y, 5, 6, 61);
      const spots = fbm(x, y, 4, 3, 130);
      const rust = Math.min(1, Math.max(0, (spots - 0.42) * 2.4));
      const v = 0.4 + (base - 0.5) * 0.5;
      height[y * size + x] = v * 0.6 + rust * 0.4;

      const i = (y * size + x) * 4;
      const metal = [96 * v * 1.6, 99 * v * 1.6, 106 * v * 1.6];
      const oxide = [150 * (0.6 + base * 0.7), 78 * (0.6 + base * 0.7), 34 * (0.6 + base * 0.7)];
      img.data[i] = metal[0] * (1 - rust) + oxide[0] * rust;
      img.data[i + 1] = metal[1] * (1 - rust) + oxide[1] * rust;
      img.data[i + 2] = metal[2] * (1 - rust) + oxide[2] * rust;
      img.data[i + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);

  const result: SurfaceTextures = {
    map: finish(canvas, 1),
    normalMap: normalFromHeight(height, size, 2.6),
  };
  surfaceCache.set(key, result);
  return result;
}

/* ------------------------------------------------------------------ */
/* Обугленный бетон / зола                                             */
/* ------------------------------------------------------------------ */

export function charredTextures(): SurfaceTextures {
  const key = 'charred';
  if (surfaceCache.has(key)) return surfaceCache.get(key)!;

  const size = 256;
  const { canvas, ctx } = makeCanvas(size);
  const img = ctx.createImageData(size, size);
  const height = new Float32Array(size * size);

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const crack = fbm(x, y, 5, 5, 202);
      const ash = fbm(x, y, 3, 12, 303);
      let v = 0.16 + (crack - 0.5) * 0.24 + ash * 0.12;
      v = Math.max(0.03, Math.min(1, v));
      height[y * size + x] = v;

      const glow = Math.max(0, crack - 0.72) * 2.2;
      const i = (y * size + x) * 4;
      img.data[i] = v * 90 + glow * 120;
      img.data[i + 1] = v * 84 + glow * 42;
      img.data[i + 2] = v * 80 + glow * 12;
      img.data[i + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);

  const result: SurfaceTextures = {
    map: finish(canvas, 1),
    normalMap: normalFromHeight(height, size, 2.0),
  };
  surfaceCache.set(key, result);
  return result;
}

/* ------------------------------------------------------------------ */
/* Разметка вертолётной площадки                                       */
/* ------------------------------------------------------------------ */

export function helipadTexture(): THREE.Texture {
  const key = 'helipad';
  if (cache.has(key)) return cache.get(key)!;

  const size = 512;
  const { canvas, ctx } = makeCanvas(size);

  ctx.fillStyle = '#1b1f24';
  ctx.fillRect(0, 0, size, size);

  // Лёгкое зерно, чтобы площадка не была пластиковой.
  const img = ctx.getImageData(0, 0, size, size);
  for (let i = 0; i < img.data.length; i += 4) {
    const n = (Math.random() - 0.5) * 26;
    img.data[i] += n;
    img.data[i + 1] += n;
    img.data[i + 2] += n;
  }
  ctx.putImageData(img, 0, 0);

  const c = size / 2;

  ctx.strokeStyle = '#e8f5ec';
  ctx.lineWidth = 16;
  ctx.beginPath();
  ctx.arc(c, c, size * 0.38, 0, Math.PI * 2);
  ctx.stroke();

  ctx.strokeStyle = 'rgba(120, 240, 160, 0.55)';
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.arc(c, c, size * 0.45, 0, Math.PI * 2);
  ctx.stroke();

  // Буква H
  ctx.fillStyle = '#e8f5ec';
  const barW = size * 0.075;
  const barH = size * 0.4;
  ctx.fillRect(c - size * 0.15 - barW / 2, c - barH / 2, barW, barH);
  ctx.fillRect(c + size * 0.15 - barW / 2, c - barH / 2, barW, barH);
  ctx.fillRect(c - size * 0.15, c - barW / 2, size * 0.3, barW);

  // Уголки-мишени
  ctx.strokeStyle = 'rgba(120, 240, 160, 0.9)';
  ctx.lineWidth = 8;
  const m = size * 0.06;
  const s = size * 0.1;
  for (const [px, py, sx, sy] of [
    [m, m, 1, 1],
    [size - m, m, -1, 1],
    [m, size - m, 1, -1],
    [size - m, size - m, -1, -1],
  ]) {
    ctx.beginPath();
    ctx.moveTo(px + s * sx, py);
    ctx.lineTo(px, py);
    ctx.lineTo(px, py + s * sy);
    ctx.stroke();
  }

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  cache.set(key, tex);
  return tex;
}

/* ------------------------------------------------------------------ */
/* Кирпич — старые корпуса промзоны                                    */
/* ------------------------------------------------------------------ */

export function brickTextures(tint: [number, number, number] = [148, 84, 66]): SurfaceTextures {
  const key = `brick:${tint.join(',')}`;
  if (surfaceCache.has(key)) return surfaceCache.get(key)!;

  const size = 256;
  const { canvas, ctx } = makeCanvas(size);
  const img = ctx.createImageData(size, size);
  const height = new Float32Array(size * size);

  const rows = 16;
  const rowH = size / rows;
  const brickW = size / 4;
  const mortar = 2.2;

  for (let y = 0; y < size; y++) {
    const row = Math.floor(y / rowH);
    // Каждый второй ряд смещён на полкирпича — обычная перевязка.
    const shift = (row % 2) * brickW * 0.5;
    const inRowY = y - row * rowH;

    for (let x = 0; x < size; x++) {
      const inRowX = ((x + shift) % brickW + brickW) % brickW;
      const isMortar = inRowY < mortar || inRowX < mortar;

      // Свой оттенок у каждого кирпича — иначе стена читается как обои.
      const brickId = hash2(Math.floor((x + shift) / brickW), row, 3);
      const grain = fbm(x, y, 4, 12, 61);

      let v: number;
      let r: number, g: number, b: number;
      if (isMortar) {
        v = 0.42 + grain * 0.12;
        r = g = b = 150;
      } else {
        v = 0.62 + (brickId - 0.5) * 0.3 + (grain - 0.5) * 0.26;
        r = tint[0] + (brickId - 0.5) * 46;
        g = tint[1] + (brickId - 0.5) * 30;
        b = tint[2] + (brickId - 0.5) * 26;
      }

      // Копоть снизу вверх — промзона рядом с пожаром.
      const soot = Math.max(0, fbm(x * 0.7, y * 0.3, 3, 8, 13) - 0.5) * 1.4;
      const k = Math.max(0.25, 1 - soot * 0.75);

      v = Math.max(0.06, Math.min(1, v));
      height[y * size + x] = isMortar ? v * 0.55 : v;

      const i = (y * size + x) * 4;
      img.data[i] = Math.min(255, r * v * k * 1.7);
      img.data[i + 1] = Math.min(255, g * v * k * 1.7);
      img.data[i + 2] = Math.min(255, b * v * k * 1.7);
      img.data[i + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);

  const result: SurfaceTextures = {
    map: finish(canvas, 1),
    normalMap: normalFromHeight(height, size, 3.4),
  };
  surfaceCache.set(key, result);
  return result;
}

/* ------------------------------------------------------------------ */
/* Фасад с окнами — дальняя застройка                                  */
/* ------------------------------------------------------------------ */

export interface FacadeTextures {
  map: THREE.Texture;
  /** Только светящиеся окна: идёт в emissiveMap, поэтому без sRGB. */
  emissiveMap: THREE.Texture;
}

/**
 * Фасад многоэтажки: сетка окон, часть из которых горит. Одна и та же
 * раскладка идёт в diffuse и в emissive, поэтому вечером здание читается
 * как жилой дом, а не как серый параллелепипед.
 *
 * @param lit доля горящих окон
 */
export function facadeTextures(seed: number, lit = 0.34, wallTint = 78): FacadeTextures {
  const key = `facade:${seed}:${lit}:${wallTint}`;
  if (surfaceCache.has(key)) {
    const c = surfaceCache.get(key)!;
    return { map: c.map, emissiveMap: c.normalMap };
  }

  const size = 256;
  const cols = 8;
  const rows = 8;
  const cellW = size / cols;
  const cellH = size / rows;

  const { canvas, ctx } = makeCanvas(size);
  const { canvas: emCanvas, ctx: emCtx } = makeCanvas(size);

  // Стена.
  const wallImg = ctx.createImageData(size, size);
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const grain = fbm(x, y, 4, 10, seed * 7 + 3);
      const v = 0.72 + (grain - 0.5) * 0.4;
      const i = (y * size + x) * 4;
      wallImg.data[i] = wallTint * v;
      wallImg.data[i + 1] = (wallTint - 4) * v;
      wallImg.data[i + 2] = (wallTint - 10) * v;
      wallImg.data[i + 3] = 255;
    }
  }
  ctx.putImageData(wallImg, 0, 0);

  emCtx.fillStyle = '#000';
  emCtx.fillRect(0, 0, size, size);

  const margin = Math.round(cellW * 0.22);
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const x = c * cellW + margin;
      const y = r * cellH + margin;
      const w = cellW - margin * 2;
      const h = cellH - margin * 2.4;

      const roll = hash2(c, r, seed);
      const isLit = roll < lit;

      // Тёмное стекло в диффузе.
      ctx.fillStyle = isLit ? '#ffd9a0' : '#12161d';
      ctx.fillRect(x, y, w, h);

      // Рама.
      ctx.strokeStyle = 'rgba(20,22,26,0.85)';
      ctx.lineWidth = 1.5;
      ctx.strokeRect(x, y, w, h);

      if (isLit) {
        // Тёплый свет разной силы — где-то настольная лампа, где-то потолок.
        const warm = 0.55 + hash2(c, r, seed + 91) * 0.45;
        const g = emCtx.createLinearGradient(x, y, x, y + h);
        g.addColorStop(0, `rgba(255,214,150,${warm})`);
        g.addColorStop(1, `rgba(255,176,104,${warm * 0.65})`);
        emCtx.fillStyle = g;
        emCtx.fillRect(x, y, w, h);
      }
    }
  }

  const map = finish(canvas, 1);
  const emissiveMap = new THREE.CanvasTexture(emCanvas);
  emissiveMap.wrapS = emissiveMap.wrapT = THREE.RepeatWrapping;
  emissiveMap.anisotropy = 8;

  surfaceCache.set(key, { map, normalMap: emissiveMap });
  return { map, emissiveMap };
}

/* ------------------------------------------------------------------ */
/* Мягкое радиальное пятно                                             */
/* ------------------------------------------------------------------ */

/** Пятно света под прожектором: дешевле настоящего источника на порядок. */
export function radialGlow(): THREE.Texture {
  const key = 'glow';
  if (cache.has(key)) return cache.get(key)!;

  const size = 128;
  const { canvas, ctx } = makeCanvas(size);
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0.0, 'rgba(255,255,255,1)');
  g.addColorStop(0.35, 'rgba(255,236,205,0.62)');
  g.addColorStop(0.7, 'rgba(255,214,160,0.18)');
  g.addColorStop(1.0, 'rgba(255,200,140,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  cache.set(key, tex);
  return tex;
}

/* ------------------------------------------------------------------ */
/* Сетка-рабица периметра                                              */
/* ------------------------------------------------------------------ */

/** Возвращает [цвет, альфа]: ромбическое плетение с прозрачными ячейками. */
export function chainlinkTextures(): { map: THREE.Texture; alphaMap: THREE.Texture } {
  const key = 'chainlink';
  if (surfaceCache.has(key)) {
    const c = surfaceCache.get(key)!;
    return { map: c.map, alphaMap: c.normalMap };
  }

  const size = 128;
  const { canvas, ctx } = makeCanvas(size);
  const { canvas: aCanvas, ctx: aCtx } = makeCanvas(size);

  ctx.fillStyle = '#8b8f94';
  ctx.fillRect(0, 0, size, size);
  aCtx.fillStyle = '#000';
  aCtx.fillRect(0, 0, size, size);

  // Плетение: две встречные диагонали.
  aCtx.strokeStyle = '#fff';
  aCtx.lineWidth = 2.6;
  for (let i = -size; i <= size * 2; i += size / 4) {
    aCtx.beginPath();
    aCtx.moveTo(i, 0);
    aCtx.lineTo(i + size, size);
    aCtx.stroke();
    aCtx.beginPath();
    aCtx.moveTo(i, size);
    aCtx.lineTo(i + size, 0);
    aCtx.stroke();
  }

  const map = finish(canvas, 1);
  const alphaMap = new THREE.CanvasTexture(aCanvas);
  alphaMap.wrapS = alphaMap.wrapT = THREE.RepeatWrapping;

  surfaceCache.set(key, { map, normalMap: alphaMap });
  return { map, alphaMap };
}

/* ------------------------------------------------------------------ */
/* Предупреждающая штриховка                                           */
/* ------------------------------------------------------------------ */

export function hazardTexture(): THREE.Texture {
  const key = 'hazard';
  if (cache.has(key)) return cache.get(key)!;

  const size = 128;
  const { canvas, ctx } = makeCanvas(size);
  ctx.fillStyle = '#d9b021';
  ctx.fillRect(0, 0, size, size);
  ctx.fillStyle = '#1a1a1c';
  ctx.lineWidth = 0;
  for (let i = -size; i < size * 2; i += size / 4) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i + size / 8, 0);
    ctx.lineTo(i + size / 8 + size, size);
    ctx.lineTo(i + size, size);
    ctx.closePath();
    ctx.fill();
  }
  // Потёртости
  ctx.globalAlpha = 0.22;
  ctx.fillStyle = '#6a6a60';
  for (let i = 0; i < 220; i++) {
    ctx.fillRect(Math.random() * size, Math.random() * size, Math.random() * 6, Math.random() * 2);
  }
  ctx.globalAlpha = 1;

  const tex = finish(canvas, 1);
  cache.set(key, tex);
  return tex;
}

/* ------------------------------------------------------------------ */
/* Спрайты частиц                                                      */
/* ------------------------------------------------------------------ */

/** Мягкий клуб дыма с внутренней структурой. */
export function smokeSprite(): THREE.Texture {
  const key = 'sprite:smoke';
  if (cache.has(key)) return cache.get(key)!;

  const size = 128;
  const { canvas, ctx } = makeCanvas(size);
  const img = ctx.createImageData(size, size);
  const c = size / 2;

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const d = Math.hypot(x - c, y - c) / c;
      const puff = fbm(x, y, 4, 5, 313);
      const alpha = Math.max(0, 1 - d) ** 2.1 * (0.55 + puff * 0.75);
      const i = (y * size + x) * 4;
      const v = 190 + puff * 65;
      img.data[i] = v;
      img.data[i + 1] = v;
      img.data[i + 2] = v;
      img.data[i + 3] = Math.min(255, alpha * 255);
    }
  }
  ctx.putImageData(img, 0, 0);

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  cache.set(key, tex);
  return tex;
}

/** Ядро пламени: яркий центр с рваными краями. */
export function flameSprite(): THREE.Texture {
  const key = 'sprite:flame';
  if (cache.has(key)) return cache.get(key)!;

  const size = 128;
  const { canvas, ctx } = makeCanvas(size);
  const img = ctx.createImageData(size, size);
  const c = size / 2;

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const dx = (x - c) / c;
      const dy = (y - c) / c;
      const d = Math.hypot(dx, dy * 0.78);
      const flicker = fbm(x, y, 4, 6, 777);
      const alpha = Math.max(0, 1 - d) ** 1.5 * (0.6 + flicker * 0.8);
      const core = Math.max(0, 1 - d * 2.2);

      const i = (y * size + x) * 4;
      img.data[i] = 255;
      img.data[i + 1] = 120 + core * 130;
      img.data[i + 2] = 26 + core * 170;
      img.data[i + 3] = Math.min(255, alpha * 255);
    }
  }
  ctx.putImageData(img, 0, 0);

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  cache.set(key, tex);
  return tex;
}

/** Капля пены — плотное белое ядро. */
export function foamSprite(): THREE.Texture {
  const key = 'sprite:foam';
  if (cache.has(key)) return cache.get(key)!;

  const size = 64;
  const { canvas, ctx } = makeCanvas(size);
  const c = size / 2;
  const grad = ctx.createRadialGradient(c, c, 0, c, c, c);
  grad.addColorStop(0, 'rgba(255,255,255,1)');
  grad.addColorStop(0.45, 'rgba(238,246,255,0.85)');
  grad.addColorStop(1, 'rgba(210,225,240,0)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, size, size);

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  cache.set(key, tex);
  return tex;
}

/** Искра / уголёк. */
export function emberSprite(): THREE.Texture {
  const key = 'sprite:ember';
  if (cache.has(key)) return cache.get(key)!;

  const size = 32;
  const { canvas, ctx } = makeCanvas(size);
  const c = size / 2;
  const grad = ctx.createRadialGradient(c, c, 0, c, c, c);
  grad.addColorStop(0, 'rgba(255,244,214,1)');
  grad.addColorStop(0.3, 'rgba(255,170,60,0.9)');
  grad.addColorStop(1, 'rgba(255,90,20,0)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, size, size);

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  cache.set(key, tex);
  return tex;
}

export function disposeTextures(): void {
  for (const tex of cache.values()) tex.dispose();
  for (const surface of surfaceCache.values()) {
    surface.map.dispose();
    surface.normalMap.dispose();
    surface.roughnessMap?.dispose();
  }
  cache.clear();
  surfaceCache.clear();
}
