import React, { useEffect, useState } from 'react';
import { ImageIcon, Github } from 'lucide-react';
import { Container } from '../ui/Container';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-transparent backdrop-blur-lg shadow-lg' : 'bg-transparent'
    }`}>
      <Container>
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <ImageIcon className="h-6 w-6 text-blue-500" />
            <span className="text-xl font-bold text-white">EXIF Viewer</span>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/eXeis-ixt/exif"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </Container>
    </nav>
  );
};