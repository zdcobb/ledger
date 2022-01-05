'use strict'
const express = require('express');
const router = express.Router();

router.use(express.json());
router.post('/', function(req, res) {
    console.log('Login hit with request body: ', req.body);
    res.send({"message": `Log in request hit with request: ${req.body}`});
});

module.exports = router;
