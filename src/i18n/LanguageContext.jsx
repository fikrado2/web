import { createContext, useContext, useEffect, useState } from "react";
import { translations, detectLanguage, SUPPORTED_LANGS } from "./translations.js";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => detectLanguage());

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = translations[lang].meta.title;
  }, [lang]);

  const t = translations[lang];

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang,
        t,
        languages: SUPPORTED_LANGS,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
