/**
 * Единая точка правды для всех игровых коэффициентов.
 * Всё, что влияет на «ощущение» игры, живёт здесь и крутится дебаг-панелью в рантайме.
 */

export interface TunableMeta {
  path: string;
  label: string;
  min: number;
  max: number;
  step: number;
  group: string;
}

export const CONFIG = {
  /** Аркадная модель полёта: джойстик задаёт целевую скорость, дрон к ней стремится. */
  flight: {
    /** Максимальная горизонтальная скорость при пустом дроне, м/с */
    maxSpeed: 14,
    /** Насколько быстро скорость подтягивается к целевой (1/с). Больше — резче. */
    accelResponse: 3.2,
    /** Пассивное торможение при отпущенном джойстике (1/с) */
    brakeResponse: 2.1,
    /** Максимальная вертикальная скорость, м/с */
    maxClimbSpeed: 6.5,
    /** Отклик по вертикали (1/с) */
    climbResponse: 3.5,
    /** Скорость рыскания (поворота корпуса), рад/с */
    yawSpeed: 1.9,
    /** Отклик рыскания (1/с) */
    yawResponse: 6.0,
    /** Максимальный визуальный наклон корпуса, рад */
    maxTilt: 0.42,
    /** Насколько плавно корпус доезжает до целевого наклона (1/с) */
    tiltResponse: 5.5,
    /** Автоподвес: сила удержания высоты (1/с) */
    holdStrength: 4.0,
    /** Удержание точки: сила возврата в зависание (1/с) */
    positionHold: 1.5,
    /** Максимальная скорость, с которой автопилот возвращает дрон в точку, м/с */
    positionHoldMaxSpeed: 2.2,
    /** Минимальная высота над препятствием, м */
    minAltitude: 0.35,
    /** Потолок, м */
    maxAltitude: 45,
    /** Радиус коллизионной сферы дрона, м */
    radius: 0.85,
    /** Насколько дрон отскакивает при ударе (0..1) */
    bounce: 0.35,
  },

  /** Граница разрешённой зоны полёта. */
  boundary: {
    /** С какого расстояния до края видно барьер и звучит предупреждение, м */
    warnDistance: 16,
    /** Полоса, на которой автопилот гасит скорость «наружу», м */
    brakeDistance: 9,
    /** Сила возврата внутрь зоны (1/с) */
    pushStrength: 2.6,
    /** Максимальная скорость, с которой автопилот заворачивает дрон назад, м/с */
    pushMaxSpeed: 6,
  },

  /** Масса и то, как груз портит управляемость. */
  mass: {
    /** Собственная масса дрона, кг */
    empty: 9.5,
    /** Максимальная взлётная масса; выше — дрон не поднимется */
    maxTakeoff: 105,
    /** Насколько каждый кг сверх пустого веса режет максимальную скорость */
    speedPenaltyPerKg: 0.0055,
    /** Насколько каждый кг сверх пустого веса режет отклик (инертность) */
    responsePenaltyPerKg: 0.0048,
    /** Насколько каждый кг сверх пустого веса режет скороподъёмность */
    climbPenaltyPerKg: 0.0062,
  },

  /** Энергосистема. */
  battery: {
    /** Полная ёмкость в «секундах висения» — так проще балансить */
    capacity: 240,
    /** Базовый расход в секунду при висении */
    idleDrain: 1.0,
    /** Добавка к расходу от манёвров (доля от полного отклонения стика) */
    manoeuvreDrain: 0.85,
    /** Добавка к расходу за каждый кг груза.
     *  Груз должен ощутимо жечь заряд, но 78-килограммовый выживший не может
     *  съедать больше базового расхода — иначе обратный путь физически не пролететь. */
    payloadDrain: 0.022,
    /** Порог, ниже которого HUD мигает красным (доля) */
    warnLevel: 0.2,
    /** Порог критического сигнала (доля) */
    criticalLevel: 0.08,
    /** Скорость зарядки на площадке, ед/с */
    padChargeRate: 22,
    /** Сколько добавляет просмотр рекламы (доля) */
    adRefill: 0.35,
  },

  /** Модуль пожаротушения. */
  foam: {
    /** Объём бака, ед. Хватает примерно на 10 секунд непрерывной струи —
     *  преграда у ворот тушится за 6-7 секунд точных попаданий, остальное запас. */
    tank: 180,
    /** Расход в секунду при удержании кнопки */
    drainRate: 18,
    /** Дозаправка на площадке, ед/с */
    padRefillRate: 30,
    /** Начальная скорость струи, м/с */
    muzzleSpeed: 26,
    /** Гравитация для струи, м/с² (меньше настоящей — так проще целиться) */
    gravity: 11,
    /** Эффективная дальность, м */
    range: 22,
    /** Радиус поражения струи, м */
    splashRadius: 2.6,
    /** Урон огню в секунду при прямом попадании */
    dps: 70,
    /** Частиц в секунду */
    particleRate: 90,
    /** Время жизни частицы, с */
    particleLife: 1.1,
  },

  /** Огонь и его влияние на дрон. */
  fire: {
    /** Здоровье одного очага */
    health: 100,
    /** Радиус, в котором дрон получает тепловой урон, м */
    heatRadius: 6.5,
    /** Урон обшивке в секунду в эпицентре */
    heatDps: 7,
    /** Высота столба восходящего потока, м */
    thermalHeight: 18,
    /** Радиус восходящего потока у земли, м */
    thermalRadius: 6.5,
    /** Сила подброса в эпицентре, м/с² */
    thermalForce: 13,
    /** Хаотичная турбулентность в потоке, м/с² */
    turbulence: 5.5,
    /** Скорость восстановления очага, если его не дотушили (хп/с) */
    regen: 3.5,
  },

  /** Дым и видимость. */
  smoke: {
    /** Плотность тумана в задымлённой зоне */
    fogDensityMax: 0.055,
    /** Плотность на чистом воздухе */
    fogDensityMin: 0.0075,
    /** Насколько быстро глаз адаптируется к смене плотности (1/с) */
    fogResponse: 0.9,
    /** Частиц дыма на очаг */
    particlesPerFire: 46,
    /** Скорость подъёма дыма, м/с */
    riseSpeed: 3.2,
  },

  /** Спасательный трос. */
  winch: {
    /** Радиус зелёной зоны зависания, м */
    zoneRadius: 3.2,
    /** Максимальная высота дрона над целью для успешного зависания, м */
    maxHoverHeight: 13,
    /** Минимальная высота — ниже дрон задевает цель, м */
    minHoverHeight: 2.5,
    /** Сколько секунд держать зависание */
    holdTime: 3.0,
    /** Максимальная скорость дрона, при которой прогресс идёт, м/с */
    maxDriftSpeed: 2.4,
    /** Скорость отката прогресса при выходе из зоны, 1/с */
    decayRate: 0.55,
    /** Скорость спуска/подъёма троса, м/с */
    cableSpeed: 5.5,
  },

  /** Прочность рамы. */
  hull: {
    /** Полное здоровье */
    max: 100,
    /** Скорость удара, ниже которой урона нет, м/с */
    safeImpactSpeed: 2.2,
    /** Урон за (м/с) сверх безопасного порога */
    impactDamagePerSpeed: 5.5,
  },

  /** Ветер сцены. */
  wind: {
    /** Базовая сила, м/с² */
    strength: 0.95,
    /** Направление в радианах (0 = +X) */
    direction: 2.35,
    /** Амплитуда порывов */
    gustAmplitude: 1.5,
    /** Частота порывов, Гц */
    gustFrequency: 0.19,
  },

  /** Камера от третьего лица. */
  camera: {
    /** Дистанция за дроном, м */
    distance: 5.4,
    /** Подъём над дроном, м */
    height: 1.75,
    /** Насколько камера смотрит выше дрона, м */
    lookAheadY: 0.55,
    /** Плавность следования позиции (1/с) */
    followResponse: 7.5,
    /** Плавность следования угла (1/с) */
    rotateResponse: 9.0,
    /** Поле зрения, град */
    fov: 62,
    /** Насколько FOV растягивается на максимальной скорости, град */
    fovSpeedBoost: 9,
    /** Минимальная высота камеры над землёй, м */
    minGroundClearance: 0.55,
    /** Ограничение тангажа камеры, рад */
    pitchMin: -0.55,
    pitchMax: 0.85,
  },

  /** Чувствительность ввода. */
  input: {
    /** Мёртвая зона джойстика (доля радиуса) */
    joystickDeadzone: 0.12,
    /** Радиус джойстика в CSS-пикселях */
    joystickRadius: 62,
    /** Чувствительность свайпа камеры, рад на пиксель */
    swipeSensitivity: 0.0055,
    /** Чувствительность мыши, рад на пиксель */
    mouseSensitivity: 0.0026,
    /** Инерция камеры после свайпа (1/с затухания) */
    swipeDamping: 6.5,
  },

  /** Экономика миссии. */
  economy: {
    /** За каждого спасённого */
    perSurvivor: 300,
    /** За каждый потушенный очаг */
    perFire: 80,
    /** Бонус за нулевые повреждения */
    flawlessBonus: 120,
    /** Репутация за спасённого */
    reputationPerSurvivor: 10,
  },

  /** Технические параметры. */
  sim: {
    /** Фиксированный шаг физики, с */
    fixedStep: 1 / 120,
    /** Максимум шагов физики за кадр (защита от спирали смерти) */
    maxSubSteps: 6,
    /** Замедление времени в обучающих врезках */
    bulletTimeScale: 0.5,
    /** Как быстро масштаб времени доезжает до цели (1/с) */
    timeScaleResponse: 4.0,
  },
} as const;

