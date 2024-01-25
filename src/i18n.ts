import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { ENGLISH_KEYS } from "./utils/keyNames/english";
import { NEPALI_KEYS } from "./utils/keyNames/nepali";

const userLanguage = navigator.language.split("-")[0];

i18n.use(initReactI18next).init({
  resources: {
    en: ENGLISH_KEYS,
    ne: NEPALI_KEYS,
  },
  lng: userLanguage,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export { i18n };
