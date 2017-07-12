const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
router.use( bodyParser.urlencoded({ extended: false }) );
router.use( bodyParser.json() ) ;
const path = require('path');
const db = require(path.resolve(__dirname+'/db') ); //Database connection name

const MembershipsSchema = require( path.resolve(__dirname+'/MembershipsSchema') );

router.get('/', function (req, res) {
    MembershipsSchema.find({}, function (err, data) {
        if (err) return res.status(500).send("There was a problem finding the member.");
        res.status(200).send(data);
    });
});

router.post('/', function (req, res) {
    MembershipsSchema.create(req.body, 
        function (err, data) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send({message: "Member added successfully"});
        });
});

module.exports = router;