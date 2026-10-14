import React, { useState, useMemo, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Sparkles, X, AlertCircle } from 'lucide-react';
import { DHABA_CONFIG, MenuItem } from '../data/dhabaConfig';

interface FullMenuProps {
  lang: 'en' | 'hi';
}

export const FullMenu: React.FC<FullMenuProps> = ({ lang }) => {
  const [activeCategory, setActiveCategory] = useState<string>(
    DHABA_CONFIG.menuCategories[0].id
  );
  const [searchQuery, setSearchQuery] = useState<string>('');

  const tabsContainerRef = useRef<HTMLDivElement | null>(null);
  const tabRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  // Auto-scroll active chip into view on mobile
  const selectCategory = (catId: string) => {
    setActiveCategory(catId);
    const targetTab = tabRefs.current[catId];
    if (targetTab) {
      targetTab.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
    }
  };

  // Find currently active category object
  const currentCategory = useMemo(() => {
    return (
      DHABA_CONFIG.menuCategories.find((c) => c.id === activeCategory) ||
      DHABA_CONFIG.menuCategories[0]
    );
  }, [activeCategory]);

  // Search logic across the menu
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return null;
    const query = searchQuery.toLowerCase().trim();

    const matches: { item: MenuItem; categoryTitle: string }[] = [];

    DHABA_CONFIG.menuCategories.forEach((cat) => {
      cat.items.forEach((item) => {
        const matchName = item.name.toLowerCase().includes(query);
        const matchHindi = item.hindiName?.toLowerCase().includes(query);
        const matchDesc = item.desc?.toLowerCase().includes(query);

        if (matchName || matchHindi || matchDesc) {
          matches.push({ item, categoryTitle: cat.title });
        }
      });
    });

    return matches;
  }, [searchQuery]);

  return (
    <section id="menu" className="py-16 md:py-28 bg-[#0d0b0b] relative overflow-hidden">
      {/* Background Dhaba Warmth Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[500px] bg-gradient-to-b from-[#D62828]/15 via-[#FF7A18]/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-wider uppercase text-[#E5B246] mb-2 bg-[#250d10] px-3.5 py-1.5 rounded-full border border-[#E5B246]/30">
            <Sparkles className="w-4 h-4 text-[#FF7A18]" />
            <span>{lang === 'hi' ? 'असली ढाबा मेन्यू' : 'Authentic Printed Menu'}</span>
          </div>

          <h2 className="font-display font-black text-2xl sm:text-4xl md:text-5xl text-[#FFF3E0] tracking-tight mb-2.5">
            {lang === 'hi' ? 'सूर्य शिवा ढाबा मेन्यू' : 'Surya Shiva Dhaba Menu'}
          </h2>

          <p className="font-body text-sm sm:text-base text-[#FFF3E0]/80">
            {lang === 'hi'
              ? 'ताज़ा तैयार शुद्ध शाकाहारी भोजन, तंदूर की खुशबू और परंपरागत उत्तर भारतीय स्वाद।'
              : 'Freshly prepared pure vegetarian delicacies straight from our clay tandoor and kadai.'}
          </p>

          {/* Prominent GST 5% Extra Note */}
          <div className="mt-3.5 inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-[#3a0a0f] border border-[#E5B246]/40 text-[#E5B246] text-xs font-semibold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-[#FF7A18] animate-ping" />
            <span>{lang === 'hi' ? DHABA_CONFIG.brand.gstNoteHindi : DHABA_CONFIG.brand.gstNote}</span>
          </div>
        </div>

        {/* Live Search & Filter Bar (Font size >= 16px to prevent iOS auto-zoom) */}
        <div className="max-w-md mx-auto mb-6 sm:mb-8 relative">
          <div className="relative flex items-center">
            <Search className="absolute left-4 w-5 h-5 text-[#E5B246]/70 pointer-events-none" />
            <input
              type="search"
              inputMode="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                lang === 'hi'
                  ? 'मेन्यू में खोजें (उदा: Paratha, Chowmin, Paneer...)'
                  : 'Search menu (e.g. Paratha, Chowmin, Paneer, Naan...)'
              }
              className="w-full min-h-[48px] pl-12 pr-11 py-3 rounded-xl bg-[#1f090c] border border-[#E5B246]/30 text-base text-[#FFF3E0] placeholder-[#FFF3E0]/45 focus:outline-none focus:border-[#E5B246] focus:ring-1 focus:ring-[#E5B246] shadow-inner transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 p-2 text-[#FFF3E0]/60 hover:text-[#FFF3E0] rounded-full focus:outline-none min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
                aria-label="Clear search"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
          {searchQuery && (
            <p className="text-xs text-[#E5B246] mt-2 text-center">
              {searchResults ? `${searchResults.length} matching items found` : ''}
            </p>
          )}
        </div>

        {/* Sticky Animated Category Tabs with scroll-snap and active chip auto-scrolling */}
        {!searchQuery && (
          <div className="sticky top-16 z-20 py-2 -mx-4 px-4 sm:mx-0 sm:px-0 bg-[#0d0b0b]/95 backdrop-blur-md mb-6 sm:mb-8">
            <div
              ref={tabsContainerRef}
              className="scroll-snap-x flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 sm:justify-center"
            >
              {DHABA_CONFIG.menuCategories.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    ref={(el) => {
                      tabRefs.current[cat.id] = el;
                    }}
                    onClick={() => selectCategory(cat.id)}
                    className={`scroll-snap-center min-h-[48px] relative px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-xl whitespace-nowrap shrink-0 transition-all duration-200 cursor-pointer active:scale-95 ${
                      isActive
                        ? 'text-[#2b080b] bg-gradient-to-r from-[#FFB703] to-[#FF7A18] font-bold shadow-md shadow-[#FF7A18]/20'
                        : 'text-[#FFF3E0]/85 bg-[#1e0a0d] hover:bg-[#2e0f14] border border-[#E5B246]/20 hover:text-[#E5B246]'
                    }`}
                  >
                    <span>{lang === 'hi' ? cat.hindiTitle : cat.title}</span>
                    {cat.isPlaceholder && (
                      <span className="ml-1.5 text-[10px] uppercase font-mono px-1 py-0.5 rounded bg-black/30 text-amber-200">
                        {lang === 'hi' ? 'विस्तार' : 'More'}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* DEEP RED MENU PANELS WITH GOLD LETTERING & ORNAMENTAL CORNERS */}
        <div className="relative rounded-2xl bg-gradient-to-b from-[#34090d] via-[#2a070a] to-[#1c0507] border-2 border-[#E5B246]/40 shadow-2xl p-4 sm:p-8 md:p-10">
          
          {/* Ornamental Gold Corner Flourishes */}
          <div className="ornate-corner-tl" />
          <div className="ornate-corner-tr" />
          <div className="ornate-corner-bl" />
          <div className="ornate-corner-br" />

          {/* Inner hairline gold border */}
          <div className="absolute inset-1.5 sm:inset-3 border border-[#E5B246]/20 rounded-xl pointer-events-none" />

          {/* Search Results Display */}
          {searchQuery && searchResults && (
            <div>
              <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-[#E5B246]/25 mb-4 sm:mb-6">
                <span className="font-display font-bold text-base sm:text-lg text-[#E5B246]">
                  Search Results for &quot;{searchQuery}&quot;
                </span>
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-xs text-[#FF7A18] hover:underline cursor-pointer min-h-[44px] flex items-center"
                >
                  Show all categories
                </button>
              </div>

              {searchResults.length === 0 ? (
                <div className="py-12 text-center text-[#FFF3E0]/60">
                  <p className="font-display text-base">No dishes found matching &quot;{searchQuery}&quot;</p>
                  <p className="text-xs mt-1">Try searching for &quot;Paratha&quot;, &quot;Naan&quot;, &quot;Chowmin&quot;, or &quot;Rice&quot;</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                  {searchResults.map(({ item, categoryTitle }, idx) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.02 }}
                      className="group p-2.5 rounded-lg active:bg-[#470d13]/80 hover:bg-[#470d13]/50 transition-colors"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2 min-w-0">
                          {/* Pure Veg Indicator */}
                          <span className="shrink-0 w-3.5 h-3.5 border border-emerald-500 flex items-center justify-center p-0.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          </span>

                          <div className="truncate">
                            <span className="font-semibold text-sm sm:text-base text-[#FFF3E0] group-hover:text-[#FFB703] transition-colors">
                              {item.name}
                            </span>
                            {item.hindiName && (
                              <span className="font-desi text-xs text-[#E5B246]/85 ml-2">
                                {item.hindiName}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Price or Inquire */}
                        <div className="shrink-0 font-mono font-bold text-[#E5B246] text-sm sm:text-base tabular-nums">
                          {item.price !== undefined ? `₹${item.price}` : 'Available'}
                        </div>
                      </div>
                      <div className="text-[11px] text-[#FFF3E0]/50 ml-5 mt-0.5">
                        in {categoryTitle}
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Standard Category View */}
          {!searchQuery && (
            <AnimatePresence mode="wait">
              <motion.div
                key={currentCategory.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
              >
                {/* Category Header with Gold Callout */}
                <div className="text-center mb-6 sm:mb-8 pb-4 sm:pb-5 border-b border-[#E5B246]/25">
                  <div className="inline-block">
                    <h3 className="font-display font-extrabold text-xl sm:text-2xl md:text-3xl text-[#E5B246] tracking-wide uppercase drop-shadow-sm">
                      {lang === 'hi' ? currentCategory.hindiTitle : currentCategory.title}
                    </h3>
                    <div className="h-0.5 w-20 sm:w-24 bg-gradient-to-r from-transparent via-[#E5B246] to-transparent mx-auto mt-1.5" />
                  </div>

                  {currentCategory.badge && (
                    <p className="font-desi text-xs sm:text-sm text-[#FFF3E0]/70 mt-1">
                      {currentCategory.badge}
                    </p>
                  )}

                  {/* Informational callout if it's the unpriced specials placeholder */}
                  {currentCategory.isPlaceholder && (
                    <div className="mt-3 sm:mt-4 p-3 rounded-lg bg-[#220709] border border-amber-500/30 text-amber-200 text-xs flex items-center justify-center gap-2 max-w-lg mx-auto">
                      <AlertCircle className="w-4 h-4 shrink-0 text-[#FFB703]" />
                      <span>
                        {lang === 'hi'
                          ? 'ये विशेष व्यंजन (दाल, पनीर व चाय) ताज़ा तैयार किए जाते हैं। मूल्य काउंटर अथवा ऑर्डर के समय उपलब्ध हैं।'
                          : 'Specialty dal, paneer and beverage items freshly brewed on request. Current seasonal pricing available on order.'}
                      </span>
                    </div>
                  )}
                </div>

                {/* Mobile-Friendly Item Rows (Scannable one-handed: Name Left, Leader Line, Price Right) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                  {currentCategory.items.map((item, idx) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.015, duration: 0.2 }}
                      className="group flex flex-col p-2.5 rounded-lg active:bg-[#4a0d13]/80 hover:bg-[#4a0d13]/60 transition-colors"
                    >
                      <div className="flex items-baseline justify-between gap-2 w-full">
                        {/* Item Name + Veg Mark */}
                        <div className="flex items-center gap-2 shrink-0 max-w-[68%]">
                          {/* Pure Veg square symbol */}
                          <span
                            className="shrink-0 w-3.5 h-3.5 border border-emerald-500 flex items-center justify-center p-0.5"
                            title="Pure Vegetarian"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          </span>

                          <span className="font-semibold text-sm sm:text-base text-[#FFF3E0] group-hover:text-[#FFB703] transition-colors truncate">
                            {item.name}
                          </span>
                        </div>

                        {/* Dotted Leader Line */}
                        <div className="flex-1 border-b border-dotted border-[#E5B246]/35 mx-1 translate-y-[-4px]" />

                        {/* Price (₹) with tabular numerals */}
                        <div className="shrink-0 text-right">
                          {item.price !== undefined ? (
                            <span className="font-display font-extrabold text-sm sm:text-base text-[#E5B246] tabular-nums">
                              ₹{item.price}
                            </span>
                          ) : (
                            <span className="font-body text-xs text-[#E5B246]/85 italic">
                              On order
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Sub-label with Hindi Name and optional description */}
                      {(item.hindiName || item.desc) && (
                        <div className="flex items-center gap-2 pl-5 text-xs text-[#FFF3E0]/65 mt-0.5">
                          {item.hindiName && (
                            <span className="font-desi text-amber-200/90 text-xs">
                              {item.hindiName}
                            </span>
                          )}
                          {item.desc && (
                            <span className="text-[#FFF3E0]/50 italic text-[11px] truncate">
                              — {item.desc}
                            </span>
                          )}
                          {item.popular && (
                            <span className="text-[10px] text-[#FF7A18] font-bold uppercase tracking-wider ml-auto shrink-0">
                              Popular
                            </span>
                          )}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          )}

          {/* Bottom Menu Guarantee Stamp */}
          <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-[#E5B246]/20 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FFF3E0]/70 gap-2.5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>100% Shuddh Shakahari (Pure Veg) • Fresh Cooking Only</span>
            </div>
            <div className="font-mono text-[#E5B246] font-semibold">
              {DHABA_CONFIG.brand.gstNote}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
