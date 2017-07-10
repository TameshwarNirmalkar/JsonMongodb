const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));

const path = require('path');

const User = require( path.resolve(__dirname+'/User') );

// CREATES A NEW USER
router.post('/', function (req, res) {
    User.create({
            id: req.body.id,
            name : req.body.name,
            email : req.body.email,
            password : req.body.password
        }, 
        function (err, user) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(user);
        });
});

router.put('/:id', function (req, res) {
    User.findOne({ _id: req.params.id }, req.body,
        function (err, updateduser) {
            if (err) return res.status(404).send("Id not found");
            updateduser.save(function(err){
                if(err) return res.status(300).send({error: err});
                res.status(200).send({message: "Data updated successfully"});
            })
        });
});

// RETURNS ALL THE USERS IN THE DATABASE
router.get('/', function (req, res) {
    User.find({}, function (err, users) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(users);
    });
});

// DELETE All records from usertable
router.delete('/', function (req, res) {
    User.remove(function (err, users) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send({message: "Database empty"});
    });
});

// DELETE Single records from usertable
router.delete('/:id', function (req, res) {
    console.log(req.params.id);
    User.findByIdAndRemove({_id: req.params.id},function (err, users) {
        if (err) return res.status(500).send("There was a problem finding the users id.");
        res.status(200).send({message: "Record deleted successfully"});
    });
});

module.exports = router;