export function el<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  className?: string,
  html?: string,
): HTMLElementTagNameMap[K] {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (html !== undefined) node.innerHTML = html;
  return node;
}

export function mount<T extends HTMLElement>(parent: HTMLElement, child: T): T {
  parent.appendChild(child);
  return child;
}

/** Кнопка HUD: помечается как элемент управления, чтобы ввод её не перехватывал. */
export function control<T extends HTMLElement>(node: T): T {
  node.dataset.uiControl = '';
  return node;
}

/**
 * Удержание кнопки на тачскрине и мышью одновременно.
 * Возвращает функцию отписки.
 */
export function onHold(node: HTMLElement, onDown: () => void, onUp: () => void): () => void {
  let active = false;

  const down = (e: Event): void => {
    e.preventDefault();
    e.stopPropagation();
    if (active) return;
    active = true;
    node.classList.add('is-held');
    onDown();
  };
  const up = (e?: Event): void => {
    e?.stopPropagation();
    if (!active) return;
    active = false;
    node.classList.remove('is-held');
    onUp();
  };

  node.addEventListener('pointerdown', down);
  node.addEventListener('pointerup', up);
  node.addEventListener('pointercancel', up);
  node.addEventListener('pointerleave', up);
  window.addEventListener('blur', up);

  return () => {
    node.removeEventListener('pointerdown', down);
    node.removeEventListener('pointerup', up);
    node.removeEventListener('pointercancel', up);
    node.removeEventListener('pointerleave', up);
    window.removeEventListener('blur', up);
  };
}

export function onTap(node: HTMLElement, handler: () => void): () => void {
  const fn = (e: Event): void => {
    e.preventDefault();
    e.stopPropagation();
    handler();
  };
  node.addEventListener('pointerdown', fn);
  return () => node.removeEventListener('pointerdown', fn);
}
