import React from 'react';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import HeroSection from '../components/HeroSection';
import About from './About';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      
      <ServicesSection />
    </div>
  );
}