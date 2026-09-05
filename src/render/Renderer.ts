import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';

import { ThermalShader } from './ThermalShader';
import { createHeatMaterial } from './HeatMaterial';
import { cfg } from '@/core/Config';
import { clamp01, damp } from '@/core/MathUtil';

/**
 * Слои рендера.
 * ATMOSPHERE — дым, пена, искры: тепловизор их игнорирует, иначе он бы
 * «слеп» от собственного дыма, что противоречит смыслу прибора.
 */
export const LAYER = {
  DEFAULT: 0,
  ATMOSPHERE: 1,
} as const;

export interface QualityTier {
  name: 'low' | 'medium' | 'high';
  pixelRatio: number;
  bloom: boolean;
  bloomStrength: number;
  shadows: boolean;
  shadowMapSize: number;
  heatScale: number;
}

function detectQuality(): QualityTier {
  const isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);
  const cores = navigator.hardwareConcurrency ?? 4;
  const dpr = window.devicePixelRatio || 1;

  if (isMobile && cores <= 4) {
    return { name: 'low', pixelRatio: Math.min(dpr, 1.25), bloom: true, bloomStrength: 0.5, shadows: false, shadowMapSize: 1024, heatScale: 0.4 };
  }
  if (isMobile) {
    return { name: 'medium', pixelRatio: Math.min(dpr, 1.75), bloom: true, bloomStrength: 0.62, shadows: true, shadowMapSize: 1024, heatScale: 0.5 };
  }
  return { name: 'high', pixelRatio: Math.min(dpr, 2), bloom: true, bloomStrength: 0.72, shadows: true, shadowMapSize: 2048, heatScale: 0.5 };
}

export class RenderSystem {
  readonly renderer: THREE.WebGLRenderer;
  readonly scene: THREE.Scene;
  readonly camera: THREE.PerspectiveCamera;
  readonly quality: QualityTier;
  readonly canvas: HTMLCanvasElement;

  private composer: EffectComposer;
  private bloomPass?: UnrealBloomPass;
  private thermalPass: ShaderPass;
  private heatTarget: THREE.WebGLRenderTarget;
  private heatMaterial: THREE.ShaderMaterial;
  private fog: THREE.FogExp2;

  private thermalTarget = 0;
  private thermalCurrent = 0;
  private targetFogDensity = cfg.smoke.fogDensityMin;
  private elapsed = 0;

  /** Тряска камеры от турбулентности и ударов. */
  private shakeAmount = 0;
  private shakeDecay = 2.6;

  constructor(container: HTMLElement) {
    this.quality = detectQuality();

    this.renderer = new THREE.WebGLRenderer({
      antialias: this.quality.name === 'high',
      powerPreference: 'high-performance',
      stencil: false,
    });
    this.renderer.setPixelRatio(this.quality.pixelRatio);
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.22;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.shadowMap.enabled = this.quality.shadows;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    this.canvas = this.renderer.domElement;
    this.canvas.classList.add('game-canvas');
    container.appendChild(this.canvas);

    this.scene = new THREE.Scene();
    this.fog = new THREE.FogExp2(0x2b2119, cfg.smoke.fogDensityMin);
    this.scene.fog = this.fog;

    this.camera = new THREE.PerspectiveCamera(cfg.camera.fov, 1, 0.1, 600);
    this.camera.layers.enable(LAYER.ATMOSPHERE);

    this.heatMaterial = createHeatMaterial();
    this.heatTarget = new THREE.WebGLRenderTarget(2, 2, {
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      type: THREE.UnsignedByteType,
      depthBuffer: true,
    });

    this.composer = new EffectComposer(this.renderer);
    this.composer.addPass(new RenderPass(this.scene, this.camera));

    if (this.quality.bloom) {
      this.bloomPass = new UnrealBloomPass(new THREE.Vector2(1, 1), this.quality.bloomStrength, 0.62, 0.72);
      this.composer.addPass(this.bloomPass);
    }

    this.thermalPass = new ShaderPass(ThermalShader as unknown as THREE.ShaderMaterialParameters);
    this.thermalPass.uniforms.tHeat.value = this.heatTarget.texture;
    this.composer.addPass(this.thermalPass);

    this.composer.addPass(new OutputPass());

    this.resize();
    window.addEventListener('resize', this.resize);
    window.addEventListener('orientationchange', this.resize);
  }

