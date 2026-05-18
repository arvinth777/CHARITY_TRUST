# Product Requirements Document
## Nanre Sei Public Charitable Trust — Public Website
**Version 2.0 · Static Landing Site · ViswaSanthi-Style Layout**

> This PRD merges the original technical foundation with the layout and visual language of https://www.viswasanthifoundation.com/. Replace every `[PLACEHOLDER]` before handing to an AI coding tool.

---

## Table of Contents

1. [Overview](#1-overview)
2. [Goals & Non-Goals](#2-goals--non-goals)
3. [Recommended Tech Stack](#3-recommended-tech-stack)
4. [Site Architecture](#4-site-architecture)
5. [Section Specifications](#5-section-specifications)
6. [Design System](#6-design-system)
7. [Responsive Behaviour](#7-responsive-behaviour)
8. [Bilingual Support (Tamil + English)](#8-bilingual-support-tamil--english)
9. [Performance Requirements](#9-performance-requirements)
10. [SEO Requirements](#10-seo-requirements)
11. [Content Map — Placeholders to Fill](#11-content-map--placeholders-to-fill)
12. [Suggested File Structure](#12-suggested-file-structure)
13. [AI Coding Prompts (Vibe Coding Guide)](#13-ai-coding-prompts-vibe-coding-guide)
14. [Deployment](#14-deployment)
15. [How to Update Content Post-Launch](#15-how-to-update-content-post-launch)
16. [Acceptance Criteria](#16-acceptance-criteria)

---

## 1. Overview

This document describes the requirements for a public-facing website for **Nanre Sei Public Charitable Trust**, a Coimbatore-based charitable trust focused on education, mobility, and opportunity for rural and underprivileged students. The site is a static landing page — no backend, no database, no login.

### 1.1 Purpose

- Tell visitors who the trust is and what it does
- Build credibility through transparency (registration details, photos, impact numbers)
- Give donors a frictionless way to contribute via UPI
- Provide contact details and social links
- Serve Tamil-speaking and English-speaking visitors equally well
- Showcase a year-by-year activity timeline from 2018 to present

### 1.2 Scope — v1

| In scope | Out of scope |
|---|---|
| Single-page landing site with section anchors | Payment gateway / Razorpay integration |
| Static UPI QR image for donations | User accounts or login |
| Mobile + desktop responsive layouts | Blog or news feed |
| Tamil / English language toggle | Volunteer application backend |
| **Year-by-year activity timeline (2018–2026)** | CMS / admin dashboard |
| Contact section (WhatsApp, Facebook, email) | Server-side rendering |
| Photo gallery (static images) | Multilingual beyond Tamil + English |
| SEO meta tags + Open Graph | |
| Vercel / Netlify deployment | |

---

## 2. Goals & Non-Goals

### 2.1 Goals

- Load fast — Lighthouse Performance score ≥ 90 on mobile
- Look professional and trustworthy on both phone and desktop
- Be easy to update — all content lives in a single `src/config/site.ts` file
- Support Tamil and English with a clean language toggle, no page reload
- Be free to host — deploy to Vercel or Netlify free tier
- Good SEO in both languages — proper meta tags, Open Graph, semantic HTML
- Replicate the warm, credible, NGO-style layout of ViswaSanthi Foundation

### 2.2 Non-Goals

- No real-time donation tracking
- No CMS — content is updated by editing source files directly
- No donation success metrics or analytics dashboard
- No other Indian languages in v1 (can be added later)

---

## 3. Recommended Tech Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | **Astro** | Ships near-zero JS by default. Excellent Lighthouse scores. Easy to edit. |
| Styling | **Tailwind CSS v3** | Utility-first. Mobile-first breakpoints built in. No unused CSS in production. |
| Language | **TypeScript (minimal)** | Type-safe content config. Catches placeholder mistakes at build time. |
| i18n | **Client-side language toggle** | `data-lang` attribute on `<html>` + CSS show/hide. No routing complexity. |
| Fonts | **Google Fonts** | Noto Sans Tamil + Lato + Playfair Display. Both load from same CDN. |
| Images | **Astro Image component** | Auto-optimises, converts to WebP, lazy loads. Critical for gallery performance. |
| SEO | Manual `<head>` in Base.astro | Meta title/description in both languages. hreflang tags. |
| Deployment | **Vercel or Netlify** | Free tier. Auto-deploy on git push. HTTPS included. |
| Version control | Git + GitHub | Required for auto-deploy. |

---

## 4. Site Architecture

### 4.1 Page Structure

The site is a single HTML page. Navigation links are anchor links that scroll to sections. Language switching happens in-place (JS swaps visible content) with no full page reload.

| Route | Section ID | Purpose |
|---|---|---|
| `/` | `#hero` | Full-width hero slider with motto and CTAs |
| `/` | `#about` | Mission, vision, founding story, registration badge |
| `/` | `#work` | What the trust does — 6 program category cards |
| `/` | `#timeline` | Year-by-year activity log with photos, 2018 to 2026 |
| `/` | `#gallery` | Photo grid of past events (ViswaSanthi-style overlay cards) |
| `/` | `#donate` | UPI QR image + bank details |
| `/` | `#contact` | Contact form + info cards (ViswaSanthi split layout) |

### 4.2 Navigation Bar (ViswaSanthi Style)

- **Sticky top nav** on desktop. Hamburger menu on mobile.
- **Left:** Trust logo (`assets/images/logo.png`) + Trust name text.
- **Right nav links:** Home · About Us · What We Do ▼ · Gallery · Join Us ▼ · Contact Us · **[Donate button in orange/saffron]**
- **Active page** gets an underline accent (orange/saffron).
- **Language toggle** in the nav — a simple `EN | தமிழ்` switcher button. Saves preference to localStorage.
- Nav collapses gracefully below 1024px.
- Smooth scroll behavior for all anchor links.

---

## 5. Section Specifications

### 5.1 Hero Section (`#hero`) — ViswaSanthi Slider Style

| Attribute | Requirement |
|---|---|
| Layout | Full viewport height (`100svh`) desktop, min `80vh` mobile |
| Background | **Image slider/carousel with 3 slides.** Each slide is a full-bleed high-quality image with a dark gradient overlay for text readability |
| Heading (H1) per slide | Slide 1: "Nanre Sei Public Charitable Trust" · Slide 2: "Education. Mobility. Opportunity." · Slide 3: "Join Us in Uplifting Coimbatore's Children" |
| Subheading per slide | Bilingual motto text in active language |
| Primary CTA | "Donate Now" / "இப்போது நன்கொடை செய்யுங்கள்" — anchors to `#donate`. Filled orange/saffron button. |
| Secondary CTA | "Learn More" / "மேலும் அறிக" — anchors to `#about`. Ghost/outline style button. |
| Scroll indicator | Subtle down-arrow animation at bottom of hero |
| Slider dots | Bottom-center dot indicators (like ViswaSanthi) showing active slide |
| Auto-play | Optional 5-second auto-advance with manual override |

**Hero Slide Content:**

```typescript
heroSlides: [
  {
    image: "/hero-1.jpg",
    title: { en: "Nanre Sei Public Charitable Trust", ta: "நன்றே செய் பொதுநல அறக்கட்டளை" },
    subtitle: { en: "Empowering Rural Students Since 2018", ta: "2018 முதல் கிராமப்புற மாணவர்களை மேம்படுத்துதல்" }
  },
  {
    image: "/hero-2.jpg",
    title: { en: "Education. Mobility. Opportunity.", ta: "கல்வி. இயக்கம். வாய்ப்பு." },
    subtitle: { en: "Bicycles, Books, and Digital Access for Every Child", ta: "ஒவ்வொரு குழந்தைக்கும் சைக்கிள்கள், புத்தகங்கள், மற்றும் டிஜிட்டல் அணுகல்" }
  },
  {
    image: "/hero-3.jpg",
    title: { en: "Join Us in Uplifting Coimbatore's Children", ta: "கோயம்புத்தூர் குழந்தைகளை மேம்படுத்த எங்களுடன் இணையுங்கள்" },
    subtitle: { en: "Your support creates lasting change", ta: "உங்கள் ஆதரவு நிலையான மாற்றத்தை உருவாக்குகிறது" }
  }
]
```

---

### 5.2 Welcome / About Section (`#about`) — ViswaSanthi Split Layout

| Attribute | Requirement |
|---|---|
| Layout | **Two-column split layout** (like ViswaSanthi homepage): Left 50% text, Right 50% image with decorative border frame |
| Left Column | Large serif heading "Welcome to Nanre Sei Public Charitable Trust" + 2-paragraph founding story from about.md |
| Right Column | Photo inside a decorative border frame. Use an **orange/blue accent border** (like ViswaSanthi's orange frame). Image: `assets/images/welcome-photo.jpg` |
| Mobile | Stack vertically — image above text, or text full-width then image |
| Registration badge | Visually prominent card below the welcome text: Trust Registration No. `[REG NUMBER]`, and 80G / 12A status if applicable |
| Mission/Vision | 1–2 sentence mission + vision statements below the story |

**Content from about.md:**
- Founding story: "The trust began with a simple act: giving bicycles to children who walked long distances to school. What started as a small effort in 2018 has grown into a structured movement spanning multiple neighborhoods in and around Coimbatore."
- Mission: "Bridging the educational gap for children from government schools and low-income families through access to books, mobility, digital tools, and quality after-school support."
- Vision: "A Coimbatore where every child, regardless of background, has the tools and support to complete their education and pursue their dreams."

---

### 5.3 Impact Stats Bar

| Attribute | Requirement |
|---|---|
| Layout | **Horizontal strip** below the Welcome section (or integrated into it) |
| Style | 4 stat cards in a row, each with a large number + label |
| Stats | Years of Service (8+) · Bicycles Distributed (placeholder) · Students in Tuition (placeholder) · Locations Covered (10+) |
| Animation | Optional count-up animation on scroll (nice-to-have) |
| Language | Labels switch with language toggle |

---

### 5.4 Our Work / Programs Section (`#work`)

| Attribute | Requirement |
|---|---|
| Layout | **Card grid:** 3 columns desktop, 2 tablet, 1 mobile |
| Each card | Icon or small image · Category title · 2–3 sentence description |
| Categories (6 cards) | 1. 🚲 Mobility (Bicycles) · 2. 📚 Books & Supplies · 3. 🏫 Evening Tuition · 4. 💻 Digital Access · 5. 💰 Scholarships & Aid · 6. 🏆 Competitions & Events |
| Card style | White background, subtle border, rounded corners, soft shadow on hover |
| Language | Card titles and descriptions switch with language toggle |

**Content from about.md program pillars:**

```typescript
workCategories: [
  {
    icon: "bicycle",
    title: { en: "Mobility", ta: "இயக்கம்" },
    description: { en: "Distributing bicycles to students since 2018 so distance is never a barrier to education.", ta: "2018 முதல் மாணவர்களுக்கு சைக்கிள்கள் வழங்குதல் — தூரம் ஒருபோதும் கல்விக்கு தடையாக இருக்கக்கூடாது." }
  },
  {
    icon: "book",
    title: { en: "Learning Materials", ta: "கற்றல் பொருட்கள்" },
    description: { en: "Books, school bags, and stationery for children who need them most.", ta: "குழந்தைகளுக்கு புத்தகங்கள், பள்ளி பைகள், மற்றும் எழுதுபொருட்கள்." }
  },
  {
    icon: "school",
    title: { en: "Evening Tuition", ta: "மாலை பயிற்சி வகுப்புகள்" },
    description: { en: "Free after-school classes in government and government-aided school neighborhoods.", ta: "அரசு மற்றும் அரசு உதவி பெறும் பள்ளி பகுதிகளில் இலவச மாலை வகுப்புகள்." }
  },
  {
    icon: "tablet",
    title: { en: "Digital Access", ta: "டிஜிட்டல் அணுகல்" },
    description: { en: "Tablets and iPads to help students navigate digital learning.", ta: "டிஜிட்டல் கற்றலுக்கு டேப்லெட்டுகள் மற்றும் ஐபேடுகள்." }
  },
  {
    icon: "heart",
    title: { en: "Scholarships & Aid", ta: "கல்வி உதவித்தொகை & உதவி" },
    description: { en: "Direct financial aid to meritorious students and families in distress.", ta: "தகுதியான மாணவர்களுக்கும் துன்பத்தில் உள்ள குடும்பங்களுக்கும் நேரடி நிதியுதவி." }
  },
  {
    icon: "trophy",
    title: { en: "Competitions & Events", ta: "போட்டிகள் & நிகழ்வுகள்" },
    description: { en: "Art, literary, and cultural competitions to nurture hidden talent.", ta: "கலை, இலக்கிய, மற்றும் கலாச்சார போட்டிகள் மூலம் மறைந்த திறமைகளை வளர்த்தல்." }
  }
]
```

---

### 5.5 Timeline Section (`#timeline`) — Vertical Timeline with Category Filters

| Attribute | Requirement |
|---|---|
| Layout | **Vertical timeline**, centred on desktop. Single column on mobile. |
| Visual style | Alternating left/right cards on desktop (even years left, odd years right). On mobile, all cards stack on the right side of a single vertical line. |
| Timeline spine | A vertical saffron-coloured line with a filled circle dot at each year entry. |
| Category filter buttons | **Horizontal button row above timeline:** 🚲 Mobility · 📚 Books · 🏫 Tuition · 💰 Aid · 💻 Digital · 🏆 Events. Clicking filters the timeline items via JS. |
| Each entry | Year badge (large, accented) · Event title in active language · 2–4 sentence description · 1–3 photos from that year's events |
| Photos per entry | Small inline photo grid (1–3 images, square crop). Same images as gallery or different — both are fine. |
| Entry count | One entry per year active: 2018, 2020, 2021, 2022, 2025, 2026 |
| Language | All titles and descriptions switch with the language toggle. Year numbers stay as numerals. |
| Empty years | If nothing notable happened in a year (e.g. 2019, 2023, 2024), include a short honest note or skip the year. |

**Timeline Data from timeline.md:**

```typescript
export const timeline = [
  {
    year: 2018,
    category: "mobility",
    title: { en: "The Beginning — Bicycle Drive", ta: "தொடக்கம் — சைக்கிள் பகிர்வு" },
    description: {
      en: "The trust began distributing bicycles to students who walked long distances to school. This simple act of mobility support marked the beginning of our journey across Coimbatore.",
      ta: "நீண்ட தூரம் நடந்து பள்ளிக்கு செல்லும் மாணவர்களுக்கு சைக்கிள்கள் வழங்குவதை அறக்கட்டளை தொடங்கியது. இந்த எளிய இயக்க ஆதரவு கோயம்புத்தூர் முழுவதும் எங்கள் பயணத்தின் தொடக்கமாகும்."
    },
    photos: [
      { src: "/timeline/2018-bicycle-drive.webp", alt: { en: "First bicycle distribution event", ta: "முதல் சைக்கிள் வழங்கும் நிகழ்வு" } }
    ]
  },
  {
    year: 2020,
    category: "mobility",
    title: { en: "Bicycles, Books & Social Stations", ta: "சைக்கிள்கள், புத்தகங்கள் & சமூக நிலையங்கள்" },
    description: {
      en: "June 1: Distributed 4 bicycles in Veeriyampalayam to create a social bicycle station. June 8: Donated storybooks to children in Singanallur and Rangapuram. June 16: Follow-up drive with additional books and bicycles. Sponsor: Thiru. Santhosh.",
      ta: "ஜூன் 1: வீரியம்பாளையத்தில் 4 சைக்கிள்கள் வழங்கப்பட்டன. ஜூன் 8: சிங்காநல்லூர் மற்றும் ரங்கபுரத்தில் கதைப்புத்தகங்கள் வழங்கப்பட்டன. ஜூன் 16: கூடுதல் புத்தகங்கள் மற்றும் சைக்கிள்கள். நிதியுதவி: திரு. சந்தோஷ்."
    },
    photos: [
      { src: "/timeline/2020-06-01-bicycles.webp", alt: { en: "Children with new bicycles", ta: "புதிய சைக்கிள்களுடன் குழந்தைகள்" } },
      { src: "/timeline/2020-06-08-books.webp", alt: { en: "Book distribution night event", ta: "புத்தக வழங்கல் இரவு நிகழ்வு" } }
    ]
  },
  {
    year: 2021,
    category: "aid",
    title: { en: "Financial Aid & Continued Mobility", ta: "நிதியுதவி & தொடர்ந்த இயக்கம்" },
    description: {
      en: "May 21: Provided ₹2,000 monthly support to the wife/widow of Vignesh in Nehru Nagar, Palakkara. A separate bicycle distribution was also conducted at a school event.",
      ta: "மே 21: நேரு நகர், பாலக்காராவில் விக்னேஷின் மனைவி/விதவைக்கு மாதாந்திர ₹2,000 ஆதரவு வழங்கப்பட்டது. தனி பள்ளி நிகழ்விலும் சைக்கிள் வழங்கப்பட்டது."
    },
    photos: [
      { src: "/timeline/2021-05-21-aid.webp", alt: { en: "Financial aid distribution", ta: "நிதியுதவி வழங்குதல்" } }
    ]
  },
  {
    year: 2022,
    category: "digital",
    title: { en: "Digital Access & Scholarships", ta: "டிஜிட்டல் அணுகல் & கல்வி உதவித்தொகை" },
    description: {
      en: "June 15: iPad Tabs distributed to government school students in Uppilipalayam for digital learning (Sponsor: ThyDream Tech, Thiru. Manoj). June 24: School bags and supplies in Rangapuram. July 4: ₹2,000 scholarships to Janarthanan (7th std) and Sopana (9th std) at NGR School (Sponsor: ARR Law Firm, Adv. Thiru A.R. Ramesh).",
      ta: "ஜூன் 15: உப்பிலிபாளையத்தில் அரசுப் பள்ளி மாணவர்களுக்கு ஐபேட் டேப்லெட்டுகள் (நிதியுதவி: ThyDream Tech). ஜூன் 24: ரங்கபுரத்தில் பள்ளி பைகள். ஜூலை 4: NGR பள்ளியில் ஜனார்த்தனன் (7ஆம் வகுப்பு) மற்றும் சோபனா (9ஆம் வகுப்பு) ஆகியோருக்கு ₹2,000 கல்வி உதவித்தொகை (நிதியுதவி: ARR Law Firm)."
    },
    photos: [
      { src: "/timeline/2022-06-15-ipads.webp", alt: { en: "iPad distribution to students", ta: "மாணவர்களுக்கு ஐபேட் வழங்குதல்" } },
      { src: "/timeline/2022-07-04-scholarship.webp", alt: { en: "Scholarship ceremony", ta: "கல்வி உதவித்தொகை விழா" } }
    ]
  },
  {
    year: 2025,
    category: "tuition",
    title: { en: "Evening Tuition Network Expansion", ta: "மாலை பயிற்சி வலையமைப்பு விரிவாக்கம்" },
    description: {
      en: "Jan 8: Launched evening classes in Nalli Chetti Palayam, Annur Union (Teacher: Mrs. Priya; Volunteers: Thiru. Maran, Gokul). Mar 5: Expanded to Guniyamuthur. Jul 2: Expanded to Thirumurthi Nagar. Oct 29: New batch in Aathupalayam, Karumbukadai. The tuition network now serves students across 4+ locations.",
      ta: "ஜன 8: நல்லிசெட்டிபாளையம், அன்னூர் ஒன்றியத்தில் மாலை வகுப்புகள் தொடக்கம் (ஆசிரியை: திருமதி. பிரியா). மார் 5: குணியமுத்தூரில் விரிவாக்கம். ஜூலை 2: திருமூர்த்தி நகரில் விரிவாக்கம். அக் 29: ஆத்துப்பாளையத்தில் புதிய தொகுதி."
    },
    photos: [
      { src: "/timeline/2025-01-08-tuition-annur.webp", alt: { en: "Evening tuition at Annur", ta: "அன்னூரில் மாலை பயிற்சி" } },
      { src: "/timeline/2025-10-29-tuition-aathupalayam.webp", alt: { en: "Tuition at Aathupalayam", ta: "ஆத்துப்பாளையத்தில் பயிற்சி" } }
    ]
  },
  {
    year: 2026,
    category: "events",
    title: { en: "Kalai Ilakkiya Potti — Art & Literary Competition", ta: "கலை இலக்கிய போட்டி" },
    description: {
      en: "Feb 16: Poster released. Feb 28: District-level competition held at Nagarasu Samuthayakoodam, Madukkarai Market. Competitions: Drawing, Art, Speech (Tamil/English), Essay, Poetry, Dance, Drama. Chief Guest: G.P. Sakthivel. Special Prize: ₹2,000 to Manavi Sivatharani (9th std, Indian Team Chess Player).",
      ta: "பிப் 16: சுவரொட்டி வெளியீடு. பிப் 28: நகராசு சமுதாயக்கூடம், மதுக்கரை சந்தையில் மாவட்ட அளவிலான போட்டி. போட்டிகள்: ஓவியம், கலை, பேச்சு, கட்டுரை, கவிதை, நடனம், நாடகம். சிறப்பு பரிசு: ₹2,000 மாணவி சிவதாரணிக்கு (9ஆம் வகுப்பு, இந்திய அணி சதுரங்க வீராங்கனை)."
    },
    photos: [
      { src: "/timeline/2026-02-16-poster.webp", alt: { en: "Competition poster", ta: "போட்டி சுவரொட்டி" } },
      { src: "/timeline/2026-02-28-competition.webp", alt: { en: "Competition event day", ta: "போட்டி நிகழ்வு நாள்" } }
    ]
  }
];
```

**Map Section (Below Timeline):**
- Embed a **Leaflet.js map** (OpenStreetMap) showing all trust activity locations.
- Use the locations array from timeline.md:

```typescript
const mapLocations = [
  { name: "Veeriyampalayam", lat: 11.0524, lng: 77.0437, programs: ["Bicycles"], year: 2020 },
  { name: "Singanallur / Rangapuram", lat: 11.0000, lng: 77.0000, programs: ["Books", "Bags", "Bicycles"], year: "2020, 2022" },
  { name: "Nalli Chetti Palayam", lat: 11.2400, lng: 77.1000, programs: ["Evening Tuition"], year: 2025 },
  { name: "Madukkarai Market", lat: 10.9000, lng: 76.9000, programs: ["Competitions"], year: 2026 }
  // ... add all 11 locations from timeline.md
];
```

---

### 5.6 Gallery Section (`#gallery`) — ViswaSanthi Grid Style

| Attribute | Requirement |
|---|---|
| Layout | **Uniform grid:** 3–4 columns desktop, 2 tablet, 1 mobile |
| Breadcrumb | Home > Gallery > [Category] (like ViswaSanthi) |
| Page heading | "Gallery" / "படங்கள்" |
| Toggle tabs | **PHOTO GALLERY | VIDEO GALLERY** (like ViswaSanthi) |
| Photo Grid | Each item is a **square/rectangular card** with:
| | - The actual photo as background |
| | - **Dark gradient overlay at bottom** |
| | - **White uppercase title text centered on the image** (like ViswaSanthi) |
| | - Hover effect: slight zoom + brighter overlay |
| Categories/groups | Bicycles, Books & Bags, Evening Tuition, iPad Distribution, Scholarships, Competitions |
| Images | Use exact image placeholders from timeline.md for each card |
| Count | Start with 6–12 images. Must handle up to 30 without breaking. |
| Lightbox | Nice-to-have — not required for v1 |
| Permission | Ensure photos of beneficiaries have consent. |

**Gallery Categories from timeline.md:**

```typescript
galleryCategories: [
  { id: "bicycles", label: { en: "BICYCLES", ta: "சைக்கிள்கள்" } },
  { id: "books", label: { en: "BOOKS & BAGS", ta: "புத்தகங்கள் & பைகள்" } },
  { id: "tuition", label: { en: "EVENING TUITION", ta: "மாலை பயிற்சி" } },
  { id: "digital", label: { en: "DIGITAL ACCESS", ta: "டிஜிட்டல் அணுகல்" } },
  { id: "scholarships", label: { en: "SCHOLARSHIPS", ta: "கல்வி உதவித்தொகை" } },
  { id: "competitions", label: { en: "COMPETITIONS", ta: "போட்டிகள்" } }
]
```

---

### 5.7 Donate Section (`#donate`)

| Attribute | Requirement |
|---|---|
| Layout | Centred card, max-width 480px |
| UPI QR image | Static file: `/public/qr.png`. Replace file to update — no code changes needed. |
| QR display size | Minimum 260×260px. Must be crisp on retina screens. |
| UPI ID text | Displayed as plain text below QR: `[upi@bankname]` |
| Bank details (optional) | Account Name, Account Number, IFSC, Bank & Branch |
| Post-donation note | "After donating, share your transaction ID on WhatsApp so we can acknowledge your contribution." — link the WhatsApp number. Available in both languages. |
| 80G note (if applicable) | "Tax exemption under 80G available. Contact us for receipt." |
| Language | All text switches with language toggle |

---

### 5.8 Contact Section (`#contact`) — ViswaSanthi Split Layout

| Attribute | Requirement |
|---|---|
| Layout | **Two-column split (like ViswaSanthi):** Left 60% Contact Form, Right 40% Contact Info Cards |
| Left Column — Form | Fields: Full Name* · Email ID* · Phone Number* · Enquiry Type* (dropdown: General / Donation / Volunteering / Partnership) · Subject* · Message* · reCAPTCHA placeholder · **SUBMIT button** (full-width, orange/saffron color) |
| Right Column — Info Cards | Stacked cards with icons (like ViswaSanthi orange cards): |
| | 1. **Address card:** "Nanre Sei Public Charitable Trust, [Address Placeholder], Coimbatore, Tamil Nadu" |
| | 2. **Email card:** placeholder@nanreseitrust.org |
| | 3. **Phone card:** +91-XXXXX-XXXXX |
| | Cards should have the same solid color background and white icon style as ViswaSanthi reference |
| WhatsApp | Button → `https://wa.me/91XXXXXXXXXX`. Opens new tab. |
| Facebook | Button → direct URL to Facebook group/page. Opens new tab. |
| Registration | Trust Registration Number displayed visibly |
| Map (optional) | Google Maps embed. Lazy-load the iframe. |
| Language | Labels and helper text switch with language toggle |

---

### 5.9 Footer

- Trust name + copyright year (auto-updated at build time)
- Quick links: About · Donate · Contact
- Social icons: Facebook, WhatsApp
- Legal line: "Registered Trust · `[Registration No.]`"
- Language toggle (mirrored from nav, for users who scrolled to bottom)
- Optional: Privacy Policy link

---

## 6. Design System

### 6.1 Colour Palette (ViswaSanthi-Inspired)

| Token | Hex | Usage |
|---|---|---|
| `--color-primary` | `#C2410C` (Saffron-orange) | CTA buttons, accents, headings, active nav underline |
| `--color-primary-dark` | `#9A3412` | Button hover state |
| `--color-primary-light` | `#FFF7ED` | Tinted backgrounds, card fills, info card backgrounds |
| `--color-secondary` | `#1E3A8A` (Trust Blue) | Trust logo accent, decorative borders, secondary headings |
| `--color-text` | `#1C1917` | Body copy |
| `--color-text-muted` | `#6B7280` | Captions, secondary text |
| `--color-bg` | `#FFFFFF` | Page background |
| `--color-bg-alt` | `#F9FAFB` | Alternating section backgrounds |
| `--color-border` | `#E5E7EB` | Dividers, card borders |
| `--color-overlay` | `rgba(0,0,0,0.5)` | Hero image overlay, gallery card gradient |

> Keep warm saffron/orange as the primary accent (matching ViswaSanthi's orange buttons and info cards). Use deep blue as a secondary trust color (from the Nanre Sei Facebook logo badge).

### 6.2 Typography

| Role | Font | Size (desktop) | Weight |
|---|---|---|---|
| Display / H1 | Playfair Display (EN) · Noto Serif Tamil (TA) | 48–64px | 700 |
| Section H2 | Lato (EN) · Noto Sans Tamil (TA) | 32–36px | 700 |
| Sub-heading H3 | Lato / Noto Sans Tamil | 22–24px | 600 |
| Body copy | Lato / Noto Sans Tamil | 16–18px | 400 |
| Captions / labels | Lato / Noto Sans Tamil | 13–14px | 400 |
| CTA buttons | Lato / Noto Sans Tamil | 16px | 600 |
| Gallery overlay text | Lato / Noto Sans Tamil | 18–20px | 700, uppercase |

> **Important:** Tamil script requires Noto Sans Tamil or Noto Serif Tamil. Do not use Lato or Playfair Display for Tamil text — they do not support Tamil Unicode and will render as boxes.

### 6.3 Spacing Scale

Use a consistent 8px base unit: 8 / 16 / 24 / 32 / 48 / 64 / 96px. Tailwind's default scale covers this. Do not use arbitrary pixel values.

### 6.4 Component Patterns

**Buttons**
- Primary (filled): `bg-primary`, white text, `rounded-lg`, `px-6 py-3`
- Secondary (outline): `border-primary`, primary-coloured text, transparent background
- Hover: darken by one shade + `scale-105`
- Donate nav button: Same as primary, slightly smaller padding

**Cards**
- White background, `1px` border (`--color-border`), `rounded-xl`, `padding: 24px`
- Soft box-shadow on hover
- Info cards (Contact page): Solid orange background, white text, white icon, rounded corners

**Section layout**
- Max content width: `1200px`, centred with auto margins
- Section vertical padding: `80px` desktop, `48px` mobile
- Alternating backgrounds (white / `--color-bg-alt`) for visual separation without borders

**Welcome section image frame (ViswaSanthi style)**
- Photo container with a thick decorative border (4–8px) in orange or blue
- Optional: Offset border effect (border on top+left, image on bottom+right)

---

## 7. Responsive Behaviour

| Breakpoint | Width | Layout changes |
|---|---|---|
| Mobile (default) | < 640px | Single column. Hamburger nav. Smaller hero text. QR full width. Language toggle in hamburger menu. Gallery 1-col. Timeline single-column right-aligned. |
| Tablet (sm) | 640–1023px | 2-col gallery grid. Work cards 2-col. Nav still hamburger. Contact form full width, info cards below. |
| Desktop (lg) | ≥ 1024px | Full nav visible with language toggle. 3-col grids. Two-col about/contact. Timeline alternating left/right. |
| Wide (xl) | ≥ 1280px | Content capped at 1200px, centred. No further changes. |

> Test on a real phone — not just DevTools. Verify Tamil text renders correctly on Android (Chrome) and iOS (Safari). Test the QR code is scannable at mobile screen sizes.

---

## 8. Bilingual Support (Tamil + English)

### 8.1 Approach

Use a **client-side language toggle** on a single page. No separate `/ta` and `/en` routes needed for v1. When the user clicks the toggle:

1. A `data-lang="ta"` or `data-lang="en"` attribute is set on the `<html>` element
2. CSS hides/shows the correct language spans
3. The preference is saved to `localStorage` so it persists on refresh

### 8.2 Content Structure in `site.ts`

All content must be stored as bilingual objects:

```typescript
// src/config/site.ts

export const siteConfig = {
  name: {
    en: "Nanre Sei Public Charitable Trust",
    ta: "நன்றே செய் பொதுநல அறக்கட்டளை",
  },
  tagline: {
    en: "Empowering Rural Students Since 2018",
    ta: "2018 முதல் கிராமப்புற மாணவர்களை மேம்படுத்துதல்",
  },
  about: {
    story: {
      en: "The trust began with a simple act: giving bicycles to children who walked long distances to school. What started as a small effort in 2018 has grown into a structured movement spanning multiple neighborhoods in and around Coimbatore.",
      ta: "நீண்ட தூரம் நடந்து பள்ளிக்கு செல்லும் குழந்தைகளுக்கு சைக்கிள்கள் வழங்குவதன் மூலம் அறக்கட்டளை தொடங்கப்பட்டது. 2018-ல் ஒரு சிறிய முயற்சியாக தொடங்கியது, இன்று கோயம்புத்தூர் மற்றும் சுற்றியுள்ள பல பகுதிகளை உள்ளடக்கிய ஒரு கட்டமைக்கப்பட்ட இயக்கமாக வளர்ந்துள்ளது.",
    },
    mission: {
      en: "Bridging the educational gap for children from government schools and low-income families through access to books, mobility, digital tools, and quality after-school support.",
      ta: "அரசுப் பள்ளி மற்றும் குறைந்த வருமான குடும்ப குழந்தைகளுக்கு புத்தகங்கள், இயக்கம், டிஜிட்டல் கருவிகள், மற்றும் தரமான பள்ளிக்குப் பிந்தைய ஆதரவு மூலம் கல்வி இடைவெளியைக் குறைத்தல்.",
    },
    vision: {
      en: "A Coimbatore where every child, regardless of background, has the tools and support to complete their education and pursue their dreams.",
      ta: "பின்னணி எதுவாக இருந்தாலும் ஒவ்வொரு குழந்தையும் தங்கள் கல்வியை முடிக்கவும், தங்கள் கனவுகளைத் தொடரவும் தேவையான கருவிகள் மற்றும் ஆதரவுடன் இருக்கும் ஒரு கோயம்புத்தூர்.",
    },
  },
  donate: {
    upiId: "[upi@bankname]",
    note: {
      en: "After donating, share your transaction ID on WhatsApp so we can acknowledge your contribution.",
      ta: "நன்கொடை செய்த பிறகு, உங்கள் பரிவர்த்தனை ஐடியை வாட்ஸ்அப்பில் பகிரவும்.",
    },
  },
  contact: {
    whatsapp: "91XXXXXXXXXX",
    facebook: "[Facebook page URL]",
    email: "[email@domain.com]",
    address: {
      en: "[Address in English], Coimbatore, Tamil Nadu",
      ta: "[முகவரி தமிழில்], கோயம்புத்தூர், தமிழ்நாடு",
    },
    registrationNo: "[REG NUMBER]",
  },
  nav: {
    home:    { en: "Home",     ta: "முகப்பு" },
    about:   { en: "About Us", ta: "எங்களைப் பற்றி" },
    work:    { en: "What We Do", ta: "எங்கள் பணி" },
    timeline:{ en: "Journey",  ta: "பயணம்" },
    gallery: { en: "Gallery",  ta: "படங்கள்" },
    donate:  { en: "Donate",   ta: "நன்கொடை" },
    contact: { en: "Contact Us", ta: "தொடர்பு" },
  },
};
```

### 8.3 HTML Pattern for Bilingual Text

```html
<!-- In any .astro component -->
<p>
  <span class="lang-en">Founding story in English...</span>
  <span class="lang-ta">நிறுவனத்தின் கதை தமிழில்...</span>
</p>
```

```css
/* In global CSS */
[data-lang="en"] .lang-ta { display: none; }
[data-lang="ta"] .lang-en { display: none; }
```

```javascript
// Language toggle script (inline in Base.astro)
const saved = localStorage.getItem('lang') || 'en';
document.documentElement.setAttribute('data-lang', saved);

function toggleLang() {
  const current = document.documentElement.getAttribute('data-lang');
  const next = current === 'en' ? 'ta' : 'en';
  document.documentElement.setAttribute('data-lang', next);
  localStorage.setItem('lang', next);
}
```

### 8.4 Language Toggle Button

```html
<button onclick="toggleLang()" aria-label="Switch language">
  <span class="lang-en">தமிழ்</span>
  <span class="lang-ta">English</span>
</button>
```

### 8.5 Font Loading

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;600;700&family=Noto+Sans+Tamil:wght@400;600;700&family=Playfair+Display:wght@700&display=swap" rel="stylesheet" />
```

Tailwind config:

```javascript
fontFamily: {
  sans: ['Lato', 'Noto Sans Tamil', 'sans-serif'],
  display: ['Playfair Display', 'Noto Serif Tamil', 'serif'],
}
```

### 8.6 SEO for Bilingual Site

```html
<html lang="en"> <!-- updated dynamically by toggle script -->
<link rel="alternate" hreflang="en" href="https://[yourdomain].com/" />
<link rel="alternate" hreflang="ta" href="https://[yourdomain].com/" />
<meta name="description" content="[English description]" id="meta-desc" />
```

### 8.7 Tamil Content Notes

- All Tamil content in `site.ts` must be in **Unicode Tamil** (not transliteration)
- Do not use Tamil text in image filenames — use English slugs
- Tamil text is typically 20–30% wider than equivalent English text. Test layouts.
- Avoid hard-coding line heights for Tamil — Noto Sans Tamil needs slightly more vertical space

---

## 9. Performance Requirements

| Metric | Target | How to achieve |
|---|---|---|
| Lighthouse Performance (mobile) | ≥ 90 | Astro static output + image optimisation + minimal JS |
| Largest Contentful Paint | < 2.5s | Optimise hero image. `<link rel="preload">` on hero image. |
| Cumulative Layout Shift | < 0.1 | Set explicit `width` and `height` on every `<img>` |
| Total page weight | < 1.5 MB | WebP images, no heavy JS libraries |
| Font load | No FOUT | `font-display: swap` + `<link rel="preconnect">` to Google Fonts |
| Language toggle | < 50ms | Pure CSS show/hide — no re-render, no network request |

---

## 10. SEO Requirements

### 10.1 Head Tags

- `<title>`: `Nanre Sei Public Charitable Trust — Empowering Coimbatore Students | Official Website`
- `<meta name="description">`: 150–160 characters describing the trust and its work
- `<link rel="canonical">`: Full URL of the page
- `<meta name="robots" content="index, follow">`
- `<html lang="en">` updated dynamically to `lang="ta"` when Tamil is active

### 10.2 Open Graph (WhatsApp / Facebook previews)

- `og:title`, `og:description`, `og:image` (min 1200×630px), `og:url`, `og:type="website"`
- `og:locale`: `en_IN` default; `og:locale:alternate`: `ta_IN`

### 10.3 Structured Data

```json
{
  "@context": "https://schema.org",
  "@type": "NGO",
  "name": "Nanre Sei Public Charitable Trust",
  "url": "https://[yourdomain].com",
  "logo": "https://[yourdomain].com/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91XXXXXXXXXX",
    "contactType": "customer support"
  },
  "sameAs": ["[Facebook URL]"]
}
```

### 10.4 Technical SEO

- All images must have descriptive `alt` text in both languages
- Semantic HTML: `<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`
- Only one `<h1>` per page
- `sitemap.xml` auto-generated by Astro
- `robots.txt`: Allow all

---

## 11. Content Map — Placeholders to Fill

| Placeholder | What to replace with | Where used |
|---|---|---|
| `[Trust Name EN]` | Nanre Sei Public Charitable Trust | Nav, Hero, Footer, `<title>` |
| `[Trust Name TA]` | நன்றே செய் பொதுநல அறக்கட்டளை | Nav, Hero, Footer (Tamil mode) |
| `[Motto EN]` | Empowering Rural Students Since 2018 | Hero subheading |
| `[Motto TA]` | 2018 முதல் கிராமப்புற மாணவர்களை மேம்படுத்துதல் | Hero subheading (Tamil mode) |
| `[Cause description EN/TA]` | Education, mobility, and opportunity for Coimbatore's children | About section, meta description |
| `[Founding story EN/TA]` | How and why trust was started | About section |
| `[Mission EN/TA]` | Bridging the educational gap... | About section |
| `[Vision EN/TA]` | A Coimbatore where every child... | About section |
| `[REG NUMBER]` | Trust registration number | About badge, Contact, Footer |
| `[Work categories EN/TA]` | 6 categories with descriptions | Our Work cards |
| `[Impact numbers]` | 8+ years, bicycles count, tuition students, 10+ locations | Impact stats bar |
| `[Timeline entries]` | 2018, 2020, 2021, 2022, 2025, 2026 | Timeline section |
| `[Timeline photos]` | 1–3 `.webp` images per year in `/public/timeline/` | Timeline section |
| `[upi@bankname]` | Your UPI ID | Donate section |
| `[Bank details]` | Account name / number / IFSC (optional) | Donate section |
| `[91XXXXXXXXXX]` | WhatsApp number with country code | Contact section, `wa.me` link |
| `[Facebook URL]` | Direct link to Facebook group/page | Contact section, Footer |
| `[email@domain.com]` | Contact email address | Contact section |
| `[Address EN/TA]` | Physical address in both languages (optional) | Contact section |
| `[Gallery images]` | 6–12 `.webp` files in `/public/gallery/` | Gallery section |
| `[Gallery captions EN/TA]` | Short caption per photo in both languages | Gallery hover overlays |
| `[QR image]` | `/public/qr.png` — your UPI QR code | Donate section |
| `[OG image]` | `/public/og-image.jpg` — 1200×630px | `<head>` Open Graph |
| `[yourdomain].com` | Your actual domain once connected | Canonical URL, schema, hreflang |

---

## 12. Suggested File Structure

```
project-root/
├── public/
│   ├── qr.png                  ← UPI QR (replace file to update, no code change)
│   ├── og-image.jpg            ← Open Graph image (1200×630px)
│   ├── hero-1.jpg              ← Hero slide 1 background
│   ├── hero-2.jpg              ← Hero slide 2 background
│   ├── hero-3.jpg              ← Hero slide 3 background
│   ├── favicon.ico
│   ├── logo.png                ← Trust logo
│   ├── welcome-photo.jpg       ← About section framed photo
│   ├── about-leadership.jpg    ← Leadership team photo
│   ├── about-impact-collage.jpg← Impact collage
│   ├── gallery/                ← Drop .webp images here
│   │   ├── event-1.webp
│   │   └── event-2.webp
│   └── timeline/               ← One folder per year
│       ├── 2018-1.webp
│       ├── 2020-06-01-bicycles.webp
│       ├── 2020-06-08-books.webp
│       ├── 2021-05-21-aid.webp
│       ├── 2022-06-15-ipads.webp
│       ├── 2022-07-04-scholarship.webp
│       ├── 2025-01-08-tuition-annur.webp
│       ├── 2025-10-29-tuition-aathupalayam.webp
│       ├── 2026-02-16-poster.webp
│       └── 2026-02-28-competition.webp
├── src/
│   ├── config/
│   │   └── site.ts             ← ALL content lives here (EN + TA strings)
│   ├── components/
│   │   ├── Nav.astro           ← Sticky nav with language toggle + Donate CTA
│   │   ├── Hero.astro          ← 3-slide image carousel
│   │   ├── About.astro         ← Split layout: text left, framed image right
│   │   ├── ImpactStats.astro   ← Horizontal stat cards strip
│   │   ├── Work.astro          ← 6 program category cards
│   │   ├── Timeline.astro      ← Vertical timeline + category filters + map
│   │   ├── Gallery.astro       ← ViswaSanthi-style grid with overlay text
│   │   ├── Donate.astro        ← UPI QR centred card
│   │   ├── Contact.astro       ← Split: form left 60%, info cards right 40%
│   │   └── Footer.astro        ← Links, social icons, language toggle
│   ├── layouts/
│   │   └── Base.astro          ← <head>, fonts, meta tags, lang toggle script
│   └── pages/
│       └── index.astro         ← Assembles all sections
├── astro.config.mjs
├── tailwind.config.mjs         ← fontFamily includes Noto Sans Tamil
└── package.json
```

> `src/config/site.ts` is the only file you need to edit for content updates. Every component imports from it — nothing is hardcoded.

---

## 13. AI Coding Prompts (Vibe Coding Guide)

Use these prompts **in sequence** with your AI coding tool (Cursor, Lovable, v0, Claude, etc.).

---

**Prompt 1 — Project scaffold**

> "Create a new Astro project with Tailwind CSS. The site is for a Tamil/English bilingual charity trust called 'Nanre Sei Public Charitable Trust' based in Coimbatore. Use a warm saffron-orange (`#C2410C`) and deep blue (`#1E3A8A`) colour palette. Create a `src/config/site.ts` file that exports all content as bilingual objects with `{ en: string, ta: string }` shape. All components must import from this file — no hardcoded strings anywhere. Use the ViswaSanthi Foundation website (viswasanthifoundation.com) as the visual reference for layout and component styling."

---

**Prompt 2 — Layout, Nav, and language toggle**

> "Build a `Base.astro` layout with: proper `<head>` including Open Graph meta tags and hreflang for `en` and `ta`. Load Google Fonts: Lato, Noto Sans Tamil, and Playfair Display. Build a sticky `Nav.astro` with the trust logo left, nav links right on desktop (Home · About Us · What We Do · Gallery · Contact Us · Donate button in orange), and a hamburger menu on mobile (below 1024px). Include a language toggle button in the nav that switches between English and Tamil using a `data-lang` attribute on `<html>` and saves to `localStorage`. The Donate button should be a filled orange CTA. Active nav link gets an orange underline. Tamil text must use Noto Sans Tamil automatically via the font-family stack."

---

**Prompt 3 — Hero section (3-slide carousel)**

> "Build a `Hero.astro` component. Full viewport height, background image slider with 3 slides (auto-advancing, dot indicators at bottom). Each slide has a dark gradient overlay. Large white H1 and subtitle for each slide. Slide 1: 'Nanre Sei Public Charitable Trust' / 'Empowering Rural Students Since 2018'. Slide 2: 'Education. Mobility. Opportunity.' Slide 3: 'Join Us in Uplifting Coimbatore's Children'. A filled primary-orange 'Donate Now' button anchoring to `#donate`, and a ghost 'Learn More' button anchoring to `#about`. All text must render from `site.ts` bilingual objects. Mobile: reduce font sizes, stack buttons vertically, show swipeable single slide."

---

**Prompt 4 — Welcome / About section (ViswaSanthi split layout)**

> "Build an `About.astro` component with a ViswaSanthi-style split layout: Left 50% has a large serif heading 'Welcome to Nanre Sei Public Charitable Trust' + 2-paragraph founding story + mission/vision + a prominent registration badge. Right 50% has a photo inside a decorative border frame with an orange/blue accent border (thick offset border style like ViswaSanthi). On mobile, stack vertically. All text from `site.ts`."

---

**Prompt 5 — Impact Stats + Our Work cards**

> "Build an `ImpactStats.astro` component: a horizontal strip of 4 stat cards (Years of Service, Bicycles Distributed, Students in Tuition, Locations Covered) with large numbers and labels, animated count-up on scroll. Then build a `Work.astro` component: 3-column card grid (3 desktop, 2 tablet, 1 mobile). Each card has an icon, bilingual title, and bilingual description for 6 categories: Mobility, Learning Materials, Evening Tuition, Digital Access, Scholarships & Aid, Competitions & Events. All from `site.ts`."

---

**Prompt 6 — Timeline with category filters and map**

> "Build a `Timeline.astro` component. Read the `timeline` array from `site.ts` — each entry has a year, category, bilingual title, bilingual description, and optional photos. Render a vertical timeline: saffron spine with filled circle dots. On desktop, alternate left and right of the spine. On mobile, stack right. Above the timeline, add category filter buttons: Mobility, Books, Tuition, Aid, Digital, Events. Clicking filters visible entries via JS. Each entry shows: year badge, title, description, and 1–3 square-cropped photos (lazy-loaded via Astro Image). Below the timeline, embed a Leaflet.js map (OpenStreetMap) with pins for all locations from `site.ts`. Each pin popup shows location name, programs, and year."

---

**Prompt 7 — Gallery (ViswaSanthi overlay grid)**

> "Build a `Gallery.astro` component with a breadcrumb (Home > Gallery), heading 'Gallery', and PHOTO GALLERY / VIDEO GALLERY toggle tabs. The photo grid is 3–4 columns desktop, 2 tablet, 1 mobile. Each item is a card with the photo as background, a dark gradient overlay at bottom, and white uppercase title text centered on the image (exactly like ViswaSanthi's gallery). Hover: slight zoom + brighter overlay. Read images and bilingual captions from `site.ts`. Use Astro's `<Image>` component for all images with explicit width/height."

---

**Prompt 8 — Donate section**

> "Build a `Donate.astro` component. Centred card, max-width 480px. Display the QR image from `/public/qr.png` at minimum 260×260px with explicit width and height attributes. Show the UPI ID as plain text below. Add a bilingual post-donation note (from `site.ts`) with a WhatsApp link. If `site.ts` has an `has80G: true` flag, show a tax exemption note. No payment gateway — static only."

---

**Prompt 9 — Contact section (ViswaSanthi split layout)**

> "Build a `Contact.astro` component with a ViswaSanthi-style split layout: Left 60% is a contact form with fields: Full Name*, Email ID*, Phone Number*, Enquiry Type* (dropdown), Subject*, Message*, reCAPTCHA placeholder, and a full-width orange SUBMIT button. Right 40% is stacked info cards with white icons on orange backgrounds: Address card, Email card, Phone card. Each card has the icon centered at top, then text below. Also include WhatsApp and Facebook buttons that open in new tabs. All labels and text from `site.ts` bilingual objects."

---

**Prompt 10 — Performance and SEO pass**

> "Audit the full site: (1) Confirm all images — including timeline photos and gallery — have explicit width/height and use Astro's `<Image>` component. (2) Add `<link rel='preload'>` for the first hero image. (3) Add JSON-LD NGO schema to `Base.astro` using values from `site.ts`. (4) Update the `<html lang>` attribute dynamically to match the active language. (5) Confirm the Tailwind font stack includes `Noto Sans Tamil` as a fallback so Tamil characters never render as boxes. (6) Add `sitemap.xml` and `robots.txt`. (7) Run `astro check` and fix any type errors."

---

## 14. Deployment

| Step | Action |
|---|---|
| 1 | Push the project to a GitHub repository (public or private) |
| 2 | Log in to Vercel (`vercel.com`) or Netlify (`netlify.com`) with your GitHub account |
| 3 | Click "Add new project" → select your GitHub repo |
| 4 | Build command: `npm run build`. Output directory: `dist` |
| 5 | Deploy. You get a free `.vercel.app` or `.netlify.app` URL immediately |
| 6 | (Optional) Connect a custom domain in the platform's domain settings |
| 7 | Every `git push` to `main` auto-redeploys the site |

---

## 15. How to Update Content Post-Launch

| What to update | How |
|---|---|
| Trust name, motto, contact info, UPI ID, impact numbers | Edit `src/config/site.ts`. Commit and push — site rebuilds automatically. |
| Tamil translations | Edit the `ta:` values in `src/config/site.ts`. Push. |
| UPI QR code | Replace `/public/qr.png` with the new file (same filename). Push. |
| Gallery photos | Add `.webp` files to `/public/gallery/`. Add entries to the gallery array in `site.ts` with EN + TA captions. Push. |
| Add a new timeline year | Add a new object to the `timeline` array in `site.ts`. Add photos to `/public/timeline/`. Push. |
| Edit an existing timeline entry | Edit the relevant object in the `timeline` array in `site.ts`. Push. |
| Hero background images | Replace `/public/hero-1.jpg`, `hero-2.jpg`, `hero-3.jpg`. Push. |
| Registration number or 80G status | Edit `src/config/site.ts`. Push. |

---

## 16. Acceptance Criteria

The site is ready to launch when all of the following pass:

| # | Criterion |
|---|---|
| 1 | Lighthouse Performance ≥ 90 on mobile (Chrome DevTools) |
| 2 | All `[PLACEHOLDER]` values replaced with real content in both languages |
| 3 | UPI QR image is clearly displayed and scannable on a real phone |
| 4 | Language toggle switches all visible text between English and Tamil |
| 5 | Tamil text renders correctly (no boxes/squares) on Chrome Android and Safari iOS |
| 6 | Language preference persists after page refresh |
| 7 | WhatsApp link opens the correct number |
| 8 | Facebook link opens the correct group/page |
| 9 | Site renders correctly at 375px (iPhone SE) and 1440px (desktop) |
| 10 | No images are missing or broken |
| 11 | All images have non-empty alt text in the active language |
| 12 | Page `<title>` and meta description are set and not placeholders |
| 13 | Site loads over HTTPS |
| 14 | Hamburger nav opens and closes correctly on mobile |
| 15 | Donate button in nav scrolls to the QR section |
| 16 | Tamil card/button layouts do not overflow or break |
| 17 | Timeline renders all years from 2018 to 2026 with no missing entries |
| 18 | Timeline category filter buttons work and filter entries correctly |
| 19 | Timeline alternates left/right on desktop and stacks correctly on mobile |
| 20 | Gallery grid matches ViswaSanthi style (dark overlay, white uppercase text, hover zoom) |
| 21 | Contact page has the ViswaSanthi split layout (form 60%, info cards 40%) |
| 22 | Hero slider has 3 slides with dot indicators and auto-advance |
| 23 | Welcome/About section has the decorative bordered image frame |
| 24 | Impact stats bar shows 4 stats with animated count-up |
| 25 | Map section below timeline shows all trust locations with pins |

---

*PRD v2.0 — Nanre Sei Public Charitable Trust Website · Bilingual Tamil + English · ViswaSanthi-Style Layout · With Activity Timeline 2018–2026 · For vibe coding use*
