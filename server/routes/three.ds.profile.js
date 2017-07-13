/**
 * Created by e062110 on 8/1/16.
 */

var router = require('express').Router();
var statusCode = require('../utils/helpers.js').statusCodes;
var log = require('../utils/helpers.js').logRequest;
var fs = require('fs');
var _ = require('lodash');
var path = require('path');
//var _ = require('lodash');

///////////
// Debug //
///////////
var debug = 'true'; // Enable to show requests data in debug console

//////////
// Data //
//////////
var threeDsProfile = require('../data/three.ds.profile.json');

// Get acquirer relationships
router.get('/three.ds.profile/v0/organizations/:orgId/3ds/acquirerRelationships', function (req, res) {
    if(debug) log(req);

    res.status(statusCode.OK).json(threeDsProfile['org2'].acquirerRelationships);
});

router.post('/three.ds.profile/v0/organizations/:orgId/3ds/acquirerRelationships', function (req, res) {
    if(debug) log(req);

    res.status(statusCode.OK);
});

// Get advanced checkout
router.get('/three.ds.profile/v0/organizations/:orgId/3ds/advancedCheckout', function (req, res) {
    if(debug) log(req);

    res.status(statusCode.OK).json({advancedCheckouts: threeDsProfile['org2'].advancedCheckouts});
});

router.put('/three.ds.profile/v0/organizations/:orgId/3ds/advancedCheckout/:brandCode', function (req, res) {
    if(debug) log(req);
    var advancedCheckouts = threeDsProfile['org2'].advancedCheckouts;
    var card = _.filter(advancedCheckouts, (data) => data.cardBrandType === req.body.cardBrandType);

    if (req.body.advancedCheckoutEnabled) {
        if (card.length) {
            _.map(advancedCheckouts, (data) => {
                if (data.cardBrandType === req.body.cardBrandType) {
                    data.advancedCheckoutEnabled = req.body.advancedCheckoutEnabled;
                }
            });
        } else {
            advancedCheckouts.push(req.body);
        }
    } else {
        _.remove(advancedCheckouts, (data) => data.cardBrandType === req.body.cardBrandType);
    }

    threeDsProfile['org2'].advancedCheckouts = advancedCheckouts;
    fs.writeFile(path.join(__dirname, '../data/three.ds.profile.json'), JSON.stringify(threeDsProfile['org2'], null, 4), function (err) {
        if (err) return console.log(err);
        console.log('File updated >> ', 'three.ds.profile.json');
    });
    res.status(statusCode.OK).json({});
});

module.exports = router;

