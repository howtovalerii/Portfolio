# Portfolio — Home Page

Next.js 15 App Router · Plain CSS · No dependencies beyond Next.js + React

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/
  layout.tsx       — Root layout, Inter font, metadata
  page.tsx         — Home page (composition only)
  global.css       — All styles: tokens, typography, layout, components

components/
  Header.tsx             — Absolute nav, smooth scroll, mailto CTA
  Hero.tsx               — H1, description, two mailto CTAs, open-for-work badge
  LogoStrip.tsx          — Animated scrolling logo row
  SelectedProjects.tsx   — 2×2 project card grid
  WhatIDo.tsx            — 3-col services grid
  About.tsx              — Image left / text right, stat grid
  TechStack.tsx          — 6-col icon grid
  ProfessionalDevelopment.tsx — Cards + load more
  CareerHighlights.tsx   — Company logo row
  FinalCTA.tsx           — CTA + FAQ accordion
  FAQ.tsx                — Single-open accordion
  Footer.tsx             — Copyright + nav links
  BottomBlur.tsx         — Fixed blur layer, scroll-triggered

public/
  avatar.jpg       — Header avatar (40×40 minimum)
  about.jpg        — About section image
  resume.pdf       — Resume file
  projects/
    meridian.png   — Project card images (optional)
    cove.png
    slate.png
    orbit.png
```

## Replacing placeholder content

1. Drop your images into `/public`
2. Update copy in each component
3. Update email, LinkedIn, and Dribbble URLs in `Footer.tsx` and `Header.tsx`

## Design tokens (global.css)

All colors, type scales, and spacing follow the spec exactly:
- Desktop type → mobile type via `@media (max-width: 768px)`
- Container: `max-width: 1040px`, centered
- Section padding: `120px 0` desktop / `64px 0` mobile
- Hero: `170px top / 120px bottom` desktop / `160px top / 64px bottom` mobile
