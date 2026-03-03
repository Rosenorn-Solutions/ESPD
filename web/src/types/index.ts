// ── Navigation ──────────────────────────────────────────────────────
export interface NavItem {
  title: string;
  href?: string;
  children?: NavItem[];
}

// ── CMS Page ────────────────────────────────────────────────────────
export interface PageData {
  title: string;
  slug: string;
  metaDescription?: string;
  heroImage?: SanityImage;
  heroStyle?: "default" | "fullHeight" | "withOverlay";
  shapeDivider?: "none" | "clouds" | "curve";
  content?: PortableTextBlock[];
  sections?: PageSection[];
}

// ── Portable Text (simplified) ──────────────────────────────────────
export interface PortableTextBlock {
  _type: string;
  _key: string;
  children?: { _type: string; text: string; marks?: string[] }[];
  markDefs?: { _type: string; _key: string; href?: string }[];
  style?: string;
}

// ── Sanity Image ────────────────────────────────────────────────────
export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt?: string;
}

// ── Page Sections (flexible builder) ────────────────────────────────
export type PageSection =
  | HeroSectionData
  | ContentSectionData
  | CardGridSectionData
  | CTASectionData;

export interface HeroSectionData {
  _type: "heroSection";
  heading: string;
  subheading?: string;
  backgroundImage?: SanityImage;
  shapeDivider?: "none" | "clouds" | "curve";
}

export interface ContentSectionData {
  _type: "contentSection";
  heading?: string;
  body: PortableTextBlock[];
  image?: SanityImage;
  imagePosition?: "left" | "right";
}

export interface CardGridSectionData {
  _type: "cardGrid";
  heading?: string;
  cards: CardData[];
}

export interface CardData {
  title: string;
  image?: SanityImage;
  description: string;
}

export interface CTASectionData {
  _type: "ctaSection";
  heading: string;
  body?: PortableTextBlock[];
  buttonText: string;
  buttonLink: string;
}

// ── FAQ ─────────────────────────────────────────────────────────────
export interface FAQItem {
  question: string;
  answer: string;
  order?: number;
}

// ── Site Settings ───────────────────────────────────────────────────
export interface SiteSettings {
  title: string;
  description: string;
  socialLinks: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    linkedin?: string;
    tiktok?: string;
  };
  contactEmails: {
    general: string;
    volunteer: string;
    membership: string;
  };
}

// ── Contact Form ────────────────────────────────────────────────────
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
