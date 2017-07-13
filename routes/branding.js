/**
 * Created by e062110 on 11/22/16.
 */
var router = require('express').Router();
var statusCode = require('../utils/helpers.js').statusCodes;
var log = require('../utils/helpers.js').logRequest;
var _ = require('lodash');

///////////
// Debug //
///////////
var debug = 'true'; // Enable to show requests data in debug console

//////////
// Data //
//////////
var brands = require('../data/brands.json');
var origins = require('../data/originUrls.json');

// getAllBrands
router.get('/branding/v0/organizations/:orgId/brands', function (req, res) {
    if(debug) log(req);

    res.send(brands);
});

// getBrand
router.get('/branding/v0/organizations/:orgId/brands/:brandingCode', function (req, res) {
    if(debug) log(req);

    var brand = _.find(brands.brands, function(i){
        return i.brandingCode == req.params.brandingCode;
    });

    res.send(brand);
});

// addBrand
router.post('/branding/v0/organizations/:orgId/brands', function (req, res) {
    if(debug) log(req);

    req.body.brandingCode = Date.now().toString();
    brands.brands.push(req.body);

    res.status(statusCode.OK).send({});
});

// editBrand
router.put('/branding/v0/organizations/:orgId/brands/:brandingCode', function (req, res) {
    if(debug) log(req);

    brands.brands = _.reject(brands.brands, function(i){
        return i.brandingCode == req.params.brandingCode;
    });
    brands.brands.push(req.body);

    res.status(statusCode.OK).send({});
});

// getAllOriginUrls
router.get('/branding/v0/organizations/:orgId/originUrls', function (req, res) {
    if(debug) log(req);

    res.send(origins);
});

// addOriginUrls
router.post('/branding/v0/organizations/:orgId/originUrls', function (req, res) {
     if(debug) log(req);

    req.body.originUrlId = Date.now().toString();
    origins.originUrls.push(req.body);

    res.status(statusCode.OK).send({});
});

// deleteOriginUrls
router.delete('/branding/v0/organizations/:orgId/originUrls/:originUrlId', function (req, res) {
    if(debug) log(req);

    origins.originUrls = _.reject(origins.originUrls, function(i){
        return i.originUrlId == req.params.originUrlId;
    });

    res.status(statusCode.OK).send({});
});


module.exports = router;
