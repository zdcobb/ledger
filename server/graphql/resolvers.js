const { GraphQLScalarType } = require("graphql");
const { type } = require("os");
const { users, ledgers } = require("../db/fixtures");

const DateType = new GraphQLScalarType({
  name: "Date",
  description: "Date type definition",
  serialize: (value) => value,
  parseValue: (value) => value,
  parseLiteral: (value) => value,
});

module.exports = {
  resolvers: {
    Date: DateType,
    Query: {
      getUser: (_, args, { dataSources }) => {
        // remove before merge
        console.log("Getting user with args: ", args);

        return users.find((user) => String(user.id) === String(args.id));
      },
      userLedgers: (_, __, { dataSources }) => {
        return [...ledgers];
      },
    },
    Ledger: {
      author: (parent, _, { dataSources }) => {
        return users.find((user) => String(user.id) === String(parent.author));
      },
    },
  },
};
