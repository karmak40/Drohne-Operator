import * as THREE from 'three';
import type { MaterialLibrary } from './Materials';
import { makeBox, makeCylinder, mergeMeshes } from './BuildUtils';
import { smokeSprite } from './Textures';
import { HEAT } from '@/render/HeatMaterial';
import { LAYER } from '@/render/Renderer';

/**
 * Всё, что окружает площадку, но лежит за границей полёта.
 *
 * Склад стоит не в чистом поле, а в промзоне на краю города: за забором —
 * соседние корпуса, дальше жилые кварталы с горящими окнами, на горизонте
 * силуэт центра. Игрок туда не долетит, поэтому здесь нет ни одного
 * коллайдера, зато вся геометрия склеена по материалам — десяток вызовов
 * отрисовки на несколько сотен построек.
 *
 * Пояса по удалению от площадки (считается по нормали к стороне, а не по
 * радиусу: застройка идёт вдоль улиц, и в углах не остаётся пустых секторов):
 *    88..142 — промзона: ангары, склады, цистерны, грузовой двор
 *   158..218 — городская застройка: жилые и офисные корпуса
 *   232..305 — силуэт центра, почти растворённый в дымке
 *
 * Первый пояс начинается не сразу за забором: вплотную к границе высокие
 * коробки перекрывают небо и площадка превращается в колодец.
 */

/** Половина стороны зоны полёта плюс запас — ближе ничего не ставим. */
const KEEP_CLEAR = 82;

/** Шаг сетки окон на фасаде: текстура несёт 8 рядов, этаж ~3 м. */
const FLOOR_TILE = 24;

export interface Surroundings {
  group: THREE.Group;
  animate: (time: number, dt: number) => void;
  dispose: () => void;
}

