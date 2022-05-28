"use strict";
const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./graphql/typeDefs");
const { resolvers } = require("./graphql/resolvers");
// const { mocks } = require("./graphql/mocks");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  mocks: false,
});

server.listen().then(({ url }) => {
  console.log(`Server listening at ${url}`);
});

