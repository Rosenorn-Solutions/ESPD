import { siteSettings } from "./siteSettings";
import { navigation } from "./navigation";
import { page } from "./page";
import { faqItem } from "./faqItem";
import { homePage } from "./homePage";
import { blockContent } from "./blockContent";
import {
  heroSection,
  contentSection,
  cardGrid,
  ctaSection,
} from "./sections";

export const schemaTypes = [
  // Singletons
  siteSettings,
  navigation,
  homePage,

  // Documents
  page,
  faqItem,

  // Block content
  blockContent,

  // Object types (for page builder)
  heroSection,
  contentSection,
  cardGrid,
  ctaSection,
];
