import  { createContext, FC, ReactNode, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
interface LanguageContextType {
  language: string;
  setLanguage: (language: string) => void;
}
export const LanguageContext = createContext<LanguageContextType|undefined >(undefined);
interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider :FC<LanguageProviderProps> = ({children})=>{
  const [language,setLanguage] = useState('en');
  const { i18n } = useTranslation();
  useEffect(() => {
    // 當 language 改變時執行的副作用
    console.log(`目前的語言是: ${language}`);
    // 例如，根據選擇的語言載入翻譯文件或內容
    i18n.changeLanguage(language);
  }, [language]);
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}