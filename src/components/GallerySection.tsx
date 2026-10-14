import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Image as ImageIcon, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { DHABA_CONFIG, GalleryItem } from '../data/dhabaConfig';

interface GallerySectionProps {
  lang: 'en' | 'hi';
}

export const GallerySection: React.FC<GallerySectionProps> = ({ lang }) => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [isZoomed, setIsZoomed] = useState<boolean>(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const filteredGallery = DHABA_CONFIG.gallery.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  const openLightbox = (item: GalleryItem, index: number) => {
    setSelectedImage(item);
    setLightboxIndex(index);
    setIsZoomed(false);
  };

  const nextLightbox = (e?: React.MouseEvent | React.TouchEvent) => {
    e?.stopPropagation();
    setIsZoomed(false);
    const nextIdx = (lightboxIndex + 1) % filteredGallery.length;
    setLightboxIndex(nextIdx);
    setSelectedImage(filteredGallery[nextIdx]);
  };

  const prevLightbox = (e?: React.MouseEvent | React.TouchEvent) => {
    e?.stopPropagation();
    setIsZoomed(false);
    const prevIdx = (lightboxIndex - 1 + filteredGallery.length) % filteredGallery.length;
    setLightboxIndex(prevIdx);
    setSelectedImage(filteredGallery[prevIdx]);
  };

  const handleLightboxTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleLightboxTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (diff > 50) {
      nextLightbox();
    } else if (diff < -50) {
      prevLightbox();
    }
    setTouchStartX(null);
  };

  return (
    <section id="gallery" className="py-16 md:py-28 bg-[#0c0a0a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-[#FF7A18] mb-2">
            <ImageIcon className="w-4 h-4 text-[#FFB703]" />
            <span>{lang === 'hi' ? 'तस्वीरें' : 'Atmosphere & Dishes'}</span>
          </div>

          <h2 className="font-display font-black text-2xl sm:text-4xl text-[#FFF3E0] tracking-tight mb-2.5">
            {lang === 'hi' ? 'सूर्य शिवा ढाबा की झलकियां' : 'Glimpses of Surya Shiva Dhaba'}
          </h2>

          <p className="font-body text-sm sm:text-base text-[#FFF3E0]/75">
            {lang === 'hi'
              ? 'गरमागरम रोटियां, भाप उड़ाती कुल्हड़ चाय और हाईवे की सुहानी शाम।'
              : 'From sizzling kadai gravies and tandoori parathas to the cozy roadside ambience of NH-9.'}
          </p>
        </div>

        {/* Category Filters with comfortable tap targets */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {[
            { id: 'all', label: lang === 'hi' ? 'सभी' : 'All Glimpses' },
            { id: 'food', label: lang === 'hi' ? 'व्यंजन' : 'Food & Thali' },
            { id: 'chai', label: lang === 'hi' ? 'कुल्हड़ चाय' : 'Kulhad Chai' },
            { id: 'tandoor', label: lang === 'hi' ? 'तंदूर' : 'Tandoor' },
            { id: 'ambience', label: lang === 'hi' ? 'माहौल' : 'Ambience' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`min-h-[44px] px-3.5 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all cursor-pointer active:scale-95 ${
                activeFilter === cat.id
                  ? 'bg-[#FF7A18] text-black font-bold shadow-md'
                  : 'bg-[#1a1412] text-[#FFF3E0]/75 hover:text-[#FFB703] border border-[#FFB703]/20'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid (Single column on smallest mobile, 2 on tablet, 4 on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredGallery.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ delay: Math.min(0.2, index * 0.04) }}
              onClick={() => openLightbox(item, index)}
              className="group relative rounded-xl overflow-hidden aspect-[4/3] bg-[#1a1310] border border-[#FFB703]/20 hover:border-[#FF7A18] cursor-pointer shadow-lg active:scale-[0.98] transition-transform"
            >
              <img
                src={item.imageUrl}
                alt={item.alt}
                width={500}
                height={375}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center brightness-[1.03] contrast-[1.04] saturate-[1.08] transition-transform duration-500 ease-out sm:group-hover:scale-105"
              />

              {/* Real photo badge */}
              <div className="absolute top-2.5 right-2.5 bg-black/75 backdrop-blur-sm border border-[#FFB703]/30 px-1.5 py-0.5 rounded text-[9px] font-mono text-[#FFB703] flex items-center gap-1 shadow z-10 pointer-events-none">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Original Photo</span>
              </div>

              {/* Hover overlay with Title */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="font-display font-bold text-sm sm:text-base text-[#FFF3E0]">
                  {item.title}
                </span>
                <span className="font-desi text-xs text-[#FFB703]">
                  {item.hindiTitle}
                </span>
                <span className="mt-1 text-[11px] text-[#FF7A18] flex items-center gap-1">
                  <ZoomIn className="w-3.5 h-3.5" />
                  Tap to expand
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal with Touch Swipe & Zoom */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            onTouchStart={handleLightboxTouchStart}
            onTouchEnd={handleLightboxTouchEnd}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-3 sm:p-6"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full max-h-[92vh] flex flex-col items-center justify-center"
            >
              {/* Close Button right in thumb reach */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 sm:right-0 min-h-[48px] min-w-[48px] p-2 text-white hover:text-[#FF7A18] active:scale-90 flex items-center justify-center cursor-pointer"
                aria-label="Close image modal"
              >
                <X className="w-7 h-7" />
              </button>

              {/* Main Image with Tap-to-Zoom */}
              <div
                onClick={() => setIsZoomed(!isZoomed)}
                className="relative w-full overflow-hidden rounded-xl border border-[#FFB703]/30 shadow-2xl bg-black flex items-center justify-center cursor-zoom-in"
              >
                <img
                  src={selectedImage.imageUrl}
                  alt={selectedImage.alt}
                  referrerPolicy="no-referrer"
                  className={`max-h-[70vh] sm:max-h-[75vh] w-auto max-w-full object-contain brightness-[1.04] contrast-[1.04] saturate-[1.08] transition-transform duration-300 ${
                    isZoomed ? 'scale-125' : 'scale-100'
                  }`}
                />
              </div>

              {/* Caption */}
              <div className="w-full mt-3 flex items-center justify-between text-xs sm:text-sm text-[#FFF3E0]/80 px-2">
                <div>
                  <span className="font-bold text-[#FFB703] mr-2">
                    {selectedImage.title}
                  </span>
                  <span className="font-desi text-[#FFF3E0]/70">
                    ({selectedImage.hindiTitle})
                  </span>
                </div>
                <div className="font-mono text-[#FFF3E0]/50 shrink-0">
                  {lightboxIndex + 1} of {filteredGallery.length}
                </div>
              </div>

              {/* Lightbox Prev / Next Controls with 48px tap targets */}
              {filteredGallery.length > 1 && (
                <>
                  <button
                    onClick={prevLightbox}
                    className="absolute left-2 sm:-left-12 top-1/2 -translate-y-1/2 min-h-[48px] min-w-[48px] rounded-full bg-black/75 border border-white/20 text-white hover:text-[#FF7A18] active:scale-90 flex items-center justify-center cursor-pointer shadow-lg"
                    aria-label="Previous photo"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextLightbox}
                    className="absolute right-2 sm:-right-12 top-1/2 -translate-y-1/2 min-h-[48px] min-w-[48px] rounded-full bg-black/75 border border-white/20 text-white hover:text-[#FF7A18] active:scale-90 flex items-center justify-center cursor-pointer shadow-lg"
                    aria-label="Next photo"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}

              {/* Swipe helper on mobile */}
              <div className="text-[11px] text-[#FFF3E0]/50 mt-1 sm:hidden">
                Swipe left/right or tap to zoom
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