/** Детерминированный генератор: район должен выглядеть одинаково между запусками. */
function rng(seed: number): () => number {
  let s = seed >>> 0;
  return () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function buildSurroundings(mat: MaterialLibrary): Surroundings {
  const group = new THREE.Group();
  group.name = 'surroundings';

  const rand = rng(20260905);
  const pick = <T,>(list: T[]): T => list[Math.floor(rand() * list.length) % list.length];
  const between = (a: number, b: number): number => a + rand() * (b - a);

  // Корзины по материалам — всё, что попало в одну, склеится в один меш.
  const buckets = new Map<string, { material: THREE.Material; meshes: THREE.Mesh[] }>();
  const add = (key: string, material: THREE.Material, mesh: THREE.Mesh): void => {
    let bucket = buckets.get(key);
    if (!bucket) {
      bucket = { material, meshes: [] };
      buckets.set(key, bucket);
    }
    bucket.meshes.push(mesh);
  };

  /**
   * Точка в квадратной рамке вокруг площадки: сторона, глубина по нормали,
   * смещение вдоль. Круговое кольцо оставляло пустые углы — по диагонали
   * до зоны дальше, чем по нормали, и застройка туда не доставала.
   */
  const bandPoint = (near: number, far: number): { x: number; z: number } => {
    const side = Math.floor(rand() * 4) % 4;
    const depth = between(Math.max(near, KEEP_CLEAR), far);
    const along = between(-far, far);
    if (side === 0) return { x: along, z: -depth };
    if (side === 1) return { x: along, z: depth };
    if (side === 2) return { x: -depth, z: along };
    return { x: depth, z: along };
  };

  const outside = (x: number, z: number, half: number): boolean =>
    Math.abs(x) - half > KEEP_CLEAR || Math.abs(z) - half > KEEP_CLEAR;

  /* ---------------------------------------------------------------- */
  /* Промзона: ангары, склады, цистерны                                */
  /* ---------------------------------------------------------------- */

  const shedMaterials: [string, THREE.Material][] = [
    ['siding', mat.siding],
    ['sidingDark', mat.sidingDark],
    ['brick', mat.brick],
    ['brickPale', mat.brickPale],
    ['slab', mat.slab],
  ];

  for (let i = 0; i < 54; i++) {
    const p = bandPoint(88, 142);
    const w = between(14, 40);
    const d = between(12, 34);
    const h = between(6, 16);
    if (!outside(p.x, p.z, Math.max(w, d) / 2)) continue;

    const [key, material] = pick(shedMaterials);
    const yaw = Math.round(rand() * 4) * (Math.PI / 2) + between(-0.12, 0.12);
    add(key, material, makeBox(w, h, d, material, p.x, h / 2, p.z, { tile: 4.5, rotY: yaw }));

    // Плоская кровля другого тона — иначе коробки сливаются в кашу.
    add('slabDark', mat.slabDark, makeBox(w + 0.6, 0.5, d + 0.6, mat.slabDark, p.x, h + 0.2, p.z, { tile: 6, rotY: yaw }));

    // Вентиляция и надстройки на крыше.
    const units = Math.floor(between(1, 4));
    for (let u = 0; u < units; u++) {
      const uw = between(1.6, 3.4);
      add(
        'rust',
        mat.rust,
        makeBox(uw, between(1.2, 2.6), uw, mat.rust, p.x + between(-w / 3, w / 3), h + 1.2, p.z + between(-d / 3, d / 3), {
          tile: 1.4,
          rotY: yaw,
        }),
      );
    }
  }

  // Резервуары и силосы.
  for (let i = 0; i < 14; i++) {
    const p = bandPoint(92, 146);
    const r = between(3.2, 7);
    const h = between(9, 22);
    if (!outside(p.x, p.z, r)) continue;
    add('rust', mat.rust, makeCylinder(r, r, h, mat.rust, p.x, h / 2, p.z, 12, { tile: 3 }));
    add('slabDark', mat.slabDark, makeCylinder(r * 1.05, r * 1.05, 0.6, mat.slabDark, p.x, h, p.z, 12));
  }

  // Штабели контейнеров вдоль восточной границы — грузовой двор.
  const containerColors = [mat.container, mat.rust, mat.sidingDark];
  for (let i = 0; i < 34; i++) {
    const x = between(88, 126) * (rand() < 0.5 ? -1 : 1);
    const z = between(-64, 34);
    const stack = Math.floor(between(1, 4));
    const yaw = rand() < 0.5 ? 0 : Math.PI / 2;
    for (let s = 0; s < stack; s++) {
      const material = pick(containerColors);
      const key = material === mat.container ? 'container' : material === mat.rust ? 'rust' : 'sidingDark';
      add(key, material, makeBox(12.2, 2.6, 2.9, material, x, 1.3 + s * 2.62, z, { tile: 2.2, rotY: yaw }));
    }
  }

  /* ---------------------------------------------------------------- */
  /* Городская застройка                                               */
  /* ---------------------------------------------------------------- */

  const facades: [string, THREE.Material][] = [
    ['facadeA', mat.facadeA],
    ['facadeB', mat.facadeB],
    ['facadeC', mat.facadeC],
  ];

  for (let i = 0; i < 64; i++) {
    const p = bandPoint(158, 218);
    const w = between(16, 34);
    const d = between(16, 30);
    const h = between(18, 52);

    const [key, material] = pick(facades);
    const yaw = Math.round(rand() * 4) * (Math.PI / 2);
    add(key, material, makeBox(w, h, d, material, p.x, h / 2, p.z, { tile: FLOOR_TILE, rotY: yaw }));
    add('slabDark', mat.slabDark, makeBox(w + 1, 0.9, d + 1, mat.slabDark, p.x, h + 0.4, p.z, { tile: 6, rotY: yaw }));

    // Лифтовые машинные отделения — ломают ровную линию крыш.
    if (rand() < 0.55) {
      const bw = between(4, 8);
      add('slab', mat.slab, makeBox(bw, between(2.4, 4.2), bw, mat.slab, p.x + between(-w / 4, w / 4), h + 2.2, p.z + between(-d / 4, d / 4), { tile: 3, rotY: yaw }));
    }
  }

  /* ---------------------------------------------------------------- */
  /* Силуэт центра                                                     */
  /* ---------------------------------------------------------------- */

  for (let i = 0; i < 62; i++) {
    const p = bandPoint(232, 305);
    const w = between(18, 40);
    const h = between(40, 96);
    // Дальние башни почти не читаются в дымке — им хватает пары тонов.
    const material = rand() < 0.45 ? mat.facadeB : mat.slabDark;
    const key = material === mat.facadeB ? 'facadeB' : 'slabDark';
    add(key, material, makeBox(w, h, w * between(0.7, 1.2), material, p.x, h / 2, p.z, { tile: FLOOR_TILE, rotY: rand() * Math.PI }));
  }

  /* ---------------------------------------------------------------- */
  /* Доминанты: трубы, градирня, газгольдер, кран                      */
  /* ---------------------------------------------------------------- */

  /** Верхушки, на которых мигают проблесковые огни. */
  const beaconSpots: THREE.Vector3[] = [];

  // Две дымовые трубы ТЭЦ на северо-западе.
  const stacks: { x: number; z: number; h: number; r: number }[] = [
    { x: -118, z: -126, h: 82, r: 4.6 },
    { x: -86, z: -146, h: 64, r: 3.6 },
  ];
  for (const s of stacks) {
    add('brickPale', mat.brickPale, makeCylinder(s.r * 0.72, s.r, s.h, mat.brickPale, s.x, s.h / 2, s.z, 14, { tile: 5 }));
    // Красно-белые пояса на верхушке.
    for (let b = 0; b < 3; b++) {
      add('hazardBand', mat.vanBody, makeCylinder(s.r * 0.75, s.r * 0.75, 3.2, mat.vanBody, s.x, s.h - 6 - b * 8, s.z, 14));
    }
    beaconSpots.push(new THREE.Vector3(s.x, s.h + 1.2, s.z));
  }

  // Градирня — узнаваемый гиперболоид, набранный кольцами.
  {
    const cx = -152;
    const cz = -78;
    const h = 58;
    const rings = 10;
    for (let i = 0; i < rings; i++) {
      const t0 = i / rings;
      const t1 = (i + 1) / rings;
      const profile = (t: number): number => 15 - Math.sin(t * Math.PI * 0.86) * 7.4;
      const seg = h / rings;
      add(
        'slab',
        mat.slab,
        makeCylinder(profile(t1), profile(t0), seg, mat.slab, cx, seg * (i + 0.5), cz, 20, { tile: 6 }),
      );
    }
    beaconSpots.push(new THREE.Vector3(cx, h + 1, cz));
  }

  // Газгольдер.
  {
    const cx = 128;
    const cz = -112;
    add('rust', mat.rust, makeCylinder(16, 16, 26, mat.rust, cx, 13, cz, 18, { tile: 5 }));
    add('slabDark', mat.slabDark, makeCylinder(16.4, 16.4, 1, mat.slabDark, cx, 26, cz, 18));
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * Math.PI * 2;
      add('rust', mat.rust, makeBox(0.7, 28, 0.7, mat.rust, cx + Math.cos(a) * 16.8, 14, cz + Math.sin(a) * 16.8, { tile: 2 }));
    }
    beaconSpots.push(new THREE.Vector3(cx, 27.5, cz));
  }

  // Портальный кран над грузовым двором.
  {
    const cx = 112;
    const cz = 20;
    const legH = 26;
    for (const sz of [-11, 11]) {
      for (const sx of [-1, 1]) {
        add('rust', mat.rust, makeBox(1.5, legH, 1.5, mat.rust, cx + sx * 13, legH / 2, cz + sz, { tile: 2.4 }));
      }
    }
    add('rust', mat.rust, makeBox(40, 2.2, 3.2, mat.rust, cx, legH + 1.1, cz - 11, { tile: 3 }));
    add('rust', mat.rust, makeBox(40, 2.2, 3.2, mat.rust, cx, legH + 1.1, cz + 11, { tile: 3 }));
    add('rust', mat.rust, makeBox(4.2, 3.4, 26, mat.rust, cx, legH + 3.4, cz, { tile: 2.6 }));
    beaconSpots.push(new THREE.Vector3(cx, legH + 5.6, cz));
  }

  // Эстакада на юге: дорога уходит в город.
  {
    const z = 124;
    add('slab', mat.slab, makeBox(300, 2.4, 13, mat.slab, 0, 13, z, { tile: 7 }));
    add('slabDark', mat.slabDark, makeBox(300, 1.1, 0.9, mat.slabDark, 0, 14.8, z - 6.6, { tile: 4 }));
    add('slabDark', mat.slabDark, makeBox(300, 1.1, 0.9, mat.slabDark, 0, 14.8, z + 6.6, { tile: 4 }));
    for (let x = -138; x <= 138; x += 24) {
      add('slab', mat.slab, makeBox(3.4, 12, 3.4, mat.slab, x, 6, z, { tile: 3 }));
    }
  }

  // Радиомачта.
  {
    const cx = 58;
    const cz = -168;
    const h = 96;
    add('rust', mat.rust, makeCylinder(0.5, 1.6, h, mat.rust, cx, h / 2, cz, 8, { tile: 3 }));
    for (let i = 1; i <= 4; i++) {
      const y = (h / 5) * i;
      const r = 3.4 * (1 - i / 6);
      add('rust', mat.rust, makeBox(r * 2, 0.4, 0.4, mat.rust, cx, y, cz, { tile: 1.5 }));
      add('rust', mat.rust, makeBox(0.4, 0.4, r * 2, mat.rust, cx, y, cz, { tile: 1.5 }));
    }
    beaconSpots.push(new THREE.Vector3(cx, h + 1, cz));
  }

  /* ---------------------------------------------------------------- */
  /* Склейка                                                           */
  /* ---------------------------------------------------------------- */

  for (const [key, bucket] of buckets) {
    const merged = mergeMeshes(bucket.meshes, bucket.material, `district:${key}`);
    if (!merged) continue;
    merged.userData.heat = HEAT.cold;
    group.add(merged);
  }

  /* ---------------------------------------------------------------- */
  /* Проблесковые огни на высотных объектах                            */
  /* ---------------------------------------------------------------- */

  const beaconGeo = new THREE.SphereGeometry(0.9, 8, 6);
  const beaconMat = new THREE.MeshBasicMaterial({ color: 0xff3b30, transparent: true, opacity: 1, fog: false });
  const beacons: THREE.Mesh[] = beaconSpots.map((p) => {
    const m = new THREE.Mesh(beaconGeo, beaconMat.clone());
    m.position.copy(p);
    m.userData.heat = HEAT.cold;
    group.add(m);
    return m;
  });

  /* ---------------------------------------------------------------- */
  /* Дым из труб                                                       */
  /* ---------------------------------------------------------------- */

  const plumeTex = smokeSprite();
  interface Plume {
    sprite: THREE.Sprite;
    base: THREE.Vector3;
    offset: number;
    speed: number;
    drift: number;
    size: number;
  }
  const plumes: Plume[] = [];

  for (const s of stacks) {
    for (let i = 0; i < 7; i++) {
      const material = new THREE.SpriteMaterial({
        map: plumeTex,
        // Тёмно-серый: светлый дым на дальнем плане читается как засветка,
        // а не как столб над трубой.
        color: 0x46424a,
        transparent: true,
        opacity: 0,
        depthWrite: false,
        fog: true,
      });
      const sprite = new THREE.Sprite(material);
      // Дым — атмосферный слой: тепловизор не должен слепнуть от собственных клубов.
      sprite.layers.set(LAYER.ATMOSPHERE);
      sprite.renderOrder = 4;
      group.add(sprite);
      plumes.push({
        sprite,
        base: new THREE.Vector3(s.x, s.h, s.z),
        offset: i / 7,
        speed: between(0.03, 0.05),
        drift: between(9, 16),
        size: between(14, 22),
      });
    }
  }

  /* ---------------------------------------------------------------- */

  let phase = 0;
  const animate = (time: number, dt: number): void => {
    phase += dt;

    // Проблесковые: медленный синхронный пульс, как на настоящих мачтах.
    const pulse = Math.max(0, Math.sin(phase * 1.6));
    for (let i = 0; i < beacons.length; i++) {
      const m = beacons[i].material as THREE.MeshBasicMaterial;
      m.opacity = 0.12 + pulse * pulse * 0.88;
    }

    for (const p of plumes) {
      const t = (p.offset + phase * p.speed) % 1;
      const rise = t * 46;
      p.sprite.position.set(p.base.x + t * p.drift, p.base.y + 3 + rise, p.base.z + t * p.drift * 0.35);
      const scale = p.size * (0.5 + t * 1.5);
      p.sprite.scale.set(scale, scale, 1);
      // Появляется у среза трубы и тает к вершине столба.
      (p.sprite.material as THREE.SpriteMaterial).opacity = Math.min(1, t * 6) * (1 - t) * 0.34;
    }

    void time;
  };

  const dispose = (): void => {
    beaconGeo.dispose();
    beaconMat.dispose();
    group.traverse((child) => {
      const sprite = child as THREE.Sprite;
      if (sprite.isSprite) {
        // Геометрия спрайтов общая на весь three.js — освобождаем только материал.
        sprite.material?.dispose();
        return;
      }
      (child as THREE.Mesh).geometry?.dispose();
    });
    group.clear();
  };

  return { group, animate, dispose };
}
