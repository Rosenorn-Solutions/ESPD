# ESPD — System Design Document

## Everyday Sexism Project Danmark — Next.js Clone

**Version:** 1.0
**Date:** 2026-03-03

---

## 1. Project Overview

This project is a Next.js rebuild of [everydaysexismproject.dk](https://everydaysexismproject.dk/), the website of Everyday Sexism Project Danmark (ESPD) — a volunteer-driven Danish NGO that fights everyday sexism through education, awareness, and advocacy.

The existing site runs on **WordPress 6.3** with **Elementor 3.15** page builder on the **OceanWP** theme. The goal is to replace it with a modern, performant, maintainable **Next.js (App Router)** application with a headless CMS backend.

### 1.1 Goals

- Replicate all existing page content and navigation
- Achieve significantly better performance (Core Web Vitals)
- Enable content editors to manage pages/content without developer intervention
- Provide a clean, modern Danish-language interface
- Support responsive/mobile design
- Achieve WCAG 2.1 AA accessibility compliance
- Implement GDPR-compliant cookie consent

---

## 2. Sitemap & Information Architecture

### 2.1 Navigation Structure (from existing site)

```
Home (/)
│
├── Hvem er vi? (/hvem-er-vi)               [dropdown, no-click parent]
│   ├── Om ESPD (/om-espd)
│   ├── Bestyrelsen (/bestyrelsen)
│   ├── Vedtægter (/vedtaegter)
│   └── Regnskab 2021 (/regnskab)
│
├── Om sexisme (/om-sexisme)                 [dropdown, no-click parent]
│   ├── Hvad er sexisme? (/sexisme)
│   ├── Sexismepyramiden (/sexismepyramiden)
│   └── Hvad er voldtægtskultur? (/voldtaegtskultur)
│
├── Vores arbejde (/vores-arbejde)           [dropdown, no-click parent]
│   ├── Samarbejde (/samarbejde)             [nested dropdown]
│   │   ├── Sexisme i Gaming og Rollespil (/sexisme-i-gaming)
│   │   ├── Roskilde Festival (/roskilde-festival)
│   │   └── FN's verdensmål (/fns-verdensmaal)
│   ├── Mærkesager (/maerkesager)            [nested dropdown]
│   │   ├── Retningslinjer til medier (/retningslinjer-medier)
│   │   ├── Kønsbaseret vold (/koensbaseret-vold)
│   │   └── Samtykkebaseret voldtægtslovgivning (/samtykkelov)
│   ├── Aktiviteter (/aktiviteter)           [nested dropdown]
│   │   ├── ESPDs Flirteworkshop (/flirteworkshop)
│   │   └── Oplæg og arrangementer (/oplaeg)
│   └── Høringssvar (/hoeringssvar)
│
├── Kontakt (/kontakt)                       [dropdown, no-click parent]
│   ├── Kontakt os (/kontakt-os)
│   └── Find hjælp her (/find-hjaelp)
│
├── FAQ (/faq)
│
└── 🔍 Search (/search)
```

### 2.2 Page Types

| Page Type | Count | Description |
|---|---|---|
| **Home** | 1 | Hero, mission, about preview, "where to meet us" cards, social feeds, story CTA |
| **Content Page** | ~15 | Static informational pages (about, sexism info, work areas, etc.) |
| **Contact Page** | 1 | Contact form + contact information |
| **FAQ Page** | 1 | Accordion-style Q&A |
| **Help/Resources Page** | 1 | Links to external help resources |

---

## 3. Design System

### 3.1 Visual Identity

Based on the existing site analysis:

| Token | Value | Usage |
|---|---|---|
| **Primary Black** | `#000000` | Top bar background, nav text, headings |
| **White** | `#FFFFFF` | Nav background, buttons, link color, footer icons |
| **Accent Gold** | `#EECF5B` | Hover states, active links, CTA button hover |
| **Body Text** | `#757575` | Paragraph text color |
| **Dark Text** | `#2B2B2B` | Sub-menu links |
| **Light Gray** | `#A3A3A3` | Border colors, dividers |
| **Footer BG** | `#000000` | Footer background |
| **Footer Text** | `#F7F7F7` | Footer text |

### 3.2 Typography

| Role | Font Family | Weight | Size | Transform |
|---|---|---|---|---|
| **Navigation** | Raleway | 500 | 18px | UPPERCASE |
| **Sub-menu** | Raleway | 400 | 14px | UPPERCASE |
| **Headings (H2)** | Raleway | 600–700 | varies | often UPPERCASE |
| **Body Text** | Roboto | 300–400 | 16px | — |
| **Footer Headings** | Raleway | 700 | 25px | UPPERCASE |
| **Footer Copyright** | Roboto | 400 | 17px | — |
| **Accent/Handwritten** | Shadows Into Light | 400 | varies | — |

Google Fonts to load: **Raleway**, **Roboto**, **Roboto Slab**, **Shadows Into Light**

### 3.3 Layout & Spacing

- **Max content width:** 1200px (Elementor boxed layout)
- **Header:** "Medium header" style — logo row on top, navigation bar below
- **Breakpoint for mobile menu:** 1280px
- **Section gaps:** Extended column gap (~30–40px)
- **Shape dividers:** Cloud shapes, curves (SVG-based section transitions)

### 3.4 Component Library

| Component | Description |
|---|---|
| `Header` | Two-row: logo top, nav bar below. Sticky scroll support. |
| `MobileMenu` | Full-screen overlay mobile menu (hamburger trigger at ≤1280px) |
| `NavDropdown` | Multi-level dropdown menus (up to 3 levels deep) |
| `HeroSection` | Full-width section with background image/color, heading, optional shape divider |
| `ContentSection` | Two-column layout with text + image (alternating sides) |
| `CardGrid` | 3-column responsive grid for "where to meet us" and similar |
| `ImageGallery` | Thumbnail grid with lightbox overlay |
| `SocialFeed` | Embedded Facebook, Instagram, TikTok, Twitter/X widgets |
| `PodcastSection` | Podcast image + external link to Anchor.fm |
| `CTASection` | Curved top divider, heading, descriptive text, button |
| `AccordionFAQ` | Expandable Q&A items |
| `ContactForm` | Name, email, subject, message fields with validation |
| `Footer` | Three-column layout (support, volunteer, contact) + social icons + copyright |
| `CookieConsent` | GDPR cookie banner (bottom-positioned) |
| `Divider` | Styled horizontal rule |
| `Button` | Primary/secondary variants with hover states |
| `SearchOverlay` | Dropdown search input triggered from nav |
| `Breadcrumbs` | Structured breadcrumb navigation |
| `ScrollToTop` | Fixed bottom-right scroll-to-top button (45×45px, 5px border-radius) |

---

## 4. Technical Architecture

### 4.1 Tech Stack

| Layer | Technology | Rationale |
|---|---|---|
| **Framework** | Next.js 15 (App Router) | SSR/SSG, file-based routing, React Server Components |
| **Language** | TypeScript | Type safety, developer experience |
| **Styling** | Tailwind CSS 4 | Utility-first, matches design token approach |
| **CMS** | Sanity.io | Real-time editing, Danish-friendly, free tier fits NGO budget |
| **Forms** | React Hook Form + Zod | Validation, lightweight |
| **Email** | Resend or Nodemailer via API route | Contact form submission |
| **Hosting** | Vercel | Zero-config Next.js deployment, generous free tier |
| **Analytics** | Plausible or Umami | GDPR-friendly, no cookie consent needed |
| **Icons** | Font Awesome 6 (subset) or `react-icons` | Matching existing FA usage |
| **Image handling** | Next.js `<Image>` + Sanity image pipeline | Optimized, responsive images |

### 4.2 Project Structure

```
espd/
├── docs/
│   └── system_design.md          # This document
├── public/
│   ├── fonts/                     # Self-hosted font files (optional)
│   ├── images/                    # Static images (logo, favicons)
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── layout.tsx             # Root layout (header, footer, fonts, metadata)
│   │   ├── page.tsx               # Home page
│   │   ├── not-found.tsx          # 404 page
│   │   ├── search/
│   │   │   └── page.tsx           # Search results
│   │   ├── kontakt-os/
│   │   │   └── page.tsx           # Contact page
│   │   ├── faq/
│   │   │   └── page.tsx           # FAQ page
│   │   ├── find-hjaelp/
│   │   │   └── page.tsx           # Help resources
│   │   ├── [slug]/
│   │   │   └── page.tsx           # Dynamic CMS-driven content pages
│   │   └── api/
│   │       └── contact/
│   │           └── route.ts       # Contact form API endpoint
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── MobileMenu.tsx
│   │   │   ├── NavDropdown.tsx
│   │   │   ├── Breadcrumbs.tsx
│   │   │   └── ScrollToTop.tsx
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── ContentSection.tsx
│   │   │   ├── CardGrid.tsx
│   │   │   ├── CTASection.tsx
│   │   │   ├── PodcastSection.tsx
│   │   │   └── SocialFeedSection.tsx
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Divider.tsx
│   │   │   ├── AccordionItem.tsx
│   │   │   ├── ImageGallery.tsx
│   │   │   ├── CookieConsent.tsx
│   │   │   └── SearchOverlay.tsx
│   │   └── forms/
│   │       └── ContactForm.tsx
│   ├── lib/
│   │   ├── sanity/
│   │   │   ├── client.ts          # Sanity client config
│   │   │   ├── queries.ts         # GROQ queries
│   │   │   └── image.ts           # Image URL builder
│   │   └── utils.ts               # Shared utilities
│   ├── types/
│   │   └── index.ts               # TypeScript interfaces
│   └── styles/
│       └── globals.css            # Tailwind directives, global styles
├── sanity/
│   ├── sanity.config.ts           # Sanity Studio config
│   ├── sanity.cli.ts
│   └── schemas/
│       ├── page.ts                # Generic content page schema
│       ├── navigation.ts          # Navigation/menu structure
│       ├── faqItem.ts             # FAQ question/answer
│       ├── siteSettings.ts        # Global settings (logo, social links, etc.)
│       └── blockContent.ts        # Rich text / portable text
├── tailwind.config.ts
├── next.config.ts
├── tsconfig.json
├── package.json
└── .env.local                     # Sanity project ID, dataset, API token
```

### 4.3 Rendering Strategy

| Page | Strategy | Rationale |
|---|---|---|
| Home (`/`) | **ISR** (revalidate: 3600) | Semi-static, updated occasionally |
| Content pages (`/[slug]`) | **ISR** (revalidate: 3600) | CMS content, rarely changes |
| FAQ (`/faq`) | **ISR** (revalidate: 3600) | Accordion content from CMS |
| Contact (`/kontakt-os`) | **Static + Client** | Form is client-side, rest is static |
| Search (`/search`) | **SSR** | Dynamic based on query params |

### 4.4 API Routes

| Route | Method | Purpose |
|---|---|---|
| `POST /api/contact` | POST | Receives contact form submissions, validates, sends email |
| `GET /api/revalidate` | GET | Webhook from Sanity to trigger on-demand ISR revalidation |

---

## 5. CMS Schema Design (Sanity.io)

### 5.1 Document Types

#### `siteSettings` (singleton)
```ts
{
  title: string              // Site title
  logo: image                // Logo image
  description: string        // Meta description
  socialLinks: {
    facebook: url
    instagram: url
    twitter: url
    linkedin: url
    tiktok: url
  }
  contactEmails: {
    general: string          // espdanmark@gmail.com
    volunteer: string        // espdfrivillig@gmail.com
    membership: string       // espdtilmelding@gmail.com
  }
  footerContent: {
    supportText: portableText
    volunteerText: portableText
    contactText: portableText
  }
}
```

#### `navigation` (singleton)
```ts
{
  mainMenu: [
    {
      title: string
      href: string           // optional (no-click parents have no href)
      children: [
        {
          title: string
          href: string
          children: [         // 3rd level
            { title: string, href: string }
          ]
        }
      ]
    }
  ]
}
```

#### `page`
```ts
{
  title: string
  slug: slug                 // URL slug
  metaDescription: string
  heroImage: image           // Optional hero/background image
  heroStyle: 'default' | 'fullHeight' | 'withOverlay'
  shapeDivider: 'none' | 'clouds' | 'curve'
  content: portableText      // Main page body (rich text, images, embeds)
  sections: [                // Flexible page builder sections
    {
      _type: 'heroSection' | 'contentSection' | 'cardGrid' | 'ctaSection'
      // ... section-specific fields
    }
  ]
}
```

#### `faqItem`
```ts
{
  question: string
  answer: portableText
  order: number
}
```

### 5.2 Home Page Document (`homePage` singleton)
```ts
{
  // Hero section
  heroHeading: string        // "Velkommen til Everyday Sexism Project"
  heroSubheading: string     // "Danmark"
  heroLogo: image
  missionStatement: string   // "Vores mission er at skabe en kulturændring..."
  heroGalleryImages: [image]

  // About section
  aboutHeading: string       // "hvem er espd?"
  aboutImage: image
  aboutText: portableText
  aboutDetailText: portableText
  aboutDetailImage: image

  // Where to meet us section
  meetUsHeading: string
  meetUsCards: [
    {
      title: string
      image: image
      description: portableText
    }
  ]

  // Social / Follow section
  followHeading: string
  followDescription: portableText
  podcastImage: image
  podcastLink: url

  // CTA section
  ctaHeading: string         // "Fortæl os din oplevelse med hverdagssexisme"
  ctaDescription: portableText
  ctaButtonText: string
  ctaButtonLink: url         // https://everydaysexism.com/country/dk
}
```

---

## 6. Responsive Design

### 6.1 Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| **Mobile** | < 768px | Single column, stacked sections, hamburger menu |
| **Tablet** | 768–1279px | Two-column where possible, hamburger menu |
| **Desktop** | ≥ 1280px | Full nav bar, multi-column layouts, side-by-side sections |

### 6.2 Mobile-Specific Behavior

- Navigation collapses to a hamburger icon (right-aligned)
- Full-screen mobile menu overlay with accordion sub-menus
- Image galleries switch from 3-column to 2-column or single
- Card grids stack vertically
- Footer columns stack vertically
- Social embeds shrink or stack

---

## 7. SEO & Metadata

### 7.1 Per-Page Metadata

Every page must output:
- `<title>` — from CMS or hardcoded
- `<meta name="description">` — from CMS
- Open Graph tags (`og:title`, `og:description`, `og:image`, `og:url`, `og:locale` = `da_DK`)
- Twitter card tags
- Canonical URL
- `lang="da-DK"` on `<html>`

### 7.2 Structured Data (JSON-LD)

- **Organization** schema on all pages
- **WebPage** schema on all pages
- **BreadcrumbList** schema
- **FAQPage** schema on `/faq`
- **SearchAction** on the website schema

### 7.3 Technical SEO

- Sitemap generation via `next-sitemap` or built-in Next.js sitemap
- `robots.txt` allowing all crawlers
- RSS feed at `/feed` (optional, for parity with WordPress)
- Proper `<link rel="canonical">` tags
- Next.js `<Image>` for automatic WebP/AVIF, lazy loading, `srcset`

---

## 8. Performance Targets

| Metric | Target | Strategy |
|---|---|---|
| **LCP** | < 2.5s | SSR/SSG, optimized images, font-display: swap |
| **FID / INP** | < 100ms | Minimal client-side JS, static rendering |
| **CLS** | < 0.1 | Image dimension hints, font fallback matching |
| **Lighthouse Score** | > 95 | All of the above |
| **Bundle Size** | < 100KB (first load JS) | Tree-shaking, dynamic imports for social embeds |

---

## 9. Accessibility (a11y)

- Semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`)
- ARIA labels on navigation, search toggle, mobile menu, social icons
- Skip-to-content link (already present on original site)
- Keyboard navigable dropdown menus
- Focus visible styles on all interactive elements
- Sufficient color contrast (check gold `#EECF5B` on white — may need darkening)
- Alt text on all CMS images (required field in Sanity)
- `prefers-reduced-motion` support for animations

---

## 10. GDPR & Cookie Compliance

The original site uses `cookie-law-info` plugin. The clone needs:

- **Cookie consent banner** — bottom-positioned, with Accept/Reject/Settings
- **Categories:** Necessary (always on), Analytics (if used), Marketing (social embeds)
- **Implementation:** Client-side component that:
  - Shows on first visit
  - Stores consent in a cookie (`cookie_consent`)
  - Conditionally loads analytics and social embed scripts based on consent
  - Provides re-access via a small tab in bottom-right corner
- Consider using `react-cookie-consent` or a custom lightweight solution

---

## 11. Third-Party Integrations

| Integration | Purpose | Implementation |
|---|---|---|
| **Everydaysexism.com** | "Share your story" button links to `https://everydaysexism.com/country/dk` | External link (target `_blank`) |
| **Facebook Page Plugin** | Embedded Facebook page feed | `<iframe>` loaded conditionally (cookie consent) |
| **Instagram** | Embedded feed/screenshot | Static image or embed, conditional |
| **TikTok** | Embedded creator profile | `tiktok-embed` script, conditional |
| **Twitter/X** | Embedded timeline | `twitter-timeline`, conditional |
| **Anchor.fm/Spotify** | Podcast link | Simple external link with image |
| **Google Fonts** | Raleway, Roboto, Roboto Slab, Shadows Into Light | via `next/font/google` for performance |

---

## 12. Deployment & DevOps

### 12.1 Environments

| Environment | URL | Purpose |
|---|---|---|
| **Development** | `localhost:3000` | Local development |
| **Preview** | `preview.espd.vercel.app` | PR previews (automatic via Vercel) |
| **Production** | `everydaysexismproject.dk` | Live site |

### 12.2 CI/CD Pipeline

1. Push to `main` → Vercel auto-deploys to production
2. Push to feature branch / PR → Vercel deploys preview
3. Sanity content publish → Webhook triggers `/api/revalidate` → ISR refresh

### 12.3 Environment Variables

```env
# Sanity
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=                    # Server-side only, for preview/webhooks
SANITY_REVALIDATE_SECRET=            # Webhook secret

# Email (contact form)
RESEND_API_KEY=
CONTACT_FORM_TO_EMAIL=espdanmark@gmail.com

# Optional analytics
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=everydaysexismproject.dk
```

---

## 13. Implementation Status & Phases

> **Last updated:** 2026-03-28

### Current Inventory

#### Configuration & Build (all complete)

| File | Status |
|---|---|
| `web/package.json` — Next.js 16, React 19, Sanity client, react-hook-form, Zod, Tailwind CSS 4 | ✅ Done |
| `web/next.config.ts` — Remote images from `cdn.sanity.io` | ✅ Done |
| `web/tsconfig.json` — Strict mode, `@/*` path alias | ✅ Done |
| `web/postcss.config.mjs` — Tailwind CSS v4 PostCSS plugin | ✅ Done |
| `web/eslint.config.mjs` — Next.js core web vitals + TypeScript rules | ✅ Done |
| `sanity/sanity.config.ts` — Studio config with structure plugin | ✅ Done |
| `sanity/sanity.cli.ts` — CLI config | ✅ Done |

#### Sanity CMS Schemas (all complete)

| Schema | Status |
|---|---|
| `schemas/index.ts` — Aggregates all types | ✅ Done |
| `schemas/blockContent.ts` — Portable text (rich text, lists, links, images) | ✅ Done |
| `schemas/page.ts` — Generic content page with page-builder sections | ✅ Done |
| `schemas/faqItem.ts` — FAQ question/answer, orderable | ✅ Done |
| `schemas/homePage.ts` — Home page singleton (hero, about, cards, social, CTA) | ✅ Done |
| `schemas/navigation.ts` — Navigation singleton, 3-level nesting | ✅ Done |
| `schemas/sections.ts` — heroSection, contentSection, cardGrid, ctaSection | ✅ Done |
| `schemas/siteSettings.ts` — Title, logo, social links, contact emails, footer | ✅ Done |

#### Layout Components (all complete)

| Component | Status |
|---|---|
| `components/layout/Header.tsx` — Logo row + nav bar, responsive, search toggle | ✅ Done |
| `components/layout/Footer.tsx` — 3-column footer, social icons, copyright | ✅ Done |
| `components/layout/MobileMenu.tsx` — Full-screen overlay, recursive nav tree | ✅ Done |
| `components/layout/NavDropdown.tsx` — Hover-triggered, 2-level nested sub-menus | ✅ Done |
| `components/layout/Breadcrumbs.tsx` — Schema.org breadcrumbs, aria-labels | ✅ Done |
| `components/layout/ScrollToTop.tsx` — Fixed bottom-right, shows after 300px scroll | ✅ Done |

#### Section Components (all complete)

| Component | Status |
|---|---|
| `components/sections/HeroSection.tsx` — Configurable bg, shape dividers (clouds/curve) | ✅ Done |
| `components/sections/ContentSection.tsx` — Text + image, left/right image position | ✅ Done |
| `components/sections/CardGrid.tsx` — 1–3 column responsive grid | ✅ Done |
| `components/sections/CTASection.tsx` — Black bg, curve divider, Button link | ✅ Done |
| `components/sections/PodcastSection.tsx` — Podcast image + social embed placeholder | ✅ Done |
| `components/sections/SocialFeedSection.tsx` — 3-column social links, consent-gated | ✅ Done |

#### UI Components (all complete)

| Component | Status |
|---|---|
| `components/ui/Button.tsx` — Primary/secondary/outline, sm/md/lg sizes | ✅ Done |
| `components/ui/AccordionItem.tsx` — Expand/collapse with animation | ✅ Done |
| `components/ui/Divider.tsx` — Accent-gold rule, optional alignment | ✅ Done |
| `components/ui/ImageGallery.tsx` — Grid + lightbox, prev/next, keyboard nav | ✅ Done |
| `components/ui/SearchOverlay.tsx` — Header dropdown, navigates to `/search?q=` | ✅ Done |
| `components/ui/CookieConsent.tsx` — Fixed bottom banner, cookie-based, accept/reject | ✅ Done |

#### Forms (complete)

| Component | Status |
|---|---|
| `components/forms/ContactForm.tsx` — react-hook-form + Zod, posts to `/api/contact` | ✅ Done |

#### Library / Utilities (all complete)

| File | Status |
|---|---|
| `lib/navigation.ts` — Hard-coded `mainNavigation` array (5 top-level items, nested) | ✅ Done |
| `lib/utils.ts` — `cn()` class-merge utility (clsx) | ✅ Done |
| `lib/sanity/client.ts` — Sanity client init, CDN in production | ✅ Done |
| `lib/sanity/image.ts` — `@sanity/image-url` builder | ✅ Done |
| `lib/sanity/queries.ts` — GROQ: pageBySlug, homePage, faqItems, siteSettings, allPageSlugs | ✅ Done |

#### Types (complete)

| File | Status |
|---|---|
| `types/index.ts` — NavItem, PageData, PortableTextBlock, SanityImage, PageSection union, FAQItem, SiteSettings | ✅ Done |

#### Pages & Routes

| Page | Status | Notes |
|---|---|---|
| `app/layout.tsx` — Root layout (fonts, header, footer, skip-link, cookie consent) | ✅ Done | |
| `app/page.tsx` — Home page (hero, about, cards, gallery, social, podcast, CTA) | ✅ Done | Content hard-coded; ready for CMS swap |
| `app/not-found.tsx` — 404 page | ✅ Done | |
| `app/faq/page.tsx` — FAQ with 6 accordion items | ✅ Done | Content hard-coded; ready for CMS swap |
| `app/kontakt-os/page.tsx` — Contact page + ContactForm | ✅ Done | |
| `app/find-hjaelp/page.tsx` — Help resources (5 orgs) | ✅ Done | |
| `app/[slug]/page.tsx` — Dynamic CMS page | ⬜ Stub | Returns null → 404; needs Sanity fetch |
| `app/search/page.tsx` — Search results | ⬜ Stub | Empty results; needs Sanity search query |
| `app/api/contact/route.ts` — Contact form POST endpoint | 🟡 Partial | Validates with Zod; email sending not wired |

#### Static Assets (`public/images/`)

| Asset | Status |
|---|---|
| `espd-logo.svg`, `espd-logo.png`, `espd-logo-icon.svg`, `espd-logo-front.png` | ✅ Present |
| `apple-touch-icon.png`, `favicon-32.png`, `favicon-192.png` | ✅ Present |
| `about-1.jpg`, `about-2.jpg` | ✅ Present |
| `card-cafe.jpg`, `card-workshop.jpg`, `card-demo.jpg` | ✅ Present |
| `gallery-1.jpg` – `gallery-6.jpg` (6 images) | ✅ Present |
| `podcast-cover.jpeg` | ✅ Present |
| `social-instagram.png`, `social-tiktok.png` | ✅ Present |
| `placeholder-hero.svg`, `placeholder.svg` | ✅ Present |

---

### Phase 1 — Foundation ✅ COMPLETE
- [x] Initialize Next.js project with TypeScript + Tailwind CSS
- [x] Set up Sanity.io project and schemas
- [x] Implement design tokens (colors, typography, spacing) in Tailwind/CSS
- [x] Build `Header`, `Footer`, `MobileMenu`, `NavDropdown` components
- [x] Create root layout with fonts, metadata, skip-link
- [x] Build `ScrollToTop`, `Breadcrumbs`

### Phase 2 — Home Page ✅ COMPLETE
- [x] Build all home page sections (Hero, About, CardGrid, Social, CTA)
- [x] Implement image gallery with lightbox
- [x] Set up social embed components (conditional on cookie consent)
- [x] Build `CookieConsent` banner
- [x] Implement `SearchOverlay`

### Phase 3 — Content Pages 🟡 IN PROGRESS
- [ ] Connect dynamic `[slug]` page to Sanity (fetch + Portable Text rendering)
- [ ] Implement Portable Text renderer (`@portabletext/react`) for rich content
- [x] Build `AccordionFAQ` for FAQ page
- [x] Build `ContactForm` + API route (validation done)
- [ ] Wire email sending in `/api/contact` (Resend / Nodemailer)
- [x] Create "Find hjælp" resources page
- [ ] Populate all CMS content from existing WordPress site
- [ ] Connect search page to Sanity GROQ full-text search
- [ ] Create `/api/revalidate` webhook route for on-demand ISR

### Phase 4 — Polish & Launch ⬜ NOT STARTED
- [ ] SEO: Open Graph tags, JSON-LD (Organization, FAQPage, BreadcrumbList, SearchAction)
- [ ] Generate `sitemap.xml` and `robots.txt`
- [ ] Accessibility audit and fixes
- [ ] Performance optimization (Lighthouse audit)
- [ ] Responsive testing across devices
- [ ] GDPR: verify cookie consent gates analytics & social embeds
- [ ] Update `README.md` with ESPD-specific documentation
- [ ] DNS migration and go-live
- [ ] Post-launch monitoring

---

## 14. Key Decisions & Trade-offs

| Decision | Chosen | Alternative | Rationale |
|---|---|---|---|
| CMS | Sanity.io | Strapi, Contentful, WordPress headless | Free tier, great DX, real-time previews, GROQ is powerful |
| Styling | Tailwind CSS | CSS Modules, styled-components | Fast development, design token integration, small bundle |
| Hosting | Vercel | Netlify, AWS | Best Next.js integration, free tier sufficient for NGO |
| Social embeds | Conditional iframes | API-fetched data | Simplicity, no API key management |
| Analytics | Plausible/Umami | Google Analytics | GDPR-friendly, no cookie consent needed for basic analytics |
| i18n | Danish only (hardcoded `da-DK`) | next-intl | Site is Danish-only, no current need for i18n |

---

## 15. Content Migration Checklist

All textual + image content must be migrated from the existing WordPress site:

- [ ] Home page sections (headings, body text, images, gallery)
- [ ] Om ESPD (history, purpose)
- [ ] Bestyrelsen (board members)
- [ ] Vedtægter (statutes)
- [ ] Regnskab 2021 (financial report)
- [ ] Hvad er sexisme? (what is sexism)
- [ ] Sexismepyramiden (sexism pyramid)
- [ ] Hvad er voldtægtskultur? (rape culture)
- [ ] All "Vores arbejde" sub-pages (collaboration, causes, activities)
- [ ] Høringssvar (consultation responses)
- [ ] FAQ questions & answers
- [ ] Kontakt os (contact info)
- [ ] Find hjælp (help resources)
- [ ] All images (download from WordPress media library)
- [ ] Logo and favicon assets

---

## Appendix A: Original Site Technology Summary

| Aspect | Value |
|---|---|
| **CMS** | WordPress 6.3.7 |
| **Theme** | OceanWP 2.0.2 |
| **Page Builder** | Elementor 3.15.3 |
| **Header/Footer Plugin** | Header Footer Elementor 1.6.15 |
| **SEO** | Yoast SEO 21.1 |
| **Cookie** | Cookie Law Info 3.1.3 |
| **Language** | Danish (`da-DK`) |
| **Fonts** | Google Fonts: Raleway, Roboto, Roboto Slab, Shadows Into Light |
| **Icons** | Font Awesome 5.15 |
| **Social** | Facebook page plugin, Twitter timeline, TikTok embed |
