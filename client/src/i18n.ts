import {  initReactI18next } from "react-i18next";
import translationEn from "./locales/en_v2.json";
// import translationEn from "./locales/en_v1.json";
import translationCh from "./locales/ch.json";
import i18n from "i18next";
const initI18n = async () => {
  await i18n.use(initReactI18next).init({
    resources: {
      en: { translation: translationEn },
      ch: { translation: translationCh },
    },
    lng: "zh",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });
};

export default initI18n;