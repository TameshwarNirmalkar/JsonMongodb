const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const router = express.Router();
router.use(bodyParser.urlencoded({ extended: false }));
router.use( bodyParser.json() ) ;
const db = require(path.resolve(__dirname+'/db') ); //Database connection name

const CustomerRangesSchema = require( path.resolve(__dirname+'/CustomerRangesSchema') );

// RETURNS ALL THE USERS IN THE DATABASE
router.get('/', function (req, res) {
    CustomerRangesSchema.find((req.query.businessType)?{businessType:req.query.businessType}:{}, function (err, data) {
        if (err) return res.status(500).send({error: err });
        res.status(200).send(data);
    });
});

// CREATES A NEW USER
router.post('/', function (req, res) {
    CustomerRangesSchema.create(req.body, 
        function (err) {
            if (err) return res.status(500).send(err.message);
            res.status(200).send({message: "Data added successfully"});
        });
});

router.put('/:id', function (req, res, next) {
    CustomerRangesSchema.findByIdAndUpdate({ _id: req.params.id }, req.body,
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

// DELETE All records from usertable
router.delete('/', function (req, res) {
    CustomerRangesSchema.remove(function (err) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send({message: "Database empty"});
    });
});

// DELETE records by id
router.delete('/:id', function (req, res) {
    CustomerRangesSchema.findByIdAndRemove({_id: req.params.id},function (err, users) {
        if (err) return res.status(500).send("There was a problem finding the users id.");
        res.status(200).send({message: "Record deleted successfully"});
    });
});

module.exports = router;