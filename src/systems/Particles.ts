import * as THREE from 'three';
import { LAYER } from '@/render/Renderer';

export interface SpawnOptions {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  life: number;
  size: number;
  sizeEnd: number;
  color: THREE.Color;
  colorEnd: THREE.Color;
  alpha: number;
  /** Сопротивление среды, 1/с */
  drag: number;
  /** Ускорение по Y, м/с² (для дыма положительное) */
  gravity: number;
  rotSpeed: number;
}

/**
 * Пул частиц на одном THREE.Points с собственным шейдером.
 *
 * PointsMaterial не умеет менять размер и цвет по времени жизни, а без этого
 * дым не клубится, а пена не оседает. Поэтому свой минимальный шейдер:
 * размер и цвет интерполируются от начального к конечному, есть поворот спрайта.
 */
export class ParticleSystem {
  readonly points: THREE.Points;

  private capacity: number;
  private count = 0;

  private positions: Float32Array;
  private velocities: Float32Array;
  private colorStart: Float32Array;
  private colorEnd: Float32Array;
  private ages: Float32Array;
  private lives: Float32Array;
  private sizeStart: Float32Array;
  private sizeEnd: Float32Array;
  private alphas: Float32Array;
  private drags: Float32Array;
  private gravities: Float32Array;
  private rotations: Float32Array;
  private rotSpeeds: Float32Array;

  private attrPosition: THREE.BufferAttribute;
  private attrColor: THREE.BufferAttribute;
  private attrSize: THREE.BufferAttribute;
  private attrAlpha: THREE.BufferAttribute;
  private attrRot: THREE.BufferAttribute;

  private material: THREE.ShaderMaterial;
  private tmpColor = new THREE.Color();

  constructor(
    texture: THREE.Texture,
    capacity: number,
    opts: { additive?: boolean; fog?: boolean; sortOrder?: number } = {},
  ) {
    this.capacity = capacity;

    this.positions = new Float32Array(capacity * 3);
    this.velocities = new Float32Array(capacity * 3);
    this.colorStart = new Float32Array(capacity * 3);
    this.colorEnd = new Float32Array(capacity * 3);
    this.ages = new Float32Array(capacity);
    this.lives = new Float32Array(capacity);
    this.sizeStart = new Float32Array(capacity);
    this.sizeEnd = new Float32Array(capacity);
    this.alphas = new Float32Array(capacity);
    this.drags = new Float32Array(capacity);
    this.gravities = new Float32Array(capacity);
    this.rotations = new Float32Array(capacity);
    this.rotSpeeds = new Float32Array(capacity);

    const geo = new THREE.BufferGeometry();
    this.attrPosition = new THREE.BufferAttribute(new Float32Array(capacity * 3), 3);
    this.attrColor = new THREE.BufferAttribute(new Float32Array(capacity * 3), 3);
    this.attrSize = new THREE.BufferAttribute(new Float32Array(capacity), 1);
    this.attrAlpha = new THREE.BufferAttribute(new Float32Array(capacity), 1);
    this.attrRot = new THREE.BufferAttribute(new Float32Array(capacity), 1);

    this.attrPosition.setUsage(THREE.DynamicDrawUsage);
    this.attrColor.setUsage(THREE.DynamicDrawUsage);
    this.attrSize.setUsage(THREE.DynamicDrawUsage);
    this.attrAlpha.setUsage(THREE.DynamicDrawUsage);
    this.attrRot.setUsage(THREE.DynamicDrawUsage);

    geo.setAttribute('position', this.attrPosition);
    geo.setAttribute('aColor', this.attrColor);
    geo.setAttribute('aSize', this.attrSize);
    geo.setAttribute('aAlpha', this.attrAlpha);
    geo.setAttribute('aRot', this.attrRot);
    geo.setDrawRange(0, 0);
    geo.boundingSphere = new THREE.Sphere(new THREE.Vector3(0, 8, -10), 200);

    const useFog = opts.fog ?? false;

    this.material = new THREE.ShaderMaterial({
      uniforms: THREE.UniformsUtils.merge([
        useFog ? THREE.UniformsLib.fog : {},
        {
          uTexture: { value: texture },
          uHalfHeight: { value: 540 },
        },
      ]),
      vertexShader: /* glsl */ `
        attribute vec3 aColor;
        attribute float aSize;
        attribute float aAlpha;
        attribute float aRot;

        uniform float uHalfHeight;

        varying vec3 vColor;
        varying float vAlpha;
        varying float vRot;

        #include <fog_pars_vertex>

        void main() {
          vColor = aColor;
          vAlpha = aAlpha;
          vRot = aRot;

          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mvPosition;
          gl_PointSize = max(1.0, aSize * projectionMatrix[1][1] * uHalfHeight / max(0.001, -mvPosition.z));

          #include <fog_vertex>
        }
      `,
      fragmentShader: /* glsl */ `
        precision highp float;
        uniform sampler2D uTexture;

        varying vec3 vColor;
        varying float vAlpha;
        varying float vRot;

        #include <fog_pars_fragment>

        void main() {
          vec2 uv = gl_PointCoord - 0.5;
          float s = sin(vRot);
          float c = cos(vRot);
          uv = vec2(uv.x * c - uv.y * s, uv.x * s + uv.y * c) + 0.5;

          vec4 tex = texture2D(uTexture, uv);
          if (tex.a * vAlpha < 0.004) discard;

          gl_FragColor = vec4(vColor * tex.rgb, tex.a * vAlpha);

          #include <fog_fragment>
        }
      `,
      transparent: true,
      depthWrite: false,
      depthTest: true,
      blending: opts.additive ? THREE.AdditiveBlending : THREE.NormalBlending,
      fog: useFog,
    });

    this.points = new THREE.Points(geo, this.material);
    this.points.frustumCulled = false;
    this.points.layers.set(LAYER.ATMOSPHERE);
    this.points.renderOrder = opts.sortOrder ?? 10;
  }

