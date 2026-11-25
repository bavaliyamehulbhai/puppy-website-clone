# TeddyPups India — Premium Teacup & Miniature Puppies Clone

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![React Router](https://img.shields.io/badge/React_Router-7-CA4245?logo=react-router&logoColor=white)](https://reactrouter.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A high-fidelity, responsive website clone of [TeddyPups](https://puppy.instabizweb.com/), developed for the **Blutec AI Technical Round**.

This project recreates the complete visual design, typography, spacing, multi-page routing, interactive filtering, mad-libs contact form, and media galleries, localized with authentic Indian context (INR ₹ currency, Mumbai showroom, pan-India climate-controlled delivery, and Indian metro testimonials).

---

## 🐶 Live Demo & Video Walkthrough

- **Live Website:** [Deploy on Vercel](https://vercel.com/) (See deployment guide below)
- **Reference Website:** [https://puppy.instabizweb.com/](https://puppy.instabizweb.com/)
- **Loom Walkthrough:** [Your Loom Video Link Here]

---

## ✨ Key Features & Implementations

### 1. Multi-Page Architecture & Route Coverage
- **Home (`/`):** 8 custom sections including Hero showcase, *"Meet the pups"* grid, *"Two ways home"* showroom vs. import comparison, concierge journey roadmap, trust pillars, customer moments wall, and FAQ teaser.
- **Available Puppies Catalog (`/puppies`):** Complete catalog of 20 puppies with live client-side search (*"sniff out a puppy"*), breed filter pills (*Maltipoo, Cavapoo, Pomeranian, Poodle, Shih Tzu*), origin selector (*In Mumbai showroom* vs. *Imported for you*), gender filters, sorting options, and empty state.
- **Puppy Detail Profile (`/puppies/:slug`):** Media carousel with video preview modal, fact sheet (*Breed, Gender, Age, Color, Expected Weight, Location*), health guarantee badges, pre-filled WhatsApp action, and enquiry modal.
- **Happy Families (`/happy-families`):** Social proof wall (*"64 moments and counting"*), customer reviews from Mumbai, Delhi, Bengaluru, and Pune, with interactive heart toggles and image lightbox modal.
- **How It Works (`/how-it-works`):** 4-tab interactive guide (*Two ways home, Our puppy promise, Delivery & collection, Why choose us*).
- **FAQ (`/faq`):** Expandable accordion list with live search and 24/7 WhatsApp concierge trigger.
- **Visit & Contact (`/contact`):** Interactive Mad-libs letter form (*"Dear TeddyPups, my name is..."*) with live regex validation, showroom location in Bandra West, Mumbai, and Google Maps embed.
- **Gone Home (`/gone-home`):** Vintage boarding pass tickets (*"one ticket home ♥ admit one"*) archiving adopted puppies.
- **404 Not Found (`*`):** Graceful recovery screen with home navigation link.

### 2. Localized Indian Context
- **Currency:** Indian Rupees (`₹45,000` to `₹1,50,000`).
- **Showroom:** Flagship boutique in Bandra West, Mumbai, Maharashtra.
- **Pan-India Delivery:** Safe climate-controlled delivery to Mumbai, Delhi NCR, Bengaluru, Hyderabad, Pune, Ahmedabad, Kolkata, Chennai, and Jaipur with a pet concierge.
- **WhatsApp Support:** Direct WhatsApp integration with `+91 98981 24987`.
- **Verified Health Passport:** Microchipped, vaccinated, and certified by registered Indian and international veterinary doctors.

### 3. Engineering Highlights
- **Tailwind CSS v4:** Zero-config CSS integration with `@import "tailwindcss";` and custom design tokens for warm ivory (`#FFFDF8`), terracotta (`#C2622B`), and deep espresso (`#2A170E`).
- **Typography:** `Fraunces` (warm serif display headings), `Figtree` (clean geometric body font), and `Shantell Sans` (playful script accents).
- **Resilient Mobile UX:** Hamburger slide-over drawer with route-aware auto-close via `useLocation` and `Escape` key listeners.
- **Error Boundary:** Global React Error Boundary preventing UI crashes with recovery actions.
- **Zero Broken Images:** `onError` fallback handling across all puppy cards.
- **Performance:** Production build in **< 3 seconds** with code-splitting and asset optimization.

---

## 📁 Project Folder Structure

```
puppy-clone/
├── public/
│   ├── assets/
│   │   ├── brand/
│   │   │   └── logo.png
│   │   └── puppies/             # 20 real reference puppy images (WebP)
│   │       ├── maltipoo-max-male.webp
│   │       ├── korean-teacup-maltipoo-female.webp
│   │       └── ...
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── common/              # Reusable UI components
│   │   │   ├── Badge.jsx
│   │   │   ├── Button.jsx
│   │   │   ├── Container.jsx
│   │   │   ├── EnquiryModal.jsx
│   │   │   ├── ErrorBoundary.jsx
│   │   │   ├── FAQItem.jsx
│   │   │   ├── PuppyCard.jsx
│   │   │   └── SearchInput.jsx
│   │   ├── layout/              # Shared layout components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── MainLayout.jsx
│   │   └── sections/            # Homepage sections
│   │       ├── HeroSection.jsx
│   │       ├── MeetPupsSection.jsx
│   │       ├── TwoWaysSection.jsx
│   │       ├── JourneySection.jsx
│   │       ├── TrustSection.jsx
│   │       ├── HappyFamiliesTeaser.jsx
│   │       ├── FAQTeaser.jsx
│   │       └── CTASection.jsx
│   ├── data/                    # Structured data layers
│   │   ├── puppyData.js         # 20 puppies with INR pricing & specs
│   │   ├── homeData.js          # Hero, journey, and trust data
│   │   ├── faqData.js           # 9 localized FAQs
│   │   └── navigationData.js    # Routes and footer links
│   ├── pages/                   # Application pages
│   │   ├── Home.jsx
│   │   ├── Puppies.jsx
│   │   ├── PuppyDetails.jsx
│   │   ├── HappyFamilies.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── FAQ.jsx
│   │   ├── Contact.jsx
│   │   ├── GoneHome.jsx
│   │   └── NotFound.jsx
│   ├── routes/
│   │   └── AppRoutes.jsx        # React Router v7 configuration
│   ├── App.jsx
│   ├── index.css                # Tailwind v4 & design tokens
│   └── main.jsx
├── docs/
│   └── interaction-audit.md     # Full QA and interaction audit
├── ai-prompts.md                # AI prompts and decision log
├── vercel.json                  # SPA routing configuration for Vercel
├── vite.config.js
└── package.json
```

---

## 🚀 Getting Started Locally

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- `npm` (v9 or higher)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/puppy-website-clone.git
   cd puppy-website-clone
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build
```bash
npm run build
npm run preview
```

---

## 🌐 Deploying to Vercel

1. Push your repository to GitHub:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/puppy-website-clone.git
   git branch -M main
   git push -u origin main
   ```
2. Go to [Vercel](https://vercel.com/) and click **Add New > Project**.
3. Import your `puppy-website-clone` repository.
4. Keep the default settings (Framework Preset: **Vite**, Root Directory: `./`).
5. Click **Deploy**. Vercel will build and assign a live URL (e.g., `https://puppy-website-clone.vercel.app`).
6. The included `vercel.json` ensures that direct navigation to subpages (`/puppies`, `/contact`, `/faq`) works without 404 errors.

---

## 🎙️ Loom Video Presentation Outline (5–8 Minutes)

1. **Introduction (0:00 - 0:45):**
   - Introduce yourself (Mehul Bavaliya), the Blutec AI technical round assignment, and the goal of cloning `https://puppy.instabizweb.com/`.
2. **Live Demonstration (0:45 - 2:30):**
   - Showcase the live website: sticky navbar blur, hero split layout, puppy cards with video badges.
   - Demonstrate the catalog filtering: search by name, filter by breed, filter by location (Mumbai showroom vs. Imported), and sort by age.
   - Open a puppy detail page: image slider (`‹ 1 / 3 ›`), fact sheet with INR pricing, and pre-filled WhatsApp inquiry.
   - Show the Mad-libs letter form on the Contact page with live validation and confirmation.
   - Toggle mobile view (390px) to demonstrate the hamburger drawer and responsive layout.
3. **Project Architecture & Code (2:30 - 4:30):**
   - Walk through the folder structure: separation of `common/`, `layout/`, `sections/`, `pages/`, and `data/`.
   - Explain how Tailwind CSS v4 and Google Fonts (`Fraunces` + `Figtree`) maintain visual parity.
   - Highlight the Error Boundary and image fallback protection.
4. **AI Strategy & Prompt Engineering (4:30 - 5:30):**
   - Explain how AI was used strategically: reverse engineering DOM tokens, catalog structuring, and component isolation rather than blind full-page code generation.
   - Reference `ai-prompts.md`.
5. **Challenges & Solutions (5:30 - 6:30):**
   - Mention font loading optimization, route-aware mobile drawer auto-closing, and SPA deep-link routing on Vercel via `vercel.json`.
6. **Conclusion & Thank You (6:30 - 7:00):**
   - Wrap up with gratitude to the Blutec AI team.

---

## 👨‍💻 Author

**Bavaliya Mehulbhai Mukeshbhai**  
- **Email:** [Your Email]
- **GitHub:** [https://github.com/YOUR_USERNAME](https://github.com/YOUR_USERNAME)
- **LinkedIn:** [Your LinkedIn URL]
