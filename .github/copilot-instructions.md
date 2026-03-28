# ESPD — Copilot & Developer Instructions

> **Everyday Sexism Project Danmark** — Next.js rebuild  
> Read `docs/system_design.md` for the full architectural overview.

---

## 1. Project Overview

This is a **Next.js 16 (App Router)** website for a Danish NGO. It uses **TypeScript**, **Tailwind CSS v4**, and **Sanity.io** as CMS. The site language is **Danish only** (`da-DK`).

### Workspace layout

```
ESPD/
├── docs/                        # Design documents
│   └── system_design.md         # Full architecture spec
├── sanity/                      # Sanity CMS studio (separate project)
│   ├── sanity.config.ts
│   └── schemas/                 # All CMS document/object schemas
├── web/                         # Next.js application ← you work here
│   ├── src/
│   │   ├── app/                 # Routes & pages (App Router)
│   │   ├── components/          # Reusable React components
│   │   │   ├── layout/          #   Header, Footer, Nav, Breadcrumbs…
│   │   │   ├── sections/        #   Page-builder sections (Hero, Cards…)
│   │   │   ├── ui/              #   Small UI primitives (Button, Divider…)
│   │   │   └── forms/           #   Form components (ContactForm)
│   │   ├── lib/                 # Utilities & Sanity client
│   │   │   └── sanity/          #   client.ts, queries.ts, image.ts
│   │   └── types/               # Shared TypeScript interfaces
│   └── public/images/           # Static assets (logos, photos)
└── .github/
    └── copilot-instructions.md  # This file
```

---

## 2. Tech Stack & Versions

| Layer | Package | Version | Notes |
|---|---|---|---|
| Framework | Next.js | 16.x | App Router, React Server Components |
| Language | TypeScript | 5.x | `strict: true` in tsconfig |
| UI | React | 19.x | |
| Styling | Tailwind CSS | 4.x | Via `@tailwindcss/postcss` plugin |
| CMS | Sanity.io | `next-sanity` | GROQ queries, Portable Text |
| Forms | react-hook-form | 7.x | + `@hookform/resolvers` |
| Validation | Zod | 4.x | Shared between client & API |
| Icons | react-icons | 5.x | `react-icons/fa` (Font Awesome) |
| Class utils | clsx | 2.x | Via `cn()` helper |
| Images | `@sanity/image-url` | 2.x | Sanity image pipeline |

### Commands

```bash
cd web
npm run dev      # Start dev server at localhost:3000
npm run build    # Production build
npm run start    # Serve production build
npm run lint     # ESLint check
```

---

## 3. File Naming Conventions

| Category | Convention | Examples |
|---|---|---|
| **React components** | PascalCase `.tsx` | `Header.tsx`, `HeroSection.tsx`, `Button.tsx` |
| **Page routes** | lowercase `page.tsx` in route folder | `app/faq/page.tsx`, `app/[slug]/page.tsx` |
| **Layouts** | `layout.tsx` | `app/layout.tsx` |
| **API routes** | `route.ts` in API folder | `app/api/contact/route.ts` |
| **Lib / utility files** | camelCase `.ts` | `navigation.ts`, `utils.ts`, `client.ts` |
| **Type definition files** | camelCase `.ts` | `types/index.ts` |
| **CSS** | `globals.css` | Single global file with Tailwind theme |
| **Sanity schemas** | camelCase `.ts` | `schemas/page.ts`, `schemas/faqItem.ts` |
| **URL slugs** | Danish kebab-case | `/kontakt-os`, `/find-hjaelp`, `/sexismepyramiden` |

---

## 4. Import Style & Ordering

Imports must follow this order, separated by blank lines between groups:

```tsx
// 1. Type-only imports from frameworks
import type { Metadata } from "next";

// 2. Framework / library imports
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// 3. Third-party library imports
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FaBars, FaTimes } from "react-icons/fa";

// 4. Internal components (using @/ alias)
import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { Button } from "@/components/ui/Button";

// 5. Internal lib / utilities
import { cn } from "@/lib/utils";
import { sanityClient } from "@/lib/sanity/client";

// 6. Types (if separate from framework types)
import type { NavItem, PageData } from "@/types";
```

### Rules

