import React from 'react';
import { Clock, Camera, Map, Settings } from 'lucide-react';
import { ExifSection } from './ExifSection';
import {
  formatExposureTime,
  formatFNumber,
  formatFocalLength,
  formatGPSCoordinate,
  formatDate,
} from '../../utils/exifUtils';

interface ExifDisplayProps {
  exifData: any;
}

export const ExifDisplay: React.FC<ExifDisplayProps> = ({ exifData }) => {
  if (!exifData) {
    return null;
  }

  const sections = [
    {
      title: 'Camera Information',
      icon: Camera,
      data: {
        'Camera Make': exifData.Make || 'N/A',
        'Camera Model': exifData.Model || 'N/A',
        'Lens Model': exifData.LensModel || 'N/A',
      },
    },
    {
      title: 'Image Settings',
      icon: Settings,
      data: {
        'Aperture': formatFNumber(exifData.FNumber),
        'Shutter Speed': formatExposureTime(exifData.ExposureTime),
        'ISO': exifData.ISO ? `ISO ${exifData.ISO}` : 'N/A',
        'Focal Length': formatFocalLength(exifData.FocalLength),
      },
    },
    {
      title: 'Time Information',
      icon: Clock,
      data: {
        'Date Taken': formatDate(exifData.DateTimeOriginal),
        'Date Digitized': formatDate(exifData.DateTimeDigitized),
        'Last Modified': formatDate(exifData.ModifyDate),
      },
    },
    {
      title: 'Location',
      icon: Map,
      data: {
        'Latitude': formatGPSCoordinate(exifData.latitude),
        'Longitude': formatGPSCoordinate(exifData.longitude),
        'Altitude': exifData.altitude ? `${exifData.altitude.toFixed(1)}m` : 'N/A',
      },
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mx-auto">
      {sections.map((section) => (
        <ExifSection
          key={section.title}
          title={section.title}
          icon={section.icon}
          data={section.data}
        />
      ))}
    </div>
  );
};