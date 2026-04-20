# ESPD — TODO

Last updated: 2026-04-20

---

## Legend

- `[ ]` Not started
- `[~]` In progress / stub exists
- `[x]` Done

---

## 1. Pages needing content

All pages below have a stub layout in place. Each needs its body text, images, and any structured data replaced with real content — either hard-coded or fetched from Sanity CMS.

### Hvem er vi?

| Status | Page title | File path |
|--------|-----------|-----------|
| `[~]` | Om ESPD | `src/app/hvem-er-vi/om-espd/page.tsx` |
| `[~]` | Bestyrelsen | `src/app/hvem-er-vi/bestyrelsen/page.tsx` |
| `[~]` | Vedtægter | `src/app/hvem-er-vi/vedtaegter/page.tsx` |
| `[~]` | Regnskab | `src/app/hvem-er-vi/regnskab/page.tsx` |

**Content needed per page:**
- `om-espd` — Mission statement, history, the ESPD story, logo/image assets.
- `bestyrelsen` — Names, roles, photos and short bios for each board member.
- `vedtaegter` — Full text of the association's articles/bylaws (likely PDF embed or rich text).
- `regnskab` — Latest annual financial report (PDF link or summary table).

---

### Om sexisme

| Status | Page title | File path |
|--------|-----------|-----------|
| `[~]` | Hvad er sexisme? | `src/app/om-sexisme/hvad-er-sexisme/page.tsx` |
| `[~]` | Sexismepyramiden | `src/app/om-sexisme/sexismepyramiden/page.tsx` |
| `[~]` | Hvad er voldtægtskultur? | `src/app/om-sexisme/hvad-er-voldtaegtskultur/page.tsx` |

**Content needed per page:**
- `hvad-er-sexisme` — Definition, examples, body text from original site (`/hvad-er-sexisme/`).
- `sexismepyramiden` — Pyramid graphic/illustration + explanatory text for each level (`/sexismepyramiden/`).
- `hvad-er-voldtaegtskultur` — Definition and explanatory body text (`/hvad-er-voldtaegtskultur/`).

---

### Vores arbejde — Samarbejde

| Status | Page title | File path |
|--------|-----------|-----------|
| `[~]` | Sexisme i Gaming og Rollespil | `src/app/vores-arbejde/samarbejde/sexisme-i-gaming-og-rollespil/page.tsx` |
| `[~]` | Roskilde Festival | `src/app/vores-arbejde/samarbejde/roskilde-festival/page.tsx` |
| `[~]` | FN's Verdensmål | `src/app/vores-arbejde/samarbejde/fns-verdensmaal/page.tsx` |

**Content needed per page:**
- `sexisme-i-gaming-og-rollespil` — Project description, partner logos, outcomes (`/sexisme-i-gaming-og-rollespil/`).
- `roskilde-festival` — Collaboration description, photos, years active (`/roskilde-festival/`).
- `fns-verdensmaal` — Which SDGs ESPD addresses and how (`/fns-verdensmaal/`).

---

### Vores arbejde — Mærkesager

| Status | Page title | File path |
|--------|-----------|-----------|
| `[~]` | Retningslinjer til medier i sager om kønnet vold | `src/app/vores-arbejde/maerkesager/retningslinjer-til-medier-i-sager-om-koennet-vold/page.tsx` |
| `[~]` | Kønsbaseret vold | `src/app/vores-arbejde/maerkesager/koensbaseret-vold/page.tsx` |
| `[~]` | Samtykkebaseret voldtægtslovgivning | `src/app/vores-arbejde/maerkesager/samtykkebaseret-voldtaegtslovgivning/page.tsx` |

**Content needed per page:**
- `retningslinjer-til-medier-i-sager-om-koennet-vold` — Full guidelines document text (`/retningslinjer-til-medier-i-sager-om-koennet-vold/`).
- `koensbaseret-vold` — ESPD's position, facts, and resources (`/koensbaseret-vold/`).
- `samtykkebaseret-voldtaegtslovgivning` — Campaign history, status of law, ESPD's role (`/samtykkebaseret-voldaegtslovgivning/`).

---

### Vores arbejde — Aktiviteter

| Status | Page title | File path |
|--------|-----------|-----------|
| `[~]` | ESPDs Flirteworkshop | `src/app/vores-arbejde/aktiviteter/espds-flirteworkshop/page.tsx` |
| `[~]` | Oplæg og arrangementer | `src/app/vores-arbejde/aktiviteter/oplaeg/page.tsx` |

**Content needed per page:**
- `espds-flirteworkshop` — Workshop description, target audience, how to book (`/espds-flirteworkshop/`).
- `oplaeg` — List of available talks/workshops, booking info, past events gallery (`/oplaeg/`).

---

### Vores arbejde — Høringssvar

| Status | Page title | File path |
|--------|-----------|-----------|
| `[~]` | Høringssvar | `src/app/vores-arbejde/hoeringssvar/page.tsx` |