  private resize = (): void => {
    const w = window.innerWidth;
    const h = window.innerHeight;

    this.renderer.setSize(w, h, false);
    this.composer.setSize(w, h);

    const scale = this.quality.heatScale * this.quality.pixelRatio;
    this.heatTarget.setSize(Math.max(2, Math.round(w * scale)), Math.max(2, Math.round(h * scale)));

    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();

    this.bloomPass?.setSize(w, h);
    (this.thermalPass.uniforms.uResolution.value as THREE.Vector2).set(w * this.quality.pixelRatio, h * this.quality.pixelRatio);
  };

  /** Плотность тумана — задаётся системой дыма, глаз к ней привыкает не мгновенно. */
  setFogDensity(density: number): void {
    this.targetFogDensity = density;
  }

  setFogColor(color: THREE.ColorRepresentation): void {
    this.fog.color.set(color);
  }

  setThermal(enabled: boolean): void {
    this.thermalTarget = enabled ? 1 : 0;
  }

  get thermalActive(): boolean {
    return this.thermalTarget > 0.5;
  }

  /** Удар / турбулентность. amount в условных единицах, 1 ≈ ощутимо. */
  addShake(amount: number): void {
    this.shakeAmount = Math.min(1.6, this.shakeAmount + amount);
  }

  update(dt: number): void {
    this.elapsed += dt;
    this.thermalCurrent = damp(this.thermalCurrent, this.thermalTarget, 9, dt);
    this.fog.density = damp(this.fog.density, this.targetFogDensity, cfg.smoke.fogResponse, dt);
    this.shakeAmount = Math.max(0, this.shakeAmount - this.shakeDecay * dt * (0.4 + this.shakeAmount));

    this.thermalPass.uniforms.uAmount.value = clamp01(this.thermalCurrent);
    this.thermalPass.uniforms.uTime.value = this.elapsed;
    this.heatMaterial.uniforms.uTime.value = this.elapsed;

    // Тепловизор глушит блум — сенсор не даёт цветных ореолов.
    if (this.bloomPass) {
      this.bloomPass.strength = this.quality.bloomStrength * (1 - this.thermalCurrent * 0.85);
    }
  }

  /** Применяет тряску к уже выставленной камерой позиции. Вызывать до render(). */
  applyShake(): void {
    if (this.shakeAmount < 0.001) return;
    const a = this.shakeAmount * 0.09;
    const t = this.elapsed;
    this.camera.position.x += Math.sin(t * 47.3) * a;
    this.camera.position.y += Math.sin(t * 39.1 + 1.4) * a;
    this.camera.position.z += Math.sin(t * 53.7 + 2.9) * a;
    this.camera.rotateZ(Math.sin(t * 31.7) * a * 0.12);
  }

  render(): void {
    if (this.thermalCurrent > 0.004) {
      this.renderHeatPass();
    }
    this.composer.render();
  }

  /**
   * Тепловой проход: вся сцена одним overrideMaterial, атмосферный слой выключен.
   * Глубина настоящая, поэтому огонь за стеной корректно не просвечивает.
   */
  private renderHeatPass(): void {
    const prevMask = this.camera.layers.mask;
    const prevFog = this.scene.fog;
    const prevBg = this.scene.background;
    const prevTarget = this.renderer.getRenderTarget();

    this.camera.layers.set(LAYER.DEFAULT);
    this.scene.fog = null;
    this.scene.background = null;
    this.scene.overrideMaterial = this.heatMaterial;

    this.renderer.setRenderTarget(this.heatTarget);
    this.renderer.setClearColor(0x000000, 1);
    this.renderer.clear(true, true, false);
    this.renderer.render(this.scene, this.camera);

    this.scene.overrideMaterial = null;
    this.scene.fog = prevFog;
    this.scene.background = prevBg;
    this.camera.layers.mask = prevMask;
    this.renderer.setRenderTarget(prevTarget);
  }

  dispose(): void {
    window.removeEventListener('resize', this.resize);
    window.removeEventListener('orientationchange', this.resize);
    this.heatTarget.dispose();
    this.heatMaterial.dispose();
    this.composer.dispose();
    this.renderer.dispose();
    this.canvas.remove();
  }
}
