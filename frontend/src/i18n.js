import i18n from 'i18next';
import en from '../locales/en.json'
import fr from '../locales/fr.json'
import es from '../locales/es.json'
import lv from '../locales/lv.json'
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import './i18n'; 



i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    // if translation is unsuccessfull, we fallback to English Language
    fallbackLng: 'en', 
  });
// export default i18n;
export default {
  locale: 'en',
  fallbackLocale: 'en',
  messages: { en, fr, es, lv }
}