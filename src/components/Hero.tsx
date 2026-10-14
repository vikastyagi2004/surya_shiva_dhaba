import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Star, Clock, Navigation, Utensils, ChevronDown, Sparkles } from 'lucide-react';
import { DHABA_CONFIG } from '../data/dhabaConfig';

interface HeroProps {
  lang: 'en' | 'hi';
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  const headlineEnglish = 'Desi Swad, Apno Jaisa Ehsaas';
  const headlineHindi = 'देसी स्वाद, अपनों जैसा अहसास';
  const currentHeadline = lang === 'hi' ? headlineHindi : headlineEnglish;
  const letters = Array.from(currentHeadline);

  const [imgLoaded, setImgLoaded] = useState(false);
  const [isLiteMode, setIsLiteMode] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Lite mode and visibility detection for performance
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isLowCore = typeof navigator !== 'undefined' && navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4;
      const isSaveData = typeof navigator !== 'undefined' && (navigator as any).connection?.saveData;
      const isMobile = window.innerWidth < 640;
      if (isLowCore || isSaveData || isMobile) {
        setIsLiteMode(true);
      }
    }

    const onVisibilityChange = () => {
      setIsVisible(!document.hidden);
    };

    document.addEventListener('visibilitychange', onVisibilityChange);
    return () => document.removeEventListener('visibilitychange', onVisibilityChange);
  }, []);

  // Filtered sparks count: fewer on lite mode
  const sparks = isLiteMode
    ? [
        { left: '20%', delay: '0s', duration: '4s' },
        { left: '75%', delay: '1s', duration: '4.5s' },
      ]
    : [
        { left: '15%', delay: '0s', duration: '3.8s' },
        { left: '28%', delay: '1.2s', duration: '4.5s' },
        { left: '65%', delay: '0.5s', duration: '3.2s' },
        { left: '80%', delay: '2.1s', duration: '4.8s' },
        { left: '45%', delay: '1.8s', duration: '3.5s' },
      ];

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex flex-col justify-between pt-24 pb-8 sm:pb-12 overflow-hidden bg-gradient-to-b from-[#120f0d] via-[#1c1410] to-[#0d0c0c]"
    >
      {/* 1. Parallax Sunset Highway Background Scene (Layered SVG + CSS) */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Sky gradient with sunset hues */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#251014] via-[#521c17] to-[#120f0d] opacity-90" />

        {/* Glowing Setting Sun */}
        <div className="absolute top-[16%] sm:top-[18%] left-1/2 -translate-x-1/2 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-t from-[#FF7A18] via-[#FFB703] to-[#FFF3E0] blur-[2px] opacity-80 animate-sun-radiance shadow-[0_0_80px_rgba(255,122,24,0.5)]" />

        {/* Ambient warm radial glow */}
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-full max-w-[650px] h-[350px] bg-gradient-to-b from-[#FF7A18]/20 via-[#D62828]/15 to-transparent blur-3xl" />

        {/* Layered Mountain / Hill Silhouettes */}
        <svg
          className="absolute bottom-24 sm:bottom-28 md:bottom-32 left-0 w-full h-28 sm:h-36 md:h-52 text-[#18110f]/90"
          preserveAspectRatio="none"
          viewBox="0 0 1440 260"
        >
          <path
            fill="currentColor"
            d="M0,192L60,181.3C120,171,240,149,360,154.7C480,160,600,192,720,186.7C840,181,960,139,1080,138.7C1200,139,1320,181,1380,202.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>

        <svg
          className="absolute bottom-16 sm:bottom-20 md:bottom-24 left-0 w-full h-24 sm:h-32 md:h-44 text-[#120d0b]"
          preserveAspectRatio="none"
          viewBox="0 0 1440 240"
        >
          <path
            fill="currentColor"
            d="M0,128L80,144C160,160,320,192,480,186.7C640,181,800,139,960,138.7C1120,139,1280,181,1360,202.7L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          />
        </svg>

        {/* Highway Road Surface with Animated Dashed Line */}
        <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-24 md:h-32 bg-gradient-to-b from-[#181514] to-[#080707] border-t-2 border-[#FF7A18]/30">
          {/* Animated road markings */}
          <svg className="w-full h-full" preserveAspectRatio="none">
            <line
              x1="0"
              y1="50%"
              x2="100%"
              y2="50%"
              stroke="#FFB703"
              strokeWidth="3.5"
              strokeOpacity="0.75"
              className={isVisible ? 'animate-road-dashes' : ''}
            />
          </svg>

          {/* Roadside milestone marker */}
          <div className="absolute right-4 sm:right-6 top-2 flex items-center gap-1.5 sm:gap-2 bg-[#2a221d] border border-[#FFB703]/30 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded text-[10px] sm:text-[11px] font-mono text-[#FFB703]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A18]" />
            <span>NH-9 • HAPUR KM 0</span>
          </div>

          {/* Truck Silhouette Driving Across */}
          <div className={`absolute bottom-6 sm:bottom-8 left-0 pointer-events-none ${isVisible ? 'animate-truck-pass' : ''}`}>
            <svg
              className="w-12 sm:w-16 h-8 sm:h-10 text-[#FFB703]/90 drop-shadow-[0_0_8px_rgba(255,183,3,0.5)]"
              viewBox="0 0 64 36"
              fill="currentColor"
            >
              <path d="M2 18 L2 6 Q2 4 4 4 L34 4 Q36 4 36 6 L36 10 L48 10 Q50 10 52 13 L56 18 Q58 20 58 23 L58 28 Q58 30 56 30 L52 30 Q52 26 48 26 Q44 26 44 30 L22 30 Q22 26 18 26 Q14 26 14 30 L4 30 Q2 30 2 28 Z" />
              <circle cx="18" cy="30" r="4.5" fill="#110d0c" stroke="#FFB703" strokeWidth="1" />
              <circle cx="48" cy="30" r="4.5" fill="#110d0c" stroke="#FFB703" strokeWidth="1" />
              <polygon points="58,22 80,18 80,32 58,26" fill="rgba(255,243,224,0.3)" />
            </svg>
          </div>
        </div>

        {/* Floating Sparks & Embers (Lighter on mobile) */}
        {isVisible && (
          <div className="absolute inset-0 pointer-events-none">
            {sparks.map((spark, idx) => (
              <div
                key={idx}
                className="absolute bottom-16 sm:bottom-20 w-1.5 h-1.5 rounded-full bg-[#FFB703] animate-ember blur-[0.5px]"
                style={{
                  left: spark.left,
                  animationDelay: spark.delay,
                  animationDuration: spark.duration,
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* 2. Hero Main Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headline, Trust Badges, CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Trust Metadata Line (Zero-Pill Discipline with bullet separators) */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-1.5 sm:gap-2 text-xs sm:text-sm text-[#FFF3E0]/85 mb-3 sm:mb-4"
            >
              <span className="flex items-center gap-1 font-semibold text-[#FFB703]">
                <Star className="w-3.5 h-3.5 fill-[#FFB703] text-[#FFB703]" />
                <span className="font-mono">4.8</span>
                <span className="text-[#FFF3E0]/70 font-normal">({DHABA_CONFIG.brand.reviewCount} reviews)</span>
              </span>
              <span aria-hidden="true" className="text-[#FF7A18]">·</span>
              <span className="flex items-center gap-1 text-emerald-400 font-medium">
                <Clock className="w-3.5 h-3.5" />
                <span>Open 24 Hours</span>
              </span>
              <span aria-hidden="true" className="text-[#FF7A18]">·</span>
              <span className="text-[#FFF3E0]/80">Dine-in</span>
              <span aria-hidden="true" className="text-[#FF7A18]">·</span>
              <span className="text-[#FFF3E0]/80">Takeaway</span>
              <span aria-hidden="true" className="text-[#FF7A18]">·</span>
              <span className="text-[#FFF3E0]/80">Delivery</span>
            </motion.div>

            {/* Dhaba Name Subtitle */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="mb-1 sm:mb-2"
            >
              <h2 className="font-desi text-xl sm:text-2xl md:text-3xl text-[#FFB703] tracking-wide">
                सूर्य शिवा ढाबा • NH-9
              </h2>
            </motion.div>

            {/* Staggered Letter-by-Letter Headline with Fluid clamp() font-size */}
            <h1 className="font-display font-black text-[clamp(1.75rem,5.5vw,3.75rem)] text-[#FFF3E0] tracking-tight leading-[1.12] mb-3 sm:mb-4 max-w-2xl text-balance">
              {letters.map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.1 + index * 0.015,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={
                    char === ',' || char === '❤️'
                      ? 'text-[#FF7A18]'
                      : 'inline-block'
                  }
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </h1>

            {/* Tagline / Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="font-body text-sm sm:text-base md:text-lg text-[#FFF3E0]/90 max-w-xl mb-6 sm:mb-7 leading-relaxed"
            >
              {lang === 'hi'
                ? 'एनएच-9 पर कुचेसर रोड चौपला (हापुड़) का सबसे पसंदीदा ढाबा। कोयले की आंच पर पकी दाल मखनी, कड़ाही पनीर, गरमागरम तंदूरी रोटियां और कुल्हड़ की कड़क मसाला चाय।'
                : 'Kuchesar Road, Chopala on NH-9. Authentic slow-cooked Dal Makhani, Kadai Paneer, piping-hot Tandoori breads, and signature earthen Kulhad Chai. Fresh, fast, and 24 hours open.'}
            </motion.p>

            {/* CTAs: View Menu & Get Directions (At least 48px tap targets) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 w-full sm:w-auto"
            >
              <a
                href="#menu"
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-base text-black bg-gradient-to-r from-[#FF7A18] via-[#FFB703] to-[#FF7A18] hover:brightness-110 shadow-lg shadow-[#FF7A18]/25 transition-all active:scale-95 cursor-pointer"
              >
                <Utensils className="w-5 h-5 text-black" />
                <span>{lang === 'hi' ? 'मेन्यू देखें' : 'View Full Menu'}</span>
              </a>

              <a
                href={DHABA_CONFIG.brand.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-base text-[#FFF3E0] bg-[#221c19]/90 hover:bg-[#2d2521] border border-[#FFB703]/35 hover:border-[#FFB703] transition-all active:scale-95 cursor-pointer"
              >
                <Navigation className="w-5 h-5 text-[#FF7A18]" />
                <span>{lang === 'hi' ? 'रास्ता देखें (Google Maps)' : 'Get Directions'}</span>
              </a>
            </motion.div>

            {/* Quick trust highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-5 sm:mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs text-[#FFF3E0]/70"
            >
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#FFB703]" />
                <span>100% Pure Vegetarian</span>
              </span>
              <span aria-hidden="true" className="text-[#FF7A18]">·</span>
              <span>Clean Washrooms</span>
              <span aria-hidden="true" className="text-[#FF7A18]">·</span>
              <span>Ample Parking</span>
            </motion.div>
          </div>

          {/* Right Column: Featured Kulhad Chai Hero Image with Steam Animation */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-56 sm:w-68 md:w-80 aspect-square"
            >
              {/* Outer decorative circular glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#FF7A18]/40 via-[#FFB703]/30 to-[#D62828]/20 blur-xl animate-pulse" />

              {/* Gold/Saffron border frame */}
              <div className="relative w-full h-full rounded-full p-2 sm:p-2.5 bg-gradient-to-tr from-[#FF7A18] via-[#FFB703] to-[#D62828] shadow-[0_0_35px_rgba(255,122,24,0.35)]">
                
                {/* Image container */}
                <div className="w-full h-full rounded-full overflow-hidden bg-[#161312] relative">
                  
                  {/* Layered Rising Steam Effect over Kulhad Chai (Only if tab visible) */}
                  {isVisible && (
                    <div className="absolute top-4 sm:top-6 left-1/2 -translate-x-1/2 z-20 flex gap-2 pointer-events-none">
                      <span className="w-2 h-10 sm:h-14 rounded-full bg-white/60 animate-steam-1 blur-[1.5px]" />
                      <span className="w-2.5 h-12 sm:h-16 rounded-full bg-[#FFF3E0]/70 animate-steam-2 blur-[1.5px]" />
                      <span className="w-2 h-9 sm:h-12 rounded-full bg-white/50 animate-steam-3 blur-[1.5px]" />
                    </div>
                  )}

                  {/* Fallback container if image loading */}
                  {!imgLoaded && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-tr from-[#2a1b15] to-[#171210] text-[#FFB703] text-center p-4">
                      <span className="font-desi text-lg">कुल्हड़ मसाला चाय</span>
                      <span className="text-xs text-[#FFF3E0]/70 mt-1">Simmering on coals...</span>
                    </div>
                  )}

                  {/* Real Kulhad Chai Image with width/height attributes for zero layout shift (CSS selector 2) */}
                  <img
                    src={DHABA_CONFIG.images.kulhadChaiReal}
                    alt="Traditional Kulhad Chai on granite counter at Surya Shiva Dhaba"
                    width={400}
                    height={400}
                    referrerPolicy="no-referrer"
                    onLoad={() => setImgLoaded(true)}
                    className={`w-full h-full object-cover object-center brightness-[1.05] contrast-[1.05] saturate-[1.10] transform transition-transform duration-700 ease-out sm:hover:scale-105 transform-gpu will-change-transform ${
                      imgLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                  />

                  {/* Bottom Vignette for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Floating Badge on the image */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#1a1412]/95 border border-[#FFB703]/50 shadow-xl px-3.5 py-1.5 rounded-full flex items-center gap-2 text-xs font-semibold text-[#FFF3E0]"
              >
                <span className="w-2 h-2 rounded-full bg-[#FF7A18] animate-ping" />
                <span className="font-desi text-xs sm:text-sm text-[#FFB703]">ताज़ा कुल्हड़ चाय</span>
                <span className="text-[#FFF3E0]/60">·</span>
                <span className="text-[11px] sm:text-xs">Clay Cup</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* 3. Bottom Scroll Indicator */}
      <div className="relative z-10 flex flex-col items-center justify-center mt-4 sm:mt-6">
        <a
          href="#menu"
          className="flex flex-col items-center gap-1 text-xs text-[#FFF3E0]/60 hover:text-[#FFB703] transition-colors min-h-[44px] justify-center"
          aria-label="Scroll down to menu"
        >
          <span className="text-[11px] uppercase tracking-widest font-mono">
            {lang === 'hi' ? 'नीचे मेन्यू देखें' : 'Explore Menu'}
          </span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#FF7A18]" />
        </a>
      </div>
    </section>
  );
};
