import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ServicesPreview from '../components/home/ServicesPreview';
import TestimonialsSection from '../components/home/TestimonialsSection';
import ClinicBanner from '../components/home/ClinicBanner';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesPreview />
      <ClinicBanner />
      <TestimonialsSection />
    </>
  );
}
