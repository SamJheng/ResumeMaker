import React, { ReactNode } from 'react';
interface SectionProps {
  children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ children }) => {
  return (
    <>
      <section className="p-5 container mx-auto">
        {children}
      </section>
    </>
  );
};

export default Section;