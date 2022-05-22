const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLString,
  buildSchema,
} = require("graphql");

// testing only -- remove for prod
const { users, ledgers } = require("../db/fixtures");

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLID },
    email: { type: GraphQLString },
    fname: { type: GraphQLString },
    lname: { type: GraphQLString },
    ledgers: {
      type: new GraphQLList(LedgerType),
      resolve(parent) {
        return ledgers.filter((ledger) => ledger.author_id == parent.id);
      },
    },
  }),
});

const LedgerType = new GraphQLObjectType({
  name: "Ledgers",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    author: {
      type: UserType,
      resolve(parent) {
        return users.find((user) => user.id == parent.author_id);
      },
    },
  }),
});

const PageType = new GraphQLObjectType({
  name: "Pages",
  fields: () => ({
    id: { type: GraphQLID },
  }),
});

const RootQueryType = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    user: {
      type: UserType,
      args: {
        user_id: { type: GraphQLID },
      },
      resolve(parent, { user_id }) {
        return users.find((user) => {
          if (user.id == user_id) {
            return user;
          }
        });
      },
    },
    ledgers: {
      type: new GraphQLList(LedgerType),
      args: {
        author_id: { type: GraphQLID },
      },
      resolve(parent, { author_id }) {
        return ledgers.find(({ author }) => author == author_id);
      },
    },
  },
});

// const schema = new GraphQLSchema(RootQueryType);

// let schema = buildSchema(`
//   type User {
//     id: Int,
//     fname: String!,
//     lname: String,
//     ledgers: [ledgers]
//   },
//   type Ledgers {
//     id: Int,
//     name: String!
//   }
//   type Query {

//   }
// `);

module.exports = {
  schema: new GraphQLSchema({ query: RootQueryType }),
};
