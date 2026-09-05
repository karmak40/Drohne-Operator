import './style.css';
import { Game } from '@/core/Game';
import { models } from '@/world/ModelRegistry';
import { audio } from '@/audio/AudioEngine';

const container = document.getElementById('app');
if (!container) throw new Error('#app не найден');

async function boot(): Promise<void> {
  // Если появятся .glb-модели, они подгрузятся до сборки уровня и подменят примитивы.
  await models.preload();

  const game = new Game(container!);
  (window as unknown as { game: Game }).game = game;

  // Аудиоконтекст стартует только по жесту пользователя — политика браузеров.
  const unlock = (): void => {
    void audio.start();
    window.removeEventListener('pointerdown', unlock);
    window.removeEventListener('keydown', unlock);
  };
  window.addEventListener('pointerdown', unlock);
  window.addEventListener('keydown', unlock);

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) audio.suspend();
  });
}

void boot().catch((err) => {
  console.error('[boot] игра не запустилась:', err);
  container!.innerHTML = `<div style="padding:32px;font-family:monospace;color:#ff6b6b">
    Не удалось запустить игру.<br><br>${String(err)}
  </div>`;
});
