import * as THREE from 'three';
import { cfg } from '@/core/Config';
import { audio } from '@/audio/AudioEngine';
import type { LevelData } from '@/world/LevelTypes';
import type { MissionContext, MissionDef, PhaseDef } from './MissionTypes';
import type { StringKey } from '@/i18n';

/** Есть ли на устройстве тач — от этого зависит текст подсказок. */
const isTouch = (): boolean => window.matchMedia('(pointer: coarse)').matches;

function setCollider(level: LevelData, id: string, enabled: boolean): void {
  const collider = level.colliders.find((c) => c.id === id);
  if (collider) collider.enabled = enabled;
}

/** Дрон сел ровно на площадку H, а не рядом с фургоном. */
function isOnHelipad(ctx: MissionContext): boolean {
  if (!ctx.flight.landed) return false;
  const pad = ctx.level.helipad;
  const p = ctx.flight.position;
  const horizontal = Math.hypot(p.x - pad.position.x, p.z - pad.position.z);
  const vertical = Math.abs(p.y - cfg.flight.radius - pad.position.y);
  return horizontal <= pad.radius + 0.6 && vertical < 0.7;
}

const GATE = new THREE.Vector3(0, 3, 6);

/* ------------------------------------------------------------------ */
/* Фаза 1 — знакомство и взлёт                                         */
/* ------------------------------------------------------------------ */

const takeoff: PhaseDef = {
  id: 'takeoff',
  objective: 'obj.takeoff',

  enter(ctx) {
    ctx.input.allowFoam = false;
    ctx.input.allowWinch = false;
    ctx.input.allowThermal = false;
    ctx.foam.setGuideVisible(false);
    ctx.rescue.setZoneVisible(false);
    ctx.hud.setHints({ joystick: false, climb: true });
    ctx.say('speaker.elena', 'radio.intro');
  },

  tutorial: () => (isTouch() ? 'tut.takeoff' : 'tut.takeoffKb'),

  // Сверяемся с той же высотой, что показывает HUD (над землёй, а не от центра сферы),
  // иначе задача «взлететь на 5 м» закрывается раньше, чем прибор покажет пятёрку.
  done: (ctx) => !ctx.flight.landed && ctx.flight.position.y - cfg.flight.radius >= 5,

  restore(ctx) {
    // Полный откат мира: резервный борт вылетает в нетронутую обстановку.
    ctx.fires.reset();
    ctx.rescue.reset();
    ctx.drone.resetState();
    for (const d of ctx.level.destructibles.values()) d.reset();
    setCollider(ctx.level, 'gateFireWall', false);
    setCollider(ctx.level, 'gateBeam', false);
    setCollider(ctx.level, 'fallenWall', false);
    ctx.render.setThermal(false);
    ctx.hud.setThermal(false);
  },
};

/* ------------------------------------------------------------------ */
/* Фаза 2 — подлёт к воротам                                           */
/* ------------------------------------------------------------------ */

const approach: PhaseDef = {
  id: 'approach',
  objective: 'obj.gate',
  marker: 'gate',

  enter(ctx) {
    ctx.hud.setHints({ joystick: true, climb: false });
    ctx.say('speaker.elena', 'radio.airborne', { delay: 0.5 });
  },

  tutorial: () => (isTouch() ? 'tut.move' : 'tut.moveKb'),

  done: (ctx) => {
    const p = ctx.flight.position;
    return Math.hypot(p.x - GATE.x, p.z - GATE.z) < 21;
  },
};

/* ------------------------------------------------------------------ */
/* Фаза 3 — огненная преграда                                          */
/* ------------------------------------------------------------------ */

let extinguishTimer = 0;
let ignited = false;
let slowMoLeft = 0;

