/**
 * Created by e062110 on 6/17/16.
 */
var router = require('express').Router();
var statusCode = require('../utils/helpers.js').statusCodes;
var _ = require('lodash');

//////////
// Data //
//////////
var user = require('../data/membership.json');

// UserData Service
router.get('/users/me/memberships/clientIds/:clientId', function (req, res, next) {

    console.log('Request - Params', req.params);
    console.log('Request - Query', req.query);
    console.log('Request - Body', req.body);

    res.status(statusCode.OK).send(user.me);
});

module.exports = router;
