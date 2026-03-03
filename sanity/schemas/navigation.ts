import { defineType, defineField, defineArrayMember } from "sanity";

export const navigation = defineType({
  name: "navigation",
  title: "Navigation",
  type: "document",
  fields: [
    defineField({
      name: "mainMenu",
      title: "Main Menu",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "menuItem",
          title: "Menu Item",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "href",
              title: "Link",
              type: "string",
            }),
            defineField({
              name: "children",
              title: "Sub-items",
              type: "array",
              of: [
                defineArrayMember({
                  type: "object",
                  name: "subMenuItem",
                  title: "Sub-menu Item",
                  fields: [
                    defineField({
                      name: "title",
                      title: "Title",
                      type: "string",
                      validation: (rule) => rule.required(),
                    }),
                    defineField({
                      name: "href",
                      title: "Link",
                      type: "string",
                    }),
                    defineField({
                      name: "children",
                      title: "Third-level Items",
                      type: "array",
                      of: [
                        defineArrayMember({
                          type: "object",
                          name: "thirdLevelItem",
                          fields: [
                            defineField({
                              name: "title",
                              title: "Title",
                              type: "string",
                              validation: (rule) => rule.required(),
                            }),
                            defineField({
                              name: "href",
                              title: "Link",
                              type: "string",
                              validation: (rule) => rule.required(),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Main Navigation" }),
  },
});
