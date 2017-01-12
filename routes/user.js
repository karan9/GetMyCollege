var express = require('express');
var router = express.Router();

// handlers
var accessHandler = require('../handlers/accessHandler');


router.get('/', function(req, res) {
    res.json({ message: 'Hello Moto' });
});

// handle signup
router.post('/signup', function(req, res) {
    accessHandler.signupHandler(req, res);
});

// handle signin
router.post('/signin', function(req, res) {
    accessHandler.signinHandler(req, res);
});

module.exports = router;