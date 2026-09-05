import * as THREE from 'three';

import { cfg } from './Config';
import { bus, type MissionResultData } from './EventBus';
import { save } from './Save';
import { clamp, clamp01, damp, noise1 } from './MathUtil';
import { t } from '@/i18n';

import { RenderSystem } from '@/render/Renderer';
import { CameraRig } from '@/render/CameraRig';
import { createMaterials, disposeMaterials, type MaterialLibrary } from '@/world/Materials';
import { buildLevel01 } from '@/world/Level01';
import { Boundary } from '@/world/Boundary';
import type { LevelData } from '@/world/LevelTypes';
import { models } from '@/world/ModelRegistry';

import { Drone } from '@/entities/Drone';
import { FlightModel } from '@/systems/FlightModel';
import { FireSystem } from '@/systems/FireSystem';
import { FoamSystem } from '@/systems/FoamSystem';
import { RescueSystem } from '@/systems/RescueSystem';

import { InputManager } from '@/input/InputManager';
import { audio } from '@/audio/AudioEngine';

import { Hud, type MarkerData } from '@/ui/Hud';
import { Screens } from '@/ui/Screens';
import { DebugPanel } from '@/ui/DebugPanel';
import { el, mount } from '@/ui/dom';

import { MissionRunner } from '@/missions/MissionRunner';
import { MISSION_01 } from '@/missions/Mission01';
import type { MissionContext } from '@/missions/MissionTypes';

type Mode = 'menu' | 'briefing' | 'playing' | 'paused' | 'result' | 'failing' | 'finishing';

/**
 * Сборка игры: держит все системы, гоняет цикл с фиксированным шагом физики
 * и переключает режимы. Всё, что касается конкретной миссии, живёт в
 * missions/, всё, что касается мира — в world/.
 */
export class Game {
  private render: RenderSystem;
  private rig: CameraRig;
  private materials: MaterialLibrary;
  private level: LevelData;

  private drone: Drone;
  private flight = new FlightModel();
  private fires: FireSystem;
  private foam: FoamSystem;
  private rescue: RescueSystem;
  private boundary: Boundary;
  /** Чтобы сигнал геозабора не тарахтел каждый кадр. */
  private geofenceBeepTimer = 0;
  private geofenceWasBlocked = false;

  private input: InputManager;
  private hud: Hud;
  private screens: Screens;
  private debug: DebugPanel;

  private runner: MissionRunner;
  private ctx: MissionContext;

  private mode: Mode = 'menu';
  private accumulator = 0;
  private lastTime = 0;
  private worldTime = 0;
  private timeScale = 1;
  private timeScaleTarget = 1;
  private transitionTimer = 0;

  /* Статистика миссии */
  private damageTaken = 0;
  private adUsedThisFlight = false;
  private rewardPaid = 0;
  private lastResult?: MissionResultData;

  private readonly windVec = new THREE.Vector3();
  private readonly updraft = new THREE.Vector3();
  private readonly nozzle = new THREE.Vector3();
  private readonly aimDir = new THREE.Vector3();
  private readonly camDir = new THREE.Vector3();
  private readonly projected = new THREE.Vector3();
  private readonly markers: MarkerData[] = [];

