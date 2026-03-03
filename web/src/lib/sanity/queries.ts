import { groq } from "next-sanity";

export const pageBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    title,
    "slug": slug.current,
    metaDescription,
    heroImage,
    heroStyle,
    shapeDivider,
    content,
    sections
  }
`;

export const homePageQuery = groq`
  *[_type == "homePage"][0] {
    heroHeading,
    heroSubheading,
    heroLogo,
    missionStatement,
    heroGalleryImages,
    aboutHeading,
    aboutImage,
    aboutText,
    aboutDetailText,
    aboutDetailImage,
    meetUsHeading,
    meetUsCards[] {
      title,
      image,
      description
    },
    followHeading,
    followDescription,
    podcastImage,
    podcastLink,
    ctaHeading,
    ctaDescription,
    ctaButtonText,
    ctaButtonLink
  }
`;

export const faqItemsQuery = groq`
  *[_type == "faqItem"] | order(order asc) {
    question,
    answer
  }
`;

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    title,
    description,
    socialLinks,
    contactEmails,
    footerContent
  }
`;

export const allPageSlugsQuery = groq`
  *[_type == "page" && defined(slug.current)].slug.current
`;
