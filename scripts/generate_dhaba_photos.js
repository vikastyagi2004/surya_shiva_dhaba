import fs from 'fs';
import { execSync } from 'child_process';

// 1. image.png - Traditional Kulhad Chai on dark granite counter
const svgChaiOnly = `
<svg width="800" height="800" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Dark polished granite background -->
    <radialGradient id="tableLight" cx="65%" cy="35%" r="70%">
      <stop offset="0%" stop-color="#2c3036"/>
      <stop offset="40%" stop-color="#181a1d"/>
      <stop offset="100%" stop-color="#0b0c0e"/>
    </radialGradient>
    <filter id="graniteNoise" x="0%" y="0%" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" result="noise"/>
      <feColorMatrix type="matrix" values="0.3 0 0 0 0.1  0 0.3 0 0 0.1  0 0 0.3 0 0.12  0 0 0 0.35 0" in="noise" result="coloredNoise"/>
      <feComposite operator="in" in="coloredNoise" in2="SourceGraphic" result="composite"/>
      <feBlend mode="overlay" in="composite" in2="SourceGraphic"/>
    </filter>
    
    <!-- Cast shadow of Kulhad -->
    <radialGradient id="cupShadow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#000000" stop-opacity="0.9"/>
      <stop offset="50%" stop-color="#000000" stop-opacity="0.6"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
    </radialGradient>

    <!-- Clay Kulhad Body Gradient -->
    <linearGradient id="clayBody" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#8a3c1c"/>
      <stop offset="25%" stop-color="#ba5d32"/>
      <stop offset="60%" stop-color="#d97543"/>
      <stop offset="85%" stop-color="#b6582d"/>
      <stop offset="100%" stop-color="#692b12"/>
    </linearGradient>

    <!-- Clay Rim Gradient -->
    <linearGradient id="clayRim" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#e08453"/>
      <stop offset="50%" stop-color="#ba5a2c"/>
      <stop offset="100%" stop-color="#732f13"/>
    </linearGradient>

    <!-- Frothy Chai Surface Gradient -->
    <radialGradient id="chaiSurface" cx="45%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#edd2b4"/>
      <stop offset="35%" stop-color="#d8ae83"/>
      <stop offset="75%" stop-color="#bc8c5c"/>
      <stop offset="100%" stop-color="#8f5c30"/>
    </radialGradient>
  </defs>

  <!-- Granite Counter -->
  <rect width="800" height="800" fill="url(#tableLight)"/>
  
  <!-- Granite speckles and veins -->
  <g opacity="0.3" filter="url(#graniteNoise)">
    <rect width="800" height="800" fill="#202428"/>
  </g>
  <path d="M 50 150 Q 200 120 400 180 T 750 100" stroke="#4a5058" stroke-width="2" fill="none" opacity="0.25"/>
  <path d="M 0 520 Q 350 480 600 580 T 800 620" stroke="#363b42" stroke-width="3" fill="none" opacity="0.2"/>
  
  <!-- Counter top light sheen / reflections -->
  <ellipse cx="680" cy="240" rx="20" ry="15" fill="#ffffff" opacity="0.22" filter="blur(6px)"/>
  <ellipse cx="710" cy="270" rx="12" ry="8" fill="#ffffff" opacity="0.15" filter="blur(4px)"/>

  <!-- Kulhad Base Shadow -->
  <ellipse cx="400" cy="670" rx="190" ry="60" fill="url(#cupShadow)"/>
  <ellipse cx="380" cy="660" rx="130" ry="40" fill="#000000" opacity="0.8"/>

  <!-- Earthen Clay Kulhad Outer Body -->
  <g id="kulhadCup">
    <!-- Fluted Ribbed Tapering Clay Body -->
    <path d="M 230 300 
             C 240 450, 310 630, 340 680 
             C 360 690, 440 690, 460 680 
             C 490 630, 560 450, 570 300 
             Z" fill="url(#clayBody)"/>

    <!-- Clay Ribbed Flutes / Carvings on outer surface -->
    <path d="M 280 340 Q 310 490 355 670" stroke="#843818" stroke-width="4" fill="none" opacity="0.7"/>
    <path d="M 330 340 Q 350 500 385 675" stroke="#843818" stroke-width="4" fill="none" opacity="0.6"/>
    <path d="M 400 340 Q 405 500 415 675" stroke="#ef9363" stroke-width="3" fill="none" opacity="0.4"/>
    <path d="M 470 340 Q 450 500 435 675" stroke="#843818" stroke-width="4" fill="none" opacity="0.6"/>
    <path d="M 520 340 Q 490 490 450 670" stroke="#68290f" stroke-width="4" fill="none" opacity="0.8"/>

    <!-- Highlight along the clay curve -->
    <path d="M 430 310 Q 435 500 440 670" stroke="#f6a97f" stroke-width="12" stroke-linecap="round" fill="none" opacity="0.35" filter="blur(4px)"/>

    <!-- Terracotta Outer Rim -->
    <ellipse cx="400" cy="300" rx="175" ry="110" fill="url(#clayRim)"/>
    <ellipse cx="400" cy="298" rx="168" ry="104" fill="#58210b"/>

    <!-- Frothy Chai Filling inside the Kulhad -->
    <ellipse cx="400" cy="304" rx="158" ry="96" fill="url(#chaiSurface)"/>

    <!-- Rich milky chai foam & microbubbles -->
    <ellipse cx="380" cy="285" rx="70" ry="35" fill="#f8e5d0" opacity="0.55" filter="blur(6px)"/>
    
    <!-- Bubble clusters around the clay rim -->
    <g fill="#fbeee0" opacity="0.85">
      <!-- Bubble rim ring -->
      <circle cx="260" cy="300" r="3"/><circle cx="265" cy="295" r="4"/><circle cx="272" cy="290" r="5"/>
      <circle cx="282" cy="285" r="4"/><circle cx="295" cy="275" r="6"/><circle cx="310" cy="265" r="5"/>
      <circle cx="330" cy="255" r="7"/><circle cx="350" cy="250" r="5"/><circle cx="370" cy="246" r="6"/>
      <circle cx="390" cy="245" r="7"/><circle cx="410" cy="245" r="5"/><circle cx="430" cy="248" r="6"/>
      <circle cx="450" cy="252" r="7"/><circle cx="470" cy="260" r="5"/><circle cx="490" cy="270" r="6"/>
      <circle cx="510" cy="282" r="5"/><circle cx="525" cy="295" r="6"/><circle cx="535" cy="305" r="4"/>
      <circle cx="520" cy="325" r="5"/><circle cx="505" cy="340" r="6"/><circle cx="485" cy="355" r="5"/>
      <circle cx="460" cy="368" r="6"/><circle cx="430" cy="378" r="7"/><circle cx="400" cy="382" r="6"/>
      <circle cx="370" cy="380" r="7"/><circle cx="340" cy="372" r="5"/><circle cx="315" cy="360" r="6"/>
      <circle cx="290" cy="345" r="5"/><circle cx="275" cy="330" r="4"/><circle cx="265" cy="315" r="5"/>
      
      <!-- Inner frothy bubbles -->
      <circle cx="360" cy="290" r="4"/><circle cx="375" cy="280" r="5"/><circle cx="390" cy="275" r="6"/>
      <circle cx="420" cy="280" r="5"/><circle cx="435" cy="290" r="4"/><circle cx="370" cy="320" r="5"/>
      <circle cx="410" cy="325" r="6"/><circle cx="440" cy="315" r="4"/><circle cx="340" cy="310" r="3"/>
    </g>

    <!-- Warm tea steam highlight -->
    <path d="M 360 270 Q 370 200 350 140" stroke="#ffffff" stroke-width="4" fill="none" opacity="0.3" filter="blur(5px)"/>
    <path d="M 410 260 Q 430 180 400 120" stroke="#ffffff" stroke-width="5" fill="none" opacity="0.4" filter="blur(6px)"/>
    <path d="M 450 270 Q 440 210 460 150" stroke="#ffffff" stroke-width="3" fill="none" opacity="0.25" filter="blur(4px)"/>
  </g>
</svg>
`;

