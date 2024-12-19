import React from 'react';
import { ImageIcon, Heart, Camera, Clock, Map, Settings } from 'lucide-react';
import { Container } from '../ui/Container';

export const Footer = () => {
  const features = [
    { icon: Camera, label: 'Camera Information' },
    { icon: Settings, label: 'Image Settings' },
    { icon: Map, label: 'GPS Location' },
    { icon: Clock, label: 'Time Information' },
  ];

  return (
    <footer className="bg-black/60 backdrop-blur-sm border-t border-gray-800 py-12 mt-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <ImageIcon className="h-6 w-6 text-blue-500" />
              <span className="text-xl font-bold text-white">EXIF Viewer</span>
            </div>
            <p className="text-gray-400">
              A powerful tool for photographers and enthusiasts to analyze image metadata 
              and camera settings with a beautiful, modern interface.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Features</h3>
            <div className="grid grid-cols-2 gap-3">
              {features.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors">
                  <Icon className="h-4 w-4" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="flex items-center justify-center gap-1 text-gray-400">
            Made with <Heart className="h-4 w-4 text-indigo-500" /> by Adons Tech's Development team
          </p>
        </div>
      </Container>
    </footer>
  );
};