const extinguish: PhaseDef = {
  id: 'extinguish',
  objective: 'obj.fire',
  marker: 'gate',

  enter(ctx) {
    extinguishTimer = 0;
    ignited = false;
    slowMoLeft = 2.6;

    ctx.hud.setHints({ joystick: false, climb: false });
    ctx.level.destructibles.get('gateBeam')?.trigger();
    audio.collapse();
    ctx.render.addShake(1.3);
    ctx.fires.burstDust(new THREE.Vector3(0, 1.2, 6.6), 26, 4.5);

    // Замедление даёт время прочитать, что произошло, и найти кнопку.
    ctx.setTimeScale(cfg.sim.bulletTimeScale);

    ctx.say('speaker.elena', 'radio.beamFalls', { delay: 0.9 });
    ctx.say('speaker.elena', 'radio.useFoam');
  },

  update(ctx, dt) {
    extinguishTimer += dt;

    // Огонь загорается ровно в момент удара балки о землю.
    if (!ignited && extinguishTimer >= 1.0) {
      ignited = true;
      ctx.fires.igniteGroup('gate');
      ctx.fires.burstDust(new THREE.Vector3(0, 0.8, 6.6), 18, 5);
      ctx.render.addShake(0.8);

      ctx.input.allowFoam = true;
      ctx.foam.setGuideVisible(true);
      ctx.hud.setCrosshair(true);
    }

    if (slowMoLeft > 0) {
      slowMoLeft -= dt;
      if (slowMoLeft <= 0) ctx.setTimeScale(1);
    }
  },

  tutorial: (ctx) => (ctx.input.allowFoam ? (isTouch() ? 'tut.foam' : 'tut.foamKb') : null),

  done: (ctx) => ignited && !ctx.fires.isGroupActive('gate'),

  restore(ctx) {
    ctx.level.destructibles.get('gateBeam')?.snapToEnd();
    ctx.fires.igniteGroup('gate');
    ctx.input.allowFoam = true;
    ctx.foam.setGuideVisible(true);
    ctx.hud.setCrosshair(true);
    ignited = true;
    slowMoLeft = 0;
    extinguishTimer = 2;
    ctx.setTimeScale(1);
  },
};

/* ------------------------------------------------------------------ */
/* Фаза 4 — вход во двор                                               */
/* ------------------------------------------------------------------ */

const courtyard: PhaseDef = {
  id: 'courtyard',
  objective: 'obj.courtyard',
  marker: 'courtyard',
  goal: true,

  enter(ctx) {
    ctx.setTimeScale(1);
    setCollider(ctx.level, 'gateFireWall', false);
    ctx.input.allowThermal = true;
    ctx.say('speaker.elena', 'radio.fireOut', { delay: 0.4 });
    ctx.say('speaker.elena', 'radio.smoke');
  },

  tutorial: (ctx) => {
    if (ctx.render.thermalActive) return null;
    return isTouch() ? 'tut.thermal' : 'tut.thermalKb';
  },

  done: (ctx) => {
    const target = ctx.rescue.target;
    if (!target) return false;
    return target.zoneCenter.distanceTo(ctx.flight.position) < 23 && ctx.flight.position.z < 4;
  },

  restore(ctx) {
    ctx.input.allowThermal = true;
    setCollider(ctx.level, 'gateFireWall', false);
    // Очаг у ворот уже потушен на этом чекпойнте.
    ctx.fires.damageArea(new THREE.Vector3(0, 0.5, 6.4), 9, 100000, 1);
  },
};

/* ------------------------------------------------------------------ */
/* Фаза 5 — спасение                                                   */
/* ------------------------------------------------------------------ */

let hintedHold = false;

