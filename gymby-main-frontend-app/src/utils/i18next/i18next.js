import i18n from "i18next";
import I18NextHttpBackend from "i18next-http-backend";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import {initReactI18next} from "react-i18next";

i18n
    .use(I18NextHttpBackend)
    .use(I18nextBrowserLanguageDetector)
    .use(initReactI18next)
    .init({
        react:{useSuspense:false},
        fallbacking: "ua",
        whitelist: ["ua", "eng"],
        debug: false,
        detection:{
            order: ["localStorage", "cookie"],
            caches: ["localStorage", "cookie"],
        },
        interpolation: {
            escapeValue: false,
        },
    });
export default i18n;