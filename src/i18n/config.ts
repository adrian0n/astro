export type SupportedLocale = 'ro' | 'en';

export const DEFAULT_LOCALE: SupportedLocale = 'ro';

export const LOCALES: Record<SupportedLocale, { label: string }> = {
  ro: { label: 'Română' },
  en: { label: 'English' },
};

export const STORAGE_KEY = 'app.locale';



