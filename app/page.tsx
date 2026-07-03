'use client';

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import HeroSection from '@/components/HeroSection';
import WhoAttendsSection from '@/components/WhoAttendsSection';
import PartnersTicker from '@/components/PartnersTicker';
import TestimonialsSection from '@/components/TestimonialsSection';
import ExperienceSection from '@/components/ExperienceSection';
import GallerySection from '@/components/GallerySection';
import RegistrationSection from '@/components/RegistrationSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <WhoAttendsSection />
      <PartnersTicker />
      <TestimonialsSection />
      <ExperienceSection />
      <GallerySection />
      <RegistrationSection />
      <Footer />
    </main>
  );
}