  constructor(container: HTMLElement) {
    this.render = new RenderSystem(container);
    this.rig = new CameraRig(this.render.camera);

    const inputLayer = mount(container, el('div', 'input-layer'));
    this.input = new InputManager(inputLayer, this.render.canvas);

    this.materials = createMaterials();
    this.level = buildLevel01(this.materials);
    this.render.scene.add(this.level.root);
    this.rig.obstacles = this.level.cameraBlockers;

    this.drone = new Drone(this.materials);
    this.render.scene.add(this.drone.root);

    this.fires = new FireSystem(this.render.quality.name);
    this.foam = new FoamSystem(this.render.quality.name);
    this.rescue = new RescueSystem(this.materials);
    this.render.scene.add(this.fires.group, this.foam.group, this.rescue.group);

    this.fires.load(this.level.fires);
    this.rescue.load(this.level.survivors);

    this.boundary = new Boundary(this.level.bounds, { fadeDistance: cfg.boundary.warnDistance });
    this.render.scene.add(this.boundary.mesh);

    this.hud = new Hud(container, this.input);
    this.hud.onPause = () => this.pause();
    this.hud.onAd = () => this.watchAdForBattery();

    this.screens = new Screens(container, {
      onOpenBriefing: () => this.setMode('briefing'),
      onStartMission: () => this.startMission(),
      onBackToMenu: () => this.setMode('menu'),
      onResume: () => this.resume(),
      onRestart: () => this.startMission(),
      onToggleDebug: () => this.debug.toggle(),
      onDoubleReward: () => this.doubleReward(),
    });

    this.debug = new DebugPanel(container);

    this.ctx = {
      drone: this.drone,
      flight: this.flight,
      fires: this.fires,
      foam: this.foam,
      rescue: this.rescue,
      level: this.level,
      hud: this.hud,
      input: this.input,
      render: this.render,
      elapsed: 0,
      setTimeScale: (value) => {
        this.timeScaleTarget = value;
      },
      say: () => {},
      clearRadio: () => {},
    };
    this.runner = new MissionRunner(MISSION_01, this.ctx);

    this.bindEvents();
    this.syncViewport();
    window.addEventListener('resize', this.syncViewport);

    this.setMode('menu');
    this.lastTime = performance.now();
    requestAnimationFrame(this.frame);
  }

  /* ------------------------------------------------------------------ */
  /* События мира                                                        */
  /* ------------------------------------------------------------------ */

  private bindEvents(): void {
    bus.on('drone:impact', ({ speed, damage, kind }) => {
      audio.impact(clamp01(speed / 12));
      this.render.addShake(clamp01(speed / 10) * 1.1);

      if (damage > 0) {
        this.drone.state.hull = Math.max(0, this.drone.state.hull - damage);
        this.damageTaken += damage;
        this.hud.flashDamage();
        this.fires.burstSparks(this.flight.position, 8);

        if (kind === 'wire') this.runner.say('speaker.elena', 'radio.wires');
        else if (damage > 8) this.runner.say('speaker.elena', 'radio.impact');
      }

      if (this.drone.state.hull <= 0 && this.mode === 'playing') this.failMission('destroyed');
    });

    bus.on('foam:hit', () => {});
    bus.on('winch:deploy', () => audio.winch(true));
    bus.on('winch:retract', () => audio.winch(false));

    bus.on('survivor:pickedUp', () => {
      audio.chime(true);
      this.hud.toast(t('hud.rescuing'), 'good');
    });

    bus.on('fire:groupCleared', ({ group }) => {
      if (MISSION_01.objectiveFireGroups.includes(group)) audio.chime(true);
    });

    bus.on('foam:empty', () => this.hud.toast(t('hud.foam') + ' 0%', 'bad', 1.6));
  }

  private syncViewport = (): void => {
    const size = this.render.renderer.getDrawingBufferSize(new THREE.Vector2());
    this.fires.setViewportHeight(size.y);
    this.foam.setViewportHeight(size.y);
  };

  /* ------------------------------------------------------------------ */
  /* Режимы                                                              */
  /* ------------------------------------------------------------------ */

  private setMode(mode: Mode): void {
    this.mode = mode;

    const playing = mode === 'playing';
    this.input.enabled = playing;
    this.hud.setVisible(playing || mode === 'paused' || mode === 'failing' || mode === 'finishing');

    if (!playing) this.input.reset();
    if (mode !== 'playing') this.input.releasePointerLock();

    switch (mode) {
      case 'menu':
        this.screens.show('menu');
        this.hud.setVisible(false);
        this.resetToIdle();
        break;
      case 'briefing':
        this.screens.show('briefing');
        this.hud.setVisible(false);
        break;
      case 'playing':
        this.screens.show('none');
        audio.resume();
        break;
      case 'paused':
        this.screens.show('pause');
        audio.suspend();
        break;
      case 'result':
        this.screens.show('none');
        break;
      default:
        this.screens.show('none');
    }
  }

