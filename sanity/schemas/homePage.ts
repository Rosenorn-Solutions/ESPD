import { defineType, defineField, defineArrayMember } from "sanity";

export const homePage = defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    // ── Hero ──────────────────────────────────────────────────
    defineField({
      name: "heroHeading",
      title: "Hero Heading",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "heroSubheading",
      title: "Hero Subheading",
      type: "string",
    }),
    defineField({
      name: "heroLogo",
      title: "Hero Logo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "missionStatement",
      title: "Mission Statement",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "heroGalleryImages",
      title: "Hero Gallery",
      type: "array",
      of: [
        defineArrayMember({
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              title: "Alt text",
              type: "string",
              validation: (rule) => rule.required(),
            }),
          ],
        }),
      ],
    }),

    // ── About ─────────────────────────────────────────────────
    defineField({
      name: "aboutHeading",
      title: "About Heading",
      type: "string",
    }),
    defineField({
      name: "aboutImage",
      title: "About Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt text",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "aboutText",
      title: "About Text",
      type: "blockContent",
    }),
    defineField({
      name: "aboutDetailText",
      title: "About Detail Text",
      type: "blockContent",
    }),
    defineField({
      name: "aboutDetailImage",
      title: "About Detail Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt text",
          type: "string",
        }),
      ],
    }),

    // ── Meet Us ───────────────────────────────────────────────
    defineField({
      name: "meetUsHeading",
      title: "Meet Us Heading",
      type: "string",
    }),
    defineField({
      name: "meetUsCards",
      title: "Meet Us Cards",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "image",
              title: "Image",
              type: "image",
              options: { hotspot: true },
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "blockContent",
            }),
          ],
        }),
      ],
    }),

    // ── Social / Follow ───────────────────────────────────────
    defineField({
      name: "followHeading",
      title: "Follow Heading",
      type: "string",
    }),
    defineField({
      name: "followDescription",
      title: "Follow Description",
      type: "blockContent",
    }),
    defineField({
      name: "podcastImage",
      title: "Podcast Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "podcastLink",
      title: "Podcast Link",
      type: "url",
    }),

    // ── CTA ───────────────────────────────────────────────────
    defineField({
      name: "ctaHeading",
      title: "CTA Heading",
      type: "string",
    }),
    defineField({
      name: "ctaDescription",
      title: "CTA Description",
      type: "blockContent",
    }),
    defineField({
      name: "ctaButtonText",
      title: "CTA Button Text",
      type: "string",
    }),
    defineField({
      name: "ctaButtonLink",
      title: "CTA Button Link",
      type: "url",
    }),
  ],
  preview: {
    prepare: () => ({ title: "Home Page" }),
  },
});
