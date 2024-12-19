import React from 'react';
import { ImageIcon, Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <ImageIcon className="h-6 w-6 text-blue-500" />
              <span className="text-xl font-bold text-white">EXIF Viewer</span>
            </div>
            <p className="text-gray-400">
              A powerful tool for photographers and enthusiasts to analyze image metadata and camera settings.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Features</h3>
            <ul className="space-y-2">
              <li>Camera Information</li>
              <li>Image Settings</li>
              <li>GPS Location</li>
              <li>Time Information</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="flex items-center justify-center gap-1">
            Made with <Heart className="h-4 w-4 text-red-500" /> by EXIF Viewer Team
          </p>
        </div>
      </div>
    </footer>
  );
}