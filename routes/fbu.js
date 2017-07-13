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
var fbu = require('../data/fbu.json');

// UserData Service
router.post('/fbu/v0/ui/organizations/:orgId/projects', function (req, res) {
    if(debug) log(req);

    res.status(statusCode.OK).send(fbu);
});

router.post('/fbu/v0/ui/files/validation', function (req, res) {
    if(debug) log(req);

    res.status(statusCode.OK).send({});
});

module.exports = router;
