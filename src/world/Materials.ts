import * as THREE from 'three';
import {
  asphaltTextures,
  brickTextures,
  chainlinkTextures,
  charredTextures,
  concreteTextures,
  corrugatedTextures,
  facadeTextures,
  hazardTexture,
  helipadTexture,
  rustTextures,
  type SurfaceTextures,
} from './Textures';

/**
 * Библиотека материалов уровня. Один экземпляр на тип поверхности —
 * это позволяет three.js группировать вызовы отрисовки.
 */

function surface(
  tex: SurfaceTextures,
  params: THREE.MeshStandardMaterialParameters,
  repeat: THREE.Vector2,
  normalScale = 1,
): THREE.MeshStandardMaterial {
  const map = tex.map.clone();
  const normalMap = tex.normalMap.clone();
  map.needsUpdate = true;
  normalMap.needsUpdate = true;
  map.repeat.copy(repeat);
  normalMap.repeat.copy(repeat);
  normalMap.wrapS = normalMap.wrapT = THREE.RepeatWrapping;
  map.wrapS = map.wrapT = THREE.RepeatWrapping;

  return new THREE.MeshStandardMaterial({
    map,
    normalMap,
    normalScale: new THREE.Vector2(normalScale, normalScale),
    ...params,
  });
}

export interface MaterialLibrary {
  asphalt: THREE.MeshStandardMaterial;
  concrete: THREE.MeshStandardMaterial;
  concreteWall: THREE.MeshStandardMaterial;
  siding: THREE.MeshStandardMaterial;
  sidingDark: THREE.MeshStandardMaterial;
  roof: THREE.MeshStandardMaterial;
  rust: THREE.MeshStandardMaterial;
  charred: THREE.MeshStandardMaterial;
  hazard: THREE.MeshStandardMaterial;
  helipad: THREE.MeshStandardMaterial;
  vanBody: THREE.MeshStandardMaterial;
  vanTrim: THREE.MeshStandardMaterial;
  glass: THREE.MeshPhysicalMaterial;
  tyre: THREE.MeshStandardMaterial;
  droneShell: THREE.MeshStandardMaterial;
  droneAccent: THREE.MeshStandardMaterial;
  droneDark: THREE.MeshStandardMaterial;
  rotorBlur: THREE.MeshBasicMaterial;
  cable: THREE.MeshStandardMaterial;
  wood: THREE.MeshStandardMaterial;
  cardboard: THREE.MeshStandardMaterial;
  container: THREE.MeshStandardMaterial;
  skin: THREE.MeshStandardMaterial;
  cloth: THREE.MeshStandardMaterial;
  vest: THREE.MeshStandardMaterial;
  emissiveGreen: THREE.MeshBasicMaterial;
  emissiveAmber: THREE.MeshBasicMaterial;
  emissiveRed: THREE.MeshBasicMaterial;

  /* --- Окружение --------------------------------------------------- */
  brick: THREE.MeshStandardMaterial;
  brickPale: THREE.MeshStandardMaterial;
  /** Дальняя застройка: жилые и офисные фасады со светящимися окнами. */
  facadeA: THREE.MeshStandardMaterial;
  facadeB: THREE.MeshStandardMaterial;
  facadeC: THREE.MeshStandardMaterial;
  /** Глухие торцы и промышленные объёмы — дешёвые, без окон. */
  slab: THREE.MeshStandardMaterial;
  slabDark: THREE.MeshStandardMaterial;
  chainlink: THREE.MeshStandardMaterial;
  paint: THREE.MeshStandardMaterial;
  lampGlass: THREE.MeshBasicMaterial;
}

