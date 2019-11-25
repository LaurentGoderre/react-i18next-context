import i18next from 'i18next';
import React from 'react';
import { initReactI18next} from 'react-i18next';

i18next.use(initReactI18next);

export const toggleLanguage = (lang, cb) => {
  return i18next.changeLanguage(lang, cb);
}

export const LanguageContext = React.createContext({
  lang: 'en',
  toggleLanguage,
});

export const init = (i18n) => {
  i18next.init({
    lng: i18n.lang
  });
  i18n.i18next = i18next;

  return i18n;
}

export * from 'react-i18next';
