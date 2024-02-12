import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  th: {
    translation: {
      appName: "ระบบค้นหาพนักงาน",
    },
  },
  en: {
    translation: {
      appName: "Employees Search",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "th",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
