import { DEFAULT_LOCALE, STORAGE_KEY, type SupportedLocale } from './config';
import ro from './ro.json';
import en from './en.json';

export type Messages = typeof ro;

const catalogs: Record<SupportedLocale, Messages> = {
  ro,
  en,
};

export function getInitialLocale(): SupportedLocale {
  if (typeof window !== 'undefined') {
    const stored = window.localStorage.getItem(STORAGE_KEY) as SupportedLocale | null;
    if (stored && catalogs[stored]) return stored;
    const nav = window.navigator.language.toLowerCase();
    if (nav.startsWith('ro')) return 'ro';
  }
  return DEFAULT_LOCALE;
}

let currentLocale: SupportedLocale = DEFAULT_LOCALE;
let subscribers: Array<() => void> = [];

export function t(path: string): string {
  const segments = path.split('.');
  let node: any = catalogs[currentLocale] as any;
  for (const key of segments) {
    node = node?.[key];
    if (node === undefined) break;
  }
  return typeof node === 'string' ? node : path;
}

export function getLocale(): SupportedLocale {
  return currentLocale;
}

export function setLocale(locale: SupportedLocale) {
  if (!(locale in catalogs)) return;
  currentLocale = locale;
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(STORAGE_KEY, locale);
    document.documentElement.lang = locale;
  }
  subscribers.forEach((cb) => cb());
}

// For server-side usage in Astro frontmatter
export const setServerLocale = (locale: SupportedLocale) => {
  if (!(locale in catalogs)) return;
  currentLocale = locale;
};

export function initLocale() {
  const initial = getInitialLocale();
  setLocale(initial);
}

export function subscribe(cb: () => void) {
  subscribers.push(cb);
  return () => {
    subscribers = subscribers.filter((x) => x !== cb);
  };
}


