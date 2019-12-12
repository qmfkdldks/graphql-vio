export const typeDefs = `
type Page {
  title: String!
  category: String!
  createdDate: String
  username: String
}

type User {
  username: String! @unique
  password: String!
  email: String!
  createdDate: String
  pages: []
}

type Query {
  books: [Book]
  getPages: [Page]
}

type Mutation: {
  createPage(title: String!, category: String!, username: String): Page
}
`;
