module.exports = {
  mocks: {
    Query: () => ({
      user: () => this.User,
      userLedgers: () => [this.Ledger],
    }),
    User: () => ({
      id: () => "01",
      fname: () => "Zachary",
      lname: () => "C",
      email: () => "zcobb@email.com",
      dob: () => new Date(1987, 4, 15),
      first_login: () => new Date(2021, 1, 1),
      last_login: () => new Date(2022, 5, 19),
      ledgers: () => [...new Array(3)],
    }),
    Ledger: () => ({
      id: () => "1",
      name: () => "Monthly Bills 1/2",
      author_id: () => "01",
      last_opened: () => new Date(2022, 5, 19),
    }),
  },
};