- Always use the `@/` path alias for internal imports (configured as `./src/*` in tsconfig).
- Use `import type` for type-only imports — this is required by strict TypeScript.
- Never use relative paths (`../`) for cross-directory imports; always use `@/`.
- Within the same directory, relative imports are acceptable (e.g., a sub-component in the same folder).

---

## 5. Export Conventions

| What | Export style | Example |
|---|---|---|
| **Components** | Named export | `export function Header() {}` |
| **Page routes** | Default export | `export default function HomePage() {}` |
| **Metadata** | Named const | `export const metadata: Metadata = {}` |
| **Utility functions** | Named export | `export function cn() {}` |
| **Constants / data** | Named export | `export const mainNavigation: NavItem[] = []` |
| **GROQ queries** | Named export | `export const pageBySlugQuery = groq\`...\`` |
| **Types / interfaces** | Named export | `export interface NavItem {}` |
| **Sanity schemas** | Default export | `export default defineType({})` |

### Important

- **Never use default exports for components.** Only page routes (`page.tsx`, `layout.tsx`, `not-found.tsx`) and Sanity schemas use default exports.
- This ensures consistent import syntax: `import { Header } from "@/components/layout/Header"`.

---

## 6. Component Patterns

### 6.1 Server Components (default)

Every component is a **React Server Component** by default in the App Router. Do NOT add `"use client"` unless the component needs:
- `useState`, `useEffect`, `useRef`, or any React hook
- Browser APIs (`window`, `document`, `localStorage`)
- Event handlers (`onClick`, `onChange`, `onSubmit`)
- Third-party client-only libraries

Server component files have **no directive** at the top.

**Server component examples:** `Footer.tsx`, `Breadcrumbs.tsx`, `HeroSection.tsx`, `ContentSection.tsx`, `CardGrid.tsx`, `CTASection.tsx`, `Divider.tsx`, `Button.tsx`.

### 6.2 Client Components

When a component requires interactivity, add `"use client"` as the **very first line**, before any imports:

```tsx
"use client";

import { useState } from "react";
// ...
```

**Client component examples:** `Header.tsx`, `MobileMenu.tsx`, `NavDropdown.tsx`, `ScrollToTop.tsx`, `AccordionItem.tsx`, `CookieConsent.tsx`, `ImageGallery.tsx`, `SearchOverlay.tsx`, `ContactForm.tsx`.

### 6.3 Props & Interfaces

- Define a `Props` interface **above** the component, named `{ComponentName}Props`.
- Mark optional properties with `?`.
- Use union types for fixed options: `"left" | "right" | "center"`.
- Use `React.ReactNode` for `children`.
- Destructure props in the function signature.
- Apply default values in the destructuring.

```tsx
interface ContentSectionProps {
  heading?: string;
  headingAlign?: "left" | "right" | "center";
  imageSrc?: string;
  imageAlt?: string;
  imagePosition?: "left" | "right";
  children: React.ReactNode;
}

export function ContentSection({
  heading,
  headingAlign = "center",
  imageSrc,
  imageAlt = "",
  imagePosition = "right",
  children,
}: ContentSectionProps) {
  // component body
}
```

### 6.4 Component Folder Placement

| Type | Directory | When to use |
|---|---|---|
| Layout shell | `components/layout/` | Wraps pages: header, footer, nav, breadcrumbs |
| Page sections | `components/sections/` | Large content blocks used inside pages (hero, cards, CTA) |
| UI primitives | `components/ui/` | Small, reusable elements (button, divider, accordion, gallery) |
| Forms | `components/forms/` | Any form with validation logic |

If a component has a **private sub-component** (used only inside one parent), define it as a non-exported function in the **same file**, below the main export:

```tsx
// Exported
export function MobileMenu({ onClose }: MobileMenuProps) {
  return <MobileNavItem item={item} onClose={onClose} />;
}

// Private sub-component, not exported
function MobileNavItem({ item, onClose, depth = 0 }: { ... }) {
  // ...
}
```

---

## 7. Page Route Patterns

### 7.1 Static Pages

