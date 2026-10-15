import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Menu, X, Languages, Clock, Navigation, UtensilsCrossed } from 'lucide-react';
import { DHABA_CONFIG } from '../data/dhabaConfig';

interface NavbarProps {
  lang: 'en' | 'hi';
  onToggleLang: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, onToggleLang }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Body scroll lock on mobile when drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsScrolled(currentScrollY > 40);

      // Hide on scroll down, show on scroll up (unless mobile menu is open)
      if (!mobileMenuOpen) {
        if (currentScrollY > lastScrollY && currentScrollY > 120) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, mobileMenuOpen]);

  const navLinks = [
    { label: lang === 'hi' ? 'होम' : 'Home', href: '#home' },
    { label: lang === 'hi' ? 'मेन्यू' : 'Menu', href: '#menu' },
    { label: lang === 'hi' ? 'हमारे बारे में' : 'About', href: '#about' },
    { label: lang === 'hi' ? 'रिव्यूज़' : 'Reviews', href: '#reviews' },
    { label: lang === 'hi' ? 'गैलरी' : 'Gallery', href: '#gallery' },
    { label: lang === 'hi' ? 'पता व दिशा' : 'Visit Us', href: '#visitus' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 pt-safe ${
          isScrolled
            ? 'bg-[#0f0d0c]/95 backdrop-blur-md border-b border-[#FFB703]/15 shadow-xl shadow-black/40 py-2.5 sm:py-3'
            : 'bg-gradient-to-b from-[#0f0d0c]/95 via-[#0f0d0c]/60 to-transparent py-3 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3 md:gap-8">
            
            {/* Zone 1: Brand Wordmark */}
            <a
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="group flex items-center gap-2.5 whitespace-nowrap shrink-0 text-decoration-none min-h-[48px]"
            >
              <img
                src="/surya-shiva-logo.png"
                alt=""
                className="w-10 h-10 rounded-full object-cover shadow-[0_0_12px_rgba(255,122,24,0.4)] group-hover:scale-105 transition-transform"
              />
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-base sm:text-lg md:text-xl tracking-tight text-[#FFF3E0] group-hover:text-[#FFB703] transition-colors leading-tight">
                  Surya Shiva Dhaba
                </span>
                <span className="font-desi text-[11px] text-[#FFB703] leading-none">
                  सूर्य शिवा ढाबा • NH-9
                </span>
              </div>
            </a>

            {/* Zone 2: Navigation Links (Desktop) */}
            <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#FFF3E0]/85">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-[#FFB703] transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-[#FF7A18]"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: Actions (Language Toggle + Call Button + Mobile Hamburger) */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              {/* Language Switcher */}
              <button
                onClick={onToggleLang}
                className="flex items-center justify-center gap-1.5 min-h-[44px] min-w-[44px] px-2.5 py-1.5 text-xs font-semibold text-[#FFF3E0] bg-[#221c19] hover:bg-[#2d2420] active:scale-95 border border-[#FFB703]/25 rounded-lg transition-all cursor-pointer"
                title="Toggle English / हिन्दी"
                aria-label="Toggle Language"
              >
                <Languages className="w-4 h-4 text-[#FF7A18]" />
                <span className="font-mono">{lang === 'en' ? 'हिन्दी' : 'EN'}</span>
              </button>

              {/* Glowing Call Now Button (Desktop & Tablet) */}
              <a
                href={`tel:${DHABA_CONFIG.brand.phoneRaw}`}
                className="hidden sm:inline-flex items-center gap-2 min-h-[44px] px-4 py-2 text-xs sm:text-sm font-bold text-black bg-gradient-to-r from-[#FF7A18] to-[#FFB703] rounded-lg shadow-md hover:from-[#ff882e] hover:to-[#ffc42e] transition-all whitespace-nowrap shrink-0 glow-pulsing active:scale-95"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{lang === 'hi' ? 'कॉल करें' : 'Call Now'}</span>
              </a>

              {/* Mobile Menu Toggle Button (Thumb-friendly 48px tap target) */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden flex items-center justify-center min-h-[48px] min-w-[48px] p-2 text-[#FFF3E0] hover:text-[#FFB703] active:scale-90 transition-transform focus:outline-none"
                aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              >
                {mobileMenuOpen ? <X className="w-7 h-7 text-[#FF7A18]" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Full-Screen Animated Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="fixed inset-0 z-50 lg:hidden bg-[#0d0a09] flex flex-col justify-between pt-safe pb-safe"
          >
            {/* Top Bar with Brand & Close Button */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-[#FFB703]/20">
              <div className="flex items-center gap-2">
                <img
                  src="/surya-shiva-logo.png"
                  alt=""
                  className="w-9 h-9 rounded-full object-cover"
                />
                <span className="font-display font-bold text-lg text-[#FFF3E0]">
                  Surya Shiva Dhaba
                </span>
              </div>

              {/* Close Button right within thumb reach */}
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center min-h-[48px] min-w-[48px] p-2 rounded-full bg-[#1e1714] text-[#FFB703] hover:text-white border border-[#FFB703]/30 active:scale-90 transition-transform"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation Links with large tap targets >= 48px */}
            <div className="flex-1 overflow-y-auto px-5 py-6 flex flex-col justify-center gap-2">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between min-h-[52px] px-4 py-3 rounded-xl text-lg font-bold text-[#FFF3E0] hover:bg-[#201815] active:bg-[#2a1e1a] active:scale-[0.98] border border-transparent hover:border-[#FFB703]/20 transition-all"
                >
                  <span className="font-display">{link.label}</span>
                  <span className="text-[#FF7A18] text-xs font-mono">→</span>
                </motion.a>
              ))}
            </div>

            {/* Quick Actions at bottom of mobile menu */}
            <div className="p-5 border-t border-[#FFB703]/20 bg-[#140e0c] flex flex-col gap-3">
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`tel:${DHABA_CONFIG.brand.phoneRaw}`}
                  className="flex items-center justify-center gap-2 min-h-[48px] px-3 py-2 rounded-xl bg-gradient-to-r from-[#FF7A18] to-[#FFB703] text-black font-extrabold text-sm active:scale-95 transition-transform"
                >
                  <Phone className="w-4 h-4" />
                  <span>{lang === 'hi' ? 'सीधे कॉल करें' : 'Call 24 Hours'}</span>
                </a>

                <a
                  href={DHABA_CONFIG.brand.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 min-h-[48px] px-3 py-2 rounded-xl bg-[#221a16] text-[#FFF3E0] border border-[#FFB703]/40 font-bold text-sm active:scale-95 transition-transform"
                >
                  <Navigation className="w-4 h-4 text-[#FF7A18]" />
                  <span>{lang === 'hi' ? 'दिशा देखें' : 'Directions'}</span>
                </a>
              </div>

              <div className="flex items-center justify-between text-xs text-[#FFF3E0]/70 pt-2 font-mono">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Open 24 Hours • NH-9 Hapur
                </span>
                <button
                  onClick={onToggleLang}
                  className="text-[#FFB703] underline font-sans font-semibold cursor-pointer py-1"
                >
                  {lang === 'en' ? 'हिन्दी में बदलें' : 'Switch to English'}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
