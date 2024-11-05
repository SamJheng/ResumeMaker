import React, { useContext, useEffect } from 'react';
import { Resume } from './resume';
import { LanguageContext } from '../provider/language-provide';


const ResumeEN: React.FC = () => {
  const languageContext = useContext(LanguageContext);
  if (!languageContext) {
    throw new Error('MyComponent must be used within a LanguageProvider');
  }

  const { setLanguage } = languageContext;
  useEffect(()=>{
    setLanguage('en')
  },[])
  return (
    <>
     <Resume></Resume>
    </>
  );
};

export default ResumeEN;