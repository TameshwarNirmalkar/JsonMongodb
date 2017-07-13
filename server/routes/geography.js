/**
 * Created by e062110 on 8/1/16.
 */

var router = require('express').Router();
var statusCode = require('../utils/helpers.js').statusCodes;
var _ = require('lodash');
var log = require('../utils/helpers.js').logRequest;

///////////
// Debug //
///////////
var debug = 'true'; // Enable to show requests data in debug console

//////////
// Data //
//////////
var geography = require('../data/geography.json');

// Get all countries
router.get('/geography/v0/geography/countries', function (req, res) {
    if(debug) log(req);

    res.status(statusCode.OK).json(geography.countries);
});

// Get country by code
/*
getCountryByCode: function(code) {
    return resourceService.get(countriesResource, {code: code});
},
getAllCallingCodes: function() {
    return resourceService.getAll(countriesResource,{fields:'countries.callingCode'});
},
getCallingCode: function(alpha2) {
    return resourceService.get(countriesResource, {code: alpha2, fields:'callingCode'});
}
*/
router.get('/geography/v0/geography/countries/:code', function (req, res) {
    if(debug) log(req);

    // find code == alpha2
    res.status(statusCode.OK).json(_.find(geography.countries, { 'alpha2': req.params.code}));
});

// Get all regions
router.get('/geography/v0/geography/regions', function (req, res) {
    if(debug) log(req);

    res.status(statusCode.OK).json(geography.regions);
});

// Get region by code
router.get('/geography/v0/geography/regions/:code', function (req, res) {
    if(debug) log(req);

    res.status(statusCode.OK).json(_.find(geography.regions, { 'code': req.params.code }));
});

// Get all locales
router.get('/geography/v0/geography/locales', function (req, res) {
    if(debug) log(req);

    res.status(statusCode.OK).json(geography.locales);
});

// Get all languages
router.get('/geography/v0/geography/languages', function (req, res) {
    if(debug) log(req);

    res.status(statusCode.OK).json(geography.languages);
});

// Get all currencies
router.get('/geography/v0/geography/currencies', function (req, res) {
    if(debug) log(req);

    res.status(statusCode.OK).json(geography.currencies);
});

module.exports = router;