  /** Возврат сцены в исходное состояние — при выходе в меню. */
  private resetToIdle(): void {
    this.fires.reset();
    this.rescue.reset();
    this.foam.reset();
    this.drone.resetState();
    for (const d of this.level.destructibles.values()) d.reset();
    for (const id of ['gateFireWall', 'gateBeam', 'fallenWall']) {
      const collider = this.level.colliders.find((c) => c.id === id);
      if (collider) collider.enabled = false;
    }
    this.flight.reset(this.level.spawn.position, this.level.spawn.yaw);
    this.rig.reset(this.flight.position, this.level.spawn.yaw);
    this.render.setThermal(false);
    this.hud.setThermal(false);
    this.hud.clearMessages();
    this.timeScale = 1;
    this.timeScaleTarget = 1;
  }

  private startMission(): void {
    this.resetToIdle();
    this.damageTaken = 0;
    this.adUsedThisFlight = false;
    this.rewardPaid = 0;
    this.transitionTimer = 0;

    this.hud.setCrosshair(false);
    this.hud.setAdAvailable(false);
    this.hud.setHoist(false, 0, false, '');
    this.runner.start(0);

    void audio.start();
    this.setMode('playing');
  }

  private pause(): void {
    if (this.mode !== 'playing') return;
    this.setMode('paused');
  }

  private resume(): void {
    if (this.mode !== 'paused') return;
    this.setMode('playing');
  }

  /* ------------------------------------------------------------------ */
  /* Монетизация (заглушки)                                              */
  /* ------------------------------------------------------------------ */

  /** Вознаграждающая реклама: одна дозарядка за вылет. */
  private watchAdForBattery(): void {
    if (this.adUsedThisFlight) return;
    this.adUsedThisFlight = true;
    save.countAd();

    const s = this.drone.state;
    s.battery = Math.min(s.batteryMax, s.battery + s.batteryMax * cfg.battery.adRefill);
    this.hud.setAdAvailable(false);
    this.hud.toast(`+${Math.round(cfg.battery.adRefill * 100)}%`, 'good');
    audio.chime(true);
  }

  private doubleReward(): void {
    if (!this.lastResult) return;
    save.countAd();
    save.addMoney(this.rewardPaid);
    this.rewardPaid *= 2;
    this.screens.markRewardDoubled(this.rewardPaid);
    this.screens.refreshMenu();
  }

  /* ------------------------------------------------------------------ */
  /* Провал и завершение                                                 */
  /* ------------------------------------------------------------------ */

  private failMission(reason: 'battery' | 'destroyed'): void {
    if (this.mode !== 'playing') return;
    this.mode = 'failing';
    this.input.enabled = false;
    this.transitionTimer = 3.2;

    this.runner.clearRadio();
    this.hud.toast(t(reason === 'battery' ? 'fail.battery' : 'fail.destroyed'), 'bad', 3);
    this.hud.showTutorial(t('fail.checkpoint'));
    audio.chime(false);
    bus.emit('mission:failed', { reason });
  }

  private recoverFromCheckpoint(): void {
    this.drone.resetState();
    this.damageTaken = 0;
    this.adUsedThisFlight = false;
    this.foam.reset();
    this.runner.restart();
    this.rig.reset(this.flight.position, this.flight.yaw);
    this.hud.clearMessages();
    this.hud.setAdAvailable(false);
    this.timeScale = 1;
    this.timeScaleTarget = 1;
    this.setMode('playing');
  }

  private beginFinish(): void {
    this.mode = 'finishing';
    this.input.enabled = false;
    this.transitionTimer = 4.5;

    this.rescue.deliverAll(this.drone);
    this.runner.clearRadio();
    this.runner.say('speaker.elena', 'radio.landed');
    this.hud.showTutorial(null);
    this.hud.setObjective(null, null);
  }