```tsx
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { HeroSection } from "@/components/sections/HeroSection";

export const metadata: Metadata = {
  title: "Page Title — Everyday Sexism Project Danmark",
  description: "Danish meta description for this page.",
};

export default function PageName() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary-black text-white">
        <div className="mx-auto max-w-[1200px] px-4 py-16 md:py-24 text-center">
          <h1 className="font-heading text-2xl md:text-3xl font-bold uppercase">
            Page Title
          </h1>
        </div>
      </section>

      <Breadcrumbs items={[{ label: "Page Title" }]} />

      <section className="bg-white">
        <div className="mx-auto max-w-[800px] px-4 py-12 md:py-16 font-body text-body-text leading-relaxed">
          {/* Page content */}
        </div>
      </section>
    </>
  );
}
```

### 7.2 Dynamic CMS Pages (`[slug]`)

```tsx
import { notFound } from "next/navigation";
import { sanityClient } from "@/lib/sanity/client";
import { pageBySlugQuery } from "@/lib/sanity/queries";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = await sanityClient.fetch(pageBySlugQuery, { slug });
  if (!page) return {};
  return { title: page.title, description: page.metaDescription ?? "" };
}

export default async function DynamicPage({ params }: PageProps) {
  const { slug } = await params;
  const page = await sanityClient.fetch(pageBySlugQuery, { slug });
  if (!page) notFound();
  // render page...
}
```

**Key rules:**
- `params` is a `Promise` in Next.js 16 — always `await` it.
- Call `notFound()` when CMS returns null — this triggers `not-found.tsx`.
- Export `generateMetadata` for dynamic SEO metadata.

### 7.3 Client-Side Pages (e.g., Search)

When a page needs `useSearchParams` or other client hooks, extract the interactive part into a **client child component** and wrap it in `<Suspense>`:

```tsx
// page.tsx (server component)
import { Suspense } from "react";

export default function SearchPage() {
  return (
    <Suspense fallback={<p>Indlæser…</p>}>
      <SearchResults />   {/* ← client component */}
    </Suspense>
  );
}
```

---

## 8. API Route Pattern

All API routes live under `app/api/` and export HTTP method handlers:

```tsx
// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(2),
  message: z.string().min(10),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = contactSchema.parse(body);

    // Process validated data...

    return NextResponse.json(
      { success: true, message: "Besked modtaget" },
      { status: 200 },
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.flatten().fieldErrors },
        { status: 400 },
      );
    }
    return NextResponse.json(
      { success: false, message: "Der opstod en teknisk fejl" },
      { status: 500 },
    );
  }
}
```

### Rules

- Always validate input with **Zod** before processing.
- Return structured JSON: `{ success: boolean, message?: string, errors?: object }`.
- Use specific HTTP status codes: `200` success, `400` validation, `500` server error.
- Catch `ZodError` separately from general errors.
- Never trust client-submitted data — always validate server-side even if the form already validates client-side.

---

## 9. Form Pattern (react-hook-form + Zod)

All forms use **react-hook-form** with **Zod** validation:

```tsx
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// 1. Define schema (reuse between client & API if possible)
const formSchema = z.object({
  name: z.string().min(2, "Navn skal være mindst 2 tegn"),
  email: z.string().email("Ugyldig e-mailadresse"),
});

type FormValues = z.infer<typeof formSchema>;

export function MyForm() {
  // 2. Submission status state
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  // 3. Hook form setup
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  // 4. Submit handler
  async function onSubmit(data: FormValues) {
    setStatus("submitting");
    try {
      const res = await fetch("/api/endpoint", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  // 5. Render form
  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <label htmlFor="name" className="block text-sm font-semibold text-dark-text mb-1">
        Navn <span className="text-red-600" aria-hidden="true">*</span>
        <span className="sr-only">(påkrævet)</span>
      </label>
      <input
        id="name"
        type="text"
        {...register("name")}
        className="w-full rounded-sm border border-gray-300 px-3 py-2 text-sm text-dark-text
                   focus:outline-none focus:ring-2 focus:ring-accent-gold"
      />
      {errors.name && (
        <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="bg-accent-gold text-primary-black font-heading font-bold uppercase
                   text-sm px-8 py-3 rounded-sm hover:brightness-110 transition-all
                   disabled:opacity-60"
      >
        {status === "submitting" ? "Sender…" : "Send"}
      </button>

      {status === "success" && (
        <p className="text-green-700 text-sm mt-2">Tak for din besked!</p>
      )}
      {status === "error" && (
        <p className="text-red-600 text-sm mt-2">Noget gik galt. Prøv igen.</p>
      )}
    </form>
  );
}
```

