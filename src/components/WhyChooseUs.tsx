import React from 'react';
import { motion } from 'motion/react';
import { UtensilsCrossed, Zap, HeartHandshake, Sparkles, Users, Clock } from 'lucide-react';
import { DHABA_CONFIG } from '../data/dhabaConfig';

interface WhyChooseUsProps {
  lang: 'en' | 'hi';
}

const iconMap = {
  UtensilsCrossed: UtensilsCrossed,
  Zap: Zap,
  HeartHandshake: HeartHandshake,
  Sparkles: Sparkles,
  Users: Users,
  Clock: Clock,
};

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ lang }) => {
  return (
    <section className="py-20 bg-[#0e0c0b] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold tracking-wider uppercase text-[#FF7A18] mb-2"
          >
            {lang === 'hi' ? 'हमारी विशेषताएं' : 'The Surya Shiva Advantage'}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-extrabold text-3xl sm:text-4xl text-[#FFF3E0] tracking-tight mb-3"
          >
            {lang === 'hi' ? 'यात्री हमें क्यों चुनते हैं?' : 'Why Travelers Choose Us'}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-body text-sm sm:text-base text-[#FFF3E0]/75"
          >
            {lang === 'hi'
              ? 'सड़क पर सुरक्षित, स्वच्छ और स्वादिष्ट पड़ाव, जहां हर समय आपका स्वागत है।'
              : 'Reliable highway dining with uncompromising hygiene, warm hospitality, and pure flavor.'}
          </motion.p>
        </div>

        {/* 6 Feature Icon Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DHABA_CONFIG.whyChooseUs.map((item, index) => {
            const IconComponent = iconMap[item.icon as keyof typeof iconMap] || Sparkles;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="group relative p-6 rounded-2xl bg-[#171311] border border-[#FFB703]/20 hover:border-[#FF7A18]/70 shadow-lg hover:shadow-xl hover:shadow-[#FF7A18]/10 transition-all duration-300 flex flex-col"
              >
                {/* Icon Container with subtle glow */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#2d1b14] to-[#1c120f] border border-[#FF7A18]/40 flex items-center justify-center text-[#FFB703] group-hover:text-black group-hover:bg-gradient-to-tr group-hover:from-[#FF7A18] group-hover:to-[#FFB703] transition-all duration-300 mb-4 shadow-md">
                  <IconComponent className="w-6 h-6 transition-transform group-hover:scale-110" />
                </div>

                <h3 className="font-display font-bold text-lg text-[#FFF3E0] group-hover:text-[#FFB703] transition-colors mb-1">
                  {lang === 'hi' ? item.hindiTitle : item.title}
                </h3>

                <p className="font-body text-xs sm:text-sm text-[#FFF3E0]/70 leading-relaxed mt-1">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
