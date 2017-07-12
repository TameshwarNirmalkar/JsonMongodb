const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const router = express.Router();
router.use(bodyParser.urlencoded({ extended: false }));
router.use( bodyParser.json() ) ;
const db = require(path.resolve(__dirname+'/db') ); //Database connection name

const BusinessProfileSchema = require( path.resolve(__dirname+'/BusinessProfileSchema') );

// RETURNS ALL THE USERS IN THE DATABASE
router.get('/', function (req, res) {
    BusinessProfileSchema.find({}, function (err, users) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(users);
    });
});

// CREATES A NEW USER
router.post('/', function (req, res) {
    BusinessProfileSchema.create(req.body, 
        function (err, user) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send({message: "Organization user added successfully"});
        });
});

module.exports = router;