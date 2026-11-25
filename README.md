# TeddyPups — Premium Teacup Puppies Website Clone

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![React Router](https://img.shields.io/badge/React_Router-7-CA4245?logo=react-router&logoColor=white)](https://reactrouter.com/)
[![Netlify](https://img.shields.io/badge/Netlify-Deployed-00C7B7?logo=netlify&logoColor=white)](https://www.netlify.com/)

A high-fidelity, responsive website clone of [TeddyPups](https://puppy.instabizweb.com/), developed for the **Blutec AI Technical Round**.

This project recreates the complete visual design, typography, spacing, multi-page routing, interactive filtering, mad-libs contact form, and media galleries, customized with authentic Indian context (INR ₹ currency, Bandra West Mumbai showroom, pan-India climate-controlled delivery, and Indian metro testimonials).

---

## 🐶 Deliverables & Live Links

| Deliverable | Link |
|---|---|
| **Live Website (Netlify)** | [https://YOUR_NETLIFY_SITE_NAME.netlify.app](https://YOUR_NETLIFY_SITE_NAME.netlify.app) |
| **GitHub Repository** | [https://github.com/YOUR_USERNAME/puppy-website-clone](https://github.com/YOUR_USERNAME/puppy-website-clone) |
| **Loom Video Walkthrough** | [https://www.loom.com/share/YOUR_LOOM_ID](https://www.loom.com/share/YOUR_LOOM_ID) |
| **Reference Website** | [https://puppy.instabizweb.com/](https://puppy.instabizweb.com/) |

---

## ✨ Features & Functionality

### 1. Multi-Page Architecture
- **Home (`/`):** 8 custom sections including Hero showcase, *"Meet the pups"* grid, showroom vs. import comparison, concierge journey roadmap, trust pillars, customer moments wall, and FAQ teaser.
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
- **Verified Health Passport:** Microchipped, vaccinated, and certified by registered veterinary doctors.

### 3. Engineering Highlights
- **Tailwind CSS v4:** Zero-config CSS integration with `@import "tailwindcss";` and custom design tokens for warm ivory (`#FFFDF8`), terracotta (`#C2622B`), and deep espresso (`#2A170E`).
- **Typography:** `Fraunces` (warm serif display headings), `Figtree` (clean geometric body font), and `Shantell Sans` (playful script accents).
- **Resilient Mobile UX:** Hamburger slide-over drawer with route-aware auto-close via `useLocation` and `Escape` key listeners.
- **Error Boundary:** Global React Error Boundary preventing UI crashes with recovery actions.
- **Zero Broken Images:** `onError` fallback handling across all puppy cards.
- **Netlify SPA Configuration:** `netlify.toml` and `public/_redirects` ensure direct route reloads work flawlessly without 404 errors.

---

## 📁 Project Structure

```
puppy-clone/
├── public/
│   ├── _redirects               # Netlify SPA redirect rules
│   ├── assets/
│   │   ├── brand/logo.png
│   │   └── puppies/             # 20 real reference puppy images (WebP)
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
│   ├── interaction-audit.md     # Full QA and interaction audit
│   └── ai-prompts.md            # Comprehensive AI prompt log
├── netlify.toml                 # Netlify build & redirect config
├── vite.config.js
└── package.json
```

---

## 🚀 Local Development

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

### Production Build & Preview
```bash
npm run build
npm run preview
```

---

## 🌐 Netlify Deployment Steps

This project is pre-configured for seamless Netlify deployment with `netlify.toml` and `public/_redirects`:

1. Push your repository to GitHub:
   ```bash
   git push origin main
   ```
2. Open the [Netlify Dashboard](https://app.netlify.com/).
3. Click **Add new site > Import an existing project**.
4. Select **GitHub** and choose your `puppy-website-clone` repository.
5. Verify build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Branch:** `main`
6. Click **Deploy Site**. Netlify will build and deploy in ~30 seconds.
7. Change the default site name under **Site Configuration > Change site name** to something clean like:
   `https://teddypups-india.netlify.app` or `https://puppy-clone-mehul.netlify.app`.

---

## 🤖 AI-Assisted Development & Prompts

AI tools were used selectively during development for architectural analysis, DOM reverse-engineering, component scaffolding, and debugging. For details about prompts and methodology, see:
👉 **[docs/ai-prompts.md](docs/ai-prompts.md)**

---

## 👨‍💻 Author

**Bavaliya Mehulbhai Mukeshbhai**  
- **Email:** [Your Email]
- **GitHub:** [https://github.com/YOUR_USERNAME](https://github.com/YOUR_USERNAME)
