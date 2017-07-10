const express = require('express');
const router = express.Router();
const mongodb = require('mongodb');
// GET request to /login
router.get('/userlist', function(req, res, next) {
    let MongoClient = mongodb.MongoClient;
    MongoClient.connect('mongodb://localhost:27017/usertable', function(err, db){
        if(err) throw err;
        // console.log( 'DATABASE: ', utility.onlynumber(), ':', utility.guid() );
        let colle = db.collection('usertable');
        /**
         * Retrive Data
         */
        colle.findOne(function(err, doc){
            if(err) throw err;
            // res.send(doc);
            console.log('DOC: ==', err );
            res.send({message:"successfully get"})
            db.close();
        });
    })
});

// POST request to /login///
router.post('/user', function(req, res, next) {
    console.log('Post call');
    let MongoClient = mongodb.MongoClient;
    MongoClient.connect('mongodb://localhost:27017/usertable', function(err, db){
        if(err) throw err;
        let colle = db.collection('usertable');
        colle.save({
            _id: utility.guid(),
            name: "Ritesh",
            lname: "Singh"
        }, function(er, result){
            if(err){
                res.send({error: "something wrong"})
            }else{
                res.send(result);
            }
        })
    })
    res.send({message:"Insert data successfully"});
});

module.exports = router;