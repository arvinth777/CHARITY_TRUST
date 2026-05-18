// src/config/site.ts
// ──────────────────────────────────────────────────────────
// ALL content for Nanre Sei Public Charitable Trust website.
// Edit ONLY this file for content updates.
// ──────────────────────────────────────────────────────────

export const siteConfig = {
  name: {
    en: 'Nanre Sei Public Charitable Trust',
    ta: 'நன்றே செய் பொதுநல அறக்கட்டளை',
  },
  tagline: {
    en: 'Empowering Rural Students Since 2018',
    ta: '2018 முதல் கிராமப்புற மாணவர்களை மேம்படுத்துதல்',
  },
  domain: 'https://nanreseitrust.org',
  registrationNo: '143/2018',
  has80G: false,

  meta: {
    title: 'Nanre Sei Public Charitable Trust — Empowering Coimbatore Students | Official Website',
    description:
      'Nanre Sei Public Charitable Trust empowers rural and underprivileged students in Coimbatore through bicycles, books, evening tuition, digital access, and scholarships since 2018.',
    ogImage: '/og-image.jpg',
  },

  nav: {
    home:     { en: 'Home',       ta: 'முகப்பு' },
    about:    { en: 'About Us',   ta: 'எங்களைப் பற்றி' },
    work:     { en: 'What We Do', ta: 'எங்கள் பணி' },
    timeline: { en: 'Journey',    ta: 'பயணம்' },
    gallery:  { en: 'Gallery',    ta: 'படங்கள்' },
    donate:   { en: 'Donate',     ta: 'நன்கொடை' },
    contact:  { en: 'Contact Us', ta: 'தொடர்பு கொள்ளுங்கள்' },
  },

  heroSlides: [
    {
      image: '/hero-1.jpg',
      title: {
        en: 'Nanre Sei Public Charitable Trust',
        ta: 'நன்றே செய் பொதுநல அறக்கட்டளை',
      },
      subtitle: {
        en: 'Empowering Rural Students Since 2018',
        ta: '2018 முதல் கிராமப்புற மாணவர்களை மேம்படுத்துதல்',
      },
    },
    {
      image: '/hero-2.jpg',
      title: {
        en: 'Education. Mobility. Opportunity.',
        ta: 'கல்வி. இயக்கம். வாய்ப்பு.',
      },
      subtitle: {
        en: 'Bicycles, Books, and Digital Access for Every Child',
        ta: 'ஒவ்வொரு குழந்தைக்கும் சைக்கிள்கள், புத்தகங்கள், மற்றும் டிஜிட்டல் அணுகல்',
      },
    },
    {
      image: '/hero-3.jpg',
      title: {
        en: "Join Us in Uplifting Coimbatore's Children",
        ta: 'கோயம்புத்தூர் குழந்தைகளை மேம்படுத்த எங்களுடன் இணையுங்கள்',
      },
      subtitle: {
        en: 'Your support creates lasting change',
        ta: 'உங்கள் ஆதரவு நிலையான மாற்றத்தை உருவாக்குகிறது',
      },
    },
  ],

  about: {
    welcomeHeading: {
      en: 'Welcome to Nanre Sei Public Charitable Trust',
      ta: 'நன்றே செய் பொதுநல அறக்கட்டளைக்கு வரவேற்கிறோம்',
    },
    story: {
      en: 'The trust began with a simple act: giving bicycles to children who walked long distances to school. What started as a small effort in 2018 has grown into a structured movement spanning multiple neighborhoods in and around Coimbatore.',
      ta: 'நீண்ட தூரம் நடந்து பள்ளிக்கு செல்லும் குழந்தைகளுக்கு சைக்கிள்கள் வழங்குவதன் மூலம் அறக்கட்டளை தொடங்கப்பட்டது. 2018-ல் ஒரு சிறிய முயற்சியாக தொடங்கியது, இன்று கோயம்புத்தூர் மற்றும் சுற்றியுள்ள பல பகுதிகளை உள்ளடக்கிய ஒரு கட்டமைக்கப்பட்ட இயக்கமாக வளர்ந்துள்ளது.',
    },
    mission: {
      en: 'Bridging the educational gap for children from government schools and low-income families through access to books, mobility, digital tools, and quality after-school support.',
      ta: 'அரசுப் பள்ளி மற்றும் குறைந்த வருமான குடும்ப குழந்தைகளுக்கு புத்தகங்கள், இயக்கம், டிஜிட்டல் கருவிகள், மற்றும் தரமான பள்ளிக்குப் பிந்தைய ஆதரவு மூலம் கல்வி இடைவெளியைக் குறைத்தல்.',
    },
    vision: {
      en: 'A Coimbatore where every child, regardless of background, has the tools and support to complete their education and pursue their dreams.',
      ta: 'பின்னணி எதுவாக இருந்தாலும் ஒவ்வொரு குழந்தையும் தங்கள் கல்வியை முடிக்கவும், தங்கள் கனவுகளைத் தொடரவும் தேவையான கருவிகள் மற்றும் ஆதரவுடன் இருக்கும் ஒரு கோயம்புத்தூர்.',
    },
    welcomePhoto: '/gallery/484786161_636104615701450_7878215469065380075_n.jpg',
  },

  impact: [
    { number: '8+',  label: { en: 'Years of Service',       ta: 'சேவை ஆண்டுகள்' } },
    { number: '50+', label: { en: 'Bicycles Distributed',   ta: 'வழங்கப்பட்ட சைக்கிள்கள்' } },
    { number: '200+',label: { en: 'Students in Tuition',    ta: 'பயிற்சியில் உள்ள மாணவர்கள்' } },
    { number: '10+', label: { en: 'Locations Covered',      ta: 'பகுதிகள் உள்ளடக்கப்பட்டுள்ளன' } },
  ],

  workCategories: [
    {
      icon: 'bicycle',
      title: { en: 'Mobility', ta: 'இயக்கம்' },
      description: {
        en: 'Distributing bicycles to students since 2018 so distance is never a barrier to education.',
        ta: '2018 முதல் மாணவர்களுக்கு சைக்கிள்கள் வழங்குதல் — தூரம் ஒருபோதும் கல்விக்கு தடையாக இருக்கக்கூடாது.',
      },
    },
    {
      icon: 'book',
      title: { en: 'Learning Materials', ta: 'கற்றல் பொருட்கள்' },
      description: {
        en: 'Books, school bags, and stationery for children who need them most.',
        ta: 'குழந்தைகளுக்கு புத்தகங்கள், பள்ளி பைகள், மற்றும் எழுதுபொருட்கள்.',
      },
    },
    {
      icon: 'school',
      title: { en: 'Evening Tuition', ta: 'மாலை பயிற்சி வகுப்புகள்' },
      description: {
        en: 'Free after-school classes in government and government-aided school neighborhoods.',
        ta: 'அரசு மற்றும் அரசு உதவி பெறும் பள்ளி பகுதிகளில் இலவச மாலை வகுப்புகள்.',
      },
    },
    {
      icon: 'tablet',
      title: { en: 'Digital Access', ta: 'டிஜிட்டல் அணுகல்' },
      description: {
        en: 'Tablets and iPads to help students navigate digital learning.',
        ta: 'டிஜிட்டல் கற்றலுக்கு டேப்லெட்டுகள் மற்றும் ஐபேடுகள்.',
      },
    },
    {
      icon: 'heart',
      title: { en: 'Scholarships & Aid', ta: 'கல்வி உதவித்தொகை & உதவி' },
      description: {
        en: 'Direct financial aid to meritorious students and families in distress.',
        ta: 'தகுதியான மாணவர்களுக்கும் துன்பத்தில் உள்ள குடும்பங்களுக்கும் நேரடி நிதியுதவி.',
      },
    },
    {
      icon: 'trophy',
      title: { en: 'Competitions & Events', ta: 'போட்டிகள் & நிகழ்வுகள்' },
      description: {
        en: 'Art, literary, and cultural competitions to nurture hidden talent.',
        ta: 'கலை, இலக்கிய, மற்றும் கலாச்சார போட்டிகள் மூலம் மறைந்த திறமைகளை வளர்த்தல்.',
      },
    },
  ],

  timeline: [
    {
      year: 2018,
      category: 'mobility',
      title: { en: 'The Beginning — Bicycle Drive', ta: 'தொடக்கம் — சைக்கிள் பகிர்வு' },
      description: {
        en: 'The trust began distributing bicycles to students who walked long distances to school. This simple act of mobility support marked the beginning of our journey across Coimbatore.',
        ta: 'நீண்ட தூரம் நடந்து பள்ளிக்கு செல்லும் மாணவர்களுக்கு சைக்கிள்கள் வழங்குவதை அறக்கட்டளை தொடங்கியது. இந்த எளிய இயக்க ஆதரவு கோயம்புத்தூர் முழுவதும் எங்கள் பயணத்தின் தொடக்கமாகும்.',
      },
      photos: [
        { src: '/gallery/487507120_648606911117887_4049519324015573756_n.jpg', alt: { en: 'First bicycle distribution event', ta: 'முதல் சைக்கிள் வழங்கும் நிகழ்வு' } },
      ],
    },
    {
      year: 2020,
      category: 'mobility',
      title: { en: 'Bicycles, Books & Social Stations', ta: 'சைக்கிள்கள், புத்தகங்கள் & சமூக நிலையங்கள்' },
      description: {
        en: 'June 1: Distributed 4 bicycles in Veeriyampalayam to create a social bicycle station. June 8: Donated storybooks to children in Singanallur and Rangapuram. June 16: Follow-up drive with additional books and bicycles. Sponsor: Thiru. Santhosh.',
        ta: 'ஜூன் 1: வீரியம்பாளையத்தில் 4 சைக்கிள்கள் வழங்கப்பட்டன. ஜூன் 8: சிங்காநல்லூர் மற்றும் ரங்கபுரத்தில் கதைப்புத்தகங்கள் வழங்கப்பட்டன. ஜூன் 16: கூடுதல் புத்தகங்கள் மற்றும் சைக்கிள்கள். நிதியுதவி: திரு. சந்தோஷ்.',
      },
      photos: [
        { src: '/gallery/571340965_807200195258557_9186522449846645055_n.jpg', alt: { en: 'Children with new bicycles', ta: 'புதிய சைக்கிள்களுடன் குழந்தைகள்' } },
        { src: '/gallery/Screenshot 2026-05-18 at 17.19.01.png', alt: { en: 'Book distribution night event', ta: 'புத்தக வழங்கல் இரவு நிகழ்வு' } },
      ],
    },
    {
      year: 2021,
      category: 'aid',
      title: { en: 'Financial Aid & Continued Mobility', ta: 'நிதியுதவி & தொடர்ந்த இயக்கம்' },
      description: {
        en: 'May 21: Provided ₹2,000 monthly support to the wife/widow of Vignesh in Nehru Nagar, Palakkara. A separate bicycle distribution was also conducted at a school event.',
        ta: 'மே 21: நேரு நகர், பாலக்காராவில் விக்னேஷின் மனைவி/விதவைக்கு மாதாந்திர ₹2,000 ஆதரவு வழங்கப்பட்டது. தனி பள்ளி நிகழ்விலும் சைக்கிள் வழங்கப்பட்டது.',
      },
      photos: [
        { src: '/gallery/Screenshot 2026-05-18 at 17.19.18.png', alt: { en: 'Financial aid distribution', ta: 'நிதியுதவி வழங்குதல்' } },
      ],
    },
    {
      year: 2022,
      category: 'digital',
      title: { en: 'Digital Access & Scholarships', ta: 'டிஜிட்டல் அணுகல் & கல்வி உதவித்தொகை' },
      description: {
        en: 'June 15: iPad Tabs distributed to government school students in Uppilipalayam for digital learning (Sponsor: ThyDream Tech, Thiru. Manoj). June 24: School bags and supplies in Rangapuram. July 4: ₹2,000 scholarships to Janarthanan (7th std) and Sopana (9th std) at NGR School (Sponsor: ARR Law Firm, Adv. Thiru A.R. Ramesh).',
        ta: 'ஜூன் 15: உப்பிலிபாளையத்தில் அரசுப் பள்ளி மாணவர்களுக்கு ஐபேட் டேப்லெட்டுகள் (நிதியுதவி: ThyDream Tech). ஜூன் 24: ரங்கபுரத்தில் பள்ளி பைகள். ஜூலை 4: NGR பள்ளியில் ஜனார்த்தனன் (7ஆம் வகுப்பு) மற்றும் சோபனா (9ஆம் வகுப்பு) ஆகியோருக்கு ₹2,000 கல்வி உதவித்தொகை (நிதியுதவி: ARR Law Firm).',
      },
      photos: [
        { src: '/gallery/Screenshot 2026-05-18 at 17.19.35.png', alt: { en: 'iPad distribution to students', ta: 'மாணவர்களுக்கு ஐபேட் வழங்குதல்' } },
        { src: '/gallery/Screenshot 2026-05-18 at 17.19.50.png', alt: { en: 'Scholarship ceremony', ta: 'கல்வி உதவித்தொகை விழா' } },
      ],
    },
    {
      year: 2025,
      category: 'tuition',
      title: { en: 'Evening Tuition Network Expansion', ta: 'மாலை பயிற்சி வலையமைப்பு விரிவாக்கம்' },
      description: {
        en: 'Jan 8: Launched evening classes in Nalli Chetti Palayam, Annur Union (Teacher: Mrs. Priya; Volunteers: Thiru. Maran, Gokul). Mar 5: Expanded to Guniyamuthur. Jul 2: Expanded to Thirumurthi Nagar. Oct 29: New batch in Aathupalayam, Karumbukadai. The tuition network now serves students across 4+ locations.',
        ta: 'ஜன 8: நல்லிசெட்டிபாளையம், அன்னூர் ஒன்றியத்தில் மாலை வகுப்புகள் தொடக்கம் (ஆசிரியை: திருமதி. பிரியா). மார் 5: குணியமுத்தூரில் விரிவாக்கம். ஜூலை 2: திருமூர்த்தி நகரில் விரிவாக்கம். அக் 29: ஆத்துப்பாளையத்தில் புதிய தொகுதி.',
      },
      photos: [
        { src: '/gallery/Screenshot 2026-05-18 at 17.20.16.png', alt: { en: 'Evening tuition at Annur', ta: 'அன்னூரில் மாலை பயிற்சி' } },
        { src: '/gallery/Screenshot 2026-05-18 at 17.20.21.png', alt: { en: 'Tuition at Aathupalayam', ta: 'ஆத்துப்பாளையத்தில் பயிற்சி' } },
      ],
    },
    {
      year: 2026,
      category: 'events',
      title: { en: 'Kalai Ilakkiya Potti — Art & Literary Competition', ta: 'கலை இலக்கிய போட்டி' },
      description: {
        en: 'Feb 16: Poster released. Feb 28: District-level competition held at Nagarasu Samuthayakoodam, Madukkarai Market. Competitions: Drawing, Art, Speech (Tamil/English), Essay, Poetry, Dance, Drama. Chief Guest: G.P. Sakthivel. Special Prize: ₹2,000 to Manavi Sivatharani (9th std, Indian Team Chess Player).',
        ta: 'பிப் 16: சுவரொட்டி வெளியீடு. பிப் 28: நகராசு சமுதாயக்கூடம், மதுக்கரை சந்தையில் மாவட்ட அளவிலான போட்டி. போட்டிகள்: ஓவியம், கலை, பேச்சு, கட்டுரை, கவிதை, நடனம், நாடகம். சிறப்பு பரிசு: ₹2,000 மாணவி சிவதாரணிக்கு (9ஆம் வகுப்பு, இந்திய அணி சதுரங்க வீராங்கனை).',
      },
      photos: [
        { src: '/gallery/Screenshot 2026-05-18 at 17.21.34.png', alt: { en: 'Competition poster', ta: 'போட்டி சுவரொட்டி' } },
        { src: '/gallery/Screenshot 2026-05-18 at 17.21.38.png', alt: { en: 'Competition event day', ta: 'போட்டி நிகழ்வு நாள்' } },
      ],
    },
  ],

  mapLocations: [
    { name: 'Veeriyampalayam', lat: 11.0524, lng: 77.0437, programs: ['Bicycles'], year: '2020' },
    { name: 'Singanallur / Rangapuram', lat: 11.0000, lng: 77.0280, programs: ['Books', 'Bags', 'Bicycles'], year: '2020, 2022' },
    { name: 'Nalli Chetti Palayam, Annur', lat: 11.2400, lng: 77.1000, programs: ['Evening Tuition'], year: '2025' },
    { name: 'Madukkarai Market', lat: 10.9000, lng: 76.9000, programs: ['Competitions'], year: '2026' },
    { name: 'Uppilipalayam', lat: 11.0450, lng: 77.0200, programs: ['Digital Access'], year: '2022' },
    { name: 'Nehru Nagar, Palakkara', lat: 11.0600, lng: 77.0650, programs: ['Financial Aid'], year: '2021' },
    { name: 'Guniyamuthur', lat: 11.0200, lng: 76.9300, programs: ['Evening Tuition'], year: '2025' },
    { name: 'Thirumurthi Nagar', lat: 11.0350, lng: 77.0500, programs: ['Evening Tuition'], year: '2025' },
    { name: 'Aathupalayam, Karumbukadai', lat: 11.0150, lng: 77.0100, programs: ['Evening Tuition'], year: '2025' },
  ],

  galleryCategories: [
    { id: 'all',          label: { en: 'ALL',           ta: 'அனைத்தும்' } },
    { id: 'bicycles',     label: { en: 'BICYCLES',      ta: 'சைக்கிள்கள்' } },
    { id: 'books',        label: { en: 'BOOKS & BAGS',  ta: 'புத்தகங்கள் & பைகள்' } },
    { id: 'tuition',      label: { en: 'EVENING TUITION', ta: 'மாலை பயிற்சி' } },
    { id: 'digital',      label: { en: 'DIGITAL ACCESS', ta: 'டிஜிட்டல் அணுகல்' } },
    { id: 'scholarships', label: { en: 'SCHOLARSHIPS',  ta: 'கல்வி உதவித்தொகை' } },
    { id: 'competitions', label: { en: 'COMPETITIONS',  ta: 'போட்டிகள்' } },
  ],

  gallery: [
    { src: '/gallery/484786161_636104615701450_7878215469065380075_n.jpg', category: 'all', caption: { en: 'Gallery Image', ta: 'தொகுப்பு படம்' } },
    { src: '/gallery/487507120_648606911117887_4049519324015573756_n.jpg', category: 'all', caption: { en: 'Gallery Image', ta: 'தொகுப்பு படம்' } },
    { src: '/gallery/571340965_807200195258557_9186522449846645055_n.jpg', category: 'all', caption: { en: 'Gallery Image', ta: 'தொகுப்பு படம்' } },
    { src: '/gallery/Screenshot 2026-05-18 at 17.19.01.png', category: 'all', caption: { en: 'Gallery Image', ta: 'தொகுப்பு படம்' } },
    { src: '/gallery/Screenshot 2026-05-18 at 17.19.18.png', category: 'all', caption: { en: 'Gallery Image', ta: 'தொகுப்பு படம்' } },
    { src: '/gallery/Screenshot 2026-05-18 at 17.19.35.png', category: 'all', caption: { en: 'Gallery Image', ta: 'தொகுப்பு படம்' } },
    { src: '/gallery/Screenshot 2026-05-18 at 17.19.50.png', category: 'all', caption: { en: 'Gallery Image', ta: 'தொகுப்பு படம்' } },
    { src: '/gallery/Screenshot 2026-05-18 at 17.20.16.png', category: 'all', caption: { en: 'Gallery Image', ta: 'தொகுப்பு படம்' } },
    { src: '/gallery/Screenshot 2026-05-18 at 17.20.21.png', category: 'all', caption: { en: 'Gallery Image', ta: 'தொகுப்பு படம்' } },
    { src: '/gallery/Screenshot 2026-05-18 at 17.21.34.png', category: 'all', caption: { en: 'Gallery Image', ta: 'தொகுப்பு படம்' } },
    { src: '/gallery/Screenshot 2026-05-18 at 17.21.38.png', category: 'all', caption: { en: 'Gallery Image', ta: 'தொகுப்பு படம்' } },
    { src: '/gallery/Screenshot 2026-05-18 at 17.21.41.png', category: 'all', caption: { en: 'Gallery Image', ta: 'தொகுப்பு படம்' } },
    { src: '/gallery/Screenshot 2026-05-18 at 17.21.45.png', category: 'all', caption: { en: 'Gallery Image', ta: 'தொகுப்பு படம்' } },
    { src: '/gallery/Screenshot 2026-05-18 at 17.24.02.png', category: 'all', caption: { en: 'Gallery Image', ta: 'தொகுப்பு படம்' } },
    { src: '/gallery/Screenshot 2026-05-18 at 17.24.15.png', category: 'all', caption: { en: 'Gallery Image', ta: 'தொகுப்பு படம்' } },
    { src: '/gallery/Screenshot 2026-05-18 at 19.14.01.png', category: 'all', caption: { en: 'Gallery Image', ta: 'தொகுப்பு படம்' } },
    { src: '/gallery/WhatsApp Image 2026-03-01 at 19.57.56 (1).jpeg', category: 'all', caption: { en: 'Gallery Image', ta: 'தொகுப்பு படம்' } },
    { src: '/gallery/WhatsApp Image 2026-03-01 at 19.57.56 (2).jpeg', category: 'all', caption: { en: 'Gallery Image', ta: 'தொகுப்பு படம்' } },
    { src: '/gallery/WhatsApp Image 2026-03-01 at 19.57.56.jpeg', category: 'all', caption: { en: 'Gallery Image', ta: 'தொகுப்பு படம்' } },
    { src: '/gallery/WhatsApp Image 2026-03-01 at 19.57.57 (1).jpeg', category: 'all', caption: { en: 'Gallery Image', ta: 'தொகுப்பு படம்' } },
    { src: '/gallery/WhatsApp Image 2026-03-01 at 19.57.57 (2).jpeg', category: 'all', caption: { en: 'Gallery Image', ta: 'தொகுப்பு படம்' } },
    { src: '/gallery/WhatsApp Image 2026-03-01 at 19.57.57 (3).jpeg', category: 'all', caption: { en: 'Gallery Image', ta: 'தொகுப்பு படம்' } },
    { src: '/gallery/WhatsApp Image 2026-03-01 at 19.57.57.jpeg', category: 'all', caption: { en: 'Gallery Image', ta: 'தொகுப்பு படம்' } },
    { src: '/gallery/WhatsApp Image 2026-03-01 at 19.57.58 (1).jpeg', category: 'all', caption: { en: 'Gallery Image', ta: 'தொகுப்பு படம்' } },
    { src: '/gallery/WhatsApp Image 2026-03-01 at 19.57.58 (2).jpeg', category: 'all', caption: { en: 'Gallery Image', ta: 'தொகுப்பு படம்' } },
    { src: '/gallery/WhatsApp Image 2026-03-01 at 19.57.58.jpeg', category: 'all', caption: { en: 'Gallery Image', ta: 'தொகுப்பு படம்' } },
    { src: '/gallery/WhatsApp Image 2026-03-01 at 19.57.59 (1).jpeg', category: 'all', caption: { en: 'Gallery Image', ta: 'தொகுப்பு படம்' } },
    { src: '/gallery/WhatsApp Image 2026-03-01 at 19.57.59 (2).jpeg', category: 'all', caption: { en: 'Gallery Image', ta: 'தொகுப்பு படம்' } },
    { src: '/gallery/WhatsApp Image 2026-03-01 at 19.57.59.jpeg', category: 'all', caption: { en: 'Gallery Image', ta: 'தொகுப்பு படம்' } },
    { src: '/gallery/WhatsApp Image 2026-03-01 at 19.58.00 (1).jpeg', category: 'all', caption: { en: 'Gallery Image', ta: 'தொகுப்பு படம்' } },
    { src: '/gallery/WhatsApp Image 2026-03-01 at 19.58.00 (2).jpeg', category: 'all', caption: { en: 'Gallery Image', ta: 'தொகுப்பு படம்' } },
    { src: '/gallery/WhatsApp Image 2026-03-01 at 19.58.00.jpeg', category: 'all', caption: { en: 'Gallery Image', ta: 'தொகுப்பு படம்' } },
    { src: '/gallery/WhatsApp Image 2026-03-01 at 19.58.01 (1).jpeg', category: 'all', caption: { en: 'Gallery Image', ta: 'தொகுப்பு படம்' } },
    { src: '/gallery/WhatsApp Image 2026-03-01 at 19.58.01 (2).jpeg', category: 'all', caption: { en: 'Gallery Image', ta: 'தொகுப்பு படம்' } },
    { src: '/gallery/WhatsApp Image 2026-03-01 at 19.58.01 (3).jpeg', category: 'all', caption: { en: 'Gallery Image', ta: 'தொகுப்பு படம்' } },
    { src: '/gallery/WhatsApp Image 2026-03-01 at 19.58.01.jpeg', category: 'all', caption: { en: 'Gallery Image', ta: 'தொகுப்பு படம்' } },
    { src: '/gallery/WhatsApp Image 2026-03-01 at 19.58.02 (1).jpeg', category: 'all', caption: { en: 'Gallery Image', ta: 'தொகுப்பு படம்' } },
    { src: '/gallery/WhatsApp Image 2026-03-01 at 19.58.02.jpeg', category: 'all', caption: { en: 'Gallery Image', ta: 'தொகுப்பு படம்' } },
    { src: '/gallery/WhatsApp Image 2026-03-01 at 19.58.03 (1).jpeg', category: 'all', caption: { en: 'Gallery Image', ta: 'தொகுப்பு படம்' } },
    { src: '/gallery/WhatsApp Image 2026-03-01 at 19.58.03 (2).jpeg', category: 'all', caption: { en: 'Gallery Image', ta: 'தொகுப்பு படம்' } },
    { src: '/gallery/WhatsApp Image 2026-03-01 at 19.58.03.jpeg', category: 'all', caption: { en: 'Gallery Image', ta: 'தொகுப்பு படம்' } },
    { src: '/gallery/WhatsApp Image 2026-03-01 at 19.58.04.jpeg', category: 'all', caption: { en: 'Gallery Image', ta: 'தொகுப்பு படம்' } },
    { src: '/gallery/WhatsApp Image 2026-03-01 at 19.58.19.jpeg', category: 'all', caption: { en: 'Gallery Image', ta: 'தொகுப்பு படம்' } },
    { src: '/gallery/WhatsApp Image 2026-03-01 at 19.58.20 (1).jpeg', category: 'all', caption: { en: 'Gallery Image', ta: 'தொகுப்பு படம்' } },
    { src: '/gallery/WhatsApp Image 2026-03-01 at 19.58.20 (2).jpeg', category: 'all', caption: { en: 'Gallery Image', ta: 'தொகுப்பு படம்' } },
    { src: '/gallery/WhatsApp Image 2026-03-01 at 19.58.20.jpeg', category: 'all', caption: { en: 'Gallery Image', ta: 'தொகுப்பு படம்' } },
    { src: '/gallery/WhatsApp Image 2026-03-01 at 19.58.21 (1).jpeg', category: 'all', caption: { en: 'Gallery Image', ta: 'தொகுப்பு படம்' } },
    { src: '/gallery/WhatsApp Image 2026-03-01 at 19.58.21 (2).jpeg', category: 'all', caption: { en: 'Gallery Image', ta: 'தொகுப்பு படம்' } },
    { src: '/gallery/WhatsApp Image 2026-03-01 at 19.58.21.jpeg', category: 'all', caption: { en: 'Gallery Image', ta: 'தொகுப்பு படம்' } },
    { src: '/gallery/WhatsApp Image 2026-03-01 at 19.58.22 (1).jpeg', category: 'all', caption: { en: 'Gallery Image', ta: 'தொகுப்பு படம்' } },
    { src: '/gallery/WhatsApp Image 2026-03-01 at 19.58.22 (2).jpeg', category: 'all', caption: { en: 'Gallery Image', ta: 'தொகுப்பு படம்' } },
    { src: '/gallery/WhatsApp Image 2026-03-01 at 19.58.22.jpeg', category: 'all', caption: { en: 'Gallery Image', ta: 'தொகுப்பு படம்' } },
    { src: '/gallery/WhatsApp Image 2026-03-01 at 19.58.23 (1).jpeg', category: 'all', caption: { en: 'Gallery Image', ta: 'தொகுப்பு படம்' } },
    { src: '/gallery/WhatsApp Image 2026-03-01 at 19.58.23 (2).jpeg', category: 'all', caption: { en: 'Gallery Image', ta: 'தொகுப்பு படம்' } },
    { src: '/gallery/WhatsApp Image 2026-03-01 at 19.58.23.jpeg', category: 'all', caption: { en: 'Gallery Image', ta: 'தொகுப்பு படம்' } },
    { src: '/gallery/WhatsApp Image 2026-03-01 at 19.58.24 (1).jpeg', category: 'all', caption: { en: 'Gallery Image', ta: 'தொகுப்பு படம்' } },
    { src: '/gallery/WhatsApp Image 2026-03-01 at 19.58.24 (2).jpeg', category: 'all', caption: { en: 'Gallery Image', ta: 'தொகுப்பு படம்' } },
    { src: '/gallery/WhatsApp Image 2026-03-01 at 19.58.24.jpeg', category: 'all', caption: { en: 'Gallery Image', ta: 'தொகுப்பு படம்' } },
    { src: '/gallery/WhatsApp Image 2026-03-01 at 19.58.25 (1).jpeg', category: 'all', caption: { en: 'Gallery Image', ta: 'தொகுப்பு படம்' } },
    { src: '/gallery/WhatsApp Image 2026-03-01 at 19.58.25 (2).jpeg', category: 'all', caption: { en: 'Gallery Image', ta: 'தொகுப்பு படம்' } },
    { src: '/gallery/WhatsApp Image 2026-03-01 at 19.58.25.jpeg', category: 'all', caption: { en: 'Gallery Image', ta: 'தொகுப்பு படம்' } },
    { src: '/gallery/WhatsApp Image 2026-03-01 at 19.58.26 (1).jpeg', category: 'all', caption: { en: 'Gallery Image', ta: 'தொகுப்பு படம்' } },
    { src: '/gallery/WhatsApp Image 2026-03-01 at 19.58.26 (2).jpeg', category: 'all', caption: { en: 'Gallery Image', ta: 'தொகுப்பு படம்' } },
    { src: '/gallery/WhatsApp Image 2026-03-01 at 19.58.26 (3).jpeg', category: 'all', caption: { en: 'Gallery Image', ta: 'தொகுப்பு படம்' } },
    { src: '/gallery/WhatsApp Image 2026-03-01 at 19.58.26.jpeg', category: 'all', caption: { en: 'Gallery Image', ta: 'தொகுப்பு படம்' } },
    { src: '/gallery/WhatsApp Image 2026-03-01 at 19.58.27 (1).jpeg', category: 'all', caption: { en: 'Gallery Image', ta: 'தொகுப்பு படம்' } },
    { src: '/gallery/WhatsApp Image 2026-03-01 at 19.58.27 (2).jpeg', category: 'all', caption: { en: 'Gallery Image', ta: 'தொகுப்பு படம்' } },
    { src: '/gallery/WhatsApp Image 2026-03-01 at 19.58.27.jpeg', category: 'all', caption: { en: 'Gallery Image', ta: 'தொகுப்பு படம்' } },
    { src: '/gallery/WhatsApp Image 2026-03-01 at 19.58.28 (1).jpeg', category: 'all', caption: { en: 'Gallery Image', ta: 'தொகுப்பு படம்' } },
    { src: '/gallery/WhatsApp Image 2026-03-01 at 19.58.28 (2).jpeg', category: 'all', caption: { en: 'Gallery Image', ta: 'தொகுப்பு படம்' } },
    { src: '/gallery/WhatsApp Image 2026-03-01 at 19.58.28.jpeg', category: 'all', caption: { en: 'Gallery Image', ta: 'தொகுப்பு படம்' } },
    { src: '/gallery/WhatsApp Image 2026-03-01 at 19.58.29 (1).jpeg', category: 'all', caption: { en: 'Gallery Image', ta: 'தொகுப்பு படம்' } },
    { src: '/gallery/WhatsApp Image 2026-03-01 at 19.58.29 (2).jpeg', category: 'all', caption: { en: 'Gallery Image', ta: 'தொகுப்பு படம்' } },
    { src: '/gallery/WhatsApp Image 2026-03-01 at 19.58.29.jpeg', category: 'all', caption: { en: 'Gallery Image', ta: 'தொகுப்பு படம்' } },
  ],

  donate: {
    upiId: 'nanresei@upi',
    accountName: 'Nanre Sei Public Charitable Trust',
    accountNumber: 'XXXXXXXXXXXX',
    ifsc: 'XXXXX0000000',
    bankBranch: 'Coimbatore, Tamil Nadu',
    note: {
      en: "After donating, share your transaction ID on WhatsApp so we can acknowledge your contribution.",
      ta: "நன்கொடை செய்த பிறகு, உங்கள் பரிவர்த்தனை ஐடியை வாட்ஸ்அப்பில் பகிரவும், நாங்கள் உங்கள் பங்களிப்பை உறுதிப்படுத்துவோம்.",
    },
    exemptionNote: {
      en: 'Tax exemption under 80G available. Contact us for receipt.',
      ta: '80G இன் கீழ் வரி விலக்கு கிடைக்கும். ரசீதுக்கு தொடர்பு கொள்ளுங்கள்.',
    },
  },

  contact: {
    whatsapp: '919XXXXXXXXX',
    facebook: 'https://www.facebook.com/nanreseitrust',
    email: 'contact@nanreseitrust.org',
    address: {
      en: 'Nanre Sei Public Charitable Trust, Coimbatore, Tamil Nadu - 641001',
      ta: 'நன்றே செய் பொதுநல அறக்கட்டளை, கோயம்புத்தூர், தமிழ்நாடு - 641001',
    },
    form: {
      name:    { en: 'Full Name',     ta: 'முழு பெயர்' },
      email:   { en: 'Email ID',      ta: 'மின்னஞ்சல்' },
      phone:   { en: 'Phone Number',  ta: 'தொலைபேசி எண்' },
      enquiry: { en: 'Enquiry Type',  ta: 'விசாரணை வகை' },
      subject: { en: 'Subject',       ta: 'பொருள்' },
      message: { en: 'Message',       ta: 'செய்தி' },
      submit:  { en: 'Send Message',  ta: 'செய்தி அனுப்பு' },
      enquiryOptions: [
        { value: 'general',      label: { en: 'General Enquiry',  ta: 'பொது விசாரணை' } },
        { value: 'donation',     label: { en: 'Donation',         ta: 'நன்கொடை' } },
        { value: 'volunteering', label: { en: 'Volunteering',     ta: 'தொண்டு சேவை' } },
        { value: 'partnership',  label: { en: 'Partnership',      ta: 'கூட்டாண்மை' } },
      ],
    },
  },

  footer: {
    copyright: {
      en: 'Nanre Sei Public Charitable Trust. All rights reserved.',
      ta: 'நன்றே செய் பொதுநல அறக்கட்டளை. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டுள்ளன.',
    },
    legal: {
      en: 'Registered Trust · Reg. No. 143/2018',
      ta: 'பதிவு செய்யப்பட்ட அறக்கட்டளை · பதிவு எண். 143/2018',
    },
  },
};