  private showResults(): void {
    const objectiveFires = this.level.fires.filter((f) => f.objective);
    const extinguishedGroups = MISSION_01.objectiveFireGroups.filter((g) => !this.fires.isGroupActive(g));

    const rescued = this.rescue.deliveredCount;
    const damagePercent = clamp(100 - (this.drone.state.hull / cfg.hull.max) * 100, 0, 100);

    let reward =
      rescued * cfg.economy.perSurvivor + extinguishedGroups.length * cfg.economy.perFire * objectiveFires.length;
    if (damagePercent < 1) reward += cfg.economy.flawlessBonus;
    reward = Math.round(reward);

    const reputation = rescued * cfg.economy.reputationPerSurvivor;

    const result: MissionResultData = {
      survivorsRescued: rescued,
      survivorsTotal: this.level.survivors.length,
      firesExtinguished: extinguishedGroups.length,
      firesTotal: MISSION_01.objectiveFireGroups.length,
      damagePercent,
      timeSeconds: this.runner.elapsed,
      batteryLeft: this.drone.state.battery / this.drone.state.batteryMax,
      reward,
      reputation,
    };

    this.lastResult = result;
    this.rewardPaid = reward;

    save.addMoney(reward);
    save.addReputation(reputation);
    save.unlock('battery.reinforced');
    save.markTutorialSeen();
    save.recordMission(MISSION_01.id, {
      completed: true,
      bestTime: result.timeSeconds,
      bestDamage: damagePercent,
      survivorsRescued: rescued,
    });

    bus.emit('mission:complete', result);
    this.hud.setVisible(false);
    this.screens.showResult(result, true);
    this.mode = 'result';
  }

  /* ------------------------------------------------------------------ */
  /* Главный цикл                                                        */
  /* ------------------------------------------------------------------ */

  private frame = (now: number): void => {
    requestAnimationFrame(this.frame);

    // Ограничение шага: после сворачивания вкладки dt может быть огромным.
    // Нижняя граница не менее важна: отрицательный шаг разворачивает
    // экспоненту в damp() и за пару кадров разносит всё состояние в бесконечность.
    const rawDt = Math.max(0, Math.min(0.05, (now - this.lastTime) / 1000));
    this.lastTime = now;
    this.debug.tick(rawDt);

    this.input.poll(rawDt);
    if (this.input.consumePause()) {
      if (this.mode === 'playing') this.pause();
      else if (this.mode === 'paused') this.resume();
    }

    switch (this.mode) {
      case 'playing':
        this.stepPlaying(rawDt);
        break;
      case 'failing':
        this.stepIdleWorld(rawDt);
        this.transitionTimer -= rawDt;
        if (this.transitionTimer <= 0) this.recoverFromCheckpoint();
        break;
      case 'finishing':
        this.stepIdleWorld(rawDt);
        this.runner.update(rawDt);
        this.transitionTimer -= rawDt;
        if (this.transitionTimer <= 0) this.showResults();
        break;
      default:
        this.stepIdleWorld(rawDt);
    }

    this.render.update(rawDt);
    this.render.applyShake();
    this.render.render();
  };

  /** Мир продолжает жить и в меню — огонь горит, дым идёт, камера кружит. */
  private stepIdleWorld(dt: number): void {
    this.worldTime += dt;
    this.level.animate(this.worldTime, dt);
    this.updateWind();
    this.fires.update(dt, this.windVec.x, this.windVec.z);
    this.drone.root.position.copy(this.flight.position);
    this.drone.updateVisuals(dt, this.flight.velocity, this.flight.yaw, this.flight.throttle, !this.flight.landed);

    if (this.mode === 'menu' || this.mode === 'briefing') {
      // Медленный облёт площадки, пока игрок в меню.
      this.rig.yaw += dt * 0.12;
      this.rig.pitch = 0.22;
    }

    this.rig.update(dt, this.flight.position, 0);
    this.updateFog();
    this.updateAudio(dt);
  }

