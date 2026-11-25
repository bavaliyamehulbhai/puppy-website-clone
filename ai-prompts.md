# AI Usage & Prompt Log — TeddyPups U.A.E. Clone

This document logs the strategic prompts and AI workflow utilized during the engineering of the TeddyPups U.A.E. website clone for the Blutec AI technical round.

---

## Phase 1 — Reverse-Engineering & Architecture
- **Tool:** Google DeepMind Agentic AI (Antigravity)
- **Task:** Inspect and reverse engineer `https://puppy.instabizweb.com/`
- **Prompt:**
  > "Analyze the DOM structure, color variables, typography, network assets, and page routes of https://puppy.instabizweb.com/. Extract the brand tokens (primary, background, fonts, borders), all 20 puppy catalog listings with metadata, FAQ items, testimonials, and navigation sitemap. Generate sitemap.md, section-analysis.md, functionality.md, and assets.md."
- **Outcome:** Generated 4 comprehensive specification deliverables, captured 20 real reference puppy images, brand assets, and identified Fraunces, Figtree, and Shantell Sans font pairing.

---

## Phase 2 — Project Setup & Tailwind v4 Foundation
- **Tool:** Google DeepMind Agentic AI (Antigravity)
- **Task:** Scaffold Vite + React + Tailwind CSS v4 foundation
- **Prompt:**
  > "Scaffold a clean React + Vite application with Tailwind CSS v4 (@tailwindcss/vite). Configure root CSS variables for the warm cream/terracotta/espresso palette. Set up folder architecture (components/{common,layout,sections}, pages, routes, data, hooks). Integrate React Router DOM and test production build."
- **Outcome:** Clean zero-error foundation running with Tailwind v4 and React Router.

---

## Phase 3 — Component-by-Component Implementation
- **Tool:** Google DeepMind Agentic AI (Antigravity)
- **Task:** Build reusable components and all 8 homepage sections + subpages
- **Prompt:**
  > "Implement the website page by page matching the reference design:
  > 1. Common UI: Container, Button, SectionHeading, Badge, PuppyCard, EnquiryModal.
  > 2. Layout: Sticky Navbar with backdrop-blur, mobile slide-in drawer, 4-column Footer.
  > 3. Homepage sections: HeroSection, MeetPupsSection, TwoWaysSection, JourneySection, TrustSection, HappyFamiliesTeaser, FAQTeaser, CTASection.
  > 4. Subpages: Available Puppies catalog with multi-filter pills, PuppyDetails with interactive slider and fact sheet, HappyFamilies social proof, HowItWorks process tabs, FAQ with search & accordion, Contact with Mad-libs letter form, and GoneHome vintage boarding pass tickets.
  > Ensure zero layout shifts, full responsiveness on mobile/tablet/desktop, and realistic interactive feedback."
- **Outcome:** Complete component-based website clone with rich client-side interactivity, query parameter filtering, and full responsive design.
