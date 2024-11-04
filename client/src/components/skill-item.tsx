import React, { ReactNode } from 'react';
interface SkillItemProps {
  children: ReactNode;
}

const SkillItem: React.FC<SkillItemProps> = ({ children }) => {
  return (
    <>
      <div className="p-2 border rounded-md flex items-center m-1">
        {children}
      </div>
    </>
  );
};

export default SkillItem;