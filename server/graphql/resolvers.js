const { GraphQLScalarType } = require("graphql");
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
      user: (_, args, { dataSources }) => {
        console.debug(`Querying for user with ID: ${args.id}...`);
        return users.find((user) => String(user.id) === String(args.id));
      },
      userLedgers: (_, { author_id }, { dataSources }) => {
        console.debug(`Querying for ledgers owned by user ${author_id}...`);
        return ledgers.filter((ledger) => ledger.author == author_id);
      },
    },
    Mutation: {
      registerUser: (_, { newUser }, { dataSources }) => {
        console.debug(`Registering new user: `);
        console.debug(newUser);
        try {
          newUser.id = "12345";
          newUser.first_login = new Date();
          newUser.last_login = new Date();
          users.push(newUser);
          return newUser;
        } catch (err) {
          return err;
        }
      },
    },
    Ledger: {
      author: ({ author }, _, { dataSources }) => {
        return users.find((user) => String(user.id) === String(author));
      },
    },
  },
};
