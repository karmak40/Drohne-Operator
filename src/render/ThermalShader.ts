import * as THREE from 'three';

/**
 * Композит теплового режима: смешивает обычный кадр с картой тепла,
 * добавляет палитру сенсора, шум, строчную развёртку и виньетку.
 * uAmount = 0 — обычная картинка, 1 — полностью тепловая.
 */
export const ThermalShader: THREE.ShaderMaterialParameters & {
  uniforms: Record<string, THREE.IUniform>;
} = {
  uniforms: {
    tDiffuse: { value: null },
    tHeat: { value: null },
    uAmount: { value: 0 },
    uTime: { value: 0 },
    uResolution: { value: new THREE.Vector2(1, 1) },
  },

  vertexShader: /* glsl */ `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,

  fragmentShader: /* glsl */ `
    precision highp float;

    uniform sampler2D tDiffuse;
    uniform sampler2D tHeat;
    uniform float uAmount;
    uniform float uTime;
    uniform vec2 uResolution;

    varying vec2 vUv;

    // Палитра «железо»: синий -> фиолетовый -> красный -> оранжевый -> белый.
    vec3 ironbow(float t) {
      t = clamp(t, 0.0, 1.0);
      vec3 c0 = vec3(0.004, 0.008, 0.035);
      vec3 c1 = vec3(0.075, 0.030, 0.190);
      vec3 c2 = vec3(0.470, 0.080, 0.380);
      vec3 c3 = vec3(0.930, 0.340, 0.130);
      vec3 c4 = vec3(1.000, 0.790, 0.200);
      vec3 c5 = vec3(1.000, 1.000, 0.960);

      if (t < 0.34) return mix(c0, c1, t / 0.34);
      if (t < 0.55) return mix(c1, c2, (t - 0.34) / 0.21);
      if (t < 0.72) return mix(c2, c3, (t - 0.55) / 0.17);
      if (t < 0.88) return mix(c3, c4, (t - 0.72) / 0.16);
      return mix(c4, c5, (t - 0.88) / 0.12);
    }

    float hash(vec2 p) {
      return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
    }

    void main() {
      vec4 base = texture2D(tDiffuse, vUv);

      if (uAmount < 0.002) {
        gl_FragColor = base;
        return;
      }

      // Лёгкое размытие крестом — сглаживает ступеньки половинного разрешения.
      vec2 texel = 1.0 / uResolution;
      vec4 h = texture2D(tHeat, vUv);
      h += texture2D(tHeat, vUv + vec2(texel.x, 0.0) * 1.5);
      h += texture2D(tHeat, vUv - vec2(texel.x, 0.0) * 1.5);
      h += texture2D(tHeat, vUv + vec2(0.0, texel.y) * 1.5);
      h += texture2D(tHeat, vUv - vec2(0.0, texel.y) * 1.5);
      h /= 5.0;

      float heat = h.r;

      // Структура сцены подмешивается слабо: контуры видны, но не спорят с теплом.
      float luma = dot(base.rgb, vec3(0.299, 0.587, 0.114));
      float signal = clamp(heat + luma * 0.19, 0.0, 1.0);

      vec3 thermal = ironbow(signal);

      // Живые цели подсвечиваются контуром — их видно в дыму первым делом.
      thermal += vec3(0.10, 0.32, 0.18) * h.g * (0.55 + 0.45 * sin(uTime * 3.6));

      // Шум сенсора.
      float grain = hash(vUv * uResolution + uTime * 60.0) - 0.5;
      thermal += grain * 0.045;

      // Строчная развёртка.
      float scan = 0.94 + 0.06 * sin(vUv.y * uResolution.y * 1.5 + uTime * 8.0);
      thermal *= scan;

      // Виньетка объектива.
      vec2 d = vUv - 0.5;
      thermal *= 1.0 - dot(d, d) * 0.85;

      gl_FragColor = vec4(mix(base.rgb, thermal, uAmount), base.a);
    }
  `,
};
