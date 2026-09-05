import * as THREE from 'three';

/**
 * Тепловая сигнатура объекта пишется в вершинный атрибут `aHeat` (0..1).
 * Так один overrideMaterial может отрисовать всю сцену за один проход и при этом
 * корректно перекрывать очаги стенами — глубина считается по настоящей геометрии.
 */
export const HEAT = {
  /** Холодный бетон / асфальт */
  cold: 0.06,
  /** Металл, нагретый солнцем */
  warm: 0.14,
  /** Тёплая техника, работающий фургон */
  machine: 0.3,
  /** Человек */
  human: 0.62,
  /** Тлеющие обломки */
  ember: 0.8,
  /** Открытое пламя */
  fire: 1.0,
} as const;

/** Проставляет тепловую сигнатуру одной геометрии. */
export function setHeatGeometry(geo: THREE.BufferGeometry, heat: number): void {
  if (!geo.attributes.position) return;
  const count = geo.attributes.position.count;
  const existing = geo.getAttribute('aHeat') as THREE.BufferAttribute | undefined;
  if (existing && existing.count === count) {
    (existing.array as Float32Array).fill(heat);
    existing.needsUpdate = true;
  } else {
    geo.setAttribute('aHeat', new THREE.BufferAttribute(new Float32Array(count).fill(heat), 1));
  }
}

/** Проставляет тепловую сигнатуру меша и всех его потомков. */
export function setHeat(object: THREE.Object3D, heat: number): void {
  object.traverse((child) => {
    const geo = (child as THREE.Mesh).geometry as THREE.BufferGeometry | undefined;
    if (geo) setHeatGeometry(geo, heat);
  });
}

/**
 * Одним проходом раздаёт тепло всей иерархии, читая userData.heat каждого меша.
 * Меш без явного значения считается холодным.
 */
export function bakeHeat(root: THREE.Object3D, fallback: number = HEAT.cold): void {
  root.traverse((child) => {
    const mesh = child as THREE.Mesh;
    if (!mesh.geometry) return;
    // Геометрия спрайтов общая на весь three.js — своё тепло ей не пришьёшь,
    // да и в тепловой проход они не попадают (лежат в атмосферном слое).
    if ((child as THREE.Sprite).isSprite) return;
    setHeatGeometry(mesh.geometry, (mesh.userData.heat as number | undefined) ?? fallback);
  });
}

/**
 * Материал теплового прохода. Пишет в R тепло поверхности, в G — «живое ли это»
 * (для лёгкой пульсации силуэтов людей), в B — расстояние для затухания.
 */
export function createHeatMaterial(): THREE.ShaderMaterial {
  return new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
    },
    vertexShader: /* glsl */ `
      attribute float aHeat;
      varying float vHeat;
      varying float vDepth;

      void main() {
        vHeat = aHeat;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        vDepth = -mvPosition.z;
        gl_Position = projectionMatrix * mvPosition;
        gl_PointSize = 26.0 / max(vDepth, 1.0);
      }
    `,
    fragmentShader: /* glsl */ `
      precision highp float;
      uniform float uTime;
      varying float vHeat;
      varying float vDepth;

      void main() {
        float heat = vHeat;

        // Пламя дышит, живые силуэты слегка пульсируют — иначе картинка мёртвая.
        if (heat > 0.75) {
          heat += sin(uTime * 9.0 + vDepth * 2.1) * 0.09;
        } else if (heat > 0.5) {
          heat += sin(uTime * 2.2 + vDepth) * 0.035;
        }

        // Дальние объекты холоднее — имитация ослабления сигнала сенсора.
        float falloff = 1.0 - smoothstep(35.0, 95.0, vDepth);
        heat *= mix(0.45, 1.0, falloff);

        gl_FragColor = vec4(clamp(heat, 0.0, 1.2), vHeat > 0.5 ? 1.0 : 0.0, vDepth / 120.0, 1.0);
      }
    `,
    side: THREE.DoubleSide,
    fog: false,
    transparent: false,
    depthWrite: true,
    depthTest: true,
  });
}
