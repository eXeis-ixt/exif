import React from 'react';

interface ImagePreviewProps {
  src: string;
  alt?: string;
}

export const ImagePreview: React.FC<ImagePreviewProps> = ({ src, alt = "Uploaded image" }) => {
  return (
    <div className="relative group">
      <img
        src={src}
        alt={alt}
        className="max-w-md w-full h-auto rounded-lg shadow-xl transition-transform group-hover:scale-[1.02]"
      />
      <div className="absolute inset-0 rounded-lg ring-1 ring-white/10 group-hover:ring-blue-500/50 transition-colors"></div>
    </div>
  );
};