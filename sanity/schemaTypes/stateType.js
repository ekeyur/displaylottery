export const stateType = {
  name: "state",
  title: "State",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
    },
    {
      name: "games",
      type: "array",
      title: "Games",
      of: [
        {
          type: "reference",
          to: [{ type: "game" }],
        },
      ],
      validation: (Rule) =>
        Rule.custom((games) => {
          const gameIds = games.map((game) => game._ref);
          const uniqueGameIds = [...new Set(gameIds)];
          return gameIds.length === uniqueGameIds.length
            ? true
            : "Each game can only be referenced once";
        }),
    },
  ],
};
