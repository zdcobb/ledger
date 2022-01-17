'use strict';
// Normally you should group handlers in separate files but this is a pretty small app
let users = {
    'zachary': {
        user_id: 1,
        username: 'zachary',
        password: 'test',
        date_created: new Date()
    }
};

class ValidationError extends Error {
  constructor(message) {
    super(message); // (1)
    this.name = "ValidationError"; // (2)
  }
}

module.exports = {
    getUser(body) {
        this.validateUser(body.username, body.password);
        let foundUser = users[body.username];
        console.log('User found -----');
        console.log(foundUser);

        return foundUser;
    },
    validateUser(username, password) {
        if (!username) throw new Error('No username supplied.');
        if (!password) throw new Error('No password supplied.');
        if (!users[username]) throw new ReferenceError('Username does not exist.');
        if (users[username].password !== password) throw new ValidationError('Invalid username or password.');
    }
}