  private stepPlaying(rawDt: number): void {
    this.worldTime += rawDt;

    // Замедление времени в обучающих врезках.
    this.timeScale = damp(this.timeScale, this.timeScaleTarget, cfg.sim.timeScaleResponse, rawDt);
    const dt = rawDt * this.timeScale;

    /* --- Камера ---------------------------------------------------- */
    const look = this.input.consumeLook();
    this.rig.rotate(look.dx, look.dy);

    /* --- Физика фиксированным шагом -------------------------------- */
    this.updateWind();
    this.fires.getUpdraft(this.flight.position, this.updraft);
    this.flight.setWind(this.windVec.x, this.windVec.y, this.windVec.z);
    this.flight.setUpdraft(this.updraft.x, this.updraft.y, this.updraft.z);

    const step = cfg.sim.fixedStep;
    this.accumulator = Math.min(this.accumulator + dt, step * cfg.sim.maxSubSteps);
    const flightInput = {
      moveX: this.input.moveX,
      moveY: this.input.moveY,
      climb: this.input.climb,
      cameraYaw: this.rig.heading,
    };

    while (this.accumulator >= step) {
      this.accumulator -= step;
      this.flight.update(step, flightInput, this.drone.state.payload, this.level.colliders, this.level.bounds);
      if (this.flight.justTookOff) bus.emit('drone:takeoff');
      if (this.flight.justLanded) {
        bus.emit('drone:landed', { onHelipad: this.isOnHelipad() });
        audio.impact(0.25);
      }
    }

    // Меш дрона переносится до расчёта прицела: иначе сопло отстаёт на кадр.
    this.drone.root.position.copy(this.flight.position);

    /* --- Разрушения ------------------------------------------------ */
    for (const destructible of this.level.destructibles.values()) destructible.update(dt);

    /* --- Огонь, пена, спасение ------------------------------------- */
    this.fires.update(dt, this.windVec.x, this.windVec.z);

    this.updateAim();
    this.foam.update(
      dt,
      this.input.foamHeld,
      this.nozzle,
      this.aimDir,
      this.drone.state,
      this.level.colliders,
      this.fires,
    );

    if (this.input.consumeWinch()) {
      if (!this.rescue.toggleWinch(this.flight.position)) audio.beep(220, 0.12, 0.08);
    }
    this.rescue.update(dt, this.drone, this.flight.position, this.flight.velocity.length());
    this.rescue.setProgressVisual();

    if (this.input.consumeThermal()) {
      const next = !this.render.thermalActive;
      this.render.setThermal(next);
      this.hud.setThermal(next);
      audio.thermalToggle(next);
    }

    /* --- Ресурсы --------------------------------------------------- */
    this.updateBattery(dt);
    this.updateHeat(dt);

    /* --- Визуал ---------------------------------------------------- */
    this.level.animate(this.worldTime, dt);
    this.updateBoundary(rawDt);
    this.drone.updateVisuals(dt, this.flight.velocity, this.flight.yaw, this.flight.throttle, !this.flight.landed);

    const horizontalSpeed = Math.hypot(this.flight.velocity.x, this.flight.velocity.z);
    this.rig.update(rawDt, this.flight.position, clamp01(horizontalSpeed / Math.max(1, cfg.flight.maxSpeed)));

    this.updateFog();
    this.updateAudio(dt);

    /* --- Сценарий и HUD -------------------------------------------- */
    this.runner.update(dt);
    if (this.runner.finished) {
      this.beginFinish();
      return;
    }

    this.updateHud(rawDt, horizontalSpeed);
  }

  /* ------------------------------------------------------------------ */
  /* Подсистемы кадра                                                    */
  /* ------------------------------------------------------------------ */

