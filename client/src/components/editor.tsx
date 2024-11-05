import React, { ReactNode, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageContext } from '../provider/language-provide';
interface EditorProps {
  children: ReactNode;
}

const Editor: React.FC<EditorProps> = ({ children }) => {
  const languageContext = useContext(LanguageContext);

  if (!languageContext) {
    throw new Error('MyComponent must be used within a LanguageProvider');
  }

  const { language,setLanguage } = languageContext;
  const switchLanguage = (lang: string) => {
    setLanguage(lang);
  };
  const exPdfClick = async ()=>{
     const requestOptions: RequestInit = {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          url: `http://localhost:5173/${language}`
        })
    }
    const response = await fetch('http://localhost:3000/generate', requestOptions);
    
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    
    // 創建一個隱藏的鏈接來下載文件
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'generated.pdf'); // 指定文件名
    document.body.appendChild(link);
    link.click();

    // 清理 URL 對象和 DOM 元素
    window.URL.revokeObjectURL(url);
    document.body.removeChild(link);
  }
  return (
    <>
      <div className='flex m-4 justify-around'>
        <button onClick={exPdfClick} className="cursor-pointer rounded-lg p-2 flex items-center justify-center bg-blue-500 shadow-lg text-white">Export PDF</button>
        <button onClick={() => switchLanguage('en')} className="cursor-pointer rounded-lg p-2 flex items-center justify-center bg-orange-500 shadow-lg text-white">English</button>
        <button onClick={() => switchLanguage('ch')} className="cursor-pointer rounded-lg p-2 flex items-center justify-center bg-green-500 shadow-lg text-white">中文</button>
      </div>
      
      <div className='flex justify-center'>
        <div id="pdfPanel" className='shadow-md w-[1000px] h-auto'>
          {children}
        </div>
      </div>
      
    </>
  );
};

export default Editor;