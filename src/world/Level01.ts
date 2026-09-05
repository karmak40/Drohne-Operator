import * as THREE from 'three';
import type { MaterialLibrary } from './Materials';
import type { Collider, FireSpec, LevelData, SurvivorSpec } from './LevelTypes';
import { Destructible } from './Destructible';
import { boxFromSize, makeBox, makeCylinder } from './BuildUtils';
import { createSky, updateSky } from './Sky';
import { radialGlow } from './Textures';
import { buildSurroundings } from './Surroundings';
import { bakeHeat, HEAT } from '@/render/HeatMaterial';
import { models } from './ModelRegistry';

/**
 * Уровень 1 «Первое крещение».
 *
 * Компоновка (вид сверху, +Z — в сторону спасательного фургона):
 *
 *        z=-36  ┌───────── задняя часть склада под крышей ─────────┐
 *        z=-16  ├──── обрушенная перегородка с проломом ───────────┤
 *               │   пристройка (выживший)      контейнеры          │
 *        z=+6   └────── фасад с воротами (огненная преграда) ──────┘
 *        z=+24            линия электропередачи
 *        z=+42            фургон МЧС · площадка H · старт
 */

const WALL_H = 13;
const WALL_T = 0.7;
const GATE_HALF = 5;
const ARENA = 60;

