import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enLang from './locales/en';
import koLang from './locales/ko';
import jaLang from './locales/ja';
import zhLang from './locales/zh';

const currentLng = 'ko';

i18n
  // .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    defaultNS: 'label',
    lng: currentLng,
    fallbackLng: 'en',
    resources: {
      en: enLang as any,
      ko: koLang as any,
      ja: jaLang as any,
      zh: zhLang as any,
    },
    interpolation: {
      escapeValue: false,
    },
    debug: false,
    detection: {
      order: ['path', 'navigator'],
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