  private updateWind(): void {
    const w = cfg.wind;
    const gust = 1 + noise1(this.worldTime * w.gustFrequency * Math.PI * 2) * (w.gustAmplitude / Math.max(0.001, w.strength));
    const strength = w.strength * gust;
    this.windVec.set(Math.cos(w.direction) * strength, noise1(this.worldTime * 0.31) * 0.35, Math.sin(w.direction) * strength);
  }

  /**
   * Геозабор: барьер проступает у края, HUD предупреждает, зуммер напоминает.
   * Сигнал повторяется с паузой — постоянный писк у границы бесит сильнее,
   * чем сама граница.
   */
  private updateBoundary(rawDt: number): void {
    this.boundary.update(rawDt, this.flight.position);

    const blocked = this.flight.boundaryBlocked;
    this.hud.setGeofence(this.boundary.proximity, blocked);

    this.geofenceBeepTimer -= rawDt;
    if (blocked) {
      if (!this.geofenceWasBlocked) {
        this.hud.toast(t('hud.geofence'), 'bad', 1.6);
        this.geofenceBeepTimer = 0;
      }
      if (this.geofenceBeepTimer <= 0) {
        this.geofenceBeepTimer = 1.1;
        audio.beep(660, 0.1, 0.08, 'sine');
      }
    }
    this.geofenceWasBlocked = blocked;
  }

  /** Точка вылета струи и направление — целимся туда, куда смотрит камера. */
  private updateAim(): void {
    this.drone.root.updateMatrixWorld();
    this.nozzle.copy(this.drone.nozzleLocal);
    this.drone.root.localToWorld(this.nozzle);

    this.render.camera.getWorldDirection(this.camDir);
    this.aimDir
      .copy(this.render.camera.position)
      .addScaledVector(this.camDir, 42)
      .sub(this.nozzle)
      .normalize();
  }

  private updateBattery(dt: number): void {
    const s = this.drone.state;
    const b = cfg.battery;

    if (this.flight.landed && this.isOnHelipad()) {
      s.battery = Math.min(s.batteryMax, s.battery + b.padChargeRate * dt);
      s.foam = Math.min(s.foamMax, s.foam + cfg.foam.padRefillRate * dt);
    } else if (!this.flight.landed) {
      const stick = Math.min(1, Math.hypot(this.input.moveX, this.input.moveY) + Math.abs(this.input.climb) * 0.6);
      const drain = b.idleDrain + b.manoeuvreDrain * stick + b.payloadDrain * s.payload;
      s.battery = Math.max(0, s.battery - drain * dt);
    }

    const ratio = s.battery / s.batteryMax;
    this.hud.setAdAvailable(!this.adUsedThisFlight && ratio < 0.35 && ratio > 0);

    if (s.battery <= 0) {
      bus.emit('drone:batteryEmpty');
      this.failMission('battery');
    }
  }

  private updateHeat(dt: number): void {
    const heat = this.fires.getHeat(this.flight.position);
    if (heat <= 0.02) return;

    const damage = heat * cfg.fire.heatDps * dt;
    this.drone.state.hull = Math.max(0, this.drone.state.hull - damage);
    this.damageTaken += damage;
    this.render.addShake(heat * dt * 1.5);

    if (heat > 0.55) {
      this.heatWarnTimer -= dt;
      if (this.heatWarnTimer <= 0) {
        this.heatWarnTimer = 7;
        this.runner.say('speaker.elena', 'radio.heat');
      }
      this.hud.flashDamage();
    }

    if (this.drone.state.hull <= 0) {
      bus.emit('drone:destroyed');
      this.failMission('destroyed');
    }
  }

  private heatWarnTimer = 0;

  private updateFog(): void {
    const density = this.fires.getSmokeDensity(this.flight.position);
    this.render.setFogDensity(
      cfg.smoke.fogDensityMin + (cfg.smoke.fogDensityMax - cfg.smoke.fogDensityMin) * density,
    );
  }

