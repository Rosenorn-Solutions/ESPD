import { defineType, defineField, defineArrayMember } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Site Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alternative text",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "description",
      title: "Meta Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "socialLinks",
      title: "Social Links",
      type: "object",
      fields: [
        defineField({ name: "facebook", title: "Facebook", type: "url" }),
        defineField({ name: "instagram", title: "Instagram", type: "url" }),
        defineField({ name: "twitter", title: "Twitter / X", type: "url" }),
        defineField({ name: "linkedin", title: "LinkedIn", type: "url" }),
        defineField({ name: "tiktok", title: "TikTok", type: "url" }),
      ],
    }),
    defineField({
      name: "contactEmails",
      title: "Contact Emails",
      type: "object",
      fields: [
        defineField({
          name: "general",
          title: "General",
          type: "string",
          validation: (rule) => rule.required(),
        }),
        defineField({ name: "volunteer", title: "Volunteer", type: "string" }),
        defineField({
          name: "membership",
          title: "Membership",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "footerContent",
      title: "Footer Content",
      type: "object",
      fields: [
        defineField({
          name: "supportText",
          title: "Støt ESPD Text",
          type: "blockContent",
        }),
        defineField({
          name: "volunteerText",
          title: "Bliv frivillig Text",
          type: "blockContent",
        }),
        defineField({
          name: "contactText",
          title: "Skriv til os Text",
          type: "blockContent",
        }),
      ],
    }),
  ],
  preview: {
    select: { title: "title" },
  },
});
