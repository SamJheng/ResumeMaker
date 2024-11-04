import React, { ReactNode } from 'react';
interface EditorProps {
  children: ReactNode;
}

const Editor: React.FC<EditorProps> = ({ children }) => {
  const exPdfClick = async ()=>{
     const requestOptions = {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          url: 'http://localhost:5173/v1'
        })
    }
    const response = await fetch('http://localhost:3000/generate', requestOptions);
    
    const blob = await response.blob();
    console.log(blob)
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
      <div className='flex m-4'>
        <div onClick={exPdfClick} className="cursor-pointer rounded-lg p-2 flex items-center justify-center bg-blue-500 shadow-lg text-white">Export PDF</div>
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