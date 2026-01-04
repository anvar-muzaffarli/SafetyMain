import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      az: { translation: require('./locales/az/translation.json') },
      en: { translation: require('./locales/en/translation.json') },
      ru: { translation: require('./locales/ru/translation.json') }
    },
    lng: 'az',
    fallbackLng: 'az',
    interpolation: {
      escapeValue: false
    },
    react: {
      bindI18n: 'languageChanged',
      bindI18nStore: '',
      transEmptyNodeValue: '',
      transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'],
      useSuspense: false
    }
  });

export default i18n;