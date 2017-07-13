/**
 * Created by e062110 on 8/1/16.
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
var usermgmt = require('../data/usermgmt.json');
var membership = require('../data/membership.json');
var users = require('../data/users.json');

//////////////////////
// Public - No Auth //
//////////////////////

/////////
// NEW //
/////////

// UserData Service
router.get('/usermgmt/v0/private/users/me/memberships/clientIds/:clientId', function (req, res, next) {

    console.log('Request - Params', req.params);
    console.log('Request - Query', req.query);
    console.log('Request - Body', req.body);

    res.status(statusCode.OK).send(membership.me);
});

/////////
// OLD //
/////////

// Create a User
router.post('/usermgmt/v0/public/user', function (req, res) {
    if(debug) log(req);

    // TODO: return user name and password

    res.status(statusCode.Created).json({});
});

// submit security question answers and get a temp password
router.post('/usermgmt/v0/public/user/temporaryPassword', function (req, res) {
    if(debug) log(req);

    if(req.body.securityQuestionsAnswers.securityQuestionDtos[0].answer === 'answer')
    {
        res.status(statusCode.OK).json(usermgmt.correctAnswers);
    }
    else
        res.status(statusCode.OK).json(usermgmt.incorrectAnswers);
});

// Get LDAP
router.post('/usermgmt/v0/public/user/:userAlias', function (req, res) {
    if(debug) log(req);

    var user = usermgmt[req.params.userAlias];

    if(!user)
        user = usermgmt['fake'];

    res.status(statusCode.OK).json(usermgmt[req.params.userAlias]);
});

// Forget Username - return based on email address
router.post('/usermgmt/v0/public/user/sendLostUserNameEmail', function (req, res) {
    if(debug) log(req);

    res.status(statusCode.OK);
});

// Get Security Question Options
router.get('/usermgmt/v0/public/securityQuestions/:locale', function (req, res) {
    if(debug) log(req);

    res.status(statusCode.OK).json(usermgmt.securityQuestionsObject);
});

// Get users security questions
router.post('/usermgmt/v0/public/user/securityQuestions/:userAlias', function (req, res) {
    if(debug) log(req);

    var questions = usermgmt[req.params.userAlias];

    if(!questions)
        questions = usermgmt['fake'];

    res.status(statusCode.OK).json(questions);
});

// Manages a users login
router.get('/usermgmt/v0/public/WebSEALController', function (req, res) {
    if(debug) log(req);

    // TODO: _.pick(params);

    res.status(statusCode.OK).json(membership);
});

/////////////////////////////
// Private - Requires Auth //
/////////////////////////////

router.get('/usermgmt/v0/private/user/me/memberships', function (req, res) {
    if(debug) log(req);

    // TODO: _.pick(params);

    res.status(statusCode.OK).json(membership.me);
    //res.status(statusCode.Unauthorized).json('You are not logged in');
});

router.get('/usermgmt/v0/private/organizations/:orgId/users', function (req, res) {
    if(debug) log(req);

    // TODO: _.pick(params);

    var orgId = req.params.orgId,
        orgUsers = _.filter(users.orgUsers, (user) => user.organizationId === orgId);

    res.status(statusCode.OK).json({orgUsers: orgUsers});
});

router.get('/usermgmt/v0/private/organizations/:orgId/memberships', function (req, res) {
    if(debug) log(req);

    // TODO: _.pick(params);

    res.status(statusCode.OK).json(membership[req.params.orgId]);
});

module.exports = router;
