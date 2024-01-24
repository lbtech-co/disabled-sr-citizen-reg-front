import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const userLanguage = navigator.language.split("-")[0];

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "English name": "English name",
        "Nepali name": "Nepali name",
        AppTitle: "Disabled Senior Citizen Registration",
        SN: "S.N",
      },
    },
    ne: {
      translation: {
        Name: "नाम",
        Home: "गृहपृष्ठ",
        State: "राज्य",
        District: "जिल्ला",
        AppTitle: "अपांग र जेष्ठ नागरिक दर्ता",
        Action: "क्रिया",
        SN: "क्र.सं",
        "Local Level": "स्थानीय स्तर",
        "English name": "अंग्रेजी नाम",
        "Nepali name": "नेपाली नाम",
        "Select state": "प्रदेश छान्नुहोस्",
        "Select district": "जिल्ला छान्नुहोस्",
        "Select local level type": "स्थानीय स्तरको प्रकार छान्नुहोस्",
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
