import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, ExternalLink, CheckCircle } from 'lucide-react';
import { DHABA_CONFIG } from '../data/dhabaConfig';

interface ReviewsSectionProps {
  lang: 'en' | 'hi';
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ lang }) => {
  const [selectedTopic, setSelectedTopic] = useState<string>('All');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  // Filter reviews by topic chip
  const filteredReviews = DHABA_CONFIG.reviews.filter((rev) => {
    if (selectedTopic === 'All') return true;
    return rev.topics.includes(selectedTopic);
  });

  // Auto-slide carousel
  useEffect(() => {
    if (isPaused || filteredReviews.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredReviews.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused, filteredReviews.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredReviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredReviews.length) % filteredReviews.length);
  };

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
    setTouchStartX(null);
  };

  const currentReview = filteredReviews[currentIndex] || filteredReviews[0];

  return (
    <section id="reviews" className="py-16 md:py-28 bg-[#120f0e] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-80 h-80 rounded-full bg-[#FFB703]/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-[#FF7A18] mb-2">
            <Star className="w-3.5 h-3.5 fill-[#FFB703] text-[#FFB703]" />
            <span>Google Rating 4.8★ (57 Reviews)</span>
          </div>

          <h2 className="font-display font-black text-2xl sm:text-4xl text-[#FFF3E0] tracking-tight mb-2.5">
            {lang === 'hi' ? 'यात्रियों के अनुभव' : 'What Highway Travelers Say'}
          </h2>

          <p className="font-body text-sm sm:text-base text-[#FFF3E0]/75">
            {lang === 'hi'
              ? 'गूगल पर यात्रियों और परिवारों द्वारा दिए गए 100% असली व प्रमाणित रिव्यू।'
              : 'Authentic feedback from daily NH-9 drivers, long-distance road trippers, and families.'}
          </p>
        </div>

        {/* Review Topic Filter Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {DHABA_CONFIG.reviewFilterTopics.map((topic) => {
            const isActive = selectedTopic === topic;
            return (
              <button
                key={topic}
                onClick={() => {
                  setSelectedTopic(topic);
                  setCurrentIndex(0);
                }}
                className={`min-h-[44px] px-3.5 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap active:scale-95 ${
                  isActive
                    ? 'bg-[#FF7A18] text-black font-bold shadow-md shadow-[#FF7A18]/25'
                    : 'bg-[#1e1714] text-[#FFF3E0]/85 hover:text-[#FFB703] border border-[#FFB703]/20 hover:bg-[#281e1a]'
                }`}
              >
                {topic}
              </button>
            );
          })}
        </div>

        {/* Carousel Card Container with Touch Swipe support */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative max-w-3xl mx-auto select-none"
        >
          <div className="relative rounded-2xl bg-gradient-to-b from-[#1f1713] to-[#16110f] border border-[#FFB703]/30 p-6 sm:p-10 shadow-2xl min-h-[220px] sm:min-h-[240px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              {currentReview && (
                <motion.div
                  key={currentReview.id + selectedTopic}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                  className="flex flex-col justify-between h-full"
                >
                  <div>
                    {/* Stars visual */}
                    <div className="flex items-center gap-1 mb-3 sm:mb-4">
                      {[...Array(currentReview.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-[#FFB703] text-[#FFB703]" />
                      ))}
                    </div>

                    {/* Review Snippet Quote */}
                    <p className="font-body text-base sm:text-xl text-[#FFF3E0] leading-relaxed italic">
                      &ldquo;{currentReview.text}&rdquo;
                    </p>
                  </div>

                  {/* Reviewer Details */}
                  <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-[#FFB703]/15 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#FF7A18] to-[#FFB703] text-black font-bold text-sm flex items-center justify-center">
                        {currentReview.author.charAt(0)}
                      </div>
                      <div>
                        <div className="font-display font-bold text-sm sm:text-base text-[#FFF3E0] flex items-center gap-1.5">
                          <span>{currentReview.author}</span>
                          {currentReview.verified && (
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                          )}
                        </div>
                        <div className="text-xs text-[#FFF3E0]/50 font-mono">
                          {currentReview.date}
                        </div>
                      </div>
                    </div>

                    {/* Topic tags for this review */}
                    <div className="flex items-center gap-1.5 text-xs text-[#FFB703]/85">
                      {currentReview.topics.map((t, idx) => (
                        <span key={t}>
                          {t}
                          {idx < currentReview.topics.length - 1 && ' · '}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Arrows with >= 48px tap targets */}
            <div className="absolute -left-3 sm:-left-6 top-1/2 -translate-y-1/2">
              <button
                onClick={handlePrev}
                className="w-12 h-12 rounded-full bg-[#261d19] border border-[#FFB703]/35 text-[#FFF3E0] hover:text-[#FFB703] active:scale-90 flex items-center justify-center shadow-lg transition-transform cursor-pointer"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            </div>
            <div className="absolute -right-3 sm:-right-6 top-1/2 -translate-y-1/2">
              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-full bg-[#261d19] border border-[#FFB703]/35 text-[#FFF3E0] hover:text-[#FFB703] active:scale-90 flex items-center justify-center shadow-lg transition-transform cursor-pointer"
                aria-label="Next review"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Swipe indicator hint for touch screens */}
          <div className="text-center text-[11px] text-[#FFF3E0]/45 mt-2 sm:hidden">
            ← Swipe to read more reviews →
          </div>

          {/* Dots Indicator with min 44px tap targets */}
          <div className="flex items-center justify-center gap-2 mt-4">
            {filteredReviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className="p-2 flex items-center justify-center cursor-pointer"
                aria-label={`Go to review ${i + 1}`}
              >
                <span
                  className={`block h-2 rounded-full transition-all ${
                    currentIndex === i ? 'w-6 bg-[#FF7A18]' : 'w-2 bg-[#FFB703]/30'
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Write a review on Google CTA */}
          <div className="mt-6 sm:mt-8 text-center">
            <a
              href={DHABA_CONFIG.brand.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[48px] inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#FFB703] hover:text-[#FF7A18] active:scale-95 transition-all py-3 px-5 rounded-xl border border-[#FFB703]/35 hover:border-[#FF7A18] bg-[#1a1412]"
            >
              <span>{lang === 'hi' ? 'गूगल पर रिव्यू लिखें' : 'Write a review on Google'}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
