import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, MessageCircle, Navigation, Clock, Check, ExternalLink } from 'lucide-react';
import { DHABA_CONFIG } from '../data/dhabaConfig';

interface VisitUsSectionProps {
  lang: 'en' | 'hi';
}

export const VisitUsSection: React.FC<VisitUsSectionProps> = ({ lang }) => {
  const [loadInteractiveMap, setLoadInteractiveMap] = useState(false);

  return (
    <section id="visitus" className="py-16 md:py-28 bg-[#110e0d] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[350px] bg-[#FF7A18]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#FF7A18] mb-2">
            <MapPin className="w-4 h-4 text-[#FFB703]" />
            <span>NH-9 Highway Landmark</span>
          </div>

          <h2 className="font-display font-black text-2xl sm:text-4xl text-[#FFF3E0] tracking-tight mb-2.5">
            {lang === 'hi' ? 'हमसे मिलने पधारें' : 'Plan Your Pit-Stop on NH-9'}
          </h2>

          <p className="font-body text-sm sm:text-base text-[#FFF3E0]/75">
            {lang === 'hi'
              ? 'हापुड़ व गढ़मुक्तेश्वर के बीच कुचेसर रोड चौपला पर 24 घंटे आपकी सेवा में तत्पर।'
              : 'Conveniently situated at Kuchesar Road Chopala on National Highway 9, District Hapur.'}
          </p>
        </div>

        {/* 2-Column Grid: Location Details vs Embedded Google Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Business Details & Contact Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-5">
            
            {/* Address & Status Card */}
            <div className="rounded-2xl bg-[#191412] border border-[#FFB703]/25 p-5 sm:p-7 shadow-xl">
              
              {/* Pulsing Open 24 Hours Badge */}
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-[#FFB703]/15">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                  </span>
                  <span className="font-display font-bold text-sm text-emerald-400 tracking-wide uppercase">
                    Open 24 Hours
                  </span>
                </div>
                <span className="text-xs text-[#FFB703] font-mono">365 Days</span>
              </div>

              {/* Exact Address */}
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="w-5 h-5 text-[#FF7A18] shrink-0 mt-1" />
                <div>
                  <h3 className="font-display font-bold text-base text-[#FFF3E0]">
                    {DHABA_CONFIG.brand.name} ({DHABA_CONFIG.brand.hindiName})
                  </h3>
                  <p className="font-body text-sm text-[#FFF3E0]/85 mt-1 leading-relaxed">
                    {DHABA_CONFIG.brand.address}
                  </p>
                  <div className="mt-2 text-xs font-mono text-[#FFB703]">
                    Google Plus Code: {DHABA_CONFIG.brand.plusCode}
                  </div>
                </div>
              </div>

              {/* Service Capabilities (Dine-in / Takeaway / Delivery) */}
              <div className="pt-4 border-t border-[#FFB703]/15">
                <div className="text-xs font-medium text-[#FFF3E0]/70 mb-2">Available Services:</div>
                <div className="flex flex-wrap gap-2">
                  {DHABA_CONFIG.brand.services.map((srv) => (
                    <span
                      key={srv}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold bg-[#261c17] text-[#FFF3E0] border border-[#FFB703]/20"
                    >
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{srv}</span>
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Direct Action Buttons: Get Directions, Call, WhatsApp */}
            <div className="flex flex-col gap-3">
              {/* Primary Get Directions Button (min-h-[48px] tap target) */}
              <a
                href={DHABA_CONFIG.brand.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full min-h-[48px] inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-base text-black bg-gradient-to-r from-[#FF7A18] via-[#FFB703] to-[#FF7A18] hover:brightness-110 shadow-lg shadow-[#FF7A18]/25 transition-all active:scale-95 cursor-pointer"
              >
                <Navigation className="w-5 h-5" />
                <span>{lang === 'hi' ? 'गूगल मैप्स पर रास्ता देखें' : 'Get Directions in Google Maps'}</span>
              </a>

              {/* Call & WhatsApp secondary row */}
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`tel:${DHABA_CONFIG.brand.phoneRaw}`}
                  className="min-h-[48px] inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold text-xs sm:text-sm text-[#FFF3E0] bg-[#1e1714] hover:bg-[#281f1b] border border-[#FFB703]/30 active:scale-95 transition-all"
                >
                  <Phone className="w-4 h-4 text-[#FF7A18]" />
                  <span>{lang === 'hi' ? 'फोन करें' : 'Call Dhaba'}</span>
                </a>

                <a
                  href={`https://wa.me/${DHABA_CONFIG.brand.whatsapp.replace('+', '')}?text=${encodeURIComponent(DHABA_CONFIG.brand.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[48px] inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold text-xs sm:text-sm text-[#FFF3E0] bg-[#17251c] hover:bg-[#1d3023] border border-emerald-500/40 text-emerald-300 active:scale-95 transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Travel Time Estimate */}
            <div className="text-xs text-[#FFF3E0]/65 p-3 bg-[#161210] rounded-xl border border-[#FFB703]/10 flex items-center justify-between">
              <span>Approx. 45 min from Ghaziabad</span>
              <span>·</span>
              <span>20 min from Hapur City</span>
            </div>

          </div>

          {/* Right Column: Google Map with Lazy Click-to-Load for mobile data saving */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative w-full h-full min-h-[340px] sm:min-h-[380px] rounded-2xl overflow-hidden border-2 border-[#FFB703]/30 shadow-2xl bg-[#191412]">
              {loadInteractiveMap ? (
                <iframe
                  title="Surya Shiva Dhaba Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3497.8920194884787!2d77.8942!3d28.7523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c9b0e1a3b1a2d%3A0x7d6f5f3e4e9a8b1c!2sKuchesar%20Road%20Chopala%2C%20NH-9%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                  className="w-full h-full border-0 absolute inset-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#241a15] to-[#120e0d] p-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-[#FF7A18]/20 border border-[#FF7A18]/50 flex items-center justify-center text-[#FF7A18] mb-4">
                    <MapPin className="w-7 h-7" />
                  </div>
                  <h4 className="font-display font-bold text-lg text-[#FFF3E0] mb-1">
                    Surya Shiva Dhaba on NH-9
                  </h4>
                  <p className="font-body text-xs sm:text-sm text-[#FFF3E0]/70 max-w-sm mb-5">
                    Kuchesar Road, Chopala, District Hapur, Uttar Pradesh
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xs">
                    <button
                      onClick={() => setLoadInteractiveMap(true)}
                      className="w-full min-h-[48px] px-4 py-2.5 rounded-xl bg-[#2e1d16] hover:bg-[#3d271e] text-[#FFB703] border border-[#FFB703]/35 text-xs sm:text-sm font-semibold active:scale-95 transition-all cursor-pointer"
                    >
                      Load Interactive Map
                    </button>
                    <a
                      href={DHABA_CONFIG.brand.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full min-h-[48px] flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#FF7A18] text-black text-xs sm:text-sm font-bold active:scale-95 transition-all"
                    >
                      <span>Open in App</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <span className="text-[11px] text-[#FFF3E0]/45 mt-3">
                    Click to load saves mobile data on highway networks
                  </span>
                </div>
              )}

              {/* Floating Map Pin Overlay Banner */}
              <div className="absolute top-4 left-4 z-10 bg-[#0f0e0e]/90 backdrop-blur-md border border-[#FFB703]/40 rounded-lg p-2.5 text-xs text-[#FFF3E0] shadow-xl flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF7A18] animate-ping" />
                <span className="font-semibold">Surya Shiva Dhaba • NH-9 Chopala</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