/** Фасад дальнего дома: окна светятся через emissiveMap. */
function facade(seed: number, lit: number, tint: number, repeat: THREE.Vector2): THREE.MeshStandardMaterial {
  const tex = facadeTextures(seed, lit, tint);
  const map = tex.map.clone();
  const emissiveMap = tex.emissiveMap.clone();
  map.needsUpdate = true;
  emissiveMap.needsUpdate = true;
  for (const t of [map, emissiveMap]) {
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    t.repeat.copy(repeat);
  }
  return new THREE.MeshStandardMaterial({
    map,
    emissiveMap,
    emissive: 0xffc98a,
    // Окна должны читаться сквозь дымку, но не пробивать bloom в звёзды:
    // на полной яркости квартал превращался в светодиодную сетку.
    emissiveIntensity: 0.42,
    roughness: 0.9,
    metalness: 0.03,
  });
}

export function createMaterials(): MaterialLibrary {
  const concrete = concreteTextures();
  const asphalt = asphaltTextures();
  const rust = rustTextures();
  const charred = charredTextures();
  const sidingTex = corrugatedTextures('#8d99a6');
  const sidingDarkTex = corrugatedTextures('#4f5a63');
  const roofTex = corrugatedTextures('#6a6f74');

  const hazardMap = hazardTexture().clone();
  hazardMap.needsUpdate = true;
  hazardMap.wrapS = hazardMap.wrapT = THREE.RepeatWrapping;
  hazardMap.repeat.set(6, 1);

  const padMap = helipadTexture();

  return {
    asphalt: surface(asphalt, { roughness: 0.96, metalness: 0.02 }, new THREE.Vector2(100, 100), 1.1),
    concrete: surface(concrete, { roughness: 0.92, metalness: 0.03 }, new THREE.Vector2(30, 30), 1.0),
    // Материалы боксов держат repeat = 1: плотность текселя выставляется
    // пересчётом UV под реальные габариты меша (retileBox в билдере уровня).
    concreteWall: surface(concrete, { roughness: 0.88, metalness: 0.03, color: 0xb9b4ab }, new THREE.Vector2(1, 1), 1.3),
    siding: surface(sidingTex, { roughness: 0.62, metalness: 0.38 }, new THREE.Vector2(1, 1), 1.6),
    sidingDark: surface(sidingDarkTex, { roughness: 0.66, metalness: 0.34 }, new THREE.Vector2(1, 1), 1.6),
    roof: surface(roofTex, { roughness: 0.7, metalness: 0.3 }, new THREE.Vector2(1, 1), 1.4),
    rust: surface(rust, { roughness: 0.82, metalness: 0.5 }, new THREE.Vector2(1, 1), 1.5),
    charred: surface(charred, { roughness: 0.98, metalness: 0.05 }, new THREE.Vector2(1, 1), 1.2),

    hazard: new THREE.MeshStandardMaterial({ map: hazardMap, roughness: 0.7, metalness: 0.15 }),

    helipad: new THREE.MeshStandardMaterial({
      map: padMap,
      roughness: 0.78,
      metalness: 0.12,
      emissive: 0x0d3a1c,
      emissiveIntensity: 0.55,
    }),

    vanBody: new THREE.MeshStandardMaterial({ color: 0xc4142a, roughness: 0.36, metalness: 0.45 }),
    vanTrim: new THREE.MeshStandardMaterial({ color: 0xf2f4f7, roughness: 0.42, metalness: 0.28 }),
    glass: new THREE.MeshPhysicalMaterial({
      color: 0x18242c,
      roughness: 0.12,
      metalness: 0.1,
      transmission: 0.35,
      thickness: 0.4,
      transparent: true,
      opacity: 0.72,
    }),
    tyre: new THREE.MeshStandardMaterial({ color: 0x14161a, roughness: 0.95, metalness: 0.02 }),

    droneShell: new THREE.MeshStandardMaterial({ color: 0x2c3440, roughness: 0.38, metalness: 0.62 }),
    droneAccent: new THREE.MeshStandardMaterial({ color: 0xff7a18, roughness: 0.4, metalness: 0.25 }),
    droneDark: new THREE.MeshStandardMaterial({ color: 0x111418, roughness: 0.55, metalness: 0.55 }),
    rotorBlur: new THREE.MeshBasicMaterial({
      color: 0x7c8794,
      transparent: true,
      opacity: 0.1,
      side: THREE.DoubleSide,
      depthWrite: false,
    }),

    cable: new THREE.MeshStandardMaterial({ color: 0x1a1c20, roughness: 0.8, metalness: 0.2 }),
    wood: new THREE.MeshStandardMaterial({ color: 0x9a7448, roughness: 0.88, metalness: 0.02 }),
    cardboard: new THREE.MeshStandardMaterial({ color: 0xa5814f, roughness: 0.95, metalness: 0.0 }),
    container: new THREE.MeshStandardMaterial({ color: 0x2f6b5a, roughness: 0.6, metalness: 0.45 }),

    skin: new THREE.MeshStandardMaterial({ color: 0xc99a72, roughness: 0.72, metalness: 0.0 }),
    cloth: new THREE.MeshStandardMaterial({ color: 0x37506b, roughness: 0.9, metalness: 0.0 }),
    vest: new THREE.MeshStandardMaterial({
      color: 0xd8e83a,
      roughness: 0.7,
      metalness: 0.02,
      emissive: 0x2a3208,
      emissiveIntensity: 0.4,
    }),

    emissiveGreen: new THREE.MeshBasicMaterial({ color: 0x4dffa0, transparent: true, opacity: 0.85 }),
    emissiveAmber: new THREE.MeshBasicMaterial({ color: 0xffb64d, transparent: true, opacity: 0.9 }),
    emissiveRed: new THREE.MeshBasicMaterial({ color: 0xff4d4d, transparent: true, opacity: 0.9 }),

    /* --- Окружение ------------------------------------------------- */
    brick: surface(brickTextures(), { roughness: 0.94, metalness: 0.02 }, new THREE.Vector2(1, 1), 1.4),
    brickPale: surface(brickTextures([132, 118, 100]), { roughness: 0.95, metalness: 0.02 }, new THREE.Vector2(1, 1), 1.3),

    // Три раскладки окон, чтобы соседние дома не выглядели клонами.
    facadeA: facade(1, 0.36, 74, new THREE.Vector2(1, 1)),
    facadeB: facade(2, 0.22, 62, new THREE.Vector2(1, 1)),
    facadeC: facade(3, 0.44, 88, new THREE.Vector2(1, 1)),

    slab: surface(concrete, { roughness: 0.93, metalness: 0.04, color: 0x8f8f92 }, new THREE.Vector2(1, 1), 0.9),
    slabDark: surface(concrete, { roughness: 0.95, metalness: 0.04, color: 0x5c5f66 }, new THREE.Vector2(1, 1), 0.9),

    chainlink: (() => {
      const t = chainlinkTextures();
      const map = t.map.clone();
      const alphaMap = t.alphaMap.clone();
      map.needsUpdate = true;
      alphaMap.needsUpdate = true;
      for (const x of [map, alphaMap]) {
        x.wrapS = x.wrapT = THREE.RepeatWrapping;
        x.repeat.set(1, 1);
      }
      return new THREE.MeshStandardMaterial({
        map,
        alphaMap,
        transparent: true,
        alphaTest: 0.42,
        side: THREE.DoubleSide,
        roughness: 0.68,
        metalness: 0.55,
        color: 0x9aa0a6,
      });
    })(),

    paint: new THREE.MeshStandardMaterial({ color: 0xe8e4d6, roughness: 0.85, metalness: 0.02 }),
    lampGlass: new THREE.MeshBasicMaterial({ color: 0xffe6bd, transparent: true, opacity: 0.95 }),
  };
}

export function disposeMaterials(lib: MaterialLibrary): void {
  for (const mat of Object.values(lib) as THREE.Material[]) {
    const std = mat as THREE.MeshStandardMaterial;
    std.map?.dispose();
    std.normalMap?.dispose();
    std.emissiveMap?.dispose();
    std.alphaMap?.dispose();
    std.roughnessMap?.dispose();
    mat.dispose();
  }
}
