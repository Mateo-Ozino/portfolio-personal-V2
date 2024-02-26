import i18next from "i18next"
import { initReactI18next } from "react-i18next"
import { resources } from "./lang/resources"
import LanguageDetector from 'i18next-browser-languagedetector';

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    resources
  })