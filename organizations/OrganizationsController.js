const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
router.use( bodyParser.urlencoded({ extended: false }) );
router.use( bodyParser.json() ) ;
const path = require('path');
const db = require(path.resolve(__dirname+'/db') ); //Database connection name

const OrganizationsSchema = require( path.resolve(__dirname+'/OrganizationsSchema') );

router.get('/', function (req, res) {
    OrganizationsSchema.find({}, function (err, data) {
        if (err) return res.status(500).send("There was a problem finding the member.");
        res.status(200).send(data);
    });
});

router.post('/', function (req, res) {
    OrganizationsSchema.create(req.body, 
        function (err, data) {
            if (err) return res.status(500).send(err);
            res.status(200).send({message: "Organization added successfully"});
        });
});

module.exports = router;