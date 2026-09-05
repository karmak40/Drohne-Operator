import * as THREE from 'three';
import { LAYER } from '@/render/Renderer';

/**
 * Граница разрешённой зоны полёта.
 *
 * Пока дрон в глубине площадки, барьера не видно — небо не должно быть
 * расчерчено сеткой. Стоит подойти к краю, как в месте сближения проступает
 * светящаяся ячеистая стена: чем ближе, тем ярче и тем шире пятно. Это
 * читается как отработавший геозабор, а не как «конец уровня».
 */

export interface BoundaryOptions {
  /** С какого расстояния до края барьер начинает проступать, м */
  fadeDistance: number;
}

export class Boundary {
  readonly mesh: THREE.Mesh;

  private readonly material: THREE.ShaderMaterial;
  private readonly min = new THREE.Vector3();
  private readonly max = new THREE.Vector3();

  /** Расстояние от дрона до ближайшей стенки, м. Обновляется в update(). */
  distance = Infinity;
  /** 0 — далеко, 1 — уткнулся в стену. */
  proximity = 0;

  constructor(bounds: THREE.Box3, private readonly opts: BoundaryOptions) {
    this.min.copy(bounds.min);
    this.max.copy(bounds.max);

    const size = new THREE.Vector3();
    bounds.getSize(size);
    const center = new THREE.Vector3();
    bounds.getCenter(center);

    // Куб без крышки и дна: потолок и земля ограничиваются иначе.
    const geo = new THREE.BoxGeometry(size.x, size.y, size.z);
    geo.translate(center.x, center.y, center.z);

    this.material = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
      fog: false,
      uniforms: {
        uDrone: { value: new THREE.Vector3() },
        uTime: { value: 0 },
        uFade: { value: opts.fadeDistance },
        uAlert: { value: 0 },
        uColor: { value: new THREE.Color(0x37c8ff) },
        uAlertColor: { value: new THREE.Color(0xff6a2a) },
      },
      vertexShader: /* glsl */ `
        varying vec3 vWorld;
        varying vec3 vNormalW;
        void main() {
          vec4 world = modelMatrix * vec4(position, 1.0);
          vWorld = world.xyz;
          vNormalW = normalize(mat3(modelMatrix) * normal);
          gl_Position = projectionMatrix * viewMatrix * world;
        }
      `,
      fragmentShader: /* glsl */ `
        precision highp float;
        uniform vec3 uDrone;
        uniform float uTime;
        uniform float uFade;
        uniform float uAlert;
        uniform vec3 uColor;
        uniform vec3 uAlertColor;
        varying vec3 vWorld;
        varying vec3 vNormalW;

        /**
         * Тонкая сетка постоянной экранной толщины. Деление на fwidth даёт
         * сглаживание: без него линии рябят на косых углах, а вблизи
         * расплываются в сплошную заливку.
         */
        float gridLine(vec2 p, float cell, float width) {
          vec2 q = p / cell;
          vec2 g = abs(fract(q - 0.5) - 0.5) / max(fwidth(q), vec2(1e-5));
          return 1.0 - smoothstep(0.0, width, min(g.x, g.y));
        }

        void main() {
          // Насколько дрон близко именно к этому месту стены: барьер горит
          // пятном вокруг точки сближения, а не всей плоскостью.
          float d = distance(vWorld, uDrone);
          float near = 1.0 - smoothstep(0.0, uFade * 1.35, d);
          if (near <= 0.004) discard;

          // Координаты вдоль поверхности: две оси, не совпадающие с нормалью.
          vec2 uv = abs(vNormalW.x) > 0.5 ? vWorld.zy : vWorld.xy;

          float coarse = gridLine(uv, 5.0, 1.7);
          float fine = gridLine(uv, 1.25, 1.1) * 0.3;
          float cells = max(coarse, fine);

          // Волна снизу вверх — стена «дышит», а не висит статичной сеткой.
          float sweep = 0.62 + 0.38 * sin(vWorld.y * 0.5 - uTime * 2.0);

          vec3 color = mix(uColor, uAlertColor, uAlert);
          float alpha = near * near * cells * sweep * (0.3 + uAlert * 0.7);

          gl_FragColor = vec4(color, alpha * 0.9);
        }
      `,
    });

    this.mesh = new THREE.Mesh(geo, this.material);
    this.mesh.name = 'boundary';
    // Барьер — атмосферный слой: в тепловизоре его быть не должно.
    this.mesh.layers.set(LAYER.ATMOSPHERE);
    this.mesh.renderOrder = 30;
    this.mesh.frustumCulled = false;
    this.mesh.visible = false;
  }

  /** Кратчайшее расстояние от точки до боковых стенок зоны. */
  distanceToWall(p: THREE.Vector3): number {
    return Math.min(p.x - this.min.x, this.max.x - p.x, p.z - this.min.z, this.max.z - p.z);
  }

  update(dt: number, dronePosition: THREE.Vector3): void {
    this.distance = this.distanceToWall(dronePosition);
    this.proximity = 1 - Math.min(1, Math.max(0, this.distance) / this.opts.fadeDistance);

    this.mesh.visible = this.proximity > 0.001;
    if (!this.mesh.visible) return;

    const u = this.material.uniforms;
    (u.uDrone.value as THREE.Vector3).copy(dronePosition);
    u.uTime.value += dt;
    // Ближе половины полосы предупреждения барьер наливается тревожным цветом.
    u.uAlert.value = Math.min(1, Math.max(0, (this.proximity - 0.45) / 0.55));
  }

  dispose(): void {
    this.mesh.geometry.dispose();
    this.material.dispose();
  }
}
