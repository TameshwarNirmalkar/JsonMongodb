const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
router.use( bodyParser.urlencoded({ extended: false }) );
router.use( bodyParser.json() ) ;
const path = require('path');
const db = require(path.resolve(__dirname+'/db') ); //Database connection name

const OriginUrlsSchema = require( path.resolve(__dirname+'/OriginUrlSchema') );

router.get('/', function (req, res) {
    OriginUrlsSchema.find({}, function (err, data) {
        if (err) return res.status(500).send({error: err});
        res.status(200).send(data);
    });
});

router.post('/', function (req, res) {
    OriginUrlsSchema.create(req.body, 
        function (err, data) {
            if (err) return res.status(500).send({error: err});
            res.status(200).send({message: "data added successfully"});
        });
});

module.exports = router;