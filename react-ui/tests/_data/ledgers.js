
const ledgers = [
    {
        id: "randomhash",
        name: "Mock Ledger A",
        author: "zachary",
        author_id: 'user_hash',
        date_created: new Date(2022, 4, 15),
        last_opened: new Date(2022, 4, 16),
        archived: false,
        pages: [
            {
                id: "randomhash",
                ledger_id: "ledger_id",
                archived: true,
                date_archived: undefined,
                date_created: new Date(2022, 04, 15),
                last_updated: new Date(2022, 04, 16),
            }
        ]
    }
]

export {
    ledgers
}