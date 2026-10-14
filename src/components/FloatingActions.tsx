import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { DHABA_CONFIG } from '../data/dhabaConfig';

interface FloatingActionsProps {
  lang: 'en' | 'hi';
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ lang }) => {
  return (
    <div className="hidden md:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-3 pointer-events-auto">
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${DHABA_CONFIG.brand.whatsapp.replace('+', '')}?text=${encodeURIComponent(DHABA_CONFIG.brand.whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Surya Shiva Dhaba"
        className="group flex items-center gap-2 p-3 sm:px-4 sm:py-2.5 rounded-full bg-[#128C7E] hover:bg-[#075E54] text-white shadow-xl shadow-black/40 border border-emerald-400/40 transition-all duration-300 animate-soft-bounce"
      >
        <MessageCircle className="w-5 h-5 fill-white text-transparent" />
        <span className="hidden sm:inline font-bold text-xs tracking-wide">
          {lang === 'hi' ? 'व्हाट्सएप चैट' : 'WhatsApp'}
        </span>
      </a>

      {/* Direct Call Button */}
      <a
        href={`tel:${DHABA_CONFIG.brand.phoneRaw}`}
        aria-label="Call Surya Shiva Dhaba"
        className="group flex items-center gap-2 p-3 sm:px-4 sm:py-2.5 rounded-full bg-gradient-to-r from-[#FF7A18] to-[#FFB703] hover:from-[#ff882e] hover:to-[#ffc42e] text-black shadow-xl shadow-[#FF7A18]/30 transition-all duration-300 glow-pulsing active:scale-95"
      >
        <Phone className="w-5 h-5" />
        <span className="hidden sm:inline font-display font-extrabold text-xs tracking-wide">
          {lang === 'hi' ? '24 घंटे कॉल करें' : 'Call 24/7'}
        </span>
      </a>
    </div>
  );
};
