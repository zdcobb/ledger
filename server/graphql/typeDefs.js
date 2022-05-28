const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    getUser: User
    userLedgers: [Ledger]
  }
  scalar Date
  type User {
    id: ID!
    email: String!
    fname: String!
    lname: String!
    dob: Date
    last_login: Date
  }
  type Ledger {
    id: ID!
    name: String!
    author: User
  }
`;

module.exports = {
  typeDefs,
};
