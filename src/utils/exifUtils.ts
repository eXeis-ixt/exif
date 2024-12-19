// Utility functions for handling EXIF data
export const formatExposureTime = (exposureTime: number): string => {
  if (!exposureTime) return 'N/A';
  if (exposureTime >= 1) return `${exposureTime}s`;
  return `1/${Math.round(1/exposureTime)}s`;
};

export const formatFNumber = (fNumber: number): string => {
  return fNumber ? `ƒ/${fNumber.toFixed(1)}` : 'N/A';
};

export const formatFocalLength = (focalLength: number): string => {
  return focalLength ? `${Math.round(focalLength)}mm` : 'N/A';
};

export const formatGPSCoordinate = (coord: number): string => {
  return coord ? coord.toFixed(6) : 'N/A';
};

export const formatDate = (dateString: string): string => {
  if (!dateString) return 'N/A';
  try {
    return new Date(dateString).toLocaleString();
  } catch {
    return 'Invalid Date';
  }
};

export const hasExifData = (data: any): boolean => {
  if (!data) return false;
  const requiredFields = ['Make', 'Model', 'FNumber', 'ExposureTime', 'ISO', 'FocalLength'];
  return requiredFields.some(field => data[field] != null);
};