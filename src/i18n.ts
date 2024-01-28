import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

const userLanguage = navigator.language.split("-")[0];

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: userLanguage,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    debug: true,
  });

export { i18n };
