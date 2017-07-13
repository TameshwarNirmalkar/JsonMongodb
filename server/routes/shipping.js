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
var shipping = require('../data/shipping.json');
var shippingMax = require('../data/shippingMax.json');

// router.get('/shipping/v0/organizations/:orgId/shippingProfiles', function (req, res) {
//     if(debug) log(req);

//     var org = shipping[req.params.orgId];

//     if(!!org)
//         res.status(statusCode.OK).json(shipping[0][org]);
//     else
//         res.status(statusCode.NotFound).send(shipping['404']);
// });

router.post('/shipping/v0/organizations/:orgId/shippingProfiles', function (req, res) {
    if(debug) log(req);

    res.status(statusCode.OK).send({});
});

router.get('/shipping/v0/organizations/:orgId/shippingProfiles/', function (req, res) {
    if(debug) log(req);

    res.status(statusCode.OK).send(shipping[0]);
});

router.get('/shipping/v0/organizations/:orgId/shippingProfiles/:shippingId', function (req, res) {
    if(debug) log(req);

    res.status(statusCode.OK).send(shipping[1]);
});

router.get('/shipping/v0/shippingProfiles/max', function(req, res){
    if(debug) log(req);

    res.status(statusCode.OK).send(shippingMax); //TODO: need data for this
});

module.exports = router;
