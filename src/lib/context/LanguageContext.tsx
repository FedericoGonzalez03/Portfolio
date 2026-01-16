'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { en } from '@/lib/translations/en';
import { es } from '@/lib/translations/es';
import { pt } from '@/lib/translations/pt';

type Translation = typeof en | typeof es | typeof pt;

interface LanguageContextType {
  language: 'en' | 'es' | 'pt';
  setLanguage: (lang: 'en' | 'es' | 'pt') => void;
  t: Translation;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<'en' | 'es' | 'pt'>('en'); // Default to 'en'
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Ensure this runs only on the client
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('language') as 'en' | 'es' | 'pt';
      setLanguageState(savedLanguage || 'en'); // Set language from localStorage or default to 'en'
      setIsMounted(true); // Mark component as mounted
    }
  }, []);

  const setLanguage = (lang: 'en' | 'es' | 'pt') => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang); // Save language to localStorage
    }
  };

  const t = language === 'en' ? en : language === 'es' ? es : pt;

  if (!isMounted) {
    // Avoid rendering mismatched content during SSR
    return null;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}