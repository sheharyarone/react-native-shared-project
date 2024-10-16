import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './en.json';
import Fin from './Fin.json';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources: {
    en: en,
    Fin: Fin,
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

const changeLanguage = val => {
  i18n
    .changeLanguage(val)
    .then(async () => {
      console.log(val);
    })
    .catch(err => console.log(err));
};

export default {
  i18n,
  changeLanguage,
};
