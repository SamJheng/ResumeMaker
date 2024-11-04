import React from 'react';
interface AvatarsProps {
  srcUrl: string;
}

const Avatars: React.FC<AvatarsProps> = ({ srcUrl }) => {
  return (
    <>
      <div className="size-32">
        <img className="rounded-full size-32" src={srcUrl} alt="avatar"></img>
      </div>
    </>
  );
};

export default Avatars;