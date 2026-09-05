import { bus } from '@/core/EventBus';
import { LOCALES, LOCALE_NAMES, type LocaleCode, type StringKey } from './locales';

export { LOCALE_NAMES };
export type { LocaleCode, StringKey };

const STORAGE_KEY = 'do.locale';
const SUPPORTED: LocaleCode[] = ['ru', 'en', 'de'];

function detectLocale(): LocaleCode {
  const saved = localStorage.getItem(STORAGE_KEY) as LocaleCode | null;
  if (saved && SUPPORTED.includes(saved)) return saved;

  for (const lang of navigator.languages ?? [navigator.language]) {
    const code = lang.slice(0, 2).toLowerCase() as LocaleCode;
    if (SUPPORTED.includes(code)) return code;
  }
  return 'en';
}

let current: LocaleCode = detectLocale();

export function getLocale(): LocaleCode {
  return current;
}

export function setLocale(code: LocaleCode): void {
  if (!SUPPORTED.includes(code) || code === current) return;
  current = code;
  localStorage.setItem(STORAGE_KEY, code);
  document.documentElement.lang = code;
  bus.emit('i18n:changed', { locale: code });
}

export function cycleLocale(): LocaleCode {
  const next = SUPPORTED[(SUPPORTED.indexOf(current) + 1) % SUPPORTED.length];
  setLocale(next);
  return next;
}

export function t(key: StringKey, vars?: Record<string, string | number>): string {
  let str: string = LOCALES[current][key] ?? LOCALES.en[key] ?? key;
  if (vars) {
    for (const [name, value] of Object.entries(vars)) {
      str = str.replaceAll(`{${name}}`, String(value));
    }
  }
  return str;
}

/**
 * Помечает элемент как локализуемый. При смене языка все помеченные
 * элементы обновляются автоматически — см. applyTranslations().
 */
export function bindText(el: HTMLElement, key: StringKey, vars?: Record<string, string | number>): HTMLElement {
  el.dataset.i18n = key;
  if (vars) el.dataset.i18nVars = JSON.stringify(vars);
  el.textContent = t(key, vars);
  return el;
}

export function applyTranslations(root: ParentNode = document): void {
  root.querySelectorAll<HTMLElement>('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n as StringKey;
    const vars = el.dataset.i18nVars ? JSON.parse(el.dataset.i18nVars) : undefined;
    el.textContent = t(key, vars);
  });
}

document.documentElement.lang = current;
bus.on('i18n:changed', () => applyTranslations());

/** Код языка для синтеза речи / формата чисел. */
export function bcp47(): string {
  return { ru: 'ru-RU', en: 'en-US', de: 'de-DE' }[current];
}