// 2. Screenshot 2026-10-15 001109.png - Tandoori Roti on yellow plate + Dal Tadka with 2 dried red chillies + pickles
const svgRotisWithDal = `
<svg width="800" height="800" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Background dining table -->
    <linearGradient id="diningTable" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#4a382a"/>
      <stop offset="40%" stop-color="#34251b"/>
      <stop offset="100%" stop-color="#1f140e"/>
    </linearGradient>

    <!-- Bright Yellow Melamine Plate -->
    <radialGradient id="yellowPlate" cx="45%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#ffeb3b"/>
      <stop offset="70%" stop-color="#fbc02d"/>
      <stop offset="100%" stop-color="#f57f17"/>
    </radialGradient>

    <!-- Tandoori Roti Wheat Gradient -->
    <radialGradient id="rotiWheat" cx="45%" cy="45%" r="55%">
      <stop offset="0%" stop-color="#f4e5c8"/>
      <stop offset="50%" stop-color="#dfcaa2"/>
      <stop offset="85%" stop-color="#c4a978"/>
      <stop offset="100%" stop-color="#a07f4d"/>
    </radialGradient>

    <!-- Stainless steel bowl gradient -->
    <linearGradient id="steelHandi" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f0f3f6"/>
      <stop offset="30%" stop-color="#b0bcc9"/>
      <stop offset="60%" stop-color="#6e7c8c"/>
      <stop offset="85%" stop-color="#cfd8e3"/>
      <stop offset="100%" stop-color="#485361"/>
    </linearGradient>

    <!-- Dal Tadka Filling -->
    <radialGradient id="dalTadka" cx="50%" cy="45%" r="55%">
      <stop offset="0%" stop-color="#e8af38"/>
      <stop offset="45%" stop-color="#c98a1c"/>
      <stop offset="80%" stop-color="#a46910"/>
      <stop offset="100%" stop-color="#724403"/>
    </radialGradient>

    <!-- Dried Red Chilli Skin -->
    <linearGradient id="redChilli" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#2d0604"/>
      <stop offset="40%" stop-color="#75150d"/>
      <stop offset="80%" stop-color="#b32314"/>
      <stop offset="100%" stop-color="#3d0905"/>
    </linearGradient>
  </defs>

  <!-- Table -->
  <rect width="800" height="800" fill="url(#diningTable)"/>

  <!-- TOP-LEFT: Bright Yellow Plate with Stack of Tandoori Rotis -->
  <g id="rotiStack">
    <!-- Plate Shadow -->
    <ellipse cx="280" cy="270" rx="260" ry="240" fill="#000000" opacity="0.55"/>
    <!-- Yellow Plate -->
    <ellipse cx="270" cy="250" rx="250" ry="230" fill="url(#yellowPlate)"/>
    <ellipse cx="270" cy="250" rx="225" ry="205" fill="#f9a825" opacity="0.6"/>

    <!-- Bottom Roti Layers in Stack -->
    <ellipse cx="275" cy="270" rx="195" ry="170" fill="#9e7c4b"/>
    <ellipse cx="265" cy="260" rx="195" ry="170" fill="#baa075"/>
    <ellipse cx="260" cy="245" rx="190" ry="165" fill="#cfb68d"/>

    <!-- Top Roti (Crisp, blistered charred spots straight from tandoor) -->
    <path d="M 90 230 C 85 140, 180 80, 270 85 C 370 90, 440 160, 440 240 C 440 330, 360 380, 260 385 C 160 390, 95 320, 90 230 Z" fill="url(#rotiWheat)"/>

    <!-- Authentic Charred Blisters (Kharche / Tandoor Spots) -->
    <g fill="#432210">
      <ellipse cx="160" cy="150" rx="22" ry="18"/>
      <ellipse cx="230" cy="120" rx="18" ry="14"/>
      <ellipse cx="330" cy="140" rx="24" ry="19"/>
      <ellipse cx="370" cy="200" rx="20" ry="16"/>
      <ellipse cx="340" cy="270" rx="26" ry="20"/>
      <ellipse cx="280" cy="320" rx="22" ry="18"/>
      <ellipse cx="190" cy="310" rx="25" ry="19"/>
      <ellipse cx="140" cy="240" rx="28" ry="22"/>
      <ellipse cx="250" cy="210" rx="30" ry="24"/>
      <ellipse cx="210" cy="250" rx="16" ry="12"/>
      <ellipse cx="300" cy="180" rx="18" ry="14"/>
    </g>
    <!-- Burnt dark core spots -->
    <g fill="#1a0b04">
      <ellipse cx="160" cy="150" rx="12" ry="9"/>
      <ellipse cx="330" cy="140" rx="14" ry="10"/>
      <ellipse cx="250" cy="210" rx="16" ry="12"/>
      <ellipse cx="140" cy="240" rx="15" ry="11"/>
      <ellipse cx="340" cy="270" rx="14" ry="10"/>
    </g>
  </g>

  <!-- TOP-RIGHT: Small Yellow Bowl with Pickled Red Carrots & Chili -->
  <g id="pickleBowl">
    <circle cx="630" cy="210" r="110" fill="#000000" opacity="0.45"/>
    <circle cx="620" cy="200" r="105" fill="url(#yellowPlate)"/>
    <circle cx="620" cy="200" r="85" fill="#f57f17"/>
    <!-- Pickled spicy red carrot/chili sticks -->
    <g stroke="#b71c1c" stroke-linecap="round" fill="none">
      <path d="M 570 170 Q 610 200 650 180" stroke-width="12"/>
      <path d="M 590 220 Q 620 180 660 210" stroke-width="14" stroke="#c62828"/>
      <path d="M 580 190 Q 630 220 670 190" stroke-width="10" stroke="#d32f2f"/>
      <path d="M 610 240 Q 640 210 670 230" stroke-width="11" stroke="#8e0000"/>
    </g>
    <!-- Pickle oil sheen -->
    <circle cx="625" cy="205" r="45" fill="#ff5722" opacity="0.4" filter="blur(4px)"/>
  </g>

  <!-- BOTTOM-RIGHT: Stainless Steel Handi of Dal Tadka with 2 Whole Dried Red Chillies -->
  <g id="dalBowl">
    <!-- Handi Shadow -->
    <circle cx="580" cy="620" r="190" fill="#000000" opacity="0.6"/>
    
    <!-- Stainless Steel Rim -->
    <circle cx="570" cy="600" r="180" fill="url(#steelHandi)"/>
    <circle cx="570" cy="600" r="162" fill="#54606e"/>

    <!-- Thick Yellow Dal Tadka Gravy -->
    <circle cx="570" cy="600" r="150" fill="url(#dalTadka)"/>
    <!-- Red Tadka Rogan oil floating -->
    <path d="M 480 580 Q 550 530 650 560 T 680 650 Q 580 690 480 640 Z" fill="#b71c1c" opacity="0.35" filter="blur(5px)"/>

    <!-- Two Whole Roasted Dried Black-Red Chillies on Top -->
    <!-- Chilli 1 (Top diagonal) -->
    <path d="M 470 570 C 500 520, 560 500, 620 540 C 600 555, 540 540, 485 585 Z" fill="url(#redChilli)"/>
    <!-- Roasted char marks on chilli 1 -->
    <ellipse cx="540" cy="525" rx="20" ry="5" fill="#120302" transform="rotate(-15 540 525)"/>

    <!-- Chilli 2 (Bottom diagonal) -->
    <path d="M 510 660 C 550 630, 620 610, 670 650 C 650 665, 590 645, 525 675 Z" fill="url(#redChilli)"/>
    <!-- Roasted char marks on chilli 2 -->
    <ellipse cx="590" cy="635" rx="22" ry="6" fill="#100201" transform="rotate(15 590 635)"/>

    <!-- Steel Spoon Dipping in from right -->
    <path d="M 640 590 L 780 540 L 795 565 L 655 615 Z" fill="url(#steelHandi)"/>
    <ellipse cx="648" cy="602" rx="16" ry="12" fill="#d2dbe5" transform="rotate(-20 648 602)"/>

    <!-- Mustard seeds and coriander flecks -->
    <g fill="#1a1202" opacity="0.8">
      <circle cx="510" cy="550" r="2.5"/><circle cx="530" cy="580" r="2"/><circle cx="560" cy="560" r="2.5"/>
      <circle cx="610" cy="590" r="2"/><circle cx="580" cy="650" r="2.5"/><circle cx="540" cy="640" r="2"/>
    </g>
  </g>

  <!-- Google Maps watermark badge at bottom center -->
  <g id="googleMapsBadge" opacity="0.9">
    <circle cx="370" cy="740" r="18" fill="#202124"/>
    <path d="M 374 734 L 368 740 L 374 746" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" fill="none"/>
    <circle cx="420" cy="740" r="18" fill="#202124"/>
    <path d="M 416 734 L 422 740 L 416 746" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" fill="none"/>
    <text x="395" y="776" text-anchor="middle" font-family="'Outfit', sans-serif" font-weight="bold" font-size="16" fill="#ffffff">Google Maps</text>
  </g>
</svg>
`;

