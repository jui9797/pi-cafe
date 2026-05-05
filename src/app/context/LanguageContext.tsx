"use client";

import { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "ar";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("en");

  // Effect to handle language attribute only (NOT direction as requested)
  useEffect(() => {
    document.documentElement.lang = lang;
    // Removed automatic RTL direction change per user request
  }, [lang]);

  const isRTL = lang === "ar";

  return (
    <LanguageContext.Provider value={{ lang, setLang, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
