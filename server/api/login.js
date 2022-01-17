'use strict';
// ----- ROUTES -----
// It's best practice to separate routes into different files grouped by their purpose 
// but this is a small app so we'll put them all in one place

const express = require('express');
const router = express.Router();
let handlers = require('./handlers');

router.use(express.json());
router.post('/', function(req, res) {
    console.log('Fetching account for user: ', req.body);
    console.log(typeof req.body);

    try {
        let response = handlers.getUser(req.body);
        console.log('User found! -----');
        console.log(response);
        res.send(response);
    }
    catch (err) {
        if (err instanceof ReferenceError) {
            res.status(404)
        } else {
            res.status(400)
        }
        const errMsg = 'Uh oh, something went wrong trying to fetch your user data: ' + err;
        console.error(errMsg);
        res.send(errMsg);
    }
});

module.exports = router;
