import React, { useCallback } from 'react';
import { Upload } from 'lucide-react';

interface DropZoneProps {
  onFileSelect: (file: File) => void;
}

export const DropZone: React.FC<DropZoneProps> = ({ onFileSelect }) => {
  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0 && files[0].type.startsWith('image/')) {
      onFileSelect(files[0]);
    }
  }, [onFileSelect]);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      onFileSelect(files[0]);
    }
  }, [onFileSelect]);

  return (
    <div
      className="border-2 border-dashed border-gray-700 rounded-lg p-12 text-center cursor-pointer 
                 hover:border-blue-500 transition-colors bg-gray-800/50 backdrop-blur-sm
                 group relative overflow-hidden"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onClick={() => document.getElementById('fileInput')?.click()}
    >
      <input
        type="file"
        id="fileInput"
        className="hidden"
        accept="image/*"
        onChange={handleFileInput}
      />
      <Upload className="mx-auto h-12 w-12 text-blue-500 mb-4 group-hover:scale-110 transition-transform" />
      <p className="text-lg text-gray-300 mb-2">
        Drag and drop an image here, or click to select
      </p>
      <p className="text-sm text-gray-500">
        Supports JPG, PNG, and other common image formats
      </p>
      
      <div className="absolute inset-0 bg-blue-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
    </div>
  );
};