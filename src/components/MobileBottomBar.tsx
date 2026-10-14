import React from 'react';
import { Phone, MessageCircle, Navigation, UtensilsCrossed } from 'lucide-react';
import { DHABA_CONFIG } from '../data/dhabaConfig';

interface MobileBottomBarProps {
  lang: 'en' | 'hi';
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ lang }) => {
  const scrollToMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      aria-label="Mobile Bottom Actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#14100e]/95 backdrop-blur-lg border-t border-[#FFB703]/25 shadow-[0_-8px_25px_rgba(0,0,0,0.6)] px-3 pt-2 pb-[max(0.6rem,env(safe-area-inset-bottom))]"
    >
      <div className="grid grid-cols-4 gap-2 max-w-md mx-auto">
        
        {/* 1. Call Button */}
        <a
          href={`tel:${DHABA_CONFIG.brand.phoneRaw}`}
          className="flex flex-col items-center justify-center min-h-[48px] py-1.5 px-1 rounded-xl bg-gradient-to-t from-[#FF7A18] to-[#FFB703] text-black font-extrabold shadow-md active:scale-95 transition-transform"
          aria-label="Call Surya Shiva Dhaba now"
        >
          <Phone className="w-5 h-5 text-black" />
          <span className="text-[11px] font-bold mt-0.5 leading-tight">
            {lang === 'hi' ? 'कॉल करें' : 'Call'}
          </span>
        </a>

        {/* 2. WhatsApp Button */}
        <a
          href={`https://wa.me/${DHABA_CONFIG.brand.whatsapp.replace('+', '')}?text=${encodeURIComponent(DHABA_CONFIG.brand.whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center min-h-[48px] py-1.5 px-1 rounded-xl bg-[#1f2f25] text-emerald-300 border border-emerald-500/40 active:scale-95 transition-transform"
          aria-label="Send WhatsApp message"
        >
          <MessageCircle className="w-5 h-5 text-emerald-400" />
          <span className="text-[11px] font-medium mt-0.5 leading-tight">
            WhatsApp
          </span>
        </a>

        {/* 3. Directions Button */}
        <a
          href={DHABA_CONFIG.brand.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center min-h-[48px] py-1.5 px-1 rounded-xl bg-[#261d19] text-[#FFF3E0] border border-[#FFB703]/30 active:scale-95 transition-transform"
          aria-label="Get Directions in Google Maps"
        >
          <Navigation className="w-5 h-5 text-[#FF7A18]" />
          <span className="text-[11px] font-medium mt-0.5 leading-tight">
            {lang === 'hi' ? 'रास्ता' : 'Directions'}
          </span>
        </a>

        {/* 4. Menu Button */}
        <a
          href="#menu"
          onClick={scrollToMenu}
          className="flex flex-col items-center justify-center min-h-[48px] py-1.5 px-1 rounded-xl bg-[#2a1317] text-[#E5B246] border border-[#E5B246]/40 active:scale-95 transition-transform"
          aria-label="View Dhaba Menu"
        >
          <UtensilsCrossed className="w-5 h-5 text-[#FFB703]" />
          <span className="text-[11px] font-bold mt-0.5 leading-tight">
            {lang === 'hi' ? 'मेन्यू' : 'Menu'}
          </span>
        </a>

      </div>
    </nav>
  );
};
