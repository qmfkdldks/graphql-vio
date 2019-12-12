/* eslint-disable @typescript-eslint/no-var-requires */

const DEV = process.env.NODE_ENV === "development";
if (DEV) {
  // set .env.development variables (don't use dotenv in production)
  // production env should be defined in host server
  require("dotenv").config({ path: ".env.development" });
  // webpack hot reloading
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => console.log("Module disposed. "));
  }
}
// configure Log system
const pino = require("pino");
const logger = pino({
  prettyPrint: DEV, // log pretty format on development
  level: process.env.LOG_LEVEL || "info" // filter out lower log level messages
});
// NoSQL mongoDB connection
import User from "./models/User";
import Page from "./mongo_api/models/Page";

const mongoose = require("mongoose");
mongoose.connect(
  process.env.MONGO_URI,
  { useCreateIndex: true, useUnifiedTopology: true, useNewUrlParser: true },
  (err: any) => {
    if (err) logger.error(err);
    else logger.info("mongoDB ⛏ connected");
  }
);

// init apollo server
import { ApolloServer } from "apollo-server";
import { resolvers } from "./resolvers";
import { typeDefs } from "./schema";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  engine: {
    apiKey: process.env.APOLLO_ENGINE_API_KEY || "", // apollo server performance monitoring
    schemaTag: process.env.NODE_ENV // monitoring categorize performance data into development, production
  },
  context: {
    User,
    Page
  }
});

// start server given PORT
server.listen(process.env.PORT).then(({ url }: { url: string }) => {
  logger.info(`🚀  Server ready at ${url}`);
});
