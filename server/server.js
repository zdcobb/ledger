"use strict";
const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./graphql/typeDefs");
const { resolvers } = require("./graphql/resolvers");
const { prisma } = require("./prisma/client");

// const { mocks } = require("./graphql/mocks");

const server = new ApolloServer({
	typeDefs,
	resolvers,
	context: prisma,
	csrfPrevention: true,
	cors: {
		origins: ["http://localhost:3000"],
	},
	mocks: false,
});

server.listen().then(({ url }) => {
  console.log(`Server listening at ${url}`);
});

