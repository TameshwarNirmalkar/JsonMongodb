const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
router.use( bodyParser.urlencoded({ extended: false }) );
router.use( bodyParser.json() ) ;
const path = require('path');
const db = require(path.resolve(__dirname+'/db') ); //Database connection name

const AcquirerSchema = require( path.resolve(__dirname+'/AcquirerSchema') );

// RETURNS ALL THE ACQUIRERS IN THE DATABASE
router.get('/', function (req, res) {
    AcquirerSchema.find({}, function (err, users) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(users);
    });
});

// CREATES AN ACQUIRERS
router.post('/', function (req, res) {
    AcquirerSchema.create(req.body, function (err, data) {
        if (err) return res.status(500).send("There was a problem adding the information to the database.");
        res.status(200).send(data);
    });
});

// UPDATES AN ACQUIRERS
router.put('/:id', function (req, res, next) {
    AcquirerSchema.findByIdAndUpdate({ _id: req.params.id }, req.body,
        function (err, updateduser) {
            if (err){
                return res.status(500).send("There was a problem adding the information to the database.");
            }else if(!updateduser){
                return next(new Error(req.params.id+', Id not found'));
            }
            else{
                res.status(200).send({message: "Data updated successfully"});
            }
        });
});

// DELETE All ACQUIRERS from PAYMENT SETTINGS TABLE
router.delete('/', function (req, res) {
    AcquirerSchema.remove(function (err, users) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send({message: "Database empty"});
    });
});

// DELETE Single ACQUIRERS from PAYMENT SETTING TABLE
router.delete('/:id', function (req, res) {
    AcquirerSchema.findByIdAndRemove({_id: req.params.id},function (err, users) {
        if (err) return res.status(500).send("There was a problem finding the users id.");
        res.status(200).send({message: "Record deleted successfully"});
    });
});

module.exports = router;