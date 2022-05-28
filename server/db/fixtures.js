"use strict";

module.exports = {
  users: [
    {
      id: "1",
      fname: "Zachary",
      lname: "C",
      email: "zdcobb@gmail.com",
      dob: new Date(4, 15, 1987),
      first_login: new Date(1, 1, 2021),
      last_login: new Date(5, 19, 2022),
    },
    {
      id: "2",
      fname: "Carmen",
      lname: "San Diego",
      email: "where@theworld.com",
      dob: new Date(1, 15, 1990),
      first_login: new Date(1, 2, 2022),
      last_login: new Date(4, 1, 2022),
    },
    {
      id: "3",
      fname: "Art",
      lname: "Vandalay",
      email: "imports_exports@vandalay.com",
      dob: new Date(7, 7, 1960),
      first_login: new Date(1, 3, 2022),
      last_login: new Date(1, 3, 2022),
    },
  ],
  ledgers: [
    {
      id: "1",
      name: "Monthly Bills 1/2",
      author: "1",
      last_opened: new Date(5, 19, 2022),
    },
    {
      id: "2",
      name: "Bills 2/2",
      author: "1",
      last_opened: new Date(5, 19, 2022),
    },
    {
      id: "3",
      name: "Some scrap paper...",
      author: "3",
      last_opened: new Date(1, 3, 2022),
    },
  ],

  pages: [
    {
      id: "1",
      ledger_id: "1",
      date_archived: undefined,
    },
    {
      id: "2",
      ledger_id: "2",
      date_archived: undefined,
    },
    {
      id: "3",
      ledger_id: "3",
      date_archived: undefined,
    },
    {
      id: "4",
      ledger_id: "1",
      date_archived: new Date(1, 20, 2022),
    },
  ],

  collections: [
    {
      id: "1",
      page_id: "1",
      name: "I Paid",
    },
    {
      id: "2",
      page_id: "1",
      name: "Nat paid",
    },
  ],
  accounts: [
    {
      id: "1",
      // collection_id: 1,
      name: "Electricity bill",
      recurring: true,
      cost: "100",
      static_cost: false,
      note: "",
    },
  ],
  transactions: [
    {
      id: "1",
      name: "I paid",
      action: "combine",
      order: 1, // maybe not necessary, can use ID instead?
    },
  ],

  accounts_to_trx: [
    {
      id: "1",
      trx_id: "1",
      account_id: "1",
    },
    {
      id: "2",
      trx_id: "1",
      account_id: "2",
    },
  ],
};

///// action options???
//
// group/combine multiple accounts,
//      which can then have calcuations run on them
// combine, offset, split

// export { users, ledgers, pages, collections, accounts, calculations };
