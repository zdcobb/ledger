'use strict';
// ----- ROUTES -----
// It's best practice to separate routes into different files grouped by their purpose 
// but this is a small app so we'll put them all in one place

const express = require('express');
const router = express.Router();
let handlers = require('./handlers');

function callWrapper(handlerFn, argsArr,) {
    try {
        return handlerFn(...argsArr);
    } catch (err) {
        if (err instanceof ReferenceError) {
            res.status(404)
        } else {
            res.status(400)
        }
        const errMsg = 'Uh oh, something went wrong trying to fetch your user data: ' + err;
        console.error(errMsg);
        res.send(errMsg);
    }
}

router.use(express.json());
router.post('/login', (req, res) => {
    console.log('Received login request...');
    try {
        let response = handlers.getUser(req.body);
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

// router.post('/register', function(req, res) {
//     let response = handlers.registerUser(req.body);
//     res.send(response);
// });

// router.get('/landing', function(req, res) {
//     let response = handlers.getUserPages(req.body);
//     res.send(response);
// });

module.exports = router;
