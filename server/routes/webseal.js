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
var webseal = require('../data/webseal.json');

// Reset Password
router.post('/pkmspasswd', function (req, res) {
    if(debug) log(req);

    res.status(statusCode.OK).json({});
});

router.post('/pkmslogin.form', function (req, res) {
    if(debug) log(req);

    if( req.body.username === 'expired'){
        res.status(statusCode.OK).json(webseal.expired);
    }
    else if( req.body.username === 'locked'){
        res.status(statusCode.OK).json(webseal.locked);
    }
    else if( req.body.username === 'failed'){
        res.status(statusCode.OK).json(webseal.failed);
    }
    else if( req.body.username === 'incomplete'){
        res.status(statusCode.OK).json(webseal.incomplete);
    }
    else {
        res.status(statusCode.OK).json(webseal.success);
    }
});

router.get('/pkmslogout', function (req, res) {
    if(debug) log(req);

    res.status(statusCode.OK).json({});
});

module.exports = router;
