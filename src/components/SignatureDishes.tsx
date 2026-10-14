import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Flame, Sparkles } from 'lucide-react';
import { DHABA_CONFIG } from '../data/dhabaConfig';

interface SignatureDishesProps {
  lang: 'en' | 'hi';
}

const TiltCard: React.FC<{
  dish: (typeof DHABA_CONFIG.signatureDishes)[0];
  index: number;
  lang: 'en' | 'hi';
}> = ({ dish, index, lang }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCanHover(window.matchMedia('(hover: hover)').matches);
    }
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 200, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 200, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['10deg', '-10deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-10deg', '10deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!canHover || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const imageUrl =
    (DHABA_CONFIG.images as Record<string, string>)[dish.imageKey] ||
    DHABA_CONFIG.images.butterNaan;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: canHover ? rotateX : 0,
        rotateY: canHover ? rotateY : 0,
        transformStyle: 'preserve-3d',
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.5, delay: Math.min(0.2, index * 0.08) }}
      className="group relative rounded-2xl bg-gradient-to-b from-[#231b17] to-[#151210] border border-[#FFB703]/25 hover:border-[#FF7A18]/80 transition-all duration-300 shadow-xl active:scale-[0.98] flex flex-col overflow-hidden"
    >
      {/* 3D Content Container */}
      <div style={{ transform: canHover ? 'translateZ(15px)' : 'none' }} className="flex flex-col h-full">
        {/* Image Frame with Zoom */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#181311]">
          {/* Fallback container */}
          {!imgLoaded && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#291b15] to-[#130f0e] p-4 text-center">
              <Sparkles className="w-5 h-5 text-[#FFB703] animate-pulse mb-1" />
              <span className="font-display font-semibold text-xs text-[#FFB703]">
                {dish.name}
              </span>
            </div>
          )}

          {/* Authentic Dhaba Food Photo (CSS selector 1 applies to card 3: Tandoori Roti) */}
          <img
            src={imageUrl}
            alt={dish.name}
            width={400}
            height={300}
            loading="lazy"
            referrerPolicy="no-referrer"
            onLoad={() => setImgLoaded(true)}
            className={`w-full h-full object-cover object-center brightness-[1.04] contrast-[1.04] saturate-[1.08] transition-transform duration-500 ease-out transform-gpu sm:group-hover:scale-105 will-change-transform ${
              imgLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />

          {/* Gradient Overlay for Legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#151210] via-black/25 to-transparent pointer-events-none" />

          {/* Specialty Tag (Single-line quiet marker) */}
          <div className="absolute top-3 left-3 bg-[#0f0e0e]/85 backdrop-blur-md border border-[#FFB703]/30 px-2.5 py-1 rounded-md text-[11px] font-medium text-[#FFB703] flex items-center gap-1.5 shadow-md">
            <Flame className="w-3 h-3 text-[#FF7A18]" />
            <span>{dish.specialty}</span>
          </div>

          {/* 100% Real Dhaba Photo Badge */}
          <div className="absolute bottom-2.5 right-2.5 bg-[#140f0c]/90 backdrop-blur-md border border-[#FFB703]/30 px-2 py-0.5 rounded text-[10px] font-mono text-[#FFB703] flex items-center gap-1 shadow-md pointer-events-none">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Original Photo</span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-baseline justify-between gap-2 mb-1">
              <h3 className="font-display font-bold text-lg sm:text-xl text-[#FFF3E0] group-hover:text-[#FFB703] transition-colors">
                {dish.name}
              </h3>
            </div>
            
            <p className="font-desi text-sm sm:text-base text-[#FFB703] mb-1.5 leading-none">
              {dish.hindiName}
            </p>

            <p className="font-body text-xs sm:text-sm text-[#FFF3E0]/75 line-clamp-2 leading-relaxed">
              {lang === 'hi' ? dish.hindiTagline : dish.tagline}
            </p>
          </div>

          {/* Bottom Callout without inventing prices */}
          <div className="mt-3.5 pt-3 border-t border-[#FFB703]/15 flex items-center justify-between text-xs">
            <span className="text-[#FF7A18] font-semibold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Pure Vegetarian
            </span>
            <span className="text-[#FFF3E0]/60 italic font-mono text-[11px]">
              Signature Recipe
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const SignatureDishes: React.FC<SignatureDishesProps> = ({ lang }) => {
  return (
    <section id="signatures" className="py-16 md:py-28 bg-[#110e0d] relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 rounded-full bg-[#FF7A18]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="flex items-center justify-center gap-2 text-xs md:text-sm font-semibold tracking-wider uppercase text-[#FF7A18] mb-2">
            <Sparkles className="w-4 h-4 text-[#FFB703]" />
            <span>{lang === 'hi' ? 'ढाबे की खास पहचान' : 'Chef’s Highway Signatures'}</span>
          </div>

          <h2 className="font-display font-black text-2xl sm:text-4xl text-[#FFF3E0] tracking-tight mb-2.5 text-balance">
            {lang === 'hi'
              ? 'असली देसी स्वाद, हर निवाले में प्यार'
              : 'The Four Pillars of Surya Shiva Dhaba'}
          </h2>

          <p className="font-body text-sm sm:text-base text-[#FFF3E0]/80">
            {lang === 'hi'
              ? 'यात्रियों द्वारा सबसे अधिक पसंद किए जाने वाले हमारे चार खास व्यंजन, जिन्हें चखे बिना एनएच-9 का सफर अधूरा है।'
              : 'Loved by thousands of NH-9 commuters. Freshly prepared, slow-simmered, and served with unconditional warmth.'}
          </p>
        </div>

        {/* 4 Cards Grid (Single column on 360-430px mobile, 2 col on tablet, 4 col on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {DHABA_CONFIG.signatureDishes.map((dish, index) => (
            <TiltCard key={dish.id} dish={dish} index={index} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  );
};
