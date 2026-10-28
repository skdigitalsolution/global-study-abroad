import React from 'react';
import HeroSection from '../components/home/HeroSection';
import TrustStats from '../components/home/TrustStats';
import DestinationSection from '../components/home/DestinationSection';
import ServicesSection from '../components/home/ServicesSection';
import HowItWorks from '../components/home/HowItWorks';
import TestimonialsSection from '../components/home/TestimonialsSection';
import FAQSection from '../components/home/FAQSection';
import NewsletterSection from '../components/home/NewsletterSection';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <TrustStats />
      <DestinationSection />
      <ServicesSection />
      <HowItWorks />
      <TestimonialsSection />
      <FAQSection />
      <NewsletterSection />
    </main>
  );
}

