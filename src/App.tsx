/**
 * Surya Shiva Dhaba (सूर्य शिवा ढाबा) - NH-9 Hapur
 * 24-Hours Highway Dhaba Single-Page Application
 */

import React, { useState } from 'react';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MarqueeStrip } from './components/MarqueeStrip';
import { SignatureDishes } from './components/SignatureDishes';
import { FullMenu } from './components/FullMenu';
import { AboutSection } from './components/AboutSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ReviewsSection } from './components/ReviewsSection';
import { GallerySection } from './components/GallerySection';
import { VisitUsSection } from './components/VisitUsSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { MobileBottomBar } from './components/MobileBottomBar';
import { CustomCursor } from './components/CustomCursor';
import { ScrollProgress } from './components/ScrollProgress';

export default function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [lang, setLang] = useState<'en' | 'hi'>('en');

  const toggleLang = () => {
    setLang((prev) => (prev === 'en' ? 'hi' : 'en'));
  };

  return (
    <div className="relative min-h-[100dvh] bg-[#0e0c0b] text-[#FFF3E0] selection:bg-[#FF7A18] selection:text-black font-body overflow-x-hidden">
      {/* 1. Preloader with rising sun, steam & chakra */}
      {loading && (
        <Preloader onComplete={() => setLoading(false)} lang={lang} />
      )}

      {/* 2. Top Scroll Progress Indicator */}
      <ScrollProgress />

      {/* 3. Glowing Custom Ember Cursor on Desktop Only */}
      <CustomCursor />

      {/* 4. Glassmorphism Sticky Navbar */}
      <Navbar lang={lang} onToggleLang={toggleLang} />

      {/* 5. Main Dhaba Sections (With bottom padding on mobile for sticky action bar) */}
      <main className="pb-16 md:pb-0">
        {/* Fullscreen Parallax Sunset Highway Hero */}
        <Hero lang={lang} />

        {/* Infinite Scrolling Dhaba Marquee Strip */}
        <MarqueeStrip lang={lang} />

        {/* 4 Signature Dishes with 3D Tilt */}
        <SignatureDishes lang={lang} />

        {/* Centrepiece: The Printed Dhaba Menu */}
        <FullMenu lang={lang} />

        {/* About / Our Story with Owner's Words & Stats */}
        <AboutSection lang={lang} />

        {/* Why Choose Us: 6 Icon Cards */}
        <WhyChooseUs lang={lang} />

        {/* Verified Customer Reviews Carousel */}
        <ReviewsSection lang={lang} />

        {/* Photo Gallery & Lightbox */}
        <GallerySection lang={lang} />

        {/* Visit Us: Map, Address, Direction Actions */}
        <VisitUsSection lang={lang} />
      </main>

      {/* 6. Footer with Oversized Brand Display */}
      <Footer lang={lang} />

      {/* 7. Floating Call & WhatsApp Action Buttons (Desktop) */}
      <FloatingActions lang={lang} />

      {/* 8. Sticky 4-Button Action Bar on Mobile (Call, WhatsApp, Directions, Menu) */}
      <MobileBottomBar lang={lang} />
    </div>
  );
}
