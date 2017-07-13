/**
 * Created by e062110 on 7/7/16.
 */
/**
 * Created by e062110 on 6/17/16.
 */
var router = require('express').Router();
var log = require('../utils/helpers.js').logRequest;
//var _ = require('lodash');

///////////
// Debug //
///////////
var debug = 'true'; // Enable to show requests data in debug console

//////////
// Data //
//////////
var userLogin = require('../data/user-login.json');

// UserData Service
router.get('/user-login/mpass_userlogin.action?requestToken=', function (req, res) {
    if(debug) log(req);

    res.status(200).send(userLogin);
});

module.exports = router;
