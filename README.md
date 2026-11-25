# TeddyPups — Boutique Teacup Puppies Platform

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![React Router](https://img.shields.io/badge/React_Router-7-CA4245?logo=react-router&logoColor=white)](https://reactrouter.com/)
[![Netlify](https://img.shields.io/badge/Netlify-Deployed-00C7B7?logo=netlify&logoColor=white)](https://www.netlify.com/)

A high-performance, responsive web application cloning the design, typography, micro-interactions, and multi-page experience of [TeddyPups](https://puppy.instabizweb.com/), developed for the **Blutec AI Technical Round**.

Customized with localized context (INR ₹ currency, Bandra West Mumbai boutique showroom, safe climate-controlled pan-India pet transit, and metro customer reviews).

---

## 🐶 Project Deliverables

| Deliverable | Link |
|---|---|
| **Live Deployed App** | [https://puppy-website.netlify.app/](https://puppy-website.netlify.app/) |
| **GitHub Source Code** | [https://github.com/bavaliyamehulbhai/puppy-website-clone](https://github.com/bavaliyamehulbhai/puppy-website-clone) |
| **Loom Video Walkthrough** | [Add your Loom recording link here] |
| **Reference Website** | [https://puppy.instabizweb.com/](https://puppy.instabizweb.com/) |

---

## 🛠️ Tech Stack & Decisions

- **Framework:** React 19 with Vite 8 for fast HMR and sub-4s production bundling.
- **Styling:** Tailwind CSS v4 using `@tailwindcss/vite` and CSS variables for organic design tokens.
- **Typography:** Google Fonts pairing of **Fraunces** (luxury serif display) and **Figtree** (geometric UI sans), complemented by **Shantell Sans** for playful badge accents.
- **Routing:** React Router v7 with shared layouts, scroll-to-top restoration, dynamic slug parameters, and query string synchronization.
- **Icons:** `lucide-react` with optimized inline SVGs for brand logos and social links.
- **Hosting:** Netlify with SPA redirect rules (`netlify.toml` and `public/_redirects`).

---

## ✨ Architectural Features

### 1. Multi-Page Structure
- **Home (`/`):** 8 modular sections: Hero with floating puppy previews, *"Meet the pups"* grid, showroom vs. import comparison, 3-step concierge roadmap, trust pillars, happy families gallery, and FAQ teaser.
- **Available Puppies Catalog (`/puppies`):** 20 puppies with live multi-attribute search, breed filter pills (*Maltipoo, Cavapoo, Pomeranian, Poodle, Shih Tzu*), origin selector (*In Mumbai showroom* vs. *Imported for you*), gender filters, age sorting, and empty state handling.
- **Puppy Detail Profile (`/puppies/:slug`):** Media carousel with slide counter (`‹ 1 / 3 ›`), video modal, fact sheet (*Breed, Gender, Age, Color, Expected Weight, Location*), health guarantee badges, pre-filled WhatsApp action, and enquiry modal.
- **Happy Families (`/happy-families`):** Social proof wall (*"64 moments and counting"*), verified customer reviews, interactive heart likes, and image lightbox modal.
- **How It Works (`/how-it-works`):** 4-tab interactive guide (*Two ways home, Our puppy promise, Delivery & collection, Why choose us*).
- **FAQ (`/faq`):** Accessible expandable accordion list with live search and WhatsApp concierge prompt.
- **Visit & Contact (`/contact`):** Interactive Mad-libs letter form (*"Dear TeddyPups, my name is..."*) with live regex validation, showroom location in Bandra West, Mumbai, and Google Maps embed.
- **Gone Home (`/gone-home`):** Vintage boarding pass tickets (*"one ticket home ♥ admit one"*) archiving adopted puppies.
- **404 Handling (`*`):** Custom recovery page with navigation back to Home.

### 2. Engineering Quality
- **Component Modularity:** Reusable common components (`Container`, `Button`, `SectionHeading`, `Badge`, `PuppyCard`, `SearchInput`, `FAQItem`, `EnquiryModal`).
- **Resilient Mobile UX:** Full-height slide-over drawer with route-aware auto-close via `useLocation` and `Escape` key listeners.
- **Global Error Boundary:** Root-level React Error Boundary providing graceful recovery against uncaught rendering errors.
- **Image Fallbacks:** Every image implements an `onError` fallback to prevent broken UI states.
- **Scroll Restoration:** Custom `useScrollToTop` hook resets scroll position on route transitions.

---

## 📁 Repository Structure

```
puppy-clone/
├── public/
│   ├── _redirects               # Netlify SPA rewrite rules
│   └── assets/                  # Brand assets & 20 puppy images in WebP
├── src/
│   ├── components/
│   │   ├── common/              # Reusable UI primitives
│   │   │   ├── Badge.jsx
│   │   │   ├── Button.jsx
│   │   │   ├── Container.jsx
│   │   │   ├── EnquiryModal.jsx
│   │   │   ├── ErrorBoundary.jsx
│   │   │   ├── FAQItem.jsx
│   │   │   ├── PuppyCard.jsx
│   │   │   └── SearchInput.jsx
│   │   ├── layout/              # Navbar, Footer, MainLayout
│   │   └── sections/            # 8 modular homepage sections
│   ├── data/                    # Clean data layer (puppyData, homeData, faqData, navigationData)
│   ├── hooks/                   # useScrollToTop
│   ├── pages/                   # Route views (Home, Puppies, PuppyDetails, etc.)
│   ├── routes/                  # AppRoutes configuration
│   ├── utils/                   # formatters & helpers
│   ├── index.css                # Tailwind v4 & design tokens
│   └── main.jsx
├── docs/
│   ├── interaction-audit.md     # Component & interaction QA audit
│   └── ai-prompts.md            # Technical prompt engineering log
├── netlify.toml                 # Netlify deployment configuration
├── vite.config.js
└── package.json
```

---

## 🚀 Local Setup & Installation

```bash
# 1. Clone the repository
git clone https://github.com/bavaliyamehulbhai/puppy-website-clone.git
cd puppy-website-clone

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev

# 4. Production build
npm run build
npm run preview
```

---

## 🌐 Netlify Deployment

1. Push your repository to GitHub (`git push origin main`).
2. Log in to [Netlify](https://app.netlify.com/) and click **Add new site > Import an existing project**.
3. Connect your repository:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Deploy the site. Client-side routing is handled by `netlify.toml`.

---

## 📋 Documentation & Notes

- **Interaction QA Audit:** See [docs/interaction-audit.md](docs/interaction-audit.md) for element-by-element verification.
- **Prompt Engineering & Methodology:** See [docs/ai-prompts.md](docs/ai-prompts.md) for the AI assistance and prompt documentation required by the assignment guidelines.

---

## 👨‍💻 Author

**Bavaliya Mehulbhai Mukeshbhai**  
Technical Assignment for **Blutec AI**
