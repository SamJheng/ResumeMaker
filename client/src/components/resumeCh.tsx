import React, { useContext, useEffect } from 'react';
import { Resume } from './resume';
import { LanguageContext } from '../provider/language-provide';


const ResumeCH: React.FC = () => {
  const languageContext = useContext(LanguageContext);

  if (!languageContext) {
    throw new Error('MyComponent must be used within a LanguageProvider');
  }

  const { setLanguage } = languageContext;
  useEffect(()=>{
    setLanguage('ch')
  },[])
  return (
    <>
     <Resume></Resume>
    </>
  );
};

export default ResumeCH;