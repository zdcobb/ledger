module.exports = {
    userLedgers: async (_, { author_id }, prisma) => {
        console.debug(`Querying for ledgers owned by user ${author_id}...`)
        return await prisma.ledger.findMany({
            where: { author_id: author_id },
        })
    },
}