/** Изменяемая копия — именно её читает игра, а дебаг-панель правит. */
export type GameConfig = {
  -readonly [K in keyof typeof CONFIG]: { -readonly [P in keyof (typeof CONFIG)[K]]: number };
};

function deepCloneConfig(): GameConfig {
  return JSON.parse(JSON.stringify(CONFIG)) as GameConfig;
}

export const cfg: GameConfig = deepCloneConfig();

export function resetConfig(): void {
  const fresh = deepCloneConfig();
  for (const group of Object.keys(fresh) as (keyof GameConfig)[]) {
    Object.assign(cfg[group], fresh[group]);
  }
}

/** Что показывать в дебаг-панели. Порядок = порядок отображения. */
export const TUNABLES: TunableMeta[] = [
  { group: 'Полёт', path: 'flight.maxSpeed', label: 'Макс. скорость', min: 4, max: 30, step: 0.5 },
  { group: 'Полёт', path: 'flight.accelResponse', label: 'Отклик разгона', min: 0.5, max: 10, step: 0.1 },
  { group: 'Полёт', path: 'flight.brakeResponse', label: 'Торможение', min: 0.2, max: 8, step: 0.1 },
  { group: 'Полёт', path: 'flight.maxClimbSpeed', label: 'Скороподъёмность', min: 1, max: 15, step: 0.5 },
  { group: 'Полёт', path: 'flight.yawSpeed', label: 'Скорость рыскания', min: 0.4, max: 5, step: 0.1 },
  { group: 'Полёт', path: 'flight.maxTilt', label: 'Наклон корпуса', min: 0, max: 1.0, step: 0.02 },
  { group: 'Полёт', path: 'flight.tiltResponse', label: 'Отклик наклона', min: 1, max: 15, step: 0.5 },

  { group: 'Вес', path: 'mass.speedPenaltyPerKg', label: 'Штраф скорости /кг', min: 0, max: 0.02, step: 0.0005 },
  { group: 'Вес', path: 'mass.responsePenaltyPerKg', label: 'Штраф отклика /кг', min: 0, max: 0.02, step: 0.0005 },

  { group: 'Батарея', path: 'battery.capacity', label: 'Ёмкость', min: 60, max: 600, step: 10 },
  { group: 'Батарея', path: 'battery.idleDrain', label: 'Расход на висении', min: 0, max: 5, step: 0.1 },
  { group: 'Батарея', path: 'battery.manoeuvreDrain', label: 'Расход на манёврах', min: 0, max: 5, step: 0.05 },
  { group: 'Батарея', path: 'battery.payloadDrain', label: 'Расход на груз /кг', min: 0, max: 0.5, step: 0.005 },

  { group: 'Полёт', path: 'flight.positionHold', label: 'Удержание точки', min: 0, max: 6, step: 0.1 },
  { group: 'Полёт', path: 'flight.positionHoldMaxSpeed', label: 'Скорость возврата', min: 0, max: 8, step: 0.1 },

  { group: 'Граница', path: 'boundary.warnDistance', label: 'Дистанция барьера', min: 4, max: 40, step: 1 },
  { group: 'Граница', path: 'boundary.brakeDistance', label: 'Полоса торможения', min: 2, max: 30, step: 0.5 },
  { group: 'Граница', path: 'boundary.pushStrength', label: 'Сила возврата', min: 0.5, max: 8, step: 0.1 },

  { group: 'Ветер', path: 'wind.strength', label: 'Сила ветра', min: 0, max: 8, step: 0.05 },
  { group: 'Ветер', path: 'wind.gustAmplitude', label: 'Порывы', min: 0, max: 8, step: 0.1 },
  { group: 'Ветер', path: 'fire.thermalForce', label: 'Восходящий поток', min: 0, max: 40, step: 0.5 },
  { group: 'Ветер', path: 'fire.turbulence', label: 'Турбулентность', min: 0, max: 20, step: 0.25 },

  { group: 'Пена', path: 'foam.muzzleSpeed', label: 'Скорость струи', min: 8, max: 60, step: 1 },
  { group: 'Пена', path: 'foam.gravity', label: 'Гравитация струи', min: 0, max: 25, step: 0.5 },
  { group: 'Пена', path: 'foam.dps', label: 'Урон огню', min: 5, max: 250, step: 5 },
  { group: 'Пена', path: 'foam.drainRate', label: 'Расход бака', min: 2, max: 80, step: 1 },
  { group: 'Пена', path: 'foam.tank', label: 'Объём бака', min: 40, max: 400, step: 10 },
  { group: 'Пена', path: 'foam.splashRadius', label: 'Радиус накрытия', min: 0.5, max: 8, step: 0.1 },

  { group: 'Трос', path: 'winch.zoneRadius', label: 'Радиус зоны', min: 1, max: 8, step: 0.1 },
  { group: 'Трос', path: 'winch.holdTime', label: 'Время удержания', min: 0.5, max: 10, step: 0.25 },
  { group: 'Трос', path: 'winch.maxDriftSpeed', label: 'Допустимый снос', min: 0.3, max: 8, step: 0.1 },

  { group: 'Камера', path: 'camera.distance', label: 'Дистанция', min: 3, max: 18, step: 0.25 },
  { group: 'Камера', path: 'camera.height', label: 'Высота', min: 0.5, max: 10, step: 0.1 },
  { group: 'Камера', path: 'camera.fov', label: 'FOV', min: 40, max: 100, step: 1 },
  { group: 'Камера', path: 'camera.followResponse', label: 'Плавность', min: 1, max: 20, step: 0.5 },

  { group: 'Ввод', path: 'input.swipeSensitivity', label: 'Свайп', min: 0.001, max: 0.02, step: 0.0005 },
  { group: 'Ввод', path: 'input.mouseSensitivity', label: 'Мышь', min: 0.0005, max: 0.01, step: 0.0002 },
  { group: 'Ввод', path: 'input.joystickDeadzone', label: 'Мёртвая зона', min: 0, max: 0.4, step: 0.01 },

  { group: 'Прочность', path: 'hull.safeImpactSpeed', label: 'Безопасный удар', min: 0, max: 12, step: 0.2 },
  { group: 'Прочность', path: 'hull.impactDamagePerSpeed', label: 'Урон за м/с', min: 0, max: 30, step: 0.5 },
  { group: 'Прочность', path: 'fire.heatDps', label: 'Тепловой урон', min: 0, max: 40, step: 0.5 },
];

export function getTunable(path: string): number {
  const [group, key] = path.split('.') as [keyof GameConfig, string];
  return (cfg[group] as Record<string, number>)[key];
}

export function setTunable(path: string, value: number): void {
  const [group, key] = path.split('.') as [keyof GameConfig, string];
  (cfg[group] as Record<string, number>)[key] = value;
}
