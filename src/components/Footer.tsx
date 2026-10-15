import React from 'react';
import { Phone, MapPin, Navigation, MessageCircle, Heart } from 'lucide-react';
import { DHABA_CONFIG } from '../data/dhabaConfig';

interface FooterProps {
  lang: 'en' | 'hi';
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  return (
    <footer className="relative bg-[#090808] border-t border-[#FFB703]/20 pt-16 pb-12 overflow-hidden select-none">
      
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-48 bg-gradient-to-t from-[#FF7A18]/10 via-[#D62828]/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          
          {/* Col 1: Brand & Philosophy */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <img
                src="/surya-shiva-logo.png"
                alt=""
                className="w-9 h-9 rounded-full object-cover"
              />
              <span className="font-display font-extrabold text-xl text-[#FFF3E0]">
                Surya Shiva Dhaba
              </span>
            </div>

            <p className="font-desi text-base text-[#FFB703] mb-2">
              {DHABA_CONFIG.brand.hindiName}
            </p>

            <p className="font-body text-xs sm:text-sm text-[#FFF3E0]/70 leading-relaxed mb-4">
              {lang === 'hi' ? DHABA_CONFIG.brand.hindiTagline : DHABA_CONFIG.brand.tagline}
            </p>

            <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Serving 24 Hours • 365 Days</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-[#FFB703] mb-4">
              {lang === 'hi' ? 'महत्वपूर्ण लिंक' : 'Quick Navigation'}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#FFF3E0]/75">
              <li>
                <a href="#home" className="hover:text-[#FF7A18] transition-colors">
                  {lang === 'hi' ? 'होम' : 'Home'}
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#FF7A18] transition-colors">
                  {lang === 'hi' ? 'मेन्यू एवं मूल्य सूची' : 'Printed Dhaba Menu'}
                </a>
              </li>
              <li>
                <a href="#signatures" className="hover:text-[#FF7A18] transition-colors">
                  {lang === 'hi' ? 'खास पहचान (दाल मखनी, चाय)' : 'Signature Dishes'}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#FF7A18] transition-colors">
                  {lang === 'hi' ? 'हमारे बारे में' : 'About Our Dhaba'}
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#FF7A18] transition-colors">
                  {lang === 'hi' ? 'यात्रियों के रिव्यू' : 'Customer Reviews (4.8★)'}
                </a>
              </li>
              <li>
                <a href="#visitus" className="hover:text-[#FF7A18] transition-colors">
                  {lang === 'hi' ? 'पता व लोकेशन' : 'Location on NH-9'}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Highway Location & Hours */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-[#FFB703] mb-4">
              {lang === 'hi' ? 'लोकेशन व समय' : 'NH-9 Highway Location'}
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-[#FFF3E0]/75">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#FF7A18] shrink-0 mt-0.5" />
                <span>Kuchesar Road, Chopala, NH-9, District Hapur, Uttar Pradesh</span>
              </div>
              <div className="font-mono text-xs text-[#FFB703]">
                Plus code: {DHABA_CONFIG.brand.plusCode}
              </div>
              <div className="pt-2">
                <a
                  href={DHABA_CONFIG.brand.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#FF7A18] hover:underline font-semibold"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: Contact & Social Placeholders */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-[#FFB703] mb-4">
              {lang === 'hi' ? 'संपर्क करें' : 'Get In Touch'}
            </h4>
            <div className="space-y-3">
              <a
                href={`tel:${DHABA_CONFIG.brand.phoneRaw}`}
                className="flex items-center gap-2 text-xs sm:text-sm text-[#FFF3E0]/80 hover:text-[#FFB703] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#FF7A18]" />
                <span>{DHABA_CONFIG.brand.phone}</span>
              </a>

              <a
                href={`https://wa.me/${DHABA_CONFIG.brand.whatsapp.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs sm:text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Instant Inquiry</span>
              </a>

              {/* Social Channels Placeholder */}
              <div className="pt-2">
                <div className="text-[11px] text-[#FFF3E0]/50 mb-2">Connect with us:</div>
                <div className="flex items-center gap-3">
                  {['Google', 'Facebook', 'Instagram', 'YouTube'].map((social) => (
                    <span
                      key={social}
                      className="px-2.5 py-1 text-[11px] bg-[#1a1412] border border-[#FFB703]/20 rounded text-[#FFF3E0]/70 hover:text-[#FFB703] hover:border-[#FF7A18] transition-colors cursor-pointer"
                    >
                      {social}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Hashtags Strip */}
        <div className="py-6 border-t border-[#FFB703]/15 flex flex-wrap items-center justify-center gap-3 text-xs font-mono text-[#FFB703]">
          {DHABA_CONFIG.brand.hashtags.map((tag) => (
            <span
              key={tag}
              className="bg-[#171210] border border-[#FFB703]/20 px-3 py-1 rounded-full hover:border-[#FF7A18] transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Oversized Animated Brand Text */}
        <div className="pt-8 pb-4 text-center overflow-hidden">
          <span className="font-display font-black text-4xl sm:text-6xl md:text-8xl lg:text-9xl text-transparent bg-clip-text bg-gradient-to-b from-[#241712] to-[#090808] tracking-tighter uppercase select-none block hover:from-[#3a2016] transition-all duration-700">
            SURYA SHIVA DHABA
          </span>
        </div>

        {/* Bottom Bar: Copyright & Apno Jaisa Ehsaas */}
        <div className="pt-6 border-t border-[#FFB703]/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FFF3E0]/50 gap-2">
          <div>
            © {new Date().getFullYear()} Surya Shiva Dhaba (सूर्य शिवा ढाबा). All rights reserved.
          </div>
          <div className="flex items-center gap-1.5 text-xs text-[#FFF3E0]/70">
            <span>Desi Swad</span>
            <span className="text-[#FF7A18]">·</span>
            <span className="flex items-center gap-1">
              Apno Jaisa Ehsaas <Heart className="w-3 h-3 fill-[#D62828] text-[#D62828]" />
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