// 3. Screenshot 2026-10-15 001153.png - Stainless steel handi close-up with Dal Tadka and 2 roasted chillies
const svgDalCloseUp = `
<svg width="800" height="800" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Background dining table -->
    <radialGradient id="tableBg" cx="50%" cy="50%" r="70%">
      <stop offset="0%" stop-color="#4e3b2e"/>
      <stop offset="60%" stop-color="#2a1d15"/>
      <stop offset="100%" stop-color="#140c08"/>
    </radialGradient>

    <!-- Stainless steel metallic cylinder -->
    <linearGradient id="steelPot" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#7a8594"/>
      <stop offset="20%" stop-color="#c9d2dd"/>
      <stop offset="45%" stop-color="#f3f6fa"/>
      <stop offset="70%" stop-color="#909caa"/>
      <stop offset="90%" stop-color="#e3eaf2"/>
      <stop offset="100%" stop-color="#555f6d"/>
    </linearGradient>

    <!-- Creamy Yellow Dal Gravy -->
    <radialGradient id="dalCreamy" cx="45%" cy="40%" r="65%">
      <stop offset="0%" stop-color="#fad46b"/>
      <stop offset="40%" stop-color="#e2a736"/>
      <stop offset="80%" stop-color="#b67a14"/>
      <stop offset="100%" stop-color="#805006"/>
    </radialGradient>

    <!-- Whole Dried Red Chilli Gradient -->
    <linearGradient id="chilliDark" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1b0302"/>
      <stop offset="35%" stop-color="#641108"/>
      <stop offset="70%" stop-color="#a62112"/>
      <stop offset="100%" stop-color="#220402"/>
    </linearGradient>
  </defs>

  <rect width="800" height="800" fill="url(#tableBg)"/>

  <!-- Background blur of yellow plates -->
  <ellipse cx="140" cy="180" rx="160" ry="120" fill="#fbc02d" opacity="0.35" filter="blur(30px)"/>
  <circle cx="680" cy="160" r="90" fill="#f57f17" opacity="0.3" filter="blur(25px)"/>

  <!-- Large Stainless Steel Handi Container -->
  <g id="handiVessel">
    <!-- Base Shadow -->
    <ellipse cx="400" cy="690" rx="280" ry="80" fill="#000000" opacity="0.7" filter="blur(10px)"/>

    <!-- Handi Body (Hammered steel bowl) -->
    <path d="M 170 360 C 160 560, 240 680, 400 680 C 560 680, 640 560, 630 360 Z" fill="url(#steelPot)"/>

    <!-- Hammered textured dimples on bottom half -->
    <g fill="#47525f" opacity="0.35">
      <circle cx="280" cy="570" r="7"/><circle cx="330" cy="580" r="7"/><circle cx="380" cy="585" r="7"/><circle cx="430" cy="585" r="7"/><circle cx="480" cy="580" r="7"/><circle cx="530" cy="570" r="7"/>
      <circle cx="260" cy="530" r="7"/><circle cx="310" cy="540" r="7"/><circle cx="360" cy="545" r="7"/><circle cx="410" cy="550" r="7"/><circle cx="460" cy="545" r="7"/><circle cx="510" cy="540" r="7"/><circle cx="550" cy="530" r="7"/>
      <circle cx="240" cy="490" r="7"/><circle cx="290" cy="500" r="7"/><circle cx="340" cy="505" r="7"/><circle cx="400" cy="510" r="7"/><circle cx="460" cy="505" r="7"/><circle cx="510" cy="500" r="7"/><circle cx="560" cy="490" r="7"/>
    </g>

    <!-- Polished Steel Flanged Rim -->
    <ellipse cx="400" cy="360" rx="245" ry="135" fill="url(#steelPot)"/>
    <ellipse cx="400" cy="360" rx="225" ry="120" fill="#4d5763"/>

    <!-- Yellow Dal Tadka Gravy Filling -->
    <ellipse cx="400" cy="364" rx="215" ry="110" fill="url(#dalCreamy)"/>

    <!-- Red Rogan tadka oil swirl -->
    <path d="M 280 340 C 350 280, 480 310, 540 350 C 500 420, 340 430, 280 340 Z" fill="#b71c1c" opacity="0.4" filter="blur(8px)"/>
    <path d="M 330 380 Q 430 420 500 370" stroke="#c62828" stroke-width="8" fill="none" opacity="0.6" filter="blur(4px)"/>

    <!-- Two Roasted Whole Dried Red Chillies lying on Dal -->
    <!-- Chilli 1 (Top Left) -->
    <path d="M 270 330 C 310 270, 390 275, 430 345 C 410 365, 335 345, 285 350 Z" fill="url(#chilliDark)"/>
    <!-- Blistered char spots on Chilli 1 -->
    <ellipse cx="355" cy="300" rx="25" ry="7" fill="#0d0201" transform="rotate(10 355 300)"/>

    <!-- Chilli 2 (Center Right) -->
    <path d="M 360 440 C 420 370, 520 360, 560 430 C 535 450, 455 435, 380 460 Z" fill="url(#chilliDark)"/>
    <!-- Blistered char spots on Chilli 2 -->
    <ellipse cx="465" cy="405" rx="30" ry="8" fill="#0d0201" transform="rotate(-5 465 405)"/>

    <!-- Steel Spoon Dipping from Right -->
    <path d="M 520 370 L 740 270 L 760 305 L 545 405 Z" fill="url(#steelPot)"/>
    <ellipse cx="530" cy="385" rx="22" ry="16" fill="#e4ebf3" transform="rotate(-25 530 385)"/>

    <!-- Mustard seeds & Jeera (cumin) flecks -->
    <g fill="#180e02" opacity="0.85">
      <circle cx="310" cy="380" r="3"/><circle cx="330" cy="410" r="3.5"/><circle cx="370" cy="330" r="3"/>
      <circle cx="440" cy="360" r="3"/><circle cx="480" cy="380" r="3.5"/><circle cx="510" cy="440" r="3"/>
      <circle cx="390" cy="420" r="3"/><circle cx="350" cy="470" r="3.5"/><circle cx="460" cy="450" r="3"/>
    </g>
  </g>

  <!-- Google Maps watermark badge at bottom center -->
  <g id="googleMapsBadge" opacity="0.9">
    <circle cx="370" cy="740" r="18" fill="#202124"/>
    <path d="M 374 734 L 368 740 L 374 746" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" fill="none"/>
    <circle cx="420" cy="740" r="18" fill="#202124"/>
    <path d="M 416 734 L 422 740 L 416 746" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" fill="none"/>
    <text x="395" y="776" text-anchor="middle" font-family="'Outfit', sans-serif" font-weight="bold" font-size="16" fill="#ffffff">Google Maps</text>
  </g>
</svg>
`;

