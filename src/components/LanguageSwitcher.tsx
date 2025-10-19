import React, { useEffect, useState } from 'react';
import { Globe } from 'lucide-react';
import { getInitialLocale, setLocale } from '@/i18n/store';
import { LOCALES, type SupportedLocale } from '@/i18n/config';

export default function LanguageSwitcher() {
  const [locale, setStateLocale] = useState<SupportedLocale>('ro');

  useEffect(() => {
    // Initialize with stored locale or default to Romanian
    const initialLocale = getInitialLocale();
    setStateLocale(initialLocale);
  }, []);

  function onChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const newLocale = e.target.value as SupportedLocale;
    setStateLocale(newLocale);
    setLocale(newLocale);
    
    // Reload page to apply language change
    if (typeof window !== 'undefined') {
      window.location.reload();
    }
  }

  return (
    <div className="flex items-center space-x-2">
      <Globe className="w-4 h-4 text-mystical-300" />
      <select
        className="bg-mystical-900/50 border border-mystical-700 text-mystical-200 text-sm rounded px-2 py-1"
        value={locale}
        onChange={onChange}
        aria-label="Schimbă limba"
      >
        {Object.entries(LOCALES).map(([code, { label }]) => (
          <option key={code} value={code}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}


