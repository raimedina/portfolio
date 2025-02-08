import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./locales/en.json";
import translationPT from "./locales/pt.json";
import translationES from "./locales/es.json";

const savedLanguage = localStorage.getItem("language") || "en";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translationEN },
      pt: { translation: translationPT },
      es: { translation: translationES },
    },
    lng: savedLanguage,
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

export default i18n;
