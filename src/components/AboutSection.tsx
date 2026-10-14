import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Star, Clock, UtensilsCrossed, Award, Quote } from 'lucide-react';
import { DHABA_CONFIG } from '../data/dhabaConfig';

interface AboutSectionProps {
  lang: 'en' | 'hi';
}

export const AboutSection: React.FC<AboutSectionProps> = ({ lang }) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  const stats = [
    {
      value: '4.8',
      label: lang === 'hi' ? 'गूगल रेटिंग' : 'Google Rating',
      icon: Star,
      sub: '57+ Reviews',
    },
    {
      value: '24/7',
      label: lang === 'hi' ? 'हमेशा खुला' : 'Always Open',
      icon: Clock,
      sub: 'Day & Night',
    },
    {
      value: '100+',
      label: lang === 'hi' ? 'व्यंजन मेन्यू पर' : 'Dishes on Menu',
      icon: UtensilsCrossed,
      sub: '100% Pure Veg',
    },
    {
      value: 'NH-9',
      label: lang === 'hi' ? 'कुचेसर चौपला' : 'Kuchesar Chopala',
      icon: Award,
      sub: 'District Hapur',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-[#14100e] relative overflow-hidden">
      {/* Subtle background ambient light */}
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-[#FF7A18]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image Stack / Dhaba Atmosphere */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-[#FFB703]/25 bg-[#1f1814] shadow-2xl aspect-[4/3]">
              {!imgLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-[#251b15] text-[#FFB703]">
                  <span className="font-desi text-lg">सूर्य शिवा ढाबा • अपनों जैसा अहसास</span>
                </div>
              )}
              <img
                src={DHABA_CONFIG.images.dhabaNight}
                alt="Surya Shiva Dhaba Highway Dining Experience"
                width={600}
                height={450}
                loading="lazy"
                referrerPolicy="no-referrer"
                onLoad={() => setImgLoaded(true)}
                className={`w-full h-full object-cover object-center brightness-[1.04] contrast-[1.04] saturate-[1.08] transition-opacity duration-700 ${
                  imgLoaded ? 'opacity-95' : 'opacity-0'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#14100e] via-transparent to-transparent pointer-events-none" />
              
              {/* Authentic Photo Tag */}
              <div className="absolute top-4 left-4 bg-[#140f0c]/90 backdrop-blur-md border border-[#FFB703]/35 px-3 py-1 rounded-md text-xs font-mono text-[#FFB703] flex items-center gap-1.5 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Original Dhaba Food Photo</span>
              </div>
            </div>

            {/* Overlapping secondary feature card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:right-6 bg-[#201713]/95 backdrop-blur-md border border-[#FF7A18]/40 p-4 sm:p-5 rounded-xl shadow-2xl max-w-xs"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-[#FF7A18] to-[#FFB703] flex items-center justify-center text-black font-black">
                  <Star className="w-5 h-5 fill-black" />
                </div>
                <div>
                  <div className="font-display font-extrabold text-lg text-[#FFF3E0]">
                    4.8 / 5.0 Rating
                  </div>
                  <div className="text-xs text-[#FFB703]">
                    57+ Verified Google Reviews
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Owner's Words & Narrative */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#FF7A18] mb-2">
              <span>{lang === 'hi' ? 'हमारी कहानी' : 'Our Story & Philosophy'}</span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#FFF3E0] tracking-tight mb-6">
              {lang === 'hi' ? 'स्वाद जो घर की याद दिला दे' : 'The Real Dhaba Experience on NH-9'}
            </h2>

            {/* Owner's Quote Callout */}
            <div className="relative bg-[#1c1511] border-l-0 rounded-2xl p-6 sm:p-7 border border-[#FFB703]/25 shadow-lg mb-8">
              <Quote className="w-8 h-8 text-[#FF7A18]/30 mb-2" />
              <p className="font-body text-base sm:text-lg text-[#FFF3E0] italic font-medium leading-relaxed">
                &ldquo;{lang === 'hi' ? DHABA_CONFIG.brand.ownerQuoteHindi : DHABA_CONFIG.brand.ownerQuote}&rdquo;
              </p>
              <div className="mt-4 flex items-center justify-between text-xs text-[#FFB703]">
                <span className="font-desi text-sm">{DHABA_CONFIG.brand.hindiName}</span>
                <span className="font-mono text-[#FFF3E0]/60">Chopala, NH-9 Hapur</span>
              </div>
            </div>

            <p className="font-body text-sm sm:text-base text-[#FFF3E0]/80 leading-relaxed mb-8">
              {lang === 'hi'
                ? 'सूर्य शिवा ढाबा सिर्फ एक रेस्टोरेंट नहीं, बल्कि हाईवे पर सफर करने वाले हर मुसाफिर, ड्राइवर भाई और परिवारों के लिए एक ऐसा आशियाना है जहां आपको गर्मागर्म ताजा खाना, शुद्ध देशी घी का तड़का और सत्कार मिलता है।'
                : 'Located right on NH-9 at Kuchesar Road, Chopala, Surya Shiva Dhaba is the favorite pit-stop for commuters traveling between Delhi, Ghaziabad, Hapur, and Moradabad. Whether you crave a quick kulhad chai or an elaborate North Indian feast with your family, our hearth is open 24 hours.'}
            </p>

            {/* Animated Quantitative Counters */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-[#FFB703]/15">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="font-display font-black text-2xl sm:text-3xl text-[#FFB703] tabular-nums">
                    {stat.value}
                  </span>
                  <span className="font-medium text-xs text-[#FFF3E0] mt-0.5">
                    {stat.label}
                  </span>
                  <span className="text-[11px] text-[#FFF3E0]/50 font-mono">
                    {stat.sub}
                  </span>
                </div>
              ))}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
