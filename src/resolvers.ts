export const resolvers = {
  Query: {},
  Mutation: {
    createPage: async (_root, { title, category, username }, { Page }) => {
      // Possibly fails
      // need to log
      const newPage = await new Page({
        title,
        category,
        username
      }).save();

      return newPage;
    }
  }
};