  private updateAudio(dt: number): void {
    audio.update(dt, {
      throttle: this.flight.throttle,
      airborne: !this.flight.landed,
      speed: this.flight.velocity.length(),
      fireProximity: clamp01(this.fires.getHeat(this.flight.position) * 0.7 + this.fires.getSmokeDensity(this.flight.position) * 0.5),
      foaming: this.foam.isFiring,
      batteryRatio: this.drone.state.battery / this.drone.state.batteryMax,
    });
  }

  private isOnHelipad(): boolean {
    const pad = this.level.helipad;
    const p = this.flight.position;
    return (
      Math.hypot(p.x - pad.position.x, p.z - pad.position.z) <= pad.radius + 0.6 &&
      Math.abs(p.y - cfg.flight.radius - pad.position.y) < 0.7
    );
  }

  /* ------------------------------------------------------------------ */
  /* HUD                                                                 */
  /* ------------------------------------------------------------------ */

  private updateHud(dt: number, horizontalSpeed: number): void {
    const s = this.drone.state;
    const ratio = s.battery / s.batteryMax;

    this.hud.update(dt, {
      batteryRatio: ratio,
      foamRatio: s.foam / s.foamMax,
      hullRatio: s.hull / cfg.hull.max,
      payload: s.payload,
      altitude: Math.max(0, this.flight.position.y - cfg.flight.radius),
      speed: horizontalSpeed,
      batteryCritical: ratio < cfg.battery.warnLevel,
    });

    this.hud.setButtons({
      foam: this.input.allowFoam && s.foam > 0,
      winch: this.input.allowWinch,
      thermal: this.input.allowThermal,
      winchArmed: this.rescue.state === 'stowed' && this.rescue.issue === 'ok',
    });

    // Круговая шкала подъёма показывается, только когда трос работает.
    const hoisting = this.rescue.state === 'lowering' || this.rescue.state === 'hoisting';
    this.hud.setHoist(
      hoisting,
      this.rescue.progress,
      this.rescue.issue !== 'ok',
      this.hoistHint(),
    );

    this.updateMarkers();
  }

  private hoistHint(): string {
    switch (this.rescue.issue) {
      case 'ok':
        return t('hud.holdPosition');
      case 'tooFast':
        return t('hud.tooFast');
      case 'tooHigh':
        return t('hud.tooHigh');
      case 'tooLow':
        return t('hud.tooLow');
      default:
        return t('hud.leftZone');
    }
  }

  /** Проецирует цель текущей фазы на экран; за спиной — прижимает к краю. */
  private updateMarkers(): void {
    this.markers.length = 0;

    const phase = MISSION_01.phases[this.runner.currentPhase];
    const target = phase?.marker ? this.level.markers[phase.marker] : null;

    if (target) {
      const width = window.innerWidth;
      const height = window.innerHeight;
      this.projected.copy(target).project(this.render.camera);

      const behind = this.projected.z > 1;
      let x = (this.projected.x * 0.5 + 0.5) * width;
      let y = (-this.projected.y * 0.5 + 0.5) * height;

      if (behind) {
        // При проекции за камерой знаки инвертируются — разворачиваем вручную.
        x = width - x;
        y = height - y;
      }

      const margin = 46;
      const offscreen = behind || x < margin || x > width - margin || y < margin || y > height - margin;
      x = clamp(x, margin, width - margin);
      y = clamp(y, margin, height - margin);

      this.markers.push({
        id: 'objective',
        x,
        y,
        offscreen,
        label: `${Math.round(target.distanceTo(this.flight.position))} m`,
        goal: phase.goal === true,
      });
    }

    this.hud.setMarkers(this.markers);
  }

  /* ------------------------------------------------------------------ */

  async preloadModels(): Promise<void> {
    await models.preload();
  }

  dispose(): void {
    window.removeEventListener('resize', this.syncViewport);
    this.input.dispose();
    this.hud.dispose();
    this.fires.dispose();
    this.foam.dispose();
    this.rescue.dispose();
    this.boundary.dispose();
    this.drone.dispose();
    this.level.dispose();
    disposeMaterials(this.materials);
    this.render.dispose();
    audio.dispose();
  }
}
