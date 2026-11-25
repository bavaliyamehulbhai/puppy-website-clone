# AI Tools & Prompt Documentation — TeddyPups Clone

This document details the AI tools, strategic prompts, and human-in-the-loop engineering workflow used during the development of the TeddyPups website clone for the **Blutec AI Technical Round**.

---

## 1. AI Tools Utilized

- **Google DeepMind Agentic Assistant (Antigravity):** Reverse-engineering reference website structure, asset extraction, code scaffolding, component isolation, responsive debugging, and build verification.
- **ChatGPT:** Strategic architecture planning, component modularity design, and prompt review.

---

## 2. Prompts & Implementation Workflow

### Prompt 1 — Reference Website Reverse-Engineering & Sitemapping
- **Purpose:** Deconstruct `https://puppy.instabizweb.com/` before writing any code.
- **Actual Prompt:**
  > *"Inspect https://puppy.instabizweb.com/. Analyze the DOM, CSS stylesheet variables, typography pairings, images, and routes. Extract the color palette, fonts (Fraunces, Figtree, Shantell Sans), all 20 puppy listings, FAQs, and testimonials. Generate sitemap.md, section-analysis.md, functionality.md, and assets.md."*
- **How Output Was Used:**
  The analysis identified all 8 core sections of the homepage and 7 subpages (`/puppies`, `/puppies/:slug`, `/happy-families`, `/how-it-works`, `/faq`, `/contact`, `/gone-home`), ensuring no pages or layout details were overlooked.

### Prompt 2 — Project Setup & Tailwind CSS v4 Configuration
- **Purpose:** Set up a clean, maintainable Vite + React foundation with zero-config Tailwind v4.
- **Actual Prompt:**
  > *"Scaffold a React + Vite JavaScript project with Tailwind CSS v4 (@tailwindcss/vite). Configure root CSS variables for the warm cream/espresso palette. Set up folder architecture (`components/{common,layout,sections}`, `pages/`, `data/`, `routes/`). Wire up React Router DOM and verify production build."*
- **How Output Was Used:**
  Established a modular project structure that avoids massive monolithic components and allows seamless scaling.

### Prompt 3 — Reusable Component Development & Data-Driven Architecture
- **Purpose:** Build reusable UI components for cards, buttons, badges, and modals.
- **Actual Prompt:**
  > *"Create reusable React components: Container (consistent max-w-7xl), Button (polymorphic supporting primary terracotta, secondary cream, and dark variants), SectionHeading (script eyebrow + Fraunces title + description), PuppyCard (1:1 image, hover zoom, badges), and EnquiryModal (form validation). Structure the 20 puppies in puppyData.js with complete metadata."*
- **How Output Was Used:**
  Separated data from presentation, allowing instant client-side filtering and easy content maintenance.

### Prompt 4 — Multi-Page Routing & Interactive Features
- **Purpose:** Implement real interactions across catalog, search, filters, carousels, and contact form.
- **Actual Prompt:**
  > *"Implement all pages based on the Phase 1 analysis:
  > - Puppies.jsx with live multi-attribute search, breed filter pills, location filter (Mumbai showroom vs. Imported), and gender selector.
  > - PuppyDetails.jsx with image carousel (prev/next slide counter), fact sheet, pre-filled WhatsApp inquiry, and video modal.
  > - Contact.jsx with interactive Mad-libs letter form with live regex validation.
  > - FAQ.jsx with accessible expandable accordions.
  > - HowItWorks.jsx with 4 interactive tabs.
  > - GoneHome.jsx with vintage boarding pass ticket cards."*
- **How Output Was Used:**
  Provided rich, interactive functionality so no button or control on the website is decorative or inert.

### Prompt 5 — Indian Context Localization
- **Purpose:** Localize the website for Indian buyers without altering the reference aesthetic.
- **Actual Prompt:**
  > *"Adapt the website context for India: update pricing to Indian Rupees (₹45,000 to ₹1,50,000), set flagship boutique showroom to Bandra West, Mumbai, add safe climate-controlled pan-India pet delivery (Mumbai, Delhi NCR, Bengaluru, Hyderabad, Pune, Ahmedabad), update testimonials to Indian parents, and ensure contact numbers reflect India (+91 98981 24987). Keep the brand name as 'TeddyPups' in the UI and 'TeddyPups India' in the browser tab title."*
- **How Output Was Used:**
  Transformed the clone into a compelling, realistic portfolio project tailored to the Indian market.

### Prompt 6 — Quality Assurance, Error Handling & Build Optimization
- **Purpose:** Ensure resilience, accessibility, and zero production build errors.
- **Actual Prompt:**
  > *"Add an ErrorBoundary wrapping the app, implement route-aware auto-close on mobile menu navigation via useLocation, add image onError fallbacks to prevent broken images, configure netlify.toml for SPA client-side routing, and verify production build."*
- **How Output Was Used:**
  Passed the Vite production build in under 3.5 seconds with zero errors, ready for 1-click Netlify deployment.

---

## 3. Engineering Takeaways

Rather than asking AI to generate a monolithic 1500-line single-file website, we followed an iterative engineering workflow:
**Inspect Reference → Component Blueprint → Code Modular Unit → Test & Compare → Refine → Git Commit.**
This ensured complete code ownership, full maintainability, and clean architecture that can be confidently demonstrated in the technical interview.
