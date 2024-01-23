// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const userLanguage = navigator.language.split("-")[0];

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        dashboard: "Dashboard",
        Name: "Name",
        Home: "Home",
        State: "State",
        States: "States",
        District: "District",
        Districts: "Districts",
        Submit: "Submit",
        Action: "Action",
        "Local Level": "Local Level",
        "English name": "English name",
        "Nepali name": "Nepali name",
        AppTitle: "Disabled Senior Citizen Registration",
        SN: "S.N",
      },
    },
    ne: {
      translation: {
        dashboard: "ड्यासबोर्ड",
        Name: "नाम",
        Home: "गृहपृष्ठ",
        State: "राज्य",
        States: "राज्यहरू",
        District: "जिल्ला",
        Districts: "जिल्लाहरू",
        "Local Level": "स्थानीय स्तर",
        "English name": "अंग्रेजी नाम",
        "Nepali name": "नेपाली नाम",
        AppTitle: "अपांग र जेष्ठ नागरिक दर्ता",
        Submit: "प्रस्तुत",
        Action: "क्रिया",
        SN: "क्र.सं",
      },
    },
  },
  lng: userLanguage,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export { i18n };
