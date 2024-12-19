import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Container } from '../ui/Container';

interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-black gradient-backdrop text-white">
      <Navbar />
      <Container>
        <main className="pt-24 pb-12">
          {children}
        </main>
      </Container>
      <Footer />
    </div>
  );
};