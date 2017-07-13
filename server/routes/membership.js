/**
 * Created by e062110 on 6/17/16.
 */
var router = require('express').Router();
var statusCode = require('../utils/helpers.js').statusCodes;
var log = require('../utils/helpers.js').logRequest;
//var _ = require('lodash');

///////////
// Debug //
///////////
var debug = 'true'; // Enable to show requests data in debug console

//////////
// Data //
//////////
var membership = require('../data/membership.json');

// UserData Service
router.get('/membership/v0/userAccounts/me/memberships', function (req, res) {
    if(debug) log(req);

    res.status(statusCode.OK).send(membership.me);
});

router.get('/membership/v0/organizations/:orgId/memberships', function (req, res) {
    if(debug) log(req);

    res.status(statusCode.OK).send(membership[req.params.orgId]);
});

module.exports = router;