**Content needed:**
- List of all submitted hearing responses with dates, titles, and PDF download links (`/hoeringsvar/`).
- Notably includes the 2020 hearing response on the voluntary rape legislation (`/hoeringssvar-til-straffelovraadets-betaenkning-nr-1574-2020-om-en-frivillighedsbaseret-voldtaegtsbestemmelse-fra-everyday-sexism-project-danmark-espd/`).

---

### Kontakt

| Status | Page title | File path |
|--------|-----------|-----------|
| `[x]` | Kontakt os | `src/app/kontakt/kontakt-os/page.tsx` |
| `[x]` | Hvor kan jeg få hjælp? | `src/app/kontakt/hvor-kan-jeg-faa-hjaelp/page.tsx` |

**Remaining work:**
- `kontakt-os` — Wire up email sending in `src/app/api/contact/route.ts` (see Section 2).
- `hvor-kan-jeg-faa-hjaelp` — Verify all phone numbers and links are current. Add more resources if needed.

---

### FAQ

| Status | Page title | File path |
|--------|-----------|-----------|
| `[~]` | FAQ | `src/app/faq/page.tsx` |

**Content needed:**
- Replace placeholder `faqItems` array with Sanity CMS fetch when CMS is connected.
- Expand question list to cover all common questions from the original site.

---

### Home

| Status | Page title | File path |
|--------|-----------|-----------|
| `[~]` | Forside | `src/app/page.tsx` |

**Content needed:**
- Replace placeholder `galleryImages` and `meetUsCards` arrays with Sanity CMS content.
- Add real podcast episode link to `PodcastSection`.
- Wire `SocialFeedSection` to live social media embeds (Facebook, Instagram) after cookie consent.

---

## 2. Back-end / API work

| Status | Task | File path |
|--------|------|-----------|
| `[ ]` | Wire email sending in contact route | `src/app/api/contact/route.ts` |
| `[ ]` | Create `/api/revalidate` webhook for on-demand ISR | `src/app/api/revalidate/route.ts` *(missing)* |

**Notes:**
- `contact/route.ts` currently logs submission but does not send email. Integrate Resend, SendGrid, or Nodemailer.
- Revalidation webhook should accept a Sanity webhook payload and call `revalidatePath()` / `revalidateTag()`.

---

## 3. CMS integration (Sanity)

| Status | Task | File path |
|--------|------|-----------|
| `[ ]` | Connect `[slug]/page.tsx` to Sanity | `src/app/[slug]/page.tsx` |
| `[ ]` | Install `@portabletext/react` and render Portable Text | `src/app/[slug]/page.tsx` |
| `[ ]` | Wire FAQ items from Sanity | `src/app/faq/page.tsx` |
| `[ ]` | Wire homepage content from Sanity | `src/app/page.tsx` |
| `[ ]` | Implement GROQ full-text search on `/search` | `src/app/search/page.tsx` |
| `[ ]` | Populate all CMS documents from original WordPress content | Sanity Studio |

**Notes:**
- GROQ queries live in `src/lib/sanity/queries.ts`.
- Sanity client is in `src/lib/sanity/client.ts`.
- Image helper is in `src/lib/sanity/image.ts`.
- All Sanity schemas are in `sanity/schemas/`.
- Set `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET` in `.env.local`.

---

## 4. SEO & structured data

| Status | Task | File path |
|--------|------|-----------|
| `[ ]` | Add JSON-LD `Organization` schema to root layout | `src/app/layout.tsx` |
| `[ ]` | Add JSON-LD `FAQPage` schema | `src/app/faq/page.tsx` |
| `[ ]` | Add JSON-LD `SearchAction` schema to root layout | `src/app/layout.tsx` |
| `[ ]` | Add `sitemap.xml` route | `src/app/sitemap.ts` *(missing)* |
| `[ ]` | Add `robots.txt` route | `src/app/robots.ts` *(missing)* |
| `[ ]` | Update `<title>` format on all stub pages | All pages in `src/app/` |

---

## 5. Launch checklist

| Status | Task |
|--------|------|
| `[ ]` | `npm run build` passes with zero TypeScript errors |
| `[ ]` | `npm run lint` passes with zero warnings |
| `[ ]` | Responsive check at 375px / 768px / 1280px+ |
| `[ ]` | Full keyboard navigation test (Tab, Enter, Escape, focus rings) |
| `[ ]` | Screen reader pass (NVDA / VoiceOver) |
| `[ ]` | All images have meaningful `alt` text |
| `[ ]` | GDPR cookie consent blocks social embeds and analytics until accepted |
| `[ ]` | External links use `rel="noopener noreferrer"` |
| `[ ]` | Lighthouse audit — target ≥ 90 on Performance, Accessibility, SEO |
| `[ ]` | Cross-browser test (Chrome, Firefox, Safari, Edge) |
| `[ ]` | Update `README.md` with setup instructions |
