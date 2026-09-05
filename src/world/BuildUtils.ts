import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { HEAT } from '@/render/HeatMaterial';

/**
 * Пересчитывает UV бокса так, чтобы текстура шла с постоянной плотностью
 * независимо от габаритов. Без этого узкая стойка и длинная стена выглядят
 * как разные материалы.
 */
export function retileBox(geo: THREE.BoxGeometry, w: number, h: number, d: number, tile: number): void {
  const uv = geo.attributes.uv as THREE.BufferAttribute;
  const scales: [number, number][] = [
    [d / tile, h / tile], // +X
    [d / tile, h / tile], // -X
    [w / tile, d / tile], // +Y
    [w / tile, d / tile], // -Y
    [w / tile, h / tile], // +Z
    [w / tile, h / tile], // -Z
  ];
  for (let face = 0; face < 6; face++) {
    const [su, sv] = scales[face];
    for (let i = 0; i < 4; i++) {
      const idx = face * 4 + i;
      uv.setXY(idx, uv.getX(idx) * su, uv.getY(idx) * sv);
    }
  }
  uv.needsUpdate = true;
}

export interface BoxOptions {
  tile?: number;
  heat?: number;
  cast?: boolean;
  receive?: boolean;
  rotY?: number;
  rotX?: number;
  rotZ?: number;
  name?: string;
}

/** Бокс с корректной плотностью текстуры и тепловой меткой. */
export function makeBox(
  w: number,
  h: number,
  d: number,
  material: THREE.Material,
  x: number,
  y: number,
  z: number,
  opts: BoxOptions = {},
): THREE.Mesh {
  const geo = new THREE.BoxGeometry(w, h, d);
  retileBox(geo, w, h, d, opts.tile ?? 2.5);
  const mesh = new THREE.Mesh(geo, material);
  mesh.position.set(x, y, z);
  if (opts.rotY) mesh.rotation.y = opts.rotY;
  if (opts.rotX) mesh.rotation.x = opts.rotX;
  if (opts.rotZ) mesh.rotation.z = opts.rotZ;
  mesh.castShadow = opts.cast ?? true;
  mesh.receiveShadow = opts.receive ?? true;
  mesh.userData.heat = opts.heat ?? HEAT.cold;
  if (opts.name) mesh.name = opts.name;
  return mesh;
}

export function makeCylinder(
  radiusTop: number,
  radiusBottom: number,
  height: number,
  material: THREE.Material,
  x: number,
  y: number,
  z: number,
  segments = 16,
  opts: BoxOptions = {},
): THREE.Mesh {
  const geo = new THREE.CylinderGeometry(radiusTop, radiusBottom, height, segments);
  const mesh = new THREE.Mesh(geo, material);
  mesh.position.set(x, y, z);
  if (opts.rotY) mesh.rotation.y = opts.rotY;
  if (opts.rotX) mesh.rotation.x = opts.rotX;
  if (opts.rotZ) mesh.rotation.z = opts.rotZ;
  mesh.castShadow = opts.cast ?? true;
  mesh.receiveShadow = opts.receive ?? true;
  mesh.userData.heat = opts.heat ?? HEAT.cold;
  return mesh;
}

/** AABB меша в мировых координатах — используется как коллайдер. */
export function worldBox(object: THREE.Object3D, parent?: THREE.Object3D): THREE.Box3 {
  parent?.updateWorldMatrix(true, true);
  object.updateWorldMatrix(true, false);
  return new THREE.Box3().setFromObject(object);
}

/** Расширенный AABB — коллайдеры чуть «толще» геометрии, так столкновения читаются честнее. */
export function paddedBox(min: THREE.Vector3Like, max: THREE.Vector3Like, pad = 0): THREE.Box3 {
  return new THREE.Box3(
    new THREE.Vector3(min.x - pad, min.y - pad, min.z - pad),
    new THREE.Vector3(max.x + pad, max.y + pad, max.z + pad),
  );
}

/**
 * Склеивает группу мешей одного материала в один меш.
 *
 * Дальняя застройка — это сотни коробок; по отдельности они дают сотни
 * вызовов отрисовки и убивают кадр на телефоне. Здесь геометрия каждого
 * меша запекается вместе с его матрицей и сливается в одну.
 */
export function mergeMeshes(meshes: THREE.Mesh[], material: THREE.Material, name?: string): THREE.Mesh | null {
  if (meshes.length === 0) return null;

  const geometries: THREE.BufferGeometry[] = [];
  for (const mesh of meshes) {
    mesh.updateMatrix();
    const geo = mesh.geometry.clone();
    geo.applyMatrix4(mesh.matrix);
    // mergeGeometries требует одинакового набора атрибутов у всех кусков.
    geo.deleteAttribute('uv1');
    geo.deleteAttribute('uv2');
    geometries.push(geo);
    mesh.geometry.dispose();
  }

  const merged = mergeGeometries(geometries, false);
  for (const geo of geometries) geo.dispose();
  if (!merged) return null;

  const result = new THREE.Mesh(merged, material);
  result.castShadow = false;
  result.receiveShadow = false;
  if (name) result.name = name;
  // Габариты у склейки огромные, а лежит она целиком за пределами арены —
  // отсечение по фрустуму на ней только вредит.
  result.frustumCulled = true;
  return result;
}

export function boxFromSize(cx: number, cy: number, cz: number, w: number, h: number, d: number): THREE.Box3 {
  return new THREE.Box3(
    new THREE.Vector3(cx - w / 2, cy - h / 2, cz - d / 2),
    new THREE.Vector3(cx + w / 2, cy + h / 2, cz + d / 2),
  );
}