  /** Пересчитывает масштаб точек при смене размера холста. */
  setViewportHeight(pixels: number): void {
    this.material.uniforms.uHalfHeight.value = pixels * 0.5;
  }

  get active(): number {
    return this.count;
  }

  spawn(o: SpawnOptions): void {
    // Пул полон — новая частица важнее самой старой.
    const i = this.count < this.capacity ? this.count++ : this.oldestIndex();

    const i3 = i * 3;
    this.positions[i3] = o.x;
    this.positions[i3 + 1] = o.y;
    this.positions[i3 + 2] = o.z;
    this.velocities[i3] = o.vx;
    this.velocities[i3 + 1] = o.vy;
    this.velocities[i3 + 2] = o.vz;
    this.colorStart[i3] = o.color.r;
    this.colorStart[i3 + 1] = o.color.g;
    this.colorStart[i3 + 2] = o.color.b;
    this.colorEnd[i3] = o.colorEnd.r;
    this.colorEnd[i3 + 1] = o.colorEnd.g;
    this.colorEnd[i3 + 2] = o.colorEnd.b;

    this.ages[i] = 0;
    this.lives[i] = o.life;
    this.sizeStart[i] = o.size;
    this.sizeEnd[i] = o.sizeEnd;
    this.alphas[i] = o.alpha;
    this.drags[i] = o.drag;
    this.gravities[i] = o.gravity;
    this.rotations[i] = Math.random() * Math.PI * 2;
    this.rotSpeeds[i] = o.rotSpeed;
  }

  private oldestIndex(): number {
    let best = 0;
    let bestRatio = -1;
    for (let i = 0; i < this.count; i++) {
      const ratio = this.ages[i] / this.lives[i];
      if (ratio > bestRatio) {
        bestRatio = ratio;
        best = i;
      }
    }
    return best;
  }

  update(dt: number): void {
    let i = 0;
    while (i < this.count) {
      this.ages[i] += dt;
      if (this.ages[i] >= this.lives[i]) {
        this.swapRemove(i);
        continue;
      }

      const i3 = i * 3;
      const damping = Math.exp(-this.drags[i] * dt);

      this.velocities[i3] *= damping;
      this.velocities[i3 + 1] = this.velocities[i3 + 1] * damping + this.gravities[i] * dt;
      this.velocities[i3 + 2] *= damping;

      this.positions[i3] += this.velocities[i3] * dt;
      this.positions[i3 + 1] += this.velocities[i3 + 1] * dt;
      this.positions[i3 + 2] += this.velocities[i3 + 2] * dt;

      this.rotations[i] += this.rotSpeeds[i] * dt;

      const t = this.ages[i] / this.lives[i];

      this.attrPosition.array[i3] = this.positions[i3];
      this.attrPosition.array[i3 + 1] = this.positions[i3 + 1];
      this.attrPosition.array[i3 + 2] = this.positions[i3 + 2];

      this.tmpColor.setRGB(
        this.colorStart[i3] + (this.colorEnd[i3] - this.colorStart[i3]) * t,
        this.colorStart[i3 + 1] + (this.colorEnd[i3 + 1] - this.colorStart[i3 + 1]) * t,
        this.colorStart[i3 + 2] + (this.colorEnd[i3 + 2] - this.colorStart[i3 + 2]) * t,
      );
      (this.attrColor.array as Float32Array)[i3] = this.tmpColor.r;
      (this.attrColor.array as Float32Array)[i3 + 1] = this.tmpColor.g;
      (this.attrColor.array as Float32Array)[i3 + 2] = this.tmpColor.b;

      (this.attrSize.array as Float32Array)[i] = this.sizeStart[i] + (this.sizeEnd[i] - this.sizeStart[i]) * t;
      // Плавное появление и затухание — без этого частицы «щёлкают».
      const fade = Math.min(1, t * 8) * (1 - t) * (1 - t * 0.35);
      (this.attrAlpha.array as Float32Array)[i] = this.alphas[i] * fade;
      (this.attrRot.array as Float32Array)[i] = this.rotations[i];

      i++;
    }

    this.points.geometry.setDrawRange(0, this.count);
    if (this.count > 0) {
      this.attrPosition.needsUpdate = true;
      this.attrColor.needsUpdate = true;
      this.attrSize.needsUpdate = true;
      this.attrAlpha.needsUpdate = true;
      this.attrRot.needsUpdate = true;
    }
  }

  private swapRemove(i: number): void {
    const last = this.count - 1;
    if (i !== last) {
      const i3 = i * 3;
      const l3 = last * 3;
      for (let k = 0; k < 3; k++) {
        this.positions[i3 + k] = this.positions[l3 + k];
        this.velocities[i3 + k] = this.velocities[l3 + k];
        this.colorStart[i3 + k] = this.colorStart[l3 + k];
        this.colorEnd[i3 + k] = this.colorEnd[l3 + k];
      }
      this.ages[i] = this.ages[last];
      this.lives[i] = this.lives[last];
      this.sizeStart[i] = this.sizeStart[last];
      this.sizeEnd[i] = this.sizeEnd[last];
      this.alphas[i] = this.alphas[last];
      this.drags[i] = this.drags[last];
      this.gravities[i] = this.gravities[last];
      this.rotations[i] = this.rotations[last];
      this.rotSpeeds[i] = this.rotSpeeds[last];
    }
    this.count--;
  }

  clear(): void {
    this.count = 0;
    this.points.geometry.setDrawRange(0, 0);
  }

  dispose(): void {
    this.points.geometry.dispose();
    this.material.dispose();
  }
}
