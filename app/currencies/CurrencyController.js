const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
router.use( bodyParser.urlencoded({ extended: false }) );
router.use( bodyParser.json() ) ;
const path = require('path');
const db = require(path.resolve(__dirname+'/db') ); //Database connection name

const CurrenciesSchema = require( path.resolve(__dirname+'/CurrenciesSchema') );

/**
 * @Get currencies
 */
router.get('/', function (req, res) {
    CurrenciesSchema.find({}, function (err, data) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(data);
    });
});

/**
 * @Post currencies
 */
router.post('/', function (req, res) {
    CurrenciesSchema.create(req.body, function (err, data) {
        if (err) return res.status(500).send("There was a problem adding the information to the database.");
        res.status(200).send({message: "Currencies added successfully"});
    });
});

module.exports = router;