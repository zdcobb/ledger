'use strict';

const express = require('express');
const { process } = require('ipaddr.js');
const app = express();
const config = require('./config');
const login = require('./api/login');

app.disable('x-powered-by');

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/close', (req, res) => {
  console.log('Shutting down server...');
  res.send('Shutting down server...');
  process.kill();
});

app.use(login);

app.listen(config.PORT, () => {
  console.log(`Example app listening at http://localhost:${config.PORT}`);
});