---

## 10. Tailwind CSS v4 — Design Tokens & Usage

### 10.1 Theme Configuration

All design tokens are defined in `src/app/globals.css` using Tailwind v4's `@theme inline` block — **not** in a `tailwind.config.ts` file (Tailwind v4 does not use one):

```css
@import "tailwindcss";

@theme inline {
  /* Colors */
  --color-primary-black: #000000;
  --color-primary-white: #ffffff;
  --color-accent-gold: #eecf5b;
  --color-body-text: #757575;
  --color-dark-text: #2b2b2b;
  --color-light-gray: #a3a3a3;
  --color-footer-bg: #000000;
  --color-footer-text: #f7f7f7;

  /* Font families */
  --font-heading: var(--font-raleway);
  --font-body: var(--font-roboto);
  --font-accent: var(--font-shadows-into-light);

  /* Custom breakpoint */
  --breakpoint-nav: 1280px;
}
```

These become Tailwind utilities automatically:
- `bg-primary-black`, `text-accent-gold`, `border-light-gray`
- `font-heading`, `font-body`, `font-accent`
- `nav:block`, `nav:hidden` (custom breakpoint)

### 10.2 Color Usage

| Token | Class usage | Purpose |
|---|---|---|
| `primary-black` | `bg-primary-black`, `text-primary-black` | Backgrounds, nav text, headings |
| `primary-white` | `bg-primary-white` | White backgrounds |
| `accent-gold` | `text-accent-gold`, `bg-accent-gold`, `ring-accent-gold` | Hover, CTA, focus rings |
| `body-text` | `text-body-text` | Default paragraph text |
| `dark-text` | `text-dark-text` | Sub-headings, form labels, strong text |
| `light-gray` | `border-light-gray`, `text-light-gray` | Borders, dividers |
| `footer-bg` | `bg-footer-bg` | Footer background |
| `footer-text` | `text-footer-text` | Footer text |

**Never use raw hex colors in components.** Always use the design token classes.

### 10.3 Typography Classes

```tsx
// Main headings
className="font-heading text-3xl md:text-4xl font-bold uppercase"

// Sub-headings
className="font-heading text-xl md:text-2xl font-semibold uppercase"

// Body text
className="font-body text-body-text leading-relaxed"

// Accent / handwritten style
className="font-accent text-lg"
```

### 10.4 Layout Patterns

```tsx
// Standard content container (used on every page)
className="mx-auto max-w-[1200px] px-4"

// Narrow content container (for reading text)
className="mx-auto max-w-[800px] px-4"

// Section vertical padding
className="py-12 md:py-16"

// Hero section padding
className="py-16 md:py-24"
```

### 10.5 Responsive Breakpoints

Use **mobile-first** — base styles are mobile, then layer on larger screens:

| Prefix | Width | Use for |
|---|---|---|
| *(none)* | < 640px | Mobile base styles |
| `sm:` | ≥ 640px | Small tablets |
| `md:` | ≥ 768px | Tablets, 2-column layouts |
| `lg:` | ≥ 1024px | Desktop, 3-column layouts |
| `nav:` | ≥ 1280px | Desktop navigation (custom breakpoint) |

Example:
```tsx
className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
className="flex flex-col md:flex-row gap-8"
className="hidden nav:flex"       // show only on desktop nav breakpoint
className="nav:hidden"            // hide on desktop nav breakpoint
```

### 10.6 Common Utility Combos

```tsx
// Interactive hover state
className="hover:text-accent-gold transition-colors"

// Button base
className="inline-block bg-accent-gold text-primary-black font-heading font-bold uppercase
           text-sm px-8 py-3 rounded-sm hover:brightness-110 transition-all"

// Form input
className="w-full rounded-sm border border-gray-300 px-3 py-2 text-sm text-dark-text
           focus:outline-none focus:ring-2 focus:ring-accent-gold"

// Disabled state
className="disabled:opacity-60"

// Fixed overlay
className="fixed inset-0 z-50 bg-black/80"
```

### 10.7 The `cn()` Helper

