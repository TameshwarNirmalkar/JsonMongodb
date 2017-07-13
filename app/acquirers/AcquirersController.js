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
    AcquirerSchema.find({}, function (err, data) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(data);
    });
});

// CREATES AN ACQUIRERS
router.post('/', function (req, res) {
    AcquirerSchema.create(req.body, function (err, data) {
        if (err) return res.status(500).send("There was a problem adding the information to the database.");
        res.status(200).send({message: "Acquirer added successfully"});
    });
});

// UPDATES AN ACQUIRERS
router.put('/:id', function (req, res, next) {
    AcquirerSchema.findByIdAndUpdate({ _id: req.params.id }, req.body,
        function (err, updateddata) {
            if (err){
                return res.status(500).send("There was a problem adding the information to the database.");
            }else if(!updateddata){
                return next(new Error(req.params.id+', Id not found'));
            }
            else{
                res.status(200).send({message: "Data updated successfully"});
            }
        });
});

// DELETE All records from usertable
router.delete('/', function (req, res) {
    AcquirerSchema.remove(function (err) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send({message: "Database empty"});
    });
});

module.exports = router;