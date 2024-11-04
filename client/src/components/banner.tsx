import React, { ReactNode } from 'react';
interface BannerProps {
  children: ReactNode;
}

const Banner: React.FC<BannerProps> = ({ children }) => {
  return (
    <>
      <div className="bg-[#223A2A] text-white">
        {children}
      </div>
    </>
  );
};

export default Banner;