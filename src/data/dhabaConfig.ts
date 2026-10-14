/**
 * Surya Shiva Dhaba (सूर्य शिवा ढाबा) - Official Site Configuration
 * All business details, phone numbers, Google Maps links, images, reviews,
 * and the complete restaurant menu are configured here.
 */

export interface MenuItem {
  id: string;
  name: string;
  hindiName?: string;
  price?: number; // Optional for placeholder tabs where prices are unlisted
  isVeg: boolean;
  popular?: boolean;
  desc?: string;
}

export interface MenuCategory {
  id: string;
  title: string;
  hindiTitle: string;
  badge?: string;
  isPlaceholder?: boolean;
  items: MenuItem[];
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
  topics: string[];
  verified?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  hindiTitle: string;
  category: 'food' | 'chai' | 'ambience' | 'tandoor';
  imageUrl: string;
  alt: string;
}

export const DHABA_CONFIG = {
  brand: {
    name: 'Surya Shiva Dhaba',
    hindiName: 'सूर्य शिवा ढाबा',
    tagline: 'Desi Khana • Desi Swad • Apno Jaisa Ehsaas ❤️',
    hindiTagline: 'देसी खाना • देसी स्वाद • अपनों जैसा अहसास ❤️',
    rating: 4.8,
    reviewCount: 57,
    isOpen24Hours: true,
    highway: 'NH-9',
    plusCode: 'PWQH+P6',
    address: 'Kuchesar Road, Chopala, NH-9, District Hapur, Uttar Pradesh (Plus code: PWQH+P6)',
    hindiAddress: 'कुचेसर रोड, चौपला, NH-9, ज़िला हापुड़, उत्तर प्रदेश',
    mapsUrl: 'https://maps.app.goo.gl/hiptwr8QwzY5CqcH8',
    embedMapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111956.4632837367!2d77.87612716766467!3d28.73024843997672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c9b0e1a3b1a2d%3A0x7d6f5f3e4e9a8b1c!2sKuchesar%20Road%20Chopala%2C%20NH-9%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
    phone: '+91 98765 43210', // PLACEHOLDER: Replace with owner's direct mobile
    phoneRaw: '+919876543210',
    whatsapp: '+919876543210', // PLACEHOLDER: WhatsApp contact
    whatsappMessage: 'Namaste! I would like to inquire about Surya Shiva Dhaba on NH-9.',
    services: ['Dine-in', 'Takeaway', 'Delivery'],
    ownerQuote: 'Highway journey ho ya family dinner, Surya Shiva Dhaba par milega authentic North Indian taste, fresh food aur apno jaisa swaad.',
    ownerQuoteHindi: 'हाईवे की यात्रा हो या पारिवारिक डिनर, सूर्य शिवा ढाबा पर मिलेगा असली उत्तर भारतीय स्वाद, ताज़ा खाना और अपनों जैसा सत्कार।',
    ownerName: 'Surya Shiva Dhaba Family',
    gstNote: 'GST 5% extra on all orders',
    gstNoteHindi: 'सभी ऑर्डर पर 5% जीएसटी अतिरिक्त',
    hashtags: ['#SuryaShivaDhaba', '#BestDhabaInHapur', '#DhabaInHapur', '#NH9'],
  },

  // Centralized Image Registry - 100% Original Customer Photos of Surya Shiva Dhaba
  images: {
    // Original photo 1: Traditional Kulhad Masala Chai on dark granite counter
    kulhadChaiReal: '/images/kulhad_chai.png',
    
    // Original photo 2: Dal Tadka slow-cooked in stainless steel handi with whole roasted red chillies
    dalMakhani: '/images/dal_tadka_handi.png',
    
    // Original photo 3: Fresh blistered Tandoori Rotis on yellow plate with dal and pickled carrots
    butterNaan: '/images/tandoori_roti.png',

    // Original photo 4: Crispy Golden Masala Dosa on yellow tray with piping hot sambar & coconut chutney
    crispyDosa: '/images/masala_dosa_thali.png',

    // Original photo 5: Spicy Veg Chowmein in silver plate with steaming Kulhad Chai on granite table
    chowmeinChai: '/images/chowmein_kulhad_chai.png',

    // Authentic Dhaba Dining Experience (Original Photo of table dining)
    dhabaNight: '/images/surya-shiva-dhaba-ambience.png',

    // Authentic Dhaba Tandoori Thali
    dhabaAmbience: '/images/surya-shiva-dhaba-ambience.png',
  },

  // 4 Signature Dishes (Prominently featured with 3D tilt, authentic dhaba photos)
  signatureDishes: [
    {
      id: 'dal-makhani',
      name: 'Dal Makhani / Dal Tadka',
      hindiName: 'दाल मखनी / दाल तड़का',
      tagline: 'Slow cooked in stainless steel handi with whole roasted red chillies & pure desi ghee tadka',
      hindiTagline: 'हांडी में पकी, सूखी लाल मिर्च और शुद्ध देसी घी के तड़के वाली लज़ीज़ दाल',
      imageKey: 'dalMakhani',
      specialty: 'Dhaba Crown Jewel',
    },
    {
      id: 'crispy-dosa',
      name: 'Crispy Masala Dosa',
      hindiName: 'कुरकुरा मसाला डोसा',
      tagline: 'Golden crisp butter roasted dosa served with piping hot sambar & fresh coconut chutney',
      hindiTagline: 'गरमागरम सांभर और ताज़ी नारियल चटनी के साथ कुरकुरा बटर मसाला डोसा',
      imageKey: 'crispyDosa',
      specialty: 'Highway Travelers Favorite',
    },
    {
      id: 'butter-naan-roti',
      name: 'Fresh Tandoori Roti & Naan',
      hindiName: 'ताज़ा तंदूरी रोटी और बटर नान',
      tagline: 'Clay tandoor blistered rotis served on traditional dhaba plate with dal & pickled carrots',
      hindiTagline: 'मिट्टी के तंदूर से निकली, दाल और गाजर के अचार के साथ परोसी गई',
      imageKey: 'butterNaan',
      specialty: 'Straight from Clay Tandoor',
    },
    {
      id: 'kulhad-chai',
      name: 'Traditional Kulhad Chai',
      hindiName: 'परंपरागत कुल्हड़ चाय',
      tagline: 'Thick, frothy spiced tea brewed with ginger & cardamom in natural earthen clay cups',
      hindiTagline: 'अदरक, इलायची और सौंधी मिट्टी की खुशबू वाली कड़क कुल्हड़ चाय',
      imageKey: 'kulhadChaiReal',
      specialty: 'The Ultimate NH-9 Driver Refresher',
    },
  ],

  // Full Menu Array: EXACTLY matching provided data
  menuCategories: [
    {
      id: 'breakfast',
      title: 'BREAKFAST',
      hindiTitle: 'नाश्ता',
      badge: 'Morning Fresh',
      items: [
        { id: 'b1', name: 'Aloo Paratha', hindiName: 'आलू पराठा', price: 120, isVeg: true, popular: true },
        { id: 'b2', name: 'Aloo Onion Paratha', hindiName: 'आलू प्याज पराठा', price: 120, isVeg: true },
        { id: 'b3', name: 'Mix Paratha', hindiName: 'मिक्स पराठा', price: 140, isVeg: true },
        { id: 'b4', name: 'Onion Paratha', hindiName: 'प्याज पराठा', price: 120, isVeg: true },
        { id: 'b5', name: 'Stuffed Paneer Paratha', hindiName: 'स्टफ्ड पनीर पराठा', price: 150, isVeg: true, popular: true },
        { id: 'b6', name: 'Missa Paratha', hindiName: 'मिस्सा पराठा', price: 140, isVeg: true },
        { id: 'b7', name: 'Gobhi Paratha', hindiName: 'गोभी पराठा', price: 120, isVeg: true },
        { id: 'b8', name: 'Mooli Paratha', hindiName: 'मूली पराठा', price: 120, isVeg: true },
        { id: 'b9', name: 'Butter Toast', hindiName: 'बटर टोस्ट', price: 95, isVeg: true },
        { id: 'b10', name: 'Gem Toast', hindiName: 'जैम टोस्ट', price: 115, isVeg: true },
        { id: 'b11', name: 'Veg Sandwich', hindiName: 'वेज सैंडविच', price: 120, isVeg: true },
        { id: 'b12', name: 'Veg Grilled Sandwich', hindiName: 'वेज ग्रिल्ड सैंडविच', price: 120, isVeg: true },
        { id: 'b13', name: 'Cheese Grilled Sandwich', hindiName: 'चीज़ ग्रिल्ड सैंडविच', price: 160, isVeg: true, popular: true },
        { id: 'b14', name: 'Paneer Sandwich', hindiName: 'पनीर सैंडविच', price: 170, isVeg: true },
        { id: 'b15', name: 'Mix Pakoda', hindiName: 'मिक्स पकोड़ा', price: 150, isVeg: true, popular: true },
        { id: 'b16', name: 'Paneer Pakoda', hindiName: 'पनीर पकोड़ा', price: 170, isVeg: true, popular: true },
        { id: 'b17', name: 'Bread Pakoda', hindiName: 'ब्रेड पकोड़ा', price: 40, isVeg: true },
        { id: 'b18', name: 'Chole Bhature', hindiName: 'छोले भटूरे', price: 160, isVeg: true, popular: true },
        { id: 'b19', name: 'Finger Chips', hindiName: 'फिंगर चिप्स', price: 160, isVeg: true },
        { id: 'b20', name: 'Samosa', hindiName: 'समोसा', price: 70, isVeg: true },
      ],
    },
    {
      id: 'tawa-paratha',
      title: 'TAWA PARATHA (Fry or Dry)',
      hindiTitle: 'तवा पराठा (फ्राई या सूखा)',
      badge: 'Home Style',
      items: [
        { id: 'tp1', name: 'Plain Tawa Paratha', hindiName: 'प्लेन तवा पराठा', price: 100, isVeg: true },
        { id: 'tp2', name: 'Aloo Pyaj Paratha', hindiName: 'आलू प्याज पराठा', price: 120, isVeg: true, popular: true },
        { id: 'tp3', name: 'Pyaj Paratha', hindiName: 'प्याज पराठा', price: 135, isVeg: true },
        { id: 'tp4', name: 'Mix Paratha', hindiName: 'मिक्स पराठा', price: 150, isVeg: true },
        { id: 'tp5', name: 'Paneer Paratha', hindiName: 'पनीर पराठा', price: 155, isVeg: true, popular: true },
        { id: 'tp6', name: 'Gobhi Paratha', hindiName: 'गोभी पराठा', price: 135, isVeg: true },
        { id: 'tp7', name: 'Muli Paratha', hindiName: 'मूली पराठा', price: 135, isVeg: true },
      ],
    },
    {
      id: 'subhah-nashta',
      title: 'SUBHAH KA NASHTA',
      hindiTitle: 'सुबह का नाश्ता',
      badge: 'Traditional',
      items: [
        { id: 'sn1', name: 'Sabji Puri 4 pcs (with Raita)', hindiName: 'सब्जी पूरी 4 पीस (रायता सहित)', price: 180, isVeg: true, popular: true, desc: 'Hot fluffy puris served with spicy aloo ki sabji and fresh boondi raita' },
      ],
    },
    {
      id: 'chinese-snacks',
      title: 'SPL. CHINESE & SNACKS',
      hindiTitle: 'स्पेशल चाइनीज़ और स्नैक्स',
      badge: 'Desi Tadka Chinese',
      items: [
        { id: 'c1', name: 'Veg Maggi Masala', hindiName: 'वेज मैगी मसाला', price: 120, isVeg: true, popular: true },
        { id: 'c2', name: 'Veg Chowmin', hindiName: 'वेज चाऊमीन', price: 160, isVeg: true },
        { id: 'c3', name: 'Chilli Garlic Chowmin', hindiName: 'चिली गार्लिक चाऊमीन', price: 180, isVeg: true, popular: true },
        { id: 'c4', name: 'Paneer Butter Chowmin', hindiName: 'पनीर बटर चाऊमीन', price: 190, isVeg: true },
        { id: 'c5', name: 'Singapuri Chowmin', hindiName: 'सिंगापुरी चाऊमीन', price: 190, isVeg: true },
        { id: 'c6', name: 'Hakka Noodles', hindiName: 'हक्का नूडल्स', price: 200, isVeg: true },
        { id: 'c7', name: 'Manchurian Dry/Gravy', hindiName: 'मंचूरियन ड्राई/ग्रेवी', price: 250, isVeg: true, popular: true },
        { id: 'c8', name: 'Pao Bhaji', hindiName: 'पाव भाजी', price: 170, isVeg: true, popular: true },
        { id: 'c9', name: 'Extra Pao', hindiName: 'एक्स्ट्रा पाव', price: 60, isVeg: true },
        { id: 'c10', name: 'Veg Burger', hindiName: 'वेज बर्गर', price: 120, isVeg: true },
        { id: 'c11', name: 'Cheese Burger', hindiName: 'चीज़ बर्गर', price: 140, isVeg: true },
        { id: 'c12', name: 'Chilli Paneer Dry', hindiName: 'चिली पनीर ड्राई', price: 299, isVeg: true, popular: true },
        { id: 'c13', name: 'Chilli Paneer Gravy', hindiName: 'चिली पनीर ग्रेवी', price: 280, isVeg: true },
        { id: 'c14', name: 'Mushroom Chilli Dry/Gravy', hindiName: 'मशरूम चिली ड्राई/ग्रेवी', price: 290, isVeg: true },
        { id: 'c15', name: 'Chilli Potato', hindiName: 'चिली पोटैटो', price: 270, isVeg: true },
        { id: 'c16', name: 'Honey Chilli Potato', hindiName: 'हनी चिली पोटैटो', price: 280, isVeg: true, popular: true },
        { id: 'c17', name: 'Paneer Kalagi', hindiName: 'पनीर कलगी', price: 300, isVeg: true },
        { id: 'c18', name: 'Fried Rice', hindiName: 'फ्राइड राइस', price: 240, isVeg: true },
        { id: 'c19', name: 'Cream Pasta', hindiName: 'क्रीम पास्ता', price: 250, isVeg: true },
        { id: 'c20', name: 'Red Sauce Pasta', hindiName: 'रेड सॉस पास्ता', price: 270, isVeg: true },
      ],
    },
    {
      id: 'tandoor-breads',
      title: 'TANDOOR SE (Breads)',
      hindiTitle: 'तंदूर से (रोटी और नान)',
      badge: 'Clay Oven Baked',
      items: [
        { id: 't1', name: 'Tandoori Roti', hindiName: 'तंदूरी रोटी', price: 25, isVeg: true },
        { id: 't2', name: 'Tandoori Butter Roti', hindiName: 'तंदूरी बटर रोटी', price: 30, isVeg: true, popular: true },
        { id: 't3', name: 'Lachha Paratha', hindiName: 'लच्छा पराठा', price: 95, isVeg: true, popular: true },
        { id: 't4', name: 'Tawa Roti', hindiName: 'तवा रोटी', price: 35, isVeg: true },
        { id: 't5', name: 'Missi Roti', hindiName: 'मिस्सी रोटी', price: 60, isVeg: true },
        { id: 't6', name: 'Plain Naan', hindiName: 'प्लेन नान', price: 100, isVeg: true },
        { id: 't7', name: 'Butter Naan', hindiName: 'बटर नान', price: 120, isVeg: true, popular: true },
        { id: 't8', name: 'Paneer Naan', hindiName: 'पनीर नान', price: 140, isVeg: true },
        { id: 't9', name: 'Stuffed Naan', hindiName: 'स्टफ्ड नान', price: 130, isVeg: true },
        { id: 't10', name: 'Onion Kulcha', hindiName: 'प्याज कुल्चा', price: 130, isVeg: true },
        { id: 't11', name: 'Aloo Kulcha', hindiName: 'आलू कुल्चा', price: 130, isVeg: true },
        { id: 't12', name: 'Garlic Naan', hindiName: 'गार्लिक नान', price: 140, isVeg: true, popular: true },
        { id: 't13', name: 'Garlic Lachha Paratha', hindiName: 'गार्लिक लच्छा पराठा', price: 120, isVeg: true },
        { id: 't14', name: 'Onion Missi Roti', hindiName: 'प्याज मिस्सी रोटी', price: 70, isVeg: true },
        { id: 't15', name: 'Paneer Kulcha', hindiName: 'पनीर कुल्चा', price: 130, isVeg: true },
        { id: 't16', name: 'Makki Ki Roti', hindiName: 'मक्की की रोटी', price: 50, isVeg: true, popular: true },
      ],
    },
    {
      id: 'rice',
      title: 'RICE',
      hindiTitle: 'चावल',
      badge: 'Basmati Specials',
      items: [
        { id: 'r1', name: 'Plain Rice', hindiName: 'प्लेन राइस', price: 150, isVeg: true },
        { id: 'r2', name: 'Jeera Rice', hindiName: 'जीरा राइस', price: 170, isVeg: true, popular: true },
        { id: 'r3', name: 'Matar Pulao', hindiName: 'मटर पुलाव', price: 190, isVeg: true },
        { id: 'r4', name: 'Paneer Pulao', hindiName: 'पनीर पुलाव', price: 210, isVeg: true, popular: true },
        { id: 'r5', name: 'Veg Pulao', hindiName: 'वेज पुलाव', price: 200, isVeg: true },
        { id: 'r6', name: 'Mushroom Pulao', hindiName: 'मशरूम पुलाव', price: 210, isVeg: true },
        { id: 'r7', name: 'Veg Biryani', hindiName: 'वेज बिरयानी', price: 250, isVeg: true, popular: true },
      ],
    },
    {
      id: 'mix-rice',
      title: 'MIX RICE',
      hindiTitle: 'मिक्स चावल कॉम्बोस',
      badge: 'Highway Comfort Bowls',
      items: [
        { id: 'mr1', name: 'Chawal Chole (Fried)', hindiName: 'चावल छोले (फ्राइड)', price: 250, isVeg: true, popular: true },
        { id: 'mr2', name: 'Dal Chawal (Mix)', hindiName: 'दाल चावल (मिक्स)', price: 250, isVeg: true, popular: true },
        { id: 'mr3', name: 'Kadhi Chawal (Mix)', hindiName: 'कढ़ी चावल (मिक्स)', price: 250, isVeg: true },
        { id: 'mr4', name: 'Rajma Chawal (Mix)', hindiName: 'राजमा चावल (मिक्स)', price: 290, isVeg: true, popular: true },
      ],
    },
    {
      id: 'mix-veg-sabzi',
      title: 'MIX VEG (Sabzi)',
      hindiTitle: 'सब्जियां (मिक्स वेज)',
      badge: 'Dhaba Handi Masala',
      items: [
        { id: 'mv1', name: 'Mix Veg', hindiName: 'मिक्स वेज', price: 270, isVeg: true, popular: true },
        { id: 'mv2', name: 'Navratan Korma', hindiName: 'नवरतन कोरमा', price: 290, isVeg: true },
        { id: 'mv3', name: 'Mushroom Kima', hindiName: 'मशरूम कीमा', price: 300, isVeg: true },
        { id: 'mv4', name: 'Palak Mushroom Masala', hindiName: 'पालक मशरूम मसाला', price: 310, isVeg: true },
        { id: 'mv5', name: 'Kaju Curry', hindiName: 'काजू करी', price: 350, isVeg: true, popular: true },
        { id: 'mv6', name: 'Aloo Allahabadi', hindiName: 'आलू इलाहाबादी', price: 290, isVeg: true },
        { id: 'mv7', name: 'Kadhi Pakora', hindiName: 'कढ़ी पकोड़ा', price: 270, isVeg: true, popular: true },
        { id: 'mv8', name: 'Chana Masala', hindiName: 'चना मसाला', price: 290, isVeg: true },
        { id: 'mv9', name: 'Kashmiri Dum Aloo', hindiName: 'कश्मीरी दम आलू', price: 295, isVeg: true },
        { id: 'mv10', name: 'Dum Aloo', hindiName: 'दम आलू', price: 260, isVeg: true },
        { id: 'mv11', name: 'Zeera Aloo', hindiName: 'जीरा आलू', price: 230, isVeg: true },
        { id: 'mv12', name: 'Matar Mushroom', hindiName: 'मटर मशरूम', price: 280, isVeg: true },
        { id: 'mv13', name: 'Bhindi Masala', hindiName: 'भिंडी मसाला', price: 290, isVeg: true },
        { id: 'mv14', name: 'Baingan Bharta', hindiName: 'बैंगन भर्ता', price: 280, isVeg: true, popular: true },
        { id: 'mv15', name: 'Rajma', hindiName: 'राजमा', price: 280, isVeg: true, popular: true },
        { id: 'mv16', name: 'Sev Bhaji', hindiName: 'सेव भाजी', price: 260, isVeg: true },
      ],
    },
    {
      id: 'spl-kofta',
      title: 'SPL. KOFTA',
      hindiTitle: 'स्पेशल कोफ्ता',
      badge: 'Royal Gravies',
      items: [
        { id: 'k1', name: 'Veg Korma', hindiName: 'वेज कोरमा', price: 290, isVeg: true },
        { id: 'k2', name: 'Veg Kofta', hindiName: 'वेज कोफ्ता', price: 290, isVeg: true },
        { id: 'k3', name: 'Punjabi Kofta', hindiName: 'पंजाबी कोफ्ता', price: 280, isVeg: true, popular: true },
        { id: 'k4', name: 'Nargis Kofta', hindiName: 'नरगिस कोफ्ता', price: 300, isVeg: true },
        { id: 'k5', name: 'Mushroom Kofta', hindiName: 'मशरूम कोफ्ता', price: 300, isVeg: true },
        { id: 'k6', name: 'Malai Kofta', hindiName: 'मलाई कोफ्ता', price: 330, isVeg: true, popular: true },
      ],
    },
    {
      id: 'seasonal-sabjiya',
      title: 'SEASONAL SABJIYA',
      hindiTitle: 'मौसमी सब्जियां',
      badge: 'Farm Fresh',
      items: [
        { id: 's1', name: 'Aloo Gobhi', hindiName: 'आलू गोभी', price: 240, isVeg: true, popular: true },
        { id: 's2', name: 'Aloo Matar', hindiName: 'आलू मटर', price: 230, isVeg: true },
        { id: 's3', name: 'Soyabean Chap Gravy', hindiName: 'सोयाबीन चाप ग्रेवी', price: 290, isVeg: true, popular: true },
        { id: 's4', name: 'Sarso Ka Saag', hindiName: 'सरसों का साग', price: 270, isVeg: true, popular: true },
      ],
    },
    {
      id: 'specials-unpriced',
      title: 'More on the menu: dal, paneer specials, chai & beverages',
      hindiTitle: 'और भी बहुत कुछ: दाल, पनीर स्पेशल, कुल्हड़ चाय व ड्रिंक्स',
      badge: 'Dhaba Specials',
      isPlaceholder: true,
      items: [
        { id: 'p1', name: 'Special Dal Makhani Handi', hindiName: 'स्पेशल दाल मखनी हांडी', isVeg: true, desc: 'Freshly prepared upon order with churned white butter' },
        { id: 'p2', name: 'Dal Fry & Dal Tadka (Yellow)', hindiName: 'दाल फ्राई और दाल तड़का', isVeg: true, desc: 'Tempered with hing, cumin, garlic & whole red chillies' },
        { id: 'p3', name: 'Kadai Paneer & Shahi Paneer', hindiName: 'कड़ाही पनीर व शाही पनीर', isVeg: true, desc: 'Chef’s signature cottage cheese preparations' },
        { id: 'p4', name: 'Paneer Butter Masala & Lababdar', hindiName: 'पनीर बटर मसाला व लबाबदार', isVeg: true, desc: 'Rich velvety tomato cashew gravy' },
        { id: 'p5', name: 'Traditional Spiced Kulhad Chai', hindiName: 'परंपरागत कड़क कुल्हड़ चाय', isVeg: true, desc: 'Served boiling hot in authentic earthen cups' },
        { id: 'p6', name: 'Sweet & Salted Lassi (Matka)', hindiName: 'मटका लस्सी (मीठी/नमकीन)', isVeg: true, desc: 'Hand churned curd with thick malai layer' },
      ],
    },
  ] as MenuCategory[],

  // Genuine Google Review snippets
  reviews: [
    {
      id: 'rev-1',
      author: 'Satendra Rajput',
      rating: 5,
      date: 'Google Local Guide',
      topics: ['Dal Makhani', 'Kadhai Paneer', 'Restroom', 'Behaviour'],
      text: 'Amazing food, special dal makhani and kadai paneer, staff attitude is good, service very fast, clean washroom.',
      verified: true,
    },
    {
      id: 'rev-2',
      author: 'Highway Traveler',
      rating: 5,
      date: 'Verified Visitor',
      topics: ['Behaviour', 'Service'],
      text: 'The food was delicious, staff was friendly, and the service was fast.',
      verified: true,
    },
    {
      id: 'rev-3',
      author: 'Family Road Tripper',
      rating: 5,
      date: 'NH-9 Commuter',
      topics: ['Atmosphere', 'Food Quality'],
      text: 'Overall, a great place to stop and enjoy a good meal.',
      verified: true,
    },
    {
      id: 'rev-4',
      author: 'Delhi-Lucknow Passenger',
      rating: 5,
      date: 'Frequent Traveler',
      topics: ['Food Quality', 'Service'],
      text: 'The food was tasty, freshly prepared, and reasonably served.',
      verified: true,
    },
  ],

  reviewFilterTopics: [
    'All',
    'Kadhai Paneer',
    'Dal Makhani',
    'Restroom',
    'Behaviour',
  ],

  // Why choose us points
  whyChooseUs: [
    {
      id: 'w1',
      title: 'Freshly Prepared Food',
      hindiTitle: 'ताज़ा व गरमागरम खाना',
      desc: 'Cooked fresh on order using genuine ingredients, pure ghee & desi spices.',
      icon: 'UtensilsCrossed',
    },
    {
      id: 'w2',
      title: 'Fast Highway Service',
      hindiTitle: 'सुपर फ़ास्ट सर्विस',
      desc: 'Quick turnaround so you can eat well without delaying your journey.',
      icon: 'Zap',
    },
    {
      id: 'w3',
      title: 'Friendly & Courteous Staff',
      hindiTitle: 'मित्रवत व विनम्र स्टाफ',
      desc: 'Warm hospitality that makes you feel right at home with apno jaisa swaad.',
      icon: 'HeartHandshake',
    },
    {
      id: 'w4',
      title: 'Clean Washrooms',
      hindiTitle: 'साफ़-सुथरे वॉशरुम',
      desc: 'Hygienic and well-maintained restrooms for travelers and families.',
      icon: 'Sparkles',
    },
    {
      id: 'w5',
      title: 'Family Friendly Atmosphere',
      hindiTitle: 'पारिवारिक सुरक्षित माहौल',
      desc: 'Spacious, clean seating with dedicated spaces for family dining.',
      icon: 'Users',
    },
    {
      id: 'w6',
      title: 'Open 24 Hours Every Day',
      hindiTitle: '24 घंटे हमेशा खुला',
      desc: 'Day or late night, our tandoor is always fired up to welcome you.',
      icon: 'Clock',
    },
  ],

  // Gallery items - 100% original photos from Surya Shiva Dhaba
  gallery: [
    {
      id: 'g1',
      title: 'Traditional Kulhad Masala Chai',
      hindiTitle: 'कड़क कुल्हड़ चाय',
      category: 'chai',
      imageUrl: '/images/kulhad_chai.png',
      alt: 'Traditional frothy masala chai in an earthen clay kulhad cup at Surya Shiva Dhaba',
    },
    {
      id: 'g2',
      title: 'Tandoori Roti on Yellow Plate with Dal & Pickle',
      hindiTitle: 'तंदूरी रोटी व दाल तड़का थाली',
      category: 'tandoor',
      imageUrl: 'Screenshot 2026-10-15 001140.png',
      alt: 'Fresh tandoori rotis with dal tadka and pickled carrots in yellow plates at Surya Shiva Dhaba',
    },
    {
      id: 'g3',
      title: 'Dal Tadka in Stainless Steel Handi',
      hindiTitle: 'दाल तड़का हांडी (सूखी लाल मिर्च सहित)',
      category: 'food',
      imageUrl: '/images/dal_tadka_handi.png',
      alt: 'Stainless steel handi filled with yellow dal tadka and whole roasted red chillies',
    },
    {
      id: 'g4',
      title: 'Crispy Masala Dosa with Sambar & Chutney',
      hindiTitle: 'कुरकुरा मसाला डोसा व सांभर',
      category: 'food',
      imageUrl: '/images/masala_dosa_thali.png',
      alt: 'Golden crisp folded triangular masala dosa on yellow tray with piping hot sambar and chutney',
    },
    {
      id: 'g5',
      title: 'Veg Chowmein with Fresh Kulhad Chai',
      hindiTitle: 'देसी चाऊमीन व कुल्हड़ चाय',
      category: 'food',
      imageUrl: '/images/chowmein_kulhad_chai.png',
      alt: 'Silver plate chowmein noodles with fork and steaming kulhad chai on granite table',
    },
    {
      id: 'g6',
      title: 'Clay Tandoor Roti Selection',
      hindiTitle: 'तंदूरी रोटी एवं मक्खन',
      category: 'tandoor',
      imageUrl: '/images/tandoori_roti.png',
      alt: 'Charred blistered tandoori rotis baked fresh in dhaba clay tandoor',
    },
    {
      id: 'g7',
      title: 'Surya Shiva Dhaba at Night',
      hindiTitle: 'रात में सूर्य शिवा ढाबा',
      category: 'ambience',
      imageUrl: '/images/surya-shiva-dhaba-ambience.png',
      alt: 'Surya Shiva Dhaba illuminated at night on NH-9, with parked cars and a bus outside',
    },
    // {
    //   id: 'g8',
    //   title: 'Authentic Earthen Clay Chai Cup',
    //   hindiTitle: 'मिट्टी की सोंधी खुशबू',
    //   category: 'chai',
    //   imageUrl: '/images/kulhad_chai.png',
    //   alt: 'Close-up of kulhad masala tea on dark polished granite table at Surya Shiva Dhaba',
    // },
  ] as GalleryItem[],
};
