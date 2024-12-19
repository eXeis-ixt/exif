import React, { useState } from 'react';
import { ImageIcon } from 'lucide-react';
import { PageLayout } from './components/layout/PageLayout';
import { DropZone } from './components/exif/DropZone';
import { ExifDisplay } from './components/exif/ExifDisplay';
import { ImagePreview } from './components/exif/ImagePreview';
import { useExifData } from './hooks/useExifData';
import './styles/gradients.css';

function App() {
  const [image, setImage] = useState<string | null>(null);
  const { exifData, loading, error, processFile } = useExifData();

  const handleFileSelect = async (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setImage(e.target?.result as string);
    };
    reader.readAsDataURL(file);
    await processFile(file);
  };

  return (
    <PageLayout>
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-4">
          <ImageIcon className="h-12 w-12 text-blue-500" />
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            EXIF Data Viewer
          </h1>
        </div>
        <p className="text-gray-400 max-w-xl mx-auto text-lg">
          Upload a photo to instantly view its EXIF metadata. Perfect for photographers
          and enthusiasts who want to analyze their images.
        </p>
      </div>

      <div className="max-w-2xl mx-auto mb-12">
        <DropZone onFileSelect={handleFileSelect} />
      </div>

      {loading && (
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-2 text-gray-400">Reading EXIF data...</p>
        </div>
      )}

      {error && (
        <div className="text-center text-red-400 mb-8 max-w-md mx-auto p-4 bg-red-900/50 rounded-lg border border-red-700">
          {error}
        </div>
      )}

      {image && !loading && (
        <div className="flex flex-col items-center gap-12">
          <ImagePreview src={image} />
          <ExifDisplay exifData={exifData} />
        </div>
      )}
    </PageLayout>
  );
}

export default App;