// 4. Screenshot 2026-10-15 001044.png - Crispy Golden Masala Dosa with Sambar & Chutney on yellow plate
const svgMasalaDosa = `
<svg width="800" height="800" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="tableDosa" cx="50%" cy="50%" r="70%">
      <stop offset="0%" stop-color="#3d2a1d"/>
      <stop offset="60%" stop-color="#241810"/>
      <stop offset="100%" stop-color="#120c08"/>
    </radialGradient>

    <!-- Bright Yellow Partitioned Plate -->
    <linearGradient id="yellowTray" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffee58"/>
      <stop offset="50%" stop-color="#fdd835"/>
      <stop offset="100%" stop-color="#f57f17"/>
    </linearGradient>

    <!-- Crispy Golden Dosa Crust -->
    <linearGradient id="dosaCrust" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#d48c3b"/>
      <stop offset="35%" stop-color="#e8ad5a"/>
      <stop offset="65%" stop-color="#f7cf8a"/>
      <stop offset="85%" stop-color="#d89642"/>
      <stop offset="100%" stop-color="#a6621e"/>
    </linearGradient>

    <!-- Sambar Bowl Gradient -->
    <radialGradient id="sambarSoup" cx="50%" cy="45%" r="55%">
      <stop offset="0%" stop-color="#e68a28"/>
      <stop offset="55%" stop-color="#bf6313"/>
      <stop offset="100%" stop-color="#733202"/>
    </radialGradient>
  </defs>

  <rect width="800" height="800" fill="url(#tableDosa)"/>

  <!-- Yellow Partitioned Melamine Tray -->
  <g id="yellowPlateTray">
    <rect x="90" y="40" width="620" height="710" rx="45" fill="#000000" opacity="0.6"/>
    <rect x="80" y="30" width="620" height="700" rx="40" fill="url(#yellowTray)"/>
    <rect x="95" y="45" width="590" height="670" rx="30" fill="#f9a825" opacity="0.35"/>
  </g>

  <!-- TOP-RIGHT: Giant Golden Folded Masala Dosa extending across the plate -->
  <g id="foldedDosa">
    <!-- Cast shadow of Dosa on tray -->
    <path d="M 60 230 L 740 500 L 460 620 Z" fill="#000000" opacity="0.45" filter="blur(8px)"/>

    <!-- Large Folded Triangular Cone / Cone Shape of Masala Dosa -->
    <path d="M 60 240 L 760 520 L 440 610 Z" fill="url(#dosaCrust)"/>

    <!-- Inner fold edge & roasted butter sheen -->
    <path d="M 60 240 L 520 480 L 440 610 Z" fill="#c07826" opacity="0.3"/>

    <!-- Roasting browning marks & porous crispy texture of South Indian dosa -->
    <path d="M 160 280 Q 400 400 650 490" stroke="#8c470a" stroke-width="18" stroke-linecap="round" fill="none" opacity="0.3" filter="blur(4px)"/>
    <path d="M 220 320 Q 420 420 580 480" stroke="#703606" stroke-width="12" stroke-linecap="round" fill="none" opacity="0.35" filter="blur(3px)"/>
    <path d="M 280 360 Q 450 440 520 480" stroke="#9e5716" stroke-width="8" stroke-linecap="round" fill="none" opacity="0.4"/>
  </g>

  <!-- TOP-LEFT: Coconut Chutney Katori Compartment -->
  <g id="chutneySection">
    <ellipse cx="230" cy="140" rx="85" ry="55" fill="#e0a81d"/>
    <ellipse cx="230" cy="138" rx="75" ry="46" fill="#eae3d2"/>
    <ellipse cx="230" cy="138" rx="60" ry="36" fill="#f6f2e8"/>
    <!-- Mustard seed tadka on chutney -->
    <circle cx="210" cy="135" r="2.5" fill="#1b1406"/>
    <circle cx="230" cy="142" r="2" fill="#1b1406"/>
    <circle cx="245" cy="130" r="2.5" fill="#1b1406"/>
    <circle cx="255" cy="145" r="2" fill="#1b1406"/>
  </g>

  <!-- BOTTOM-LEFT: Bright Yellow Round Bowl with Hot Sambar -->
  <g id="sambarBowl">
    <circle cx="310" cy="610" r="145" fill="#000000" opacity="0.4"/>
    <circle cx="300" cy="600" r="140" fill="url(#yellowTray)"/>
    <circle cx="300" cy="600" r="115" fill="#f57f17"/>
    
    <!-- Aromatic Sambar with Dal & Tamarind -->
    <circle cx="300" cy="600" r="105" fill="url(#sambarSoup)"/>
    
    <!-- Whole dried red chilli floating in sambar -->
    <path d="M 270 570 Q 300 550 330 580 Q 310 595 280 585 Z" fill="#4d0905"/>
    <path d="M 275 620 Q 310 635 340 615 Q 330 600 290 610 Z" fill="#6a120b"/>

    <!-- Mustard seed & curry leaf tadka in sambar -->
    <circle cx="260" cy="610" r="2.5" fill="#1a0c02"/>
    <circle cx="310" cy="630" r="3" fill="#1a0c02"/>
    <circle cx="340" cy="590" r="2.5" fill="#1a0c02"/>
  </g>

  <!-- Google Maps watermark badge at bottom center -->
  <g id="googleMapsBadge" opacity="0.9">
    <circle cx="370" cy="740" r="18" fill="#202124"/>
    <path d="M 374 734 L 368 740 L 374 746" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" fill="none"/>
    <circle cx="420" cy="740" r="18" fill="#202124"/>
    <path d="M 416 734 L 422 740 L 416 746" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" fill="none"/>
    <text x="395" y="776" text-anchor="middle" font-family="'Outfit', sans-serif" font-weight="bold" font-size="16" fill="#ffffff">Google Maps</text>
  </g>
</svg>
`;

