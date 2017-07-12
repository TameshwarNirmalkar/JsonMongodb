const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
router.use( bodyParser.urlencoded({ extended: false }) );
router.use( bodyParser.json() ) ;
const path = require('path');
const db = require(path.resolve(__dirname+'/db') ); //Database connection name

const UserAccountSchema = require( path.resolve(__dirname+'/UserAccountSchema') );

router.get('/', function (req, res) {
    UserAccountSchema.find({}, function (err, data) {
        if (err) return res.status(500).send("There was a problem finding the user account.");
        res.status(200).send(data);
    });
});

router.post('/', function (req, res) {
    UserAccountSchema.create(req.body, 
        function (err, data) {
            if (err) return res.status(500).send(err);
            res.status(200).send({message: "User account added successfully"});
        });
});

// DELETE All records from usertable
router.delete('/', function (req, res) {
    UserAccountSchema.remove(function (err) {
        if (err) return res.status(500).send("There was a problem finding the user account.");
        res.status(200).send({message: "Database empty"});
    });
});

module.exports = router;