import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ExifSectionProps {
  title: string;
  icon: LucideIcon;
  data: Record<string, string | null>;
}

export const ExifSection: React.FC<ExifSectionProps> = ({ title, icon: Icon, data }) => {
  const hasData = Object.values(data).some(value => value != null && value !== 'N/A');

  if (!hasData) return null;

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-blue-500/50 transition-colors">
      <div className="flex items-center gap-2 mb-4">
        <Icon className="h-5 w-5 text-blue-500" />
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      <div className="space-y-2">
        {Object.entries(data).map(([key, value]) => (
          value && value !== 'N/A' && (
            <div key={key} className="flex justify-between items-center py-1 border-b border-gray-700/50 last:border-0">
              <span className="text-gray-400">{key}:</span>
              <span className="font-medium text-gray-200">{value}</span>
            </div>
          )
        ))}
      </div>
    </div>
  );
};