const rescue: PhaseDef = {
  id: 'rescue',
  objective: 'obj.rescue',
  marker: 'courtyard',
  goal: true,

  enter(ctx) {
    hintedHold = false;
    ctx.rescue.setZoneVisible(true);
    ctx.input.allowWinch = true;
    ctx.say('speaker.elena', 'radio.seeTarget');
  },

  update(ctx) {
    // Подсказка про снос звучит один раз и только если игрок реально сносит.
    if (!hintedHold && ctx.rescue.state === 'hoisting' && ctx.rescue.issue !== 'ok') {
      hintedHold = true;
      ctx.say('speaker.elena', 'radio.winchHold');
    }
  },

  tutorial: (ctx) => {
    if (ctx.rescue.state !== 'stowed') return null;
    return isTouch() ? 'tut.winch' : 'tut.winchKb';
  },

  done: (ctx) => ctx.rescue.onboardCount > 0,

  restore(ctx) {
    ctx.rescue.setZoneVisible(true);
    ctx.input.allowWinch = true;
  },
};

/* ------------------------------------------------------------------ */
/* Фаза 6 — экстренная эвакуация                                       */
/* ------------------------------------------------------------------ */

const evacuate: PhaseDef = {
  id: 'evacuate',
  objective: 'obj.return',
  marker: 'helipad',
  goal: true,

  enter(ctx) {
    ctx.rescue.setZoneVisible(false);

    // Сценарный момент: заряда остаётся ровно на дорогу назад.
    ctx.drone.state.battery = Math.min(ctx.drone.state.battery, ctx.drone.state.batteryMax * 0.28);

    ctx.say('speaker.elena', 'radio.pickedUp');
    ctx.say('speaker.worker', 'radio.workerThanks', { delay: 0.3 });
    ctx.say('speaker.elena', 'radio.returnHome');

    // Пока игрок разворачивается, во дворе обрушается стена.
    window.setTimeout(() => {
      if (!ctx.level.destructibles.get('courtyardWall')?.triggered) {
        ctx.level.destructibles.get('courtyardWall')?.trigger();
        audio.collapse();
        ctx.render.addShake(0.9);
        ctx.fires.burstDust(new THREE.Vector3(8.5, 1.5, -12.6), 22, 4);
      }
    }, 2600);
  },

  tutorial: () => 'tut.land',

  done: (ctx) => isOnHelipad(ctx),

  restore(ctx) {
    // Выживший уже на борту: восстанавливаем груз и убираем его с крыши.
    const target = ctx.rescue.target;
    if (target && target.state === 'waiting') {
      target.state = 'onboard';
      target.root.visible = false;
      ctx.drone.state.payload += target.spec.mass;
    }
    ctx.drone.state.battery = Math.min(ctx.drone.state.battery, ctx.drone.state.batteryMax * 0.35);
    ctx.rescue.setZoneVisible(false);
  },
};

/* ------------------------------------------------------------------ */

export const MISSION_01: MissionDef = {
  id: 'mission01',
  phases: [takeoff, approach, extinguish, courtyard, rescue, evacuate],
  objectiveFireGroups: ['gate'],

  checkpointFor(phaseIndex, level) {
    switch (phaseIndex) {
      case 0:
        return { position: level.spawn.position.clone(), yaw: level.spawn.yaw };
      case 1:
        return { position: new THREE.Vector3(0, 6.5, 40), yaw: Math.PI };
      case 2:
        return { position: new THREE.Vector3(0, 6.0, 20), yaw: Math.PI };
      case 3:
        return { position: new THREE.Vector3(0, 5.5, 10), yaw: Math.PI };
      case 4:
        return { position: new THREE.Vector3(-12, 9.5, -2), yaw: Math.PI + 0.6 };
      default:
        return { position: new THREE.Vector3(-15, 12, -8), yaw: 0.2 };
    }
  },
};

/** Ключи подсказок, которые сценарий может показать — для линтера и тестов. */
export const MISSION_01_HINTS: StringKey[] = [
  'tut.takeoff',
  'tut.takeoffKb',
  'tut.move',
  'tut.moveKb',
  'tut.foam',
  'tut.foamKb',
  'tut.thermal',
  'tut.thermalKb',
  'tut.winch',
  'tut.winchKb',
  'tut.land',
];
