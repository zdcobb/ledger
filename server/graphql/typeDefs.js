const { gql } = require("apollo-server");

const typeDefs = gql`
    type Query {
        user(id: ID!): User
        "retrieve all ledgers that belong to a user"
        userLedgers(author_id: ID!): [Ledger]
    }
    type Mutation {
        "register a new user"
        registerUser(newUser: UserInput!): User
    }
    "input type for new users to be registered"
    input UserInput {
        password: String!
        email: String!
        fname: String!
        lname: String!
        dob: Date
    }
    scalar Date
    type User {
        "should be auto-generated on DB side"
        id: ID!
        email: String!
        fname: String!
        lname: String!
        dob: Date
        first_login: Date
        last_login: Date
        "list of ledgers that belong to the user"
        ledgers: [Ledger]
    }
    type Ledger {
        id: ID!
        name: String!
        last_opened: Date
        "user that owns/authored the ledger"
        author: User
        "pages that belong to the ledger"
        pages: [Page]
    }
    type Page {
        id: ID!
        last_opened: Date
        is_archived: Boolean
        ledger: Ledger
    }
`;

module.exports = {
  typeDefs,
};