Use `cn()` (from `@/lib/utils`) for **conditional class merging**:

```tsx
import { cn } from "@/lib/utils";

<div className={cn(
  "text-3xl font-bold",                         // always applied
  headingAlign === "left" && "text-left",        // conditional
  headingAlign === "center" && "text-center",    // conditional
  className,                                      // pass-through
)}>
```

`cn()` wraps `clsx` — it filters out `false`, `null`, `undefined` values and joins the rest.

---

## 11. Accessibility Standards (WCAG 2.1 AA)

Every component and page must meet these requirements:

### 11.1 Semantic HTML

```tsx
<html lang="da-DK">
<header itemScope itemType="https://schema.org/WPHeader">
<nav role="navigation" aria-label="Hovedmenu">
<main id="main" role="main">
<footer role="contentinfo" itemScope itemType="https://schema.org/WPFooter">
```

Use the correct element — not a `<div>` with a role. Prefer `<section>`, `<article>`, `<aside>`, `<nav>`, `<header>`, `<footer>`.

### 11.2 Skip Link

The root layout includes a skip-to-content link (first focusable element):

```tsx
<a href="#main" className="skip-link">Gå til indhold</a>
```

This is **already implemented** — do not remove it.

### 11.3 ARIA Attributes

All interactive elements must have appropriate ARIA:

```tsx
// Buttons that toggle state
<button aria-label="Åbn menu" aria-expanded={isOpen}>

// Dropdown menus
<button aria-expanded={open} aria-haspopup="true">

// Dialog / modal overlays
<div role="dialog" aria-modal="true" aria-label="Mobilmenu">

// Search
<form role="search">
<label htmlFor="search-input" className="sr-only">Søg</label>

// Required form fields
<span className="text-red-600" aria-hidden="true">*</span>
<span className="sr-only">(påkrævet)</span>
```

### 11.4 Keyboard Navigation

- All interactive elements must be reachable via **Tab**.
- Dropdown menus must open/close with **Enter** or **Space**.
- Lightbox/modal must close with **Escape**.
- Focus must be **trapped** inside open modals.
- Focus must be **visible** — never remove `outline` without providing an alternative (we use `focus:ring-2 focus:ring-accent-gold`).

### 11.5 Images

- Every `<Image>` must have a meaningful `alt` attribute.
- Decorative images get `alt=""`.
- In Sanity, `alt` is a required field on image assets.

### 11.6 Color Contrast

- Body text (`#757575`) on white passes AA for large text but is borderline — keep it to body copy only.
- Headings and links must use `dark-text` (`#2B2B2B`) or `primary-black` for contrast.
- `accent-gold` (`#EECF5B`) on white does **not** pass contrast — never use it for text on white. It's acceptable on `primary-black` background.

### 11.7 Schema.org Microdata

The breadcrumbs component already outputs `BreadcrumbList` microdata. For new structured data needs, use the same inline `itemScope`/`itemProp` approach.

---

## 12. Image Handling

### 12.1 Static Images (from `public/images/`)

```tsx
import Image from "next/image";

<Image
  src="/images/about-1.jpg"
  alt="ESPD frivillige"
  width={600}
  height={400}
  className="rounded-sm object-cover"
/>
```

- Always provide `width` and `height` to prevent layout shift (CLS).
- Use `priority` on above-the-fold images (hero, logo).
- Use `className="w-full h-auto"` when the image should scale responsively.

### 12.2 Sanity CMS Images

```tsx
import Image from "next/image";
import { urlFor } from "@/lib/sanity/image";

<Image
  src={urlFor(image).width(800).url()}
  alt={image.alt}
  width={800}
  height={600}
  className="rounded-sm object-cover"
/>
```

Sanity CDN (`cdn.sanity.io`) is already allowed in `next.config.ts` `remotePatterns`.

### 12.3 Fill Mode (for aspect-ratio containers)

```tsx
<div className="relative aspect-[4/3]">
  <Image
    src={card.imageSrc}
    alt={card.imageAlt}
    fill
    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
    className="object-cover"
  />
</div>
```

Always provide `sizes` with `fill` to help the browser pick the right source.

---

## 13. Sanity CMS Integration

### 13.1 Client

