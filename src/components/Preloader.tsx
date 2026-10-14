import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface PreloaderProps {
  onComplete: () => void;
  lang: 'en' | 'hi';
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete, lang }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Fast mobile timer (max 1.2 seconds total duration)
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const intervalTime = isMobile ? 25 : 35;
    const increment = isMobile ? 8 : 6;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 180);
          return 100;
        }
        return Math.min(100, prev + increment);
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        key="preloader"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0a0909] text-[#FFF3E0] select-none"
      >
        {/* Ambient warm glow */}
        <div className="absolute w-96 h-96 rounded-full bg-gradient-to-tr from-[#FF7A18]/20 via-[#D62828]/15 to-transparent blur-3xl pointer-events-none" />

        <div className="relative flex flex-col items-center">
          {/* Rising Sun & Spinning Dhaba Chakra Graphic */}
          <div className="relative w-36 h-36 flex items-center justify-center">
            {/* Pulsing Sun Body */}
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: [1, 1.12, 1], opacity: 1 }}
              transition={{ repeat: Infinity, duration: 2.8, ease: 'easeInOut' }}
              className="absolute w-24 h-24 rounded-full bg-gradient-to-b from-[#FFB703] via-[#FF7A18] to-[#D62828] shadow-[0_0_40px_rgba(255,122,24,0.6)]"
            />

            {/* Rising Steam wisps */}
            <div className="absolute -top-10 flex gap-2 pointer-events-none">
              <span className="w-1.5 h-7 rounded-full bg-[#FFF3E0]/70 animate-steam-1 blur-[1px]" />
              <span className="w-2 h-9 rounded-full bg-[#FFB703]/80 animate-steam-2 blur-[1px]" />
              <span className="w-1.5 h-6 rounded-full bg-[#FFF3E0]/70 animate-steam-3 blur-[1px]" />
            </div>

            {/* Spinning Dhaba Wheel / Mandala */}
            <motion.svg
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
              className="absolute inset-0 w-full h-full text-[#FFB703]/40"
              viewBox="0 0 100 100"
            >
              <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
              <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" strokeWidth="1" />
              {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
                <line
                  key={deg}
                  x1="50"
                  y1="12"
                  x2="50"
                  y2="20"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  transform={`rotate(${deg} 50 50)`}
                />
              ))}
            </motion.svg>
          </div>

          {/* Brand Name & Hindi typography */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-6 text-center"
          >
            <h2 className="font-desi text-2xl md:text-3xl tracking-wide text-[#FFB703] drop-shadow-md">
              सूर्य शिवा ढाबा
            </h2>
            <p className="font-display text-sm tracking-widest text-[#FFF3E0]/75 uppercase mt-1">
              Surya Shiva Dhaba • NH-9 Hapur
            </p>
          </motion.div>

          {/* Progress bar */}
          <div className="w-56 h-1.5 bg-[#251d18] rounded-full overflow-hidden mt-6 p-0.5 border border-[#FF7A18]/30">
            <motion.div
              className="h-full bg-gradient-to-r from-[#FF7A18] via-[#FFB703] to-[#FFF3E0] rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'easeOut' }}
            />
          </div>

          <div className="flex items-center justify-between w-56 text-[11px] text-[#FFB703]/80 mt-2 font-mono">
            <span>{lang === 'hi' ? 'तंदूर गर्म हो रहा है...' : 'Heating the Tandoor...'}</span>
            <span>{progress}%</span>
          </div>

          {/* Quick Skip button */}
          <button
            onClick={onComplete}
            className="mt-6 text-xs text-[#FFF3E0]/50 hover:text-[#FFB703] transition-colors underline cursor-pointer"
          >
            {lang === 'hi' ? 'सीधे प्रवेश करें' : 'Skip & Enter'}
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
