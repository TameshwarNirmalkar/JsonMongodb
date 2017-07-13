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
var pymtbrand = require('../data/pymtbrand.json');

// Get all countries
router.get('/pymtbrand/v0/payment/paymentBrands', function (req, res) {
    if(debug) log(req);

    res.status(statusCode.OK).json(pymtbrand);
});

module.exports = router;

