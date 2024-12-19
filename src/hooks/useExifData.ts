import { useState } from 'react';
import exifr from 'exifr';
import { hasExifData } from '../utils/exifUtils';

export const useExifData = () => {
  const [exifData, setExifData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const processFile = async (file: File) => {
    try {
      setLoading(true);
      setError(null);
      setExifData(null);

      const data = await exifr.parse(file, true);
      
      if (!hasExifData(data)) {
        setError('No EXIF data found in this image. Try uploading a photo taken with a digital camera.');
        return;
      }

      setExifData(data);
    } catch (err) {
      setError('Failed to read EXIF data. Please try a different image.');
      console.error('EXIF parsing error:', err);
    } finally {
      setLoading(false);
    }
  };

  return {
    exifData,
    loading,
    error,
    processFile,
  };
};