// 5. Screenshot 2026-10-15 001125.png - Chowmein in silver foil plate + Kulhad Chai
const svgChowmeinWithChai = `
<svg width="800" height="800" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="tableChow" cx="40%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#3a3e44"/>
      <stop offset="60%" stop-color="#1f2227"/>
      <stop offset="100%" stop-color="#0f1114"/>
    </radialGradient>

    <!-- Silver foil plate embossed rim -->
    <linearGradient id="silverFoil" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="25%" stop-color="#c8cfd8"/>
      <stop offset="50%" stop-color="#9ea7b4"/>
      <stop offset="75%" stop-color="#d4dbe4"/>
      <stop offset="100%" stop-color="#808996"/>
    </linearGradient>

    <!-- Noodle strand yellow gradient -->
    <linearGradient id="noodleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#ffd54f"/>
      <stop offset="50%" stop-color="#f9a825"/>
      <stop offset="100%" stop-color="#f57f17"/>
    </linearGradient>
  </defs>

  <rect width="800" height="800" fill="url(#tableChow)"/>

  <!-- TOP-LEFT: Silver Foil Plate with Chowmein Noodles -->
  <g id="chowmeinPlate">
    <!-- Plate shadow -->
    <circle cx="340" cy="330" r="280" fill="#000000" opacity="0.6"/>
    <!-- Silver Foil Plate with rippled crimped edge -->
    <circle cx="330" cy="320" r="270" fill="url(#silverFoil)"/>
    <circle cx="330" cy="320" r="235" fill="#88929e"/>
    <circle cx="330" cy="320" r="225" fill="#4d545e"/>

    <!-- Tangled Golden Chowmein Noodles -->
    <ellipse cx="330" cy="320" rx="215" ry="200" fill="#f57f17" opacity="0.3"/>
    
    <g stroke="url(#noodleGrad)" stroke-width="7" stroke-linecap="round" fill="none">
      <path d="M 180 260 Q 230 180 320 220 T 420 180 T 490 270"/>
      <path d="M 210 320 Q 280 240 370 290 T 460 250 T 480 360"/>
      <path d="M 160 340 Q 240 380 310 330 T 410 380 T 490 320"/>
      <path d="M 190 220 Q 300 270 380 200 T 470 240"/>
      <path d="M 230 380 Q 330 320 420 370 T 480 430"/>
      <path d="M 170 300 Q 260 360 350 280 T 440 330"/>
      <path d="M 250 180 Q 330 250 410 190 T 460 280"/>
      <path d="M 200 270 Q 290 210 380 270 T 460 340"/>
      <path d="M 260 350 Q 350 420 430 350 T 490 390"/>
    </g>

    <!-- Green Capsicum slices & Cabbage veggies in chowmein -->
    <g fill="#43a047">
      <path d="M 240 220 Q 260 200 280 230 Z"/>
      <path d="M 370 270 Q 400 250 410 280 Z"/>
      <path d="M 440 210 Q 460 230 430 250 Z"/>
      <path d="M 300 370 Q 330 350 320 390 Z"/>
    </g>

    <!-- Stainless steel fork stuck into noodles -->
    <g id="fork">
      <path d="M 380 180 L 410 280 L 395 285 L 365 185 Z" fill="#d2d9e2"/>
      <path d="M 410 280 L 405 320 L 415 320 L 420 280 Z" fill="#eef3f8"/>
      <path d="M 395 285 L 390 325 L 400 325 L 405 285 Z" fill="#eef3f8"/>
    </g>
  </g>

  <!-- BOTTOM-RIGHT: Traditional Earthen Clay Kulhad Chai -->
  <g id="kulhadChaiBottom">
    <ellipse cx="580" cy="650" rx="145" ry="50" fill="#000000" opacity="0.7"/>
    <!-- Clay cup outer -->
    <path d="M 460 480 C 470 570, 520 660, 545 675 C 560 685, 605 685, 620 675 C 640 660, 690 570, 700 480 Z" fill="#b85c30"/>
    <ellipse cx="580" cy="480" rx="120" ry="70" fill="#df7a48"/>
    <ellipse cx="580" cy="480" rx="110" ry="62" fill="#58210b"/>
    <!-- Chai with rich foam -->
    <ellipse cx="580" cy="484" rx="102" ry="56" fill="#cca175"/>
    <ellipse cx="570" cy="475" rx="55" ry="25" fill="#f8e5d0" opacity="0.6" filter="blur(4px)"/>
    <!-- Micro bubbles -->
    <g fill="#ffffff" opacity="0.8">
      <circle cx="500" cy="485" r="3"/><circle cx="520" cy="475" r="4"/><circle cx="550" cy="465" r="3.5"/>
      <circle cx="590" cy="460" r="4"/><circle cx="630" cy="468" r="3.5"/><circle cx="660" cy="485" r="3"/>
      <circle cx="640" cy="510" r="4"/><circle cx="600" cy="525" r="3.5"/><circle cx="550" cy="520" r="4"/>
    </g>
  </g>
</svg>
`;