The Sanity client is configured in `lib/sanity/client.ts`. It reads from environment variables:

```
NEXT_PUBLIC_SANITY_PROJECT_ID    # Sanity project ID
NEXT_PUBLIC_SANITY_DATASET       # Usually "production"
```

### 13.2 GROQ Queries

All queries live in `lib/sanity/queries.ts`:

```ts
import { groq } from "next-sanity";

export const pageBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    title,
    "slug": slug.current,
    metaDescription,
    content,
    sections
  }
`;
```

**Rules:**
- Use the `groq` tagged template literal (enables syntax highlighting).
- Name queries descriptively: `{what}Query` (e.g., `faqItemsQuery`, `siteSettingsQuery`).
- Rename fields where needed: `"slug": slug.current`.
- Order results explicitly: `| order(order asc)`.
- Select first item for singletons: `[0]`.

### 13.3 Schemas

Sanity schemas live in `sanity/schemas/`. Each schema file exports a `defineType({})` call:

```ts
import { defineType, defineField } from "sanity";

export default defineType({
  name: "faqItem",
  title: "FAQ",
  type: "document",
  fields: [
    defineField({
      name: "question",
      title: "Spørgsmål",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    // ...
  ],
  preview: {
    select: { title: "question" },
  },
});
```

All schemas are aggregated in `schemas/index.ts` and passed to `sanity.config.ts`.

---

## 14. TypeScript Conventions

### 14.1 Type Definitions

Shared types live in `types/index.ts`:

```ts
export interface NavItem {
  title: string;
  href?: string;
  children?: NavItem[];
}

export interface PageData {
  title: string;
  slug: string;
  metaDescription?: string;
  heroImage?: SanityImage;
}

export interface SanityImage {
  _type: "image";
  asset: { _ref: string; _type: "reference" };
  alt?: string;
}

// Discriminated union for flexible sections
export type PageSection =
  | HeroSectionData
  | ContentSectionData
  | CardGridSectionData
  | CTASectionData;
```

### 14.2 Naming

| Kind | Convention | Example |
|---|---|---|
| Interfaces | PascalCase | `NavItem`, `PageData`, `SanityImage` |
| Type aliases | PascalCase | `PageSection`, `FormValues` |
| Props interfaces | `{Component}Props` | `HeroSectionProps`, `ButtonProps` |
| Sanity discriminators | `_type` | `_type: "heroSection"` |
| Properties | camelCase | `metaDescription`, `heroImage` |
| Generic arrays | Plural | `items`, `cards`, `images` |

### 14.3 Strict Mode

`tsconfig.json` has `"strict": true`. This means:
- All variables must have types (inferred or explicit).
- `null` and `undefined` must be handled explicitly.
- Use `??` (nullish coalescing) instead of `||` for default values.
- Use optional chaining `?.` for nullable property access.

---

## 15. Icon Usage

Use **react-icons** with the Font Awesome set (`react-icons/fa`):

```tsx
import { FaBars, FaSearch, FaTimes, FaArrowUp } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

// Always apply size via className
<FaBars className="w-6 h-6" />
<FaSearch className="w-5 h-5" />
```

- Only import specific icons (tree-shaking).
- Control size with `w-X h-X` utility classes.
- Control color with `text-{color}` classes.

---

## 16. Comment Standards

### When to Comment

- **Section dividers** in page files to mark major content blocks:
  ```tsx
  {/* ── Hero Section ─────────────────────────── */}
  ```
- **TODO markers** for unfinished work:
  ```tsx
  // TODO: Replace with actual Sanity fetch when CMS is connected
  ```
- **Complex logic** that isn't self-explanatory:
  ```tsx
  // Recursive: renders children at increased depth for padding
  ```
- **Data placeholders** that will be replaced by CMS:
  ```tsx
  /**
   * Placeholder FAQ items — in production these come from Sanity CMS.
   */
  ```

### When NOT to Comment

- Self-explanatory code.
- Simple variable declarations.
- Obvious JSX structure.
- Import statements.

### Style

- Use `//` for single-line.
- Use `{/* ... */}` inside JSX.
- Use `/** ... */` for multi-line documentation above constants/functions.
- Use `// ── Label ───` visual dividers for page sections.

---

## 17. Error Handling

### API Routes

- Wrap in `try/catch`.
- Catch `z.ZodError` specifically for validation errors (400).
- Return generic error for everything else (500).
- Never expose stack traces or internal details to the client.

### Client Components

- Use `status` state: `"idle" | "submitting" | "success" | "error"`.
- Show user-friendly messages in Danish.
- Disable submit buttons during `"submitting"`.

### Dynamic Routes

- If the CMS returns `null` for a slug, call `notFound()` — never render an empty page.

---

## 18. State Management

This project uses **no global state library** (no Redux, Zustand, etc.). State is local to each component via `useState`. This is intentional — the site is mostly static content.

| Hook | Used for |
|---|---|
| `useState` | Toggle booleans (menu, accordion), form status, scroll visibility |
| `useEffect` | Scroll listeners, keyboard listeners, auto-focus |
| `useSearchParams` | Reading URL query parameters (search page) |
| `useRouter` | Programmatic navigation |
| `useForm` | Form state & validation (react-hook-form) |

---

## 19. Navigation Data

The navigation tree is defined in `lib/navigation.ts` as a hard-coded `NavItem[]` array. In production, this will come from Sanity's `navigation` singleton.

The tree supports **3 levels of nesting**:

```
Top-level → Dropdown → Sub-dropdown
```

Components that consume it:
- `Header.tsx` — renders desktop nav
- `NavDropdown.tsx` — renders dropdown menus
- `MobileMenu.tsx` — renders mobile overlay

---

## 20. SEO & Metadata

### Per-Page Metadata

Every page must export metadata:

```tsx
export const metadata: Metadata = {
  title: "Page Title — Everyday Sexism Project Danmark",
  description: "Danish description under 160 characters.",
};
```

For dynamic pages, use `generateMetadata()`.

### Title Format

`{Page Title} — Everyday Sexism Project Danmark`

### Language

Always `da-DK`. The `<html lang="da-DK">` is set in the root layout.

### Structured Data (JSON-LD)

Still TODO — should include:
- `Organization` schema on all pages
- `BreadcrumbList` (already in microdata)
- `FAQPage` on `/faq`
- `SearchAction` on site-level

---

## 21. GDPR & Cookie Consent

`CookieConsent.tsx` displays a bottom banner on first visit. It stores consent in a `cookie_consent` cookie (365-day expiry).

**Rules for adding third-party scripts:**
- Social embeds (Facebook, Twitter, TikTok) must only load **after** cookie consent is accepted.
- Analytics scripts must only load after consent.
- The cookie consent component checks `document.cookie` for `cookie_consent=accepted`.

---

## 22. Testing Checklist (Before Submitting a PR)

1. **TypeScript** — `npm run build` succeeds with zero errors.
2. **Lint** — `npm run lint` passes.
3. **Responsive** — Check at 375px (mobile), 768px (tablet), 1280px+ (desktop).
4. **Keyboard** — Tab through all interactive elements; verify focus is visible.
5. **Screen reader** — Verify `aria-label`s make sense read aloud.
6. **Images** — All images have `alt` text; above-the-fold images have `priority`.
7. **Links** — External links use `target="_blank"` with `rel="noopener noreferrer"`.
8. **Danish** — All user-facing text is in Danish. No English strings in the UI.

---

## 23. Remaining Work (Phase 3–4)

See `docs/system_design.md` Section 13 for the full status tracker. Here's what's left:

### Phase 3 — CMS Integration
- [ ] Connect `[slug]/page.tsx` to Sanity (replace stub with real fetch + Portable Text rendering)
- [ ] Install and configure `@portabletext/react` for rich content
- [ ] Wire email sending in `/api/contact/route.ts` (Resend or Nodemailer)
- [ ] Implement Sanity GROQ search on `/search`
- [ ] Create `/api/revalidate` webhook route for on-demand ISR
- [ ] Populate all CMS content from WordPress

### Phase 4 — Polish & Launch
- [ ] JSON-LD structured data (Organization, FAQPage, SearchAction)
- [ ] `sitemap.xml` and `robots.txt`
- [ ] Accessibility audit
- [ ] Lighthouse performance audit
- [ ] Cross-device responsive testing
- [ ] GDPR cookie consent verification
- [ ] Update `README.md`
