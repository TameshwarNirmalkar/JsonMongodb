/**
 * Created by e062110 on 8/1/16.
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
var acquirers = require('../data/acquirer.json');

// Get all countries
router.get('/acquirer/v0/acquirers', function (req, res) {
    if(debug) log(req);

    res.status(statusCode.OK).json(acquirers);
});

module.exports = router;

