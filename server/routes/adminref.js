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
router.get('/adminref/v0/public/portalNotification', function (req, res) {
    if(debug) log(req);

    res.status(statusCode.OK).json({"portalNotifications":[{"portalNotificationId":44,"notificationText":"Stage 1 has R6 code"}]});
});

module.exports = router;