export function buildLevel01(mat: MaterialLibrary): LevelData {
  const root = new THREE.Group();
  root.name = 'level01';

  const colliders: Collider[] = [];
  const cameraBlockers: THREE.Object3D[] = [];
  const destructibles = new Map<string, Destructible>();
  const disposables: THREE.BufferGeometry[] = [];

  let colliderSeq = 0;
  const solid = (box: THREE.Box3, kind: Collider['kind'] = 'solid', id?: string, enabled = true): Collider => {
    const c: Collider = { box, kind, id: id ?? `col${colliderSeq++}`, enabled };
    colliders.push(c);
    return c;
  };
  /** Регистрирует меш и его AABB как препятствие. */
  const blocker = (mesh: THREE.Mesh, kind: Collider['kind'] = 'solid', forCamera = true): THREE.Mesh => {
    root.add(mesh);
    mesh.updateWorldMatrix(true, false);
    solid(new THREE.Box3().setFromObject(mesh), kind);
    if (forCamera) cameraBlockers.push(mesh);
    return mesh;
  };
  const decor = (obj: THREE.Object3D): THREE.Object3D => {
    root.add(obj);
    return obj;
  };

  /* ---------------------------------------------------------------- */
  /* Небо и освещение                                                  */
  /* ---------------------------------------------------------------- */

  const sky = createSky();
  root.add(sky);

  const hemi = new THREE.HemisphereLight(0x7690b4, 0x4a3b30, 1.85);
  root.add(hemi);

  const sun = new THREE.DirectionalLight(0xffd4a8, 2.3);
  sun.position.set(48, 42, -56);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  sun.shadow.camera.near = 1;
  sun.shadow.camera.far = 180;
  sun.shadow.camera.left = -70;
  sun.shadow.camera.right = 70;
  sun.shadow.camera.top = 70;
  sun.shadow.camera.bottom = -70;
  sun.shadow.bias = -0.0006;
  sun.shadow.normalBias = 0.035;
  root.add(sun);
  root.add(sun.target);
  sun.target.position.set(0, 0, 0);

  // Подсветка со стороны камеры: солнце светит из-за склада, и без неё
  // весь фасад и фургон уходят в чёрный силуэт.
  const fill = new THREE.DirectionalLight(0x9db4dc, 0.95);
  fill.position.set(-34, 30, 62);
  root.add(fill);

  // Тёплый отражённый свет от зарева — «подпекает» нижние грани.
  const bounce = new THREE.DirectionalLight(0xff9a52, 0.4);
  bounce.position.set(10, -18, -30);
  root.add(bounce);

  /* ---------------------------------------------------------------- */
  /* Земля                                                             */
  /* ---------------------------------------------------------------- */

  // Земля должна уходить дальше самой дальней башни района, иначе силуэт
  // центра стоит на обрыве и за ним видно небо у самых ног.
  const groundGeo = new THREE.PlaneGeometry(760, 760, 1, 1);
  groundGeo.rotateX(-Math.PI / 2);
  disposables.push(groundGeo);
  const ground = new THREE.Mesh(groundGeo, mat.asphalt);
  ground.receiveShadow = true;
  ground.userData.heat = HEAT.cold;
  ground.name = 'ground';
  root.add(ground);

  // Бетонная площадка склада — визуально отделяет территорию от дороги.
  const apron = makeBox(84, 0.14, 54, mat.concrete, 0, 0.07, -14, { tile: 6, cast: false });
  apron.receiveShadow = true;
  root.add(apron);

  /* ---------------------------------------------------------------- */
  /* Район вокруг: промзона, город, силуэт центра                       */
  /* ---------------------------------------------------------------- */

  const surroundings = buildSurroundings(mat);
  root.add(surroundings.group);

  /* ---------------------------------------------------------------- */
  /* Подъездная дорога и разметка                                      */
  /* ---------------------------------------------------------------- */

  // Проезд от ворот территории на юг, мимо фургона.
  const road = makeBox(16, 0.1, 210, mat.asphalt, 0, 0.05, 92, { tile: 9, cast: false });
  road.receiveShadow = true;
  root.add(road);

  // Осевая прерывистая.
  for (let z = 20; z < 190; z += 9) {
    const dash = makeBox(0.36, 0.02, 4.4, mat.paint, 0, 0.13, z, { tile: 2, cast: false });
    dash.receiveShadow = false;
    decor(dash);
  }
  // Сплошные по краям проезжей части.
  for (const sx of [-7.2, 7.2]) {
    decor(makeBox(0.28, 0.02, 200, mat.paint, sx, 0.13, 96, { tile: 40, cast: false }));
  }

  // Разметка стоянки спецтранспорта у фургона.
  for (let i = 0; i < 4; i++) {
    decor(makeBox(0.22, 0.02, 9, mat.paint, -13 + i * 4.6, 0.16, 44, { tile: 6, cast: false }));
  }

  /* ---------------------------------------------------------------- */
  /* Коробка склада                                                    */
  /* ---------------------------------------------------------------- */

  const wallOpts = { tile: 3.2, heat: HEAT.warm };

  // Фасад: два простенка и перемычка над воротами.
  blocker(makeBox(27, WALL_H, WALL_T, mat.siding, -18.5, WALL_H / 2, 6, wallOpts));
  blocker(makeBox(27, WALL_H, WALL_T, mat.siding, 18.5, WALL_H / 2, 6, wallOpts));
  blocker(makeBox(GATE_HALF * 2 + 0.8, 5, WALL_T, mat.siding, 0, 10.5, 6, wallOpts));

  // Боковые и задняя стены.
  blocker(makeBox(WALL_T, WALL_H, 42, mat.siding, -32, WALL_H / 2, -15, wallOpts));
  blocker(makeBox(WALL_T, WALL_H, 42, mat.siding, 32, WALL_H / 2, -15, wallOpts));
  blocker(makeBox(64, WALL_H, WALL_T, mat.siding, 0, WALL_H / 2, -36, wallOpts));

  // Внутренняя перегородка с проломом: за ней прячется «второй этаж» для миссии 2.
  blocker(makeBox(24, WALL_H, WALL_T, mat.concreteWall, -20, WALL_H / 2, -16, { tile: 3, heat: HEAT.warm }));
  blocker(makeBox(22, WALL_H, WALL_T, mat.concreteWall, 21, WALL_H / 2, -16, { tile: 3, heat: HEAT.warm }));
  // Рваная кромка пролома.
  decor(makeBox(3.2, 4.5, WALL_T + 0.05, mat.charred, -6.4, 10.6, -16, { tile: 2, rotZ: 0.14, heat: HEAT.ember }));
  decor(makeBox(2.4, 3.2, WALL_T + 0.05, mat.charred, 9.2, 11.2, -16, { tile: 2, rotZ: -0.2, heat: HEAT.ember }));

  // Уцелевшая крыша над задней частью.
  blocker(makeBox(64, 0.7, 20, mat.roof, 0, WALL_H + 0.35, -26, { tile: 4, heat: HEAT.warm }));

  // Обломки обрушенной крыши, зависшие над двором.
  const slabAngles: [number, number, number, number, number][] = [
    [-22, 11.4, -14.4, -0.42, 0.1],
    [-4, 12.1, -14.8, 0.34, -0.16],
    [16, 11.0, -14.2, -0.55, 0.22],
    [27, 12.4, -15.0, 0.28, 0.08],
  ];
  for (const [x, y, z, rotX, rotZ] of slabAngles) {
    decor(makeBox(7.5, 0.45, 5.5, mat.charred, x, y, z, { tile: 3, rotX, rotZ, heat: HEAT.ember }));
  }

  // Стойки ворот в предупреждающей окраске.
  for (const sx of [-1, 1]) {
    blocker(makeBox(0.7, 8, 1.0, mat.hazard, sx * (GATE_HALF + 0.35), 4, 6, { tile: 2, heat: HEAT.warm }), 'solid', false);
  }
  decor(makeBox(GATE_HALF * 2 + 1.4, 0.55, 1.1, mat.hazard, 0, 8.05, 6, { tile: 2, heat: HEAT.warm }));

  /* ---------------------------------------------------------------- */
  /* Пристройка — на её крыше ждёт выживший                            */
  /* ---------------------------------------------------------------- */

  const annexGroup = new THREE.Group();
  const annexModel = models.instantiate('building.annex');
  if (annexModel) {
    annexModel.position.set(-15, 0, -8);
    annexGroup.add(annexModel);
  } else {
    annexGroup.add(makeBox(10, 5, 10, mat.sidingDark, -15, 2.5, -8, { tile: 2.6, heat: HEAT.warm }));
    annexGroup.add(makeBox(10.6, 0.35, 10.6, mat.concreteWall, -15, 5.15, -8, { tile: 2.6, heat: HEAT.warm }));
    // Парапет
    for (const [dx, dz, w, d] of [
      [0, -5.1, 10.6, 0.35],
      [0, 5.1, 10.6, 0.35],
      [-5.1, 0, 0.35, 10.6],
      [5.1, 0, 0.35, 10.6],
    ]) {
      annexGroup.add(makeBox(w, 0.45, d, mat.concreteWall, -15 + dx, 5.55, -8 + dz, { tile: 2, heat: HEAT.warm }));
    }
    // Вентиляционный короб и лестница — крыша не должна быть пустой плитой.
    annexGroup.add(makeBox(1.6, 1.0, 1.6, mat.rust, -18.2, 5.8, -11.0, { tile: 1.2, heat: HEAT.machine }));
    annexGroup.add(makeCylinder(0.45, 0.45, 1.4, mat.rust, -11.8, 6.0, -4.9, 12, { heat: HEAT.machine }));
    for (let i = 0; i < 9; i++) {
      annexGroup.add(makeCylinder(0.05, 0.05, 0.7, mat.rust, -10.15, 0.6 + i * 0.55, -8, 6, { rotZ: Math.PI / 2 }));
    }
    annexGroup.add(makeBox(0.12, 5.4, 0.12, mat.rust, -10.15, 2.9, -8.38, { tile: 1 }));
    annexGroup.add(makeBox(0.12, 5.4, 0.12, mat.rust, -10.15, 2.9, -7.62, { tile: 1 }));
  }
  root.add(annexGroup);
  annexGroup.updateWorldMatrix(true, true);
  solid(boxFromSize(-15, 2.75, -8, 10.7, 5.5, 10.7));
  cameraBlockers.push(annexGroup);

  /* ---------------------------------------------------------------- */
  /* Наполнение двора                                                  */
  /* ---------------------------------------------------------------- */

  const containerSpots: [number, number, number, number][] = [
    [14, 0, -6, 0.14],
    [19.5, 0, -13.5, -0.32],
    [14.2, 2.62, -6.2, 0.09],
    [-3, 0, -25.5, 1.42],
  ];
  for (const [x, y, z, rot] of containerSpots) {
    const c = makeBox(6.2, 2.55, 2.6, mat.container, x, y + 1.28, z, { tile: 2.2, rotY: rot, heat: HEAT.warm });
    blocker(c);
    // Рёбра жёсткости
    for (let i = -2; i <= 2; i++) {
      const rib = makeBox(0.12, 2.4, 2.66, mat.rust, 0, 0, 0, { tile: 1.2, heat: HEAT.warm });
      rib.position.set(i * 1.2, 0, 0);
      c.add(rib);
    }
  }

  // Поддоны и коробки — мелочь, которая делает двор обжитым.
  for (const [x, z, rot, n] of [
    [6, -3, 0.3, 3],
    [-2, -9, -0.5, 2],
    [24, -3, 0.9, 4],
    [-22, -20, 0.2, 3],
  ] as [number, number, number, number][]) {
    for (let i = 0; i < n; i++) {
      decor(makeBox(1.2, 0.16, 1.0, mat.wood, x + i * 0.04, 0.22 + i * 0.19, z, { tile: 0.8, rotY: rot }));
    }
    decor(makeBox(1.0, 0.9, 0.85, mat.cardboard, x, 0.22 + n * 0.19 + 0.45, z, { tile: 0.9, rotY: rot }));
  }

  // Бочки.
  for (const [x, z] of [
    [8.5, -18],
    [9.6, -19.2],
    [-24, -6],
  ] as [number, number][]) {
    const barrel = makeCylinder(0.42, 0.42, 1.1, mat.rust, x, 0.55, z, 14, { heat: HEAT.warm });
    blocker(barrel, 'solid', false);
  }

  // Кучи щебня от обрушения.
  for (const [x, z, r] of [
    [-8, -15.5, 3.2],
    [11, -15.0, 2.6],
    [24, -16.5, 2.2],
    [-19, -15.2, 2.0],
  ] as [number, number, number][]) {
    const geo = new THREE.ConeGeometry(r, r * 0.55, 9, 1);
    disposables.push(geo);
    const pile = new THREE.Mesh(geo, mat.charred);
    pile.position.set(x, r * 0.26, z);
    pile.rotation.y = Math.random() * Math.PI;
    pile.castShadow = true;
    pile.receiveShadow = true;
    pile.userData.heat = HEAT.ember;
    root.add(pile);
    solid(boxFromSize(x, r * 0.28, z, r * 1.7, r * 0.6, r * 1.7));
  }

  /* ---------------------------------------------------------------- */
  /* Периметр территории: цоколь, рабица, столбы                       */
  /* ---------------------------------------------------------------- */

  // Забор идёт чуть внутри границы полёта и объясняет её: «дальше чужая
  // территория». Барьер геозабора добавляет высоту там, где сетка кончается.
  const FENCE_X = 52;
  const FENCE_Z_BACK = -50;
  const FENCE_Z_FRONT = 62;
  const FENCE_H = 3.1;
  const GATE_GAP = 9; // проём под подъездную дорогу

  const fenceGroup = new THREE.Group();
  /** Секция забора: бетонный цоколь, полотно сетки, столбы по краям. */
  const fenceRun = (
    x0: number,
    z0: number,
    x1: number,
    z1: number,
  ): void => {
    const dx = x1 - x0;
    const dz = z1 - z0;
    const length = Math.hypot(dx, dz);
    if (length < 0.5) return;
    const cx = (x0 + x1) / 2;
    const cz = (z0 + z1) / 2;
    const yaw = Math.atan2(dx, dz);

    fenceGroup.add(makeBox(0.35, 0.6, length, mat.concreteWall, cx, 0.3, cz, { tile: 2, rotY: yaw }));
    // Сетка осязаема: пролететь сквозь неё на бреющем нельзя.
    // Ось секции всегда параллельна X или Z, поэтому хватает простого AABB.
    const alongX = Math.abs(dx) > Math.abs(dz);
    solid(boxFromSize(cx, FENCE_H / 2, cz, alongX ? length : 0.5, FENCE_H, alongX ? 0.5 : length));
    const mesh = makeBox(0.06, FENCE_H - 0.6, length, mat.chainlink, cx, 0.6 + (FENCE_H - 0.6) / 2, cz, {
      tile: 0.6,
      rotY: yaw,
      cast: false,
    });
    fenceGroup.add(mesh);
    // Верхняя труба-обвязка.
    fenceGroup.add(makeBox(0.1, 0.1, length, mat.rust, cx, FENCE_H, cz, { tile: 1, rotY: yaw }));

    const posts = Math.max(2, Math.round(length / 4));
    for (let i = 0; i <= posts; i++) {
      const t = i / posts;
      fenceGroup.add(
        makeCylinder(0.09, 0.09, FENCE_H + 0.25, mat.rust, x0 + dx * t, (FENCE_H + 0.25) / 2, z0 + dz * t, 8, { tile: 1 }),
      );
    }
  };

  fenceRun(-FENCE_X, FENCE_Z_BACK, -FENCE_X, FENCE_Z_FRONT);
  fenceRun(FENCE_X, FENCE_Z_BACK, FENCE_X, FENCE_Z_FRONT);
  fenceRun(-FENCE_X, FENCE_Z_BACK, FENCE_X, FENCE_Z_BACK);
  // Южная сторона с проёмом под дорогу.
  fenceRun(-FENCE_X, FENCE_Z_FRONT, -GATE_GAP, FENCE_Z_FRONT);
  fenceRun(GATE_GAP, FENCE_Z_FRONT, FENCE_X, FENCE_Z_FRONT);
  // Створки распахнутых ворот у проёма.
  for (const sx of [-1, 1]) {
    fenceGroup.add(
      makeBox(0.12, FENCE_H, 6.4, mat.chainlink, sx * (GATE_GAP + 2.6), FENCE_H / 2, FENCE_Z_FRONT - 2.8, {
        tile: 0.6,
        rotY: sx * 0.42,
        cast: false,
      }),
    );
    fenceGroup.add(makeCylinder(0.12, 0.12, FENCE_H + 0.4, mat.rust, sx * GATE_GAP, (FENCE_H + 0.4) / 2, FENCE_Z_FRONT, 8));
  }
  root.add(fenceGroup);

  /* ---------------------------------------------------------------- */
  /* Мачты освещения                                                   */
  /* ---------------------------------------------------------------- */

  /** Головки прожекторов — их подсветку гасим/зажигаем вместе с мигалками. */
  const floodHeads: THREE.Mesh[] = [];

  // Пятно света и конус вместо настоящего источника: шесть SpotLight утяжелили
  // бы шейдер каждого материала на сцене, а видимый результат тот же.
  const glowTex = radialGlow();
  const poolGeo = new THREE.PlaneGeometry(1, 1);
  poolGeo.rotateX(-Math.PI / 2);
  disposables.push(poolGeo);
  const poolMat = new THREE.MeshBasicMaterial({
    map: glowTex,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    opacity: 0.5,
    fog: true,
  });
  const beamMat = new THREE.MeshBasicMaterial({
    color: 0xffd9a8,
    transparent: true,
    opacity: 1,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    side: THREE.DoubleSide,
    fog: true,
    // Прозрачность конуса берётся из вершинного цвета: без градиента у
    // светового столба видна чёткая кромка, и он читается как кусок геометрии.
    vertexColors: true,
  });

  /** Конус света с затуханием сверху вниз. */
  const makeBeamGeometry = (radius: number, height: number): THREE.ConeGeometry => {
    const geo = new THREE.ConeGeometry(radius, height, 14, 6, true);
    const pos = geo.attributes.position;
    const colors = new Float32Array(pos.count * 4);
    for (let i = 0; i < pos.count; i++) {
      // y идёт от -height/2 (низ) до +height/2 (верх у прожектора).
      const t = pos.getY(i) / height + 0.5;
      const alpha = 0.008 + Math.pow(t, 2.2) * 0.075;
      colors[i * 4] = 1;
      colors[i * 4 + 1] = 1;
      colors[i * 4 + 2] = 1;
      colors[i * 4 + 3] = alpha;
    }
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 4));
    return geo;
  };

  for (const [mx, mz] of [
    [-38, -30],
    [38, -30],
    [-38, 22],
    [38, 22],
    [-26, 52],
    [26, 52],
  ] as [number, number][]) {
    const mastH = 15;
    const mast = makeCylinder(0.22, 0.34, mastH, mat.rust, mx, mastH / 2, mz, 10, { tile: 3, heat: HEAT.cold });
    root.add(mast);
    solid(boxFromSize(mx, mastH / 2, mz, 0.8, mastH, 0.8));

    // Траверса с двумя прожекторами, развёрнутыми к центру площадки.
    const yaw = Math.atan2(-mx, -mz);
    const head = new THREE.Group();
    head.position.set(mx, mastH - 0.4, mz);
    head.rotation.y = yaw;
    head.add(makeBox(3.2, 0.18, 0.18, mat.rust, 0, 0, 0, { tile: 1 }));
    for (const sx of [-1.1, 1.1]) {
      head.add(makeBox(0.9, 0.55, 0.5, mat.droneDark, sx, -0.35, 0, { tile: 0.6 }));
      // Свой материал на каждую линзу: мерцают они вразнобой.
      const lens = makeBox(0.78, 0.42, 0.06, mat.lampGlass.clone(), sx, -0.35, 0.28, { tile: 0.4, cast: false });
      lens.userData.heat = HEAT.machine;
      head.add(lens);
      floodHeads.push(lens);
    }
    root.add(head);

    // Пятно на асфальте смещено к центру площадки — туда, куда смотрит мачта.
    const toCenter = Math.hypot(mx, mz);
    const px = mx - (mx / toCenter) * 9;
    const pz = mz - (mz / toCenter) * 9;
    const pool = new THREE.Mesh(poolGeo, poolMat);
    pool.position.set(px, 0.06, pz);
    pool.scale.set(34, 1, 34);
    pool.renderOrder = 2;
    pool.userData.heat = HEAT.cold;
    root.add(pool);

    // Конус в дымке: от головы прожектора к пятну.
    const beamGeo = makeBeamGeometry(6, mastH);
    disposables.push(beamGeo);
    const beam = new THREE.Mesh(beamGeo, beamMat);
    beam.position.set((mx + px) / 2, mastH / 2, (mz + pz) / 2);
    beam.rotation.z = Math.atan2(mx - px, mastH) * 0.6;
    beam.rotation.x = -Math.atan2(mz - pz, mastH) * 0.6;
    beam.renderOrder = 3;
    beam.userData.heat = HEAT.cold;
    root.add(beam);
  }

  /* ---------------------------------------------------------------- */
  /* Обжитая мелочь площадки                                           */
  /* ---------------------------------------------------------------- */

  // Дорожные конусы вокруг зоны развёртывания и у ворот склада.
  const coneGeo = new THREE.ConeGeometry(0.26, 0.72, 10, 1);
  disposables.push(coneGeo);
  for (const [cx, cz] of [
    [-4.5, 38], [4.5, 38], [-6.5, 46], [6.5, 46], [-5.5, 50],
    [5.5, 50], [-9, 12], [9, 12], [-11, 16], [11, 16],
  ] as [number, number][]) {
    const cone = new THREE.Mesh(coneGeo, mat.droneAccent);
    cone.position.set(cx, 0.36, cz);
    cone.castShadow = true;
    cone.userData.heat = HEAT.cold;
    root.add(cone);
    decor(makeBox(0.62, 0.05, 0.62, mat.droneDark, cx, 0.03, cz, { tile: 0.4, cast: false }));
  }

  // Пожарный рукав змейкой от фургона к воротам склада.
  {
    const hose = new THREE.CatmullRomCurve3([
      new THREE.Vector3(1.6, 0.09, 41),
      new THREE.Vector3(4.2, 0.09, 34),
      new THREE.Vector3(1.0, 0.09, 27),
      new THREE.Vector3(3.4, 0.09, 20),
      new THREE.Vector3(0.8, 0.09, 13),
    ]);
    const geo = new THREE.TubeGeometry(hose, 60, 0.09, 6, false);
    disposables.push(geo);
    const mesh = new THREE.Mesh(geo, mat.droneAccent);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.userData.heat = HEAT.cold;
    root.add(mesh);
  }

  // Катушки кабеля.
  for (const [cx, cz, r] of [
    [-9.5, 30, 1.1],
    [-12.5, 33, 0.85],
    [21, 30, 1.0],
  ] as [number, number, number][]) {
    const reel = new THREE.Group();
    reel.position.set(cx, r, cz);
    reel.rotation.z = Math.PI / 2;
    reel.add(makeCylinder(r, r, 0.12, mat.wood, 0, 0.42, 0, 14));
    reel.add(makeCylinder(r, r, 0.12, mat.wood, 0, -0.42, 0, 14));
    reel.add(makeCylinder(r * 0.45, r * 0.45, 0.8, mat.cable, 0, 0, 0, 12));
    root.add(reel);
    solid(boxFromSize(cx, r, cz, r * 2, r * 2, 1.1));
  }

  // Мусорные контейнеры у боковой стены склада.
  for (const [bx, bz, rot] of [
    [-27, 14, 0.2],
    [-27, 18.4, -0.1],
    [28, 15, 1.6],
  ] as [number, number, number][]) {
    const bin = makeBox(2.2, 1.35, 1.3, mat.container, bx, 0.68, bz, { tile: 1.2, rotY: rot, heat: HEAT.cold });
    blocker(bin, 'solid', false);
    decor(makeBox(2.24, 0.1, 1.34, mat.droneDark, bx, 1.4, bz, { tile: 1, rotY: rot }));
  }

  // Лужи после работы пожарных: тёмные глянцевые пятна на асфальте.
  const puddleGeo = new THREE.CircleGeometry(1, 14);
  puddleGeo.rotateX(-Math.PI / 2);
  disposables.push(puddleGeo);
  const puddleMat = new THREE.MeshStandardMaterial({
    color: 0x10151b,
    roughness: 0.06,
    metalness: 0.5,
    transparent: true,
    opacity: 0.78,
  });
  for (const [px, pz, s] of [
    [2.5, 24, 2.6], [-6, 31, 1.8], [8, 33, 2.1], [-3, 17, 1.5],
    [12.5, 21, 1.7], [-14, 27, 2.3], [5, 44, 1.4],
  ] as [number, number, number][]) {
    const puddle = new THREE.Mesh(puddleGeo, puddleMat);
    puddle.position.set(px, 0.035, pz);
    puddle.scale.set(s, 1, s * 0.72);
    puddle.rotation.y = px * 1.7;
    puddle.userData.heat = HEAT.cold;
    root.add(puddle);
  }

  /* ---------------------------------------------------------------- */
  /* Линия электропередачи — «не задевай провода»                      */
  /* ---------------------------------------------------------------- */

  // Линия висит выше рабочего коридора: обучение выводит новичка на 5–8 м,
  // и провода на этой высоте были не опасностью, а невидимой растяжкой поперёк
  // единственного маршрута. Теперь под ними пролетают, а задевают — только
  // если полезли вверх.
  const WIRE_ANCHOR = 12.3;
  const wireGroup = new THREE.Group();
  for (const sx of [-1, 1]) {
    const pole = makeCylinder(0.19, 0.26, 13.2, mat.rust, sx * 17, 6.6, 24, 10, { heat: HEAT.warm });
    wireGroup.add(pole);
    wireGroup.add(makeBox(2.6, 0.16, 0.16, mat.rust, sx * 17, WIRE_ANCHOR, 24, { tile: 1 }));
    solid(boxFromSize(sx * 17, 6.6, 24, 0.6, 13.2, 0.6));
  }
  for (const [offset, mid] of [
    [-0.9, 11.0],
    [0, 10.8],
    [0.9, 11.0],
  ] as [number, number][]) {
    const curve = new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(-17, WIRE_ANCHOR, 24 + offset),
      // Контрольная точка подобрана так, чтобы провис прошёл ровно через mid.
      new THREE.Vector3(0, mid * 2 - WIRE_ANCHOR, 24 + offset),
      new THREE.Vector3(17, WIRE_ANCHOR, 24 + offset),
    );
    const geo = new THREE.TubeGeometry(curve, 24, 0.05, 5, false);
    disposables.push(geo);
    const wire = new THREE.Mesh(geo, mat.cable);
    wire.castShadow = true;
    wire.userData.heat = HEAT.cold;
    wireGroup.add(wire);
  }
  root.add(wireGroup);
  // Коробка повторяет реальный разброс высот провеса, а не висит выше него.
  solid(boxFromSize(0, 11.55, 24, 34, 1.75, 1.9), 'wire', 'powerline');

  /* ---------------------------------------------------------------- */
  /* Спасательный фургон, площадка H и стартовая платформа             */
  /* ---------------------------------------------------------------- */

  const van = new THREE.Group();
  van.position.set(0, 0, 42);
  const vanModel = models.instantiate('vehicle.rescueVan');
  const beacons: THREE.Mesh[] = [];

  if (vanModel) {
    van.add(vanModel);
  } else {
    // Кабина
    van.add(makeBox(3.0, 1.45, 2.5, mat.vanBody, 0, 1.62, -3.0, { tile: 1.6, heat: HEAT.machine }));
    van.add(makeBox(2.86, 0.85, 0.18, mat.glass, 0, 2.05, -4.22, { tile: 1 }));
    van.add(makeBox(0.18, 0.8, 2.0, mat.glass, -1.52, 2.0, -3.0, { tile: 1 }));
    van.add(makeBox(0.18, 0.8, 2.0, mat.glass, 1.52, 2.0, -3.0, { tile: 1 }));
    // Кузов
    van.add(makeBox(3.1, 2.5, 5.4, mat.vanBody, 0, 2.05, 0.9, { tile: 1.8, heat: HEAT.machine }));
    van.add(makeBox(3.16, 0.62, 5.44, mat.hazard, 0, 1.25, 0.9, { tile: 1.4 }));
    van.add(makeBox(3.14, 0.16, 5.44, mat.vanTrim, 0, 3.24, 0.9, { tile: 1.6 }));
    // Рама и колёса
    van.add(makeBox(2.7, 0.35, 8.2, mat.droneDark, 0, 0.72, -0.6, { tile: 1.6 }));
    for (const [wx, wz] of [
      [-1.5, -2.7],
      [1.5, -2.7],
      [-1.5, 1.9],
      [1.5, 1.9],
    ] as [number, number][]) {
      van.add(makeCylinder(0.52, 0.52, 0.34, mat.tyre, wx, 0.52, wz, 16, { rotZ: Math.PI / 2 }));
      van.add(makeCylinder(0.24, 0.24, 0.36, mat.vanTrim, wx, 0.52, wz, 12, { rotZ: Math.PI / 2 }));
    }
    // Открытые задние двери
    van.add(makeBox(0.12, 2.3, 1.9, mat.vanBody, -2.05, 2.05, 3.3, { tile: 1.4, rotY: -1.45 }));
    van.add(makeBox(0.12, 2.3, 1.9, mat.vanBody, 2.05, 2.05, 3.3, { tile: 1.4, rotY: 1.45 }));
    // Выдвижная стартовая платформа
    van.add(makeBox(2.4, 0.14, 3.0, mat.droneDark, 0, 0.92, 5.0, { tile: 1.2, heat: HEAT.machine }));
    van.add(makeBox(2.44, 0.1, 0.24, mat.hazard, 0, 1.02, 6.42, { tile: 1 }));
    for (const lx of [-1.0, 1.0]) {
      van.add(makeCylinder(0.06, 0.06, 0.85, mat.droneDark, lx, 0.44, 6.1, 8));
    }
    // Световая балка
    van.add(makeBox(2.2, 0.12, 0.3, mat.droneDark, 0, 3.42, -3.1, { tile: 1 }));
    for (const [bx, color] of [
      [-0.72, 0xff3322],
      [0.72, 0x3388ff],
    ] as [number, number][]) {
      const geo = new THREE.BoxGeometry(0.52, 0.2, 0.26);
      disposables.push(geo);
      const beacon = new THREE.Mesh(
        geo,
        new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: 2.4, roughness: 0.4 }),
      );
      beacon.position.set(bx, 3.56, -3.1);
      beacon.userData.heat = HEAT.machine;
      beacons.push(beacon);
      van.add(beacon);
    }
  }

  // Площадка H на крыше.
  const padGeo = new THREE.PlaneGeometry(3.0, 3.6);
  padGeo.rotateX(-Math.PI / 2);
  disposables.push(padGeo);
  const pad = new THREE.Mesh(padGeo, mat.helipad);
  pad.position.set(0, 3.34, 0.6);
  pad.receiveShadow = true;
  pad.userData.heat = HEAT.machine;
  van.add(pad);

  root.add(van);
  van.updateWorldMatrix(true, true);
  cameraBlockers.push(van);
  // Коллайдеры фургона: корпус и платформа отдельно, чтобы дрон садился на крышу.
  solid(boxFromSize(0, 1.9, 42 + 0.4, 3.2, 3.1, 8.6));
  solid(boxFromSize(0, 0.9, 42 + 5.0, 2.5, 0.3, 3.1));

  const helipadCenter = new THREE.Vector3(0, 3.34, 42.6);
  const spawn = { position: new THREE.Vector3(0, 1.35, 47.2), yaw: Math.PI };

  /* ---------------------------------------------------------------- */
  /* Уличная обстановка вокруг фургона                                 */
  /* ---------------------------------------------------------------- */

  for (const [x, z] of [
    [-3.4, 46.4],
    [3.4, 46.4],
    [-4.6, 43.0],
    [4.6, 43.0],
  ] as [number, number][]) {
    const geo = new THREE.ConeGeometry(0.28, 0.72, 10);
    disposables.push(geo);
    const cone = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: 0xff6a20, roughness: 0.75 }));
    cone.position.set(x, 0.36, z);
    cone.castShadow = true;
    cone.userData.heat = HEAT.cold;
    root.add(cone);
    decor(makeBox(0.6, 0.05, 0.6, mat.droneDark, x, 0.03, z, { tile: 0.5, cast: false }));
  }

  for (const sx of [-1, 1]) {
    const lamp = new THREE.Group();
    lamp.add(makeCylinder(0.14, 0.18, 8.5, mat.rust, 0, 4.25, 0, 10, { heat: HEAT.warm }));
    lamp.add(makeBox(0.16, 0.16, 2.2, mat.rust, 0, 8.4, sx * -1.0, { tile: 1, rotX: 0.12 }));
    const headGeo = new THREE.BoxGeometry(0.7, 0.18, 1.1);
    disposables.push(headGeo);
    const head = new THREE.Mesh(
      headGeo,
      new THREE.MeshStandardMaterial({ color: 0x2a2f36, emissive: 0xffdca8, emissiveIntensity: 1.5, roughness: 0.5 }),
    );
    head.position.set(0, 8.28, sx * -2.0);
    head.userData.heat = HEAT.machine;
    lamp.add(head);
    lamp.position.set(sx * 12, 0, 44);
    root.add(lamp);
    solid(boxFromSize(sx * 12, 4.25, 44, 0.5, 8.5, 0.5));

    const glow = new THREE.PointLight(0xffd4a0, 22, 26, 2);
    glow.position.set(sx * 12, 8.1, 44 + sx * -2.0);
    root.add(glow);
  }

  /* ---------------------------------------------------------------- */
  /* Разрушаемая балка над воротами                                    */
  /* ---------------------------------------------------------------- */

  const beam = makeBox(11.5, 0.85, 0.85, mat.charred, 0, 7.55, 5.1, { tile: 2, heat: HEAT.ember, name: 'gateBeam' });
  root.add(beam);
  // Кронштейны, на которых она держится до обрушения.
  const brackets = [
    makeBox(0.3, 0.7, 0.9, mat.rust, -4.4, 7.9, 5.5, { tile: 1 }),
    makeBox(0.3, 0.7, 0.9, mat.rust, 4.4, 7.9, 5.5, { tile: 1 }),
  ];
  brackets.forEach((b) => root.add(b));

  const gateFireWall = solid(boxFromSize(0, 4.1, 6.4, 11.2, 8.2, 2.6), 'soft', 'gateFireWall', false);
  const beamCollider = solid(boxFromSize(0, 0.9, 6.9, 12.4, 1.8, 1.6), 'solid', 'gateBeam', false);

  destructibles.set(
    'gateBeam',
    new Destructible({
      id: 'gateBeam',
      object: beam,
      endPosition: new THREE.Vector3(0, -7.1, 1.8),
      endRotation: new THREE.Euler(0.06, 0.11, 0.19),
      duration: 1.15,
      impactAt: 0.86,
      colliderAfter: beamCollider.box,
      onImpact: () => {
        beamCollider.enabled = true;
        gateFireWall.enabled = true;
        brackets.forEach((b) => (b.visible = false));
      },
    }),
  );

  /* ---------------------------------------------------------------- */
  /* Второе обрушение: секция стены во дворе                           */
  /* ---------------------------------------------------------------- */

  const fallingWall = makeBox(6.0, 6.5, 0.6, mat.concreteWall, 8.5, 9.6, -15.7, {
    tile: 3,
    heat: HEAT.ember,
    name: 'fallingWall',
  });
  root.add(fallingWall);
  const wallDebrisCollider = solid(boxFromSize(8.5, 1.0, -12.6, 6.4, 2.0, 6.4), 'solid', 'fallenWall', false);

  destructibles.set(
    'courtyardWall',
    new Destructible({
      id: 'courtyardWall',
      object: fallingWall,
      endPosition: new THREE.Vector3(0.4, -9.0, 3.1),
      endRotation: new THREE.Euler(-Math.PI / 2 + 0.14, 0.06, 0.1),
      duration: 1.35,
      impactAt: 0.88,
      colliderAfter: wallDebrisCollider.box,
      onImpact: () => {
        wallDebrisCollider.enabled = true;
      },
    }),
  );

  /* ---------------------------------------------------------------- */
  /* Невидимые границы арены                                           */
  /* ---------------------------------------------------------------- */

  // Зона несимметрична по Z: площадка с фургоном вытянута на юг, и при
  // симметричном квадрате барьер загорался бы прямо на старте миссии.
  const bounds = new THREE.Box3(
    new THREE.Vector3(-ARENA, 0, -ARENA + 4),
    new THREE.Vector3(ARENA, 46, ARENA + 14),
  );

  /* ---------------------------------------------------------------- */
  /* Спецификации очагов и выживших                                    */
  /* ---------------------------------------------------------------- */

  const fires: FireSpec[] = [
    // Огненная преграда в воротах — цель миссии.
    { id: 'gate-a', group: 'gate', position: new THREE.Vector3(-3.1, 0.5, 6.4), scale: 2.0, objective: true, startActive: false, light: true },
    { id: 'gate-b', group: 'gate', position: new THREE.Vector3(0.1, 0.5, 6.4), scale: 2.4, objective: true, startActive: false, light: true },
    { id: 'gate-c', group: 'gate', position: new THREE.Vector3(3.3, 0.5, 6.4), scale: 2.0, objective: true, startActive: false, light: false },

    // Фон: дают дым, свет и восходящие потоки, но тушить их не обязательно.
    { id: 'amb-1', group: 'ambient', position: new THREE.Vector3(13.5, 0.5, -7.2), scale: 1.5, objective: false, startActive: true, light: true },
    { id: 'amb-2', group: 'ambient', position: new THREE.Vector3(-7.0, 0.5, -12.5), scale: 1.2, objective: false, startActive: true, light: true },
    { id: 'amb-3', group: 'ambient', position: new THREE.Vector3(24.5, 0.5, -20.0), scale: 1.7, objective: false, startActive: true, light: false },
    { id: 'amb-4', group: 'ambient', position: new THREE.Vector3(-2.0, 13.8, -22.0), scale: 1.4, objective: false, startActive: true, light: false },
    { id: 'amb-5', group: 'ambient', position: new THREE.Vector3(-24.0, 0.5, -18.0), scale: 1.0, objective: false, startActive: true, light: false },
  ];

  const survivors: SurvivorSpec[] = [
    { id: 'storekeeper', position: new THREE.Vector3(-15, 5.4, -8), mass: 78, facing: 0.6 },
  ];

  const markers: Record<string, THREE.Vector3> = {
    takeoff: new THREE.Vector3(0, 5.4, 47.2),
    gate: new THREE.Vector3(0, 4.4, 8.5),
    courtyard: new THREE.Vector3(-15, 8.2, -8),
    helipad: helipadCenter.clone().setY(helipadCenter.y + 1.4),
  };

  /* ---------------------------------------------------------------- */
  /* Финализация                                                       */
  /* ---------------------------------------------------------------- */

  bakeHeat(root);

  let beaconPhase = 0;
  const animate = (time: number, dt: number): void => {
    updateSky(sky, time);
    surroundings.animate(time, dt);

    beaconPhase += dt;
    for (let i = 0; i < beacons.length; i++) {
      const material = beacons[i].material as THREE.MeshStandardMaterial;
      const pulse = Math.max(0, Math.sin(beaconPhase * 7 + i * Math.PI));
      material.emissiveIntensity = 0.35 + pulse * 3.6;
    }

    // Прожекторы запитаны от аварийного генератора: свет слегка «плывёт».
    for (let i = 0; i < floodHeads.length; i++) {
      const material = floodHeads[i].material as THREE.MeshBasicMaterial;
      material.opacity = 0.78 + Math.sin(beaconPhase * (11 + i * 0.7) + i) * 0.09;
    }
  };

  const dispose = (): void => {
    for (const geo of disposables) geo.dispose();
    surroundings.dispose();
    root.traverse((child) => {
      const mesh = child as THREE.Mesh;
      mesh.geometry?.dispose();
    });
    root.clear();
  };

  return {
    root,
    colliders,
    cameraBlockers,
    spawn,
    helipad: { position: helipadCenter, radius: 1.9 },
    fires,
    survivors,
    markers,
    destructibles,
    bounds,
    animate,
    dispose,
  };
}
