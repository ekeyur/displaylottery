export const gameType = {
  name: "game",
  title: "Game",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
    },
    {
      name: "price",
      type: "number",
    },
    {
      name: "state",
      type: "reference",
      to: [{ type: "state" }],
    },

    {
      title: "Tags",
      name: "tags",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "tag" }],
        },
      ],
    },
    {
      name: "number",
      type: "number",
    },
    {
      name: "packqty",
      type: "number",
    },
    {
      name: "image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
      subtitle: "price",
    },
  },
};
