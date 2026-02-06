import React from 'react';

interface ImageWindowContentProps {
  imageSrc: string;
  altText?: string;
}

const ImageWindowContent: React.FC<ImageWindowContentProps> = ({ imageSrc, altText = 'Image' }) => {
  return (
    <div className="p-4 flex justify-center items-center h-full bg-white">
      <img
        src={imageSrc}
        alt={altText}
        className="max-w-full max-h-full object-contain border border-win95-gray"
      />
    </div>
  );
};

export default ImageWindowContent;
