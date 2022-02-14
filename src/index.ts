/**
 * Basic Apollo Server configuration
 * Check out https://www.apollographql.com/docs/apollo-server/getting-started/ for more info
 */

import { ApolloServer } from "apollo-server";

/**
 * Our GraphQL API definitions and resolvers
 */
import { typeDefs, resolvers } from "./api";

/**
 * Initialize database
 */
import "./db";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
