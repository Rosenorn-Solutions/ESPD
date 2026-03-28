# Everyday Sexism Project Danmark

A modern rebuild of [everydaysexismproject.dk](https://everydaysexismproject.dk/) — the website for **Everyday Sexism Project Danmark (ESPD)**, a volunteer-driven Danish NGO that fights everyday sexism through education, awareness, and advocacy.

This project replaces the legacy WordPress/Elementor site with a fast, accessible **Next.js** application backed by **Sanity CMS**.

---

## Table of Contents

- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Pages & Routes](#pages--routes)
- [Features](#features)
  - [Navigation & Mobile Menu](#navigation--mobile-menu)
  - [Image Gallery & Lightbox](#image-gallery--lightbox)
  - [Contact Form](#contact-form)
  - [FAQ Accordion](#faq-accordion)
  - [Help Resources](#help-resources)
  - [Social Media Feeds (Facebook, Instagram, Twitter)](#social-media-feeds-facebook-instagram-twitter)
  - [Podcast (Spotify / Anchor.fm)](#podcast-spotify--anchorfm)
  - [Cookie Consent (GDPR)](#cookie-consent-gdpr)
  - [Search](#search)
  - [Scroll to Top](#scroll-to-top)
  - [404 Page](#404-page)
- [Sanity CMS](#sanity-cms)
- [Styling & Design Tokens](#styling--design-tokens)
- [Accessibility](#accessibility)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [Deployment](#deployment)
- [Remaining Work](#remaining-work)

---

## Tech Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | [Next.js](https://nextjs.org/) (App Router) | 16.x |
| Language | TypeScript | 5.x |
| UI | React | 19.x |
| Styling | [Tailwind CSS](https://tailwindcss.com/) | 4.x |
| CMS | [Sanity.io](https://www.sanity.io/) | next-sanity 12.x |
| Forms | [react-hook-form](https://react-hook-form.com/) + [Zod](https://zod.dev/) | 7.x / 4.x |
| Icons | [react-icons](https://react-icons.github.io/react-icons/) (Font Awesome) | 5.x |

---

## Getting Started

### Prerequisites

- **Node.js** 18.17 or later
- **npm** (comes with Node.js)
- A **Sanity.io** project (free tier is fine) — only needed for CMS-powered pages

### 1. Clone the repository

```bash
git clone <repo-url>
cd ESPD
```

### 2. Install dependencies

The project has two workspaces: the Next.js app (`web/`) and the Sanity Studio (`sanity/`).

```bash
# Install the Next.js app
cd web
npm install

# (Optional) Install the Sanity Studio
cd ../sanity
npm install
```

### 3. Set up environment variables

Create a `.env.local` file inside `web/`:

```bash
cp web/.env.example web/.env.local   # if an example file exists, or create manually
```

Add these values:

```env
# Sanity CMS (required for CMS-powered pages)
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production

# Email sending (required for contact form to actually send emails)
RESEND_API_KEY=your-resend-api-key
CONTACT_FORM_TO_EMAIL=espdanmark@gmail.com
```

> **Note:** The site runs fine without Sanity credentials — static pages (home, FAQ, contact, help) all have hard-coded content. Only the dynamic `[slug]` routes and search require a connected CMS.

### 4. Start the dev server

```bash
cd web
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. (Optional) Start Sanity Studio

```bash
cd sanity
npx sanity dev
```

Opens the CMS editor at [http://localhost:3333](http://localhost:3333).

---

## Project Structure

```
ESPD/
├── docs/
│   └── system_design.md              # Full architecture & design spec
├── sanity/                            # Sanity CMS Studio
│   ├── sanity.config.ts               # Studio configuration
│   └── schemas/                       # Content schemas (page, FAQ, settings…)
├── web/                               # Next.js application
│   ├── public/images/                 # Static images (logos, photos, favicons)
│   └── src/
│       ├── app/                       # Pages & routes (App Router)
│       │   ├── page.tsx               # Home page
│       │   ├── faq/page.tsx           # FAQ page
│       │   ├── kontakt-os/page.tsx    # Contact page
│       │   ├── find-hjaelp/page.tsx   # Help resources page
│       │   ├── search/page.tsx        # Search page
│       │   ├── [slug]/page.tsx        # Dynamic CMS pages
│       │   ├── api/contact/route.ts   # Contact form API
│       │   ├── not-found.tsx          # 404 page
│       │   ├── layout.tsx             # Root layout (header, footer, fonts)
│       │   └── globals.css            # Tailwind theme & design tokens
│       ├── components/
│       │   ├── layout/                # Header, Footer, MobileMenu, Nav, Breadcrumbs
│       │   ├── sections/              # HeroSection, ContentSection, CardGrid, CTA…
│       │   ├── ui/                    # Button, Accordion, ImageGallery, CookieConsent…
│       │   └── forms/                 # ContactForm
│       ├── lib/                       # Utilities, Sanity client, GROQ queries
│       └── types/                     # Shared TypeScript interfaces
└── .github/
    └── copilot-instructions.md        # Coding standards & conventions
```

---

## Pages & Routes

| Route | Page | Description |
|---|---|---|
| `/` | Home | Hero, mission, about, cards, gallery, social feeds, podcast, CTA |
| `/faq` | FAQ | Accordion-style questions & answers about ESPD |
| `/kontakt-os` | Contact | Contact form + email addresses for the team |
| `/find-hjaelp` | Help Resources | Crisis centers, hotlines, and victim support organizations |
| `/search` | Search | Site-wide search (UI ready, backend pending) |
| `/[slug]` | Dynamic Pages | CMS-driven content pages (pending Sanity integration) |
| `/api/contact` | API | POST endpoint for contact form submissions |

---

## Features

### Navigation & Mobile Menu

The header has a two-row layout: logo on top, navigation bar below. On screens **wider than 1280px**, you see a full horizontal nav bar with multi-level dropdown menus (up to 3 levels deep). On **smaller screens**, a hamburger icon opens a full-screen mobile menu overlay with expandable accordion-style sub-menus.

The navigation data currently lives in `lib/navigation.ts` as a hard-coded array. In production it will be fetched from Sanity's `navigation` singleton.

A search icon in the nav bar opens a search overlay where users can type a query and get redirected to the search results page.

### Image Gallery & Lightbox

The home page features a 6-image gallery displayed in a responsive grid (2 columns on mobile, 3 on larger screens). Clicking any image opens a **full-screen lightbox** with:

- Previous / Next arrow buttons to navigate between images
- Close button (×) to exit
- Click-outside-to-close behavior
- The gallery loops around (going past the last image returns to the first)

### Contact Form

Located at `/kontakt-os`, the contact form collects **name**, **email**, **subject**, and **message**. It validates all fields on the client side using **Zod** (e.g., name must be at least 2 characters, email must be valid, message at least 10 characters). Validation messages appear in Danish below each field.

On submit, the form POSTs to `/api/contact`, which validates the data again server-side. The button shows "Sender…" while the request is in progress, and displays a success or error message afterward.

> **Status:** The API endpoint validates and logs submissions but does not send emails yet. Email integration (via Resend or Nodemailer) is on the roadmap.

### FAQ Accordion

The FAQ page at `/faq` displays questions about ESPD in an accordion format. Each question can be expanded or collapsed independently with a smooth height animation. Topics include what ESPD is, what everyday sexism means, how to volunteer, and how to book ESPD for talks.

The content is currently hard-coded. In production it will be fetched from Sanity's `faqItem` documents.

### Help Resources

The `/find-hjaelp` page lists Danish organizations that offer help to victims of gender-based violence and sexism:

- **Kvindernes Krisecenter** — Women's crisis center (tel: 70 20 30 82)
- **Center for Voldtægtsofre** — Rape victim center (tel: 1888)
- **Offerrådgivningen** — Victim counseling
- **Dialog mod Vold** — Dialogue against violence
- **Politiet** — Police (tel: 114)

Each card links to the organization's official website and, where applicable, includes a clickable phone number.

### Social Media Feeds (Facebook, Instagram, Twitter)

The home page includes a **"Følg os her"** (Follow us) section with links to ESPD's social media pages:

| Platform | URL |
|---|---|
| Facebook | [TheEverydaySexismProjectDanmark](https://da-dk.facebook.com/TheEverydaySexismProjectDanmark/) |
| Instagram | [@everydaysexismprojectdanmark](https://www.instagram.com/everydaysexismprojectdanmark/) |
| Twitter | [@espdanmark](https://twitter.com/espdanmark) |

The section currently shows placeholder boxes where live embeds will go. The actual embed scripts (Facebook SDK, Instagram oEmbed, Twitter Widget) will only load **after the user accepts cookies** via the cookie consent banner, in compliance with GDPR.

The footer also includes social icon links to Facebook, Twitter, Instagram, and LinkedIn — these are simple links (no embeds, no cookies needed).

### Podcast (Spotify / Anchor.fm)

The home page has a podcast section that showcases the **ESPD Podcast**. It displays the podcast cover art and links out to the podcast on [Anchor.fm](https://anchor.fm/espd) (which redirects to Spotify).

A companion area on the right side of the section is reserved for a TikTok or Instagram embed (also gated behind cookie consent).

### Cookie Consent (GDPR)

A banner appears at the bottom of the screen on first visit, asking the user to accept or reject cookies. The choice is stored in a `cookie_consent` cookie that lasts 1 year.

- **Accept** → sets `cookie_consent=accepted` — third-party embeds (social feeds, analytics) may load.
- **Reject** → sets `cookie_consent=rejected` — embeds stay as placeholders.

The banner has `role="dialog"` and an `aria-label` for screen reader accessibility.

### Search

The `/search` page provides a search input and displays results. The search form works and reads the `?q=` query parameter from the URL. The search overlay in the header also redirects here.

> **Status:** The search UI is complete but returns no results yet. Backend integration with Sanity GROQ full-text search is on the roadmap.

### Scroll to Top

A small arrow button appears in the bottom-right corner of the screen after scrolling down 300 pixels. Clicking it smoothly scrolls the page back to the top.

### 404 Page

If a user visits a URL that doesn't match any route (or a CMS page that doesn't exist), they see a Danish 404 page: *"Beklager – den side, du leder efter, findes ikke."* with a button to go back to the home page.

---

## Sanity CMS

[Sanity.io](https://www.sanity.io/) is the headless CMS. The Sanity Studio lives in the `sanity/` folder and can be run locally for content editing.

### Schemas

| Schema | Type | Purpose |
|---|---|---|
| `page` | Document | Generic content pages (about, sexism info, etc.) |
| `homePage` | Singleton | Home page content (hero, about, cards, social, CTA) |
| `faqItem` | Document | Individual FAQ question/answer pairs |
| `navigation` | Singleton | Site navigation menu tree (3 levels) |
| `siteSettings` | Singleton | Logo, social links, contact emails, footer text |
| `blockContent` | Type | Rich text (Portable Text) with images, links, lists |
| `sections` | Types | Page-builder blocks: hero, content, card grid, CTA |

### GROQ Queries

Pre-built queries are in `web/src/lib/sanity/queries.ts`:

- `pageBySlugQuery` — Fetch a single page by its URL slug
- `homePageQuery` — Fetch the home page singleton
- `faqItemsQuery` — Fetch all FAQ items, ordered
- `siteSettingsQuery` — Fetch global site settings
- `allPageSlugsQuery` — Fetch all page slugs (for sitemap generation)

---

## Styling & Design Tokens

Styling uses **Tailwind CSS v4** with custom design tokens defined in `src/app/globals.css` (not a `tailwind.config.ts` — Tailwind v4 uses CSS-based configuration).

### Colors

| Token | Hex | Usage |
|---|---|---|
| `primary-black` | `#000000` | Backgrounds, navigation, headings |
| `accent-gold` | `#EECF5B` | Hover states, CTA buttons, focus rings |
| `body-text` | `#757575` | Paragraph text |
| `dark-text` | `#2B2B2B` | Sub-headings, form labels |
| `light-gray` | `#A3A3A3` | Borders, dividers |
| `footer-text` | `#F7F7F7` | Footer text |

### Fonts

| Role | Font | Usage |
|---|---|---|
| Headings | **Raleway** | Bold, uppercase headings |
| Body | **Roboto** | Paragraph and UI text |
| Accent | **Shadows Into Light** | Handwritten/decorative style |

Fonts are loaded via `next/font/google` with `display: "swap"` for fast rendering.

### Breakpoints

| Prefix | Width | Usage |
|---|---|---|
| *(base)* | < 640px | Mobile-first defaults |
| `sm:` | ≥ 640px | Small tablets |
| `md:` | ≥ 768px | Tablets, 2-column layouts |
| `lg:` | ≥ 1024px | Desktop, 3-column grids |
| `nav:` | ≥ 1280px | Desktop navigation (custom) |

---

## Accessibility

The site targets **WCAG 2.1 AA** compliance:

- `<html lang="da-DK">` for screen readers
- **Skip-to-content link** as the first focusable element
- Semantic HTML: `<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`
- ARIA attributes on all interactive elements (menus, dialogs, buttons, search)
- Visible **focus rings** (`focus:ring-2 focus:ring-accent-gold`) on inputs and buttons
- `alt` text on all images
- Schema.org microdata on breadcrumbs, header, and footer
- Form fields have `<label>` elements and screen-reader-only required field indicators

---

## Environment Variables

| Variable | Required | Where | Purpose |
|---|---|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | For CMS pages | `web/.env.local` | Sanity project ID |
| `NEXT_PUBLIC_SANITY_DATASET` | No (defaults to `production`) | `web/.env.local` | Sanity dataset name |
| `SANITY_API_TOKEN` | For previews/webhooks | `web/.env.local` | Server-side Sanity token |
| `SANITY_REVALIDATE_SECRET` | For ISR webhook | `web/.env.local` | Secret for revalidation endpoint |
| `RESEND_API_KEY` | For contact form email | `web/.env.local` | Resend email service API key |
| `CONTACT_FORM_TO_EMAIL` | For contact form email | `web/.env.local` | Recipient address |

---

## Scripts

Run these from the `web/` directory:

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Production build (TypeScript check + build)
npm run start    # Serve the production build
npm run lint     # Run ESLint
```

---

## Deployment

The hosting platform has not been decided yet. The Next.js application can be deployed to any provider that supports Node.js (e.g. a VPS, Docker container, or managed hosting).

General steps:

1. Build the application with `npm run build` in the `web/` directory
2. Set the required environment variables on the hosting platform
3. Start the production server with `npm run start`

For Sanity content updates to appear without a full re-deploy, set up an **ISR revalidation webhook** from Sanity that hits `/api/revalidate` (not yet implemented).

---

## Remaining Work

### Phase 3 — CMS Integration (in progress)

- [ ] Connect `[slug]` pages to Sanity (replace stubs with real data fetching)
- [ ] Set up Portable Text rendering (`@portabletext/react`)
- [ ] Wire up email sending in the contact form API route
- [ ] Implement search with Sanity GROQ full-text queries
- [ ] Create `/api/revalidate` webhook for on-demand ISR
- [ ] Populate CMS content from the existing WordPress site

### Phase 4 — Polish & Launch

- [ ] JSON-LD structured data (Organization, FAQPage, SearchAction)
- [ ] `sitemap.xml` and `robots.txt`
- [ ] Accessibility audit
- [ ] Lighthouse performance audit
- [ ] Responsive cross-device testing
- [ ] GDPR: verify cookie consent gates all third-party scripts
- [ ] DNS migration and go-live
