const { GraphQLScalarType } = require('graphql')
const { users, ledgers } = require('../db/fixtures')

const DateType = new GraphQLScalarType({
    name: 'Date',
    description: 'Date type definition',
    serialize: (value) => value,
    parseValue: (value) => value,
    parseLiteral: (value) => value,
})

module.exports = {
    resolvers: {
        Date: DateType,
        Query: {
            ...require('./queries/index'),
        },
        Mutation: {
            ...require('./mutations/index'),
        },
        User: {
            ledgers: (parent, args, prisma) => {
                /// TO DO -- return list of ledgers owned by the user
            },
        },
        Ledger: {
            author: ({ author }, context) => {
                return users.find((user) => String(user.id) === String(author))
            },
            pages: (parent, args, context) => {
                // TO DO -- return list of pages that belong to the ledger
            },
        },
    },
}
