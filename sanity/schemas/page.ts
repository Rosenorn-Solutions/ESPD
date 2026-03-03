import { defineType, defineField, defineArrayMember } from "sanity";

export const page = defineType({
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 120 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "metaDescription",
      title: "Meta Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alternative text",
          type: "string",
          validation: (rule) => rule.required(),
        }),
      ],
    }),
    defineField({
      name: "heroStyle",
      title: "Hero Style",
      type: "string",
      options: {
        list: [
          { title: "Default", value: "default" },
          { title: "Full Height", value: "fullHeight" },
          { title: "With Overlay", value: "withOverlay" },
        ],
      },
      initialValue: "default",
    }),
    defineField({
      name: "shapeDivider",
      title: "Shape Divider",
      type: "string",
      options: {
        list: [
          { title: "None", value: "none" },
          { title: "Clouds", value: "clouds" },
          { title: "Curve", value: "curve" },
        ],
      },
      initialValue: "none",
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "blockContent",
    }),
    defineField({
      name: "sections",
      title: "Page Sections",
      type: "array",
      of: [
        defineArrayMember({ type: "heroSection" }),
        defineArrayMember({ type: "contentSection" }),
        defineArrayMember({ type: "cardGrid" }),
        defineArrayMember({ type: "ctaSection" }),
      ],
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "slug.current" },
  },
});
