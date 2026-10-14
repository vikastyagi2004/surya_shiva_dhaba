import React from 'react';

interface MarqueeStripProps {
  lang: 'en' | 'hi';
}

export const MarqueeStrip: React.FC<MarqueeStripProps> = ({ lang }) => {
  const itemsEnglish = [
    'DAL MAKHANI',
    'KADAI PANEER',
    'BUTTER NAAN',
    'KULHAD CHAI',
    'OPEN 24 HOURS',
    'NH-9',
    'HAPUR',
    'DESI KHANA',
    'DESI SWAD',
  ];

  const itemsHindi = [
    'दाल मखनी',
    'कड़ाही पनीर',
    'बटर नान',
    'कुल्हड़ चाय',
    '24 घंटे खुला',
    'एनएच-9',
    'हापुड़',
    'देसी खाना',
    'अपनों जैसा अहसास',
  ];

  const items = lang === 'hi' ? itemsHindi : itemsEnglish;

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-[#D62828] via-[#FF7A18] to-[#FFB703] py-3 border-y border-[#FFB703]/40 shadow-lg shadow-black/30 select-none">
      {/* Edge gradient fade masks */}
      <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-[#0f0e0e] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-[#0f0e0e] to-transparent z-10 pointer-events-none" />

      <div className="animate-marquee flex items-center gap-6 whitespace-nowrap">
        {/* Render twice for seamless continuous scroll loop */}
        {[...items, ...items, ...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center gap-6">
            <span className="font-display font-black text-sm md:text-base tracking-wider text-black uppercase">
              {text}
            </span>
            <span className="text-black/60 font-bold">★</span>
          </div>
        ))}
      </div>
    </div>
  );
};
