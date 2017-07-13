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
var images = require('../data/images.json');

// Get all countries
router.post('/images/v0/organizations/:orgId/logos', function (req, res) {
    if(debug) log(req);

    res
    .append('Access-Control-Expose-Headers', 'location')
    .append('location', images.location)
    .status(statusCode.OK)
    .send(images);
});

module.exports = router;
