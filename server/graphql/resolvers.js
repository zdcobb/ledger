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
                return users.find(
                    (user) => String(user.id) === String(args.id)
                );
            },
            userLedgers: (_, { author_id }, { dataSources }) => {
                console.debug(
                    `Querying for ledgers owned by user ${author_id}...`
                );
                return ledgers.filter((ledger) => ledger.author == author_id);
            },
        },
        Mutation: {
            registerUser: (_, { newUser }, { dataSources }) => {
                console.debug(`Registering new user: `);
                console.debug(newUser);
                try {
                    users.push(newUser);
                    return newUser;
                } catch (err) {
                    return err;
                }
            },
        },
        User: {
            ledgers: (parent, args, context, { dataSources }) => {
                /// TO DO -- return list of ledgers owned by the user
            },
        },
        Ledger: {
            author: ({ author }, _, { dataSources }) => {
                return users.find((user) => String(user.id) === String(author));
            },
            pages: (parent, args, context, { dataSources }) => {
                // TO DO -- return list of pages that belong to the ledger
            },
        },
    },
};
