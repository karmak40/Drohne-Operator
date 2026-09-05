import * as THREE from 'three';

/**
 * Небо задымлённого вечера: тёмно-синий зенит, рыжее зарево у горизонта,
 * тусклое солнце сквозь дым. Одна сфера, никаких кубкарт.
 */
export function createSky(): THREE.Mesh {
  const geo = new THREE.SphereGeometry(280, 32, 20);

  const material = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    depthWrite: false,
    fog: false,
    uniforms: {
      uZenith: { value: new THREE.Color(0x121a2b) },
      uHorizon: { value: new THREE.Color(0x6a4a34) },
      uGlow: { value: new THREE.Color(0xd4703a) },
      uSunDir: { value: new THREE.Vector3(0.42, 0.22, -0.88).normalize() },
      uTime: { value: 0 },
    },
    vertexShader: /* glsl */ `
      varying vec3 vDir;
      void main() {
        vDir = normalize(position);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: /* glsl */ `
      precision highp float;
      uniform vec3 uZenith;
      uniform vec3 uHorizon;
      uniform vec3 uGlow;
      uniform vec3 uSunDir;
      uniform float uTime;
      varying vec3 vDir;

      float hash(vec3 p) {
        return fract(sin(dot(p, vec3(12.9898, 78.233, 45.164))) * 43758.5453);
      }

      void main() {
        vec3 dir = normalize(vDir);
        float h = clamp(dir.y * 0.5 + 0.5, 0.0, 1.0);

        // Вертикальный градиент с сильным сжатием к горизонту.
        vec3 col = mix(uHorizon, uZenith, pow(h, 0.55));

        // Зарево от пожара за складом.
        float toSun = max(0.0, dot(dir, uSunDir));
        col += uGlow * pow(toSun, 6.0) * 0.65;
        col += uGlow * pow(1.0 - abs(dir.y), 8.0) * 0.22;

        // Слоистая дымка, медленно ползущая по небу.
        float band = sin(dir.y * 14.0 + uTime * 0.05 + dir.x * 2.0) * 0.5 + 0.5;
        col = mix(col, col * 1.12, band * (1.0 - h) * 0.5);

        // Дизеринг убирает полосатость градиента на дешёвых экранах.
        col += (hash(dir * 512.0) - 0.5) * 0.012;

        gl_FragColor = vec4(col, 1.0);
      }
    `,
  });

  const mesh = new THREE.Mesh(geo, material);
  mesh.name = 'sky';
  mesh.frustumCulled = false;
  mesh.renderOrder = -1000;
  mesh.userData.heat = 0;
  return mesh;
}

export function updateSky(sky: THREE.Mesh, time: number): void {
  (sky.material as THREE.ShaderMaterial).uniforms.uTime.value = time;
}