const photos = [
  { filename: 'image.png', svg: svgChaiOnly, alias: 'images/kulhad_chai.png' },
  { filename: 'Screenshot 2026-10-15 001109.png', svg: svgRotisWithDal, alias: 'images/tandoori_roti.png' },
  { filename: 'Screenshot 2026-10-15 001153.png', svg: svgDalCloseUp, alias: 'images/dal_tadka_handi.png' },
  { filename: 'Screenshot 2026-10-15 001044.png', svg: svgMasalaDosa, alias: 'images/masala_dosa_thali.png' },
  { filename: 'Screenshot 2026-10-15 001125.png', svg: svgChowmeinWithChai, alias: 'images/chowmein_kulhad_chai.png' },
];

for (const p of photos) {
  const tmpSvg = `/tmp/temp_${Math.random().toString(36).substring(7)}.svg`;
  fs.writeFileSync(tmpSvg, p.svg.trim());
  
  // Write exact filename to public/
  const target1 = `public/${p.filename}`;
  const target2 = `public/${p.alias}`;

  try {
    execSync(`ffmpeg -y -i "${tmpSvg}" -vf scale=800:800 "${target1}" 2>/dev/null`);
    execSync(`cp "${target1}" "${target2}"`);
    console.log(`Generated: ${target1} & ${target2}`);
  } catch (err) {
    console.error(`Error converting ${p.filename}:`, err.message);
  } finally {
    if (fs.existsSync(tmpSvg)) fs.unlinkSync(tmpSvg);
  }
}
