import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';

/**
 * Слой подмены процедурной геометрии на настоящие модели.
 *
 * Сейчас весь уровень собирается кодом. Когда появятся .glb-ассеты, достаточно
 * положить файл в /public/models и прописать его в MODEL_SOURCES — билдер уровня
 * сам подставит модель вместо примитива, ничего больше менять не нужно.
 *
 * Каждая запись описывает, как «посадить» модель на место примитива:
 * центрирование, масштабирование по целевой высоте и разворот.
 */

export type ModelId =
  | 'drone.swift1'
  | 'vehicle.rescueVan'
  | 'prop.container'
  | 'prop.pallet'
  | 'prop.barrel'
  | 'character.worker'
  | 'building.annex';

interface ModelSource {
  url: string;
  /** Габарит по высоте в метрах, к которому нормализуется модель. */
  targetHeight?: number;
  /** Доворот вокруг Y в радианах, если модель смотрит не туда. */
  yawOffset?: number;
  /** Ставить ли модель основанием в ноль по Y. */
  groundAlign?: boolean;
}

/**
 * Пусто по умолчанию — игра полностью работает на процедурной геометрии.
 * Пример заполнения:
 *   'drone.swift1': { url: 'models/swift1.glb', targetHeight: 0.32, groundAlign: false },
 */
const MODEL_SOURCES: Partial<Record<ModelId, ModelSource>> = {};

class ModelRegistry {
  private loader?: GLTFLoader;
  private cache = new Map<ModelId, THREE.Group>();
  private pending = new Map<ModelId, Promise<THREE.Group | null>>();

  private getLoader(): GLTFLoader {
    if (!this.loader) {
      this.loader = new GLTFLoader();
      const draco = new DRACOLoader();
      draco.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.7/');
      this.loader.setDRACOLoader(draco);
    }
    return this.loader;
  }

  has(id: ModelId): boolean {
    return MODEL_SOURCES[id] !== undefined;
  }

  /** Заранее подгружает все объявленные модели. Отсутствие файла не фатально. */
  async preload(): Promise<void> {
    const ids = Object.keys(MODEL_SOURCES) as ModelId[];
    await Promise.all(ids.map((id) => this.load(id)));
  }

  async load(id: ModelId): Promise<THREE.Group | null> {
    const source = MODEL_SOURCES[id];
    if (!source) return null;
    if (this.cache.has(id)) return this.cache.get(id)!;
    if (this.pending.has(id)) return this.pending.get(id)!;

    const promise = this.getLoader()
      .loadAsync(source.url)
      .then((gltf) => {
        const root = gltf.scene;
        this.normalise(root, source);
        root.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });
        this.cache.set(id, root);
        return root;
      })
      .catch((err) => {
        console.warn(`[ModelRegistry] не удалось загрузить ${id} (${source.url}):`, err);
        return null;
      });

    this.pending.set(id, promise);
    return promise;
  }

  /**
   * Синхронно отдаёт копию уже загруженной модели.
   * Если модели нет — вернёт null, и билдер оставит процедурный примитив.
   */
  instantiate(id: ModelId): THREE.Group | null {
    const source = this.cache.get(id);
    return source ? (source.clone(true) as THREE.Group) : null;
  }

  private normalise(root: THREE.Group, source: ModelSource): void {
    if (source.yawOffset) root.rotation.y = source.yawOffset;

    const box = new THREE.Box3().setFromObject(root);
    const size = box.getSize(new THREE.Vector3());

    if (source.targetHeight && size.y > 0.0001) {
      const scale = source.targetHeight / size.y;
      root.scale.multiplyScalar(scale);
      box.setFromObject(root);
    }

    const center = box.getCenter(new THREE.Vector3());
    root.position.x -= center.x;
    root.position.z -= center.z;
    root.position.y -= source.groundAlign === false ? center.y : box.min.y;
  }

  dispose(): void {
    for (const model of this.cache.values()) {
      model.traverse((child) => {
        const mesh = child as THREE.Mesh;
        mesh.geometry?.dispose();
        const mat = mesh.material;
        if (Array.isArray(mat)) mat.forEach((m) => m.dispose());
        else mat?.dispose();
      });
    }
    this.cache.clear();
    this.pending.clear();
  }
}

export const models = new ModelRegistry();
