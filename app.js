const express = require('express');
const mongodb = require('mongodb');
const app = express();
const utility = require('./Utility')();

// app.use('/', function(req, res){
//     res.send('server started');
// });
// app.use('/testlist', function(){
    let MongoClient = mongodb.MongoClient;
    MongoClient.connect('mongodb://localhost:27017/usertable', function(err, db){
        if(err) throw err;
        console.log( 'DATABASE: ', utility.onlynumber(), ':', utility.guid() );
        let colle = db.collection('usertable');

        // colle.save({_id:, name: "Tameshwar"},{writeConcern: true})

        /**
         * Update Data
         */
        // colle.update({clientId:1}, { $set: {"role":"super"} }, {upsert: true}, function(){
        //     colle.find().toArray(function(err, result){
        //         if(err) throw err;
        //         console.log( result );
        //         db.close();
        //     })
        // })

        /**
         * Delete Data
         */
        // colle.remove(function(){
        //     colle.find().toArray(function(err, result){
        //         if(err) throw err;
        //         console.log( result );
        //         db.close();
        //     })
        // })

        /**
         * Retrive Data
         */
        colle.findOne(function(err, doc){
            if(err) throw err;
            console.log(doc);
            db.close();
        });
    })
// });

// app.listen(5000, () => {
//   console.log('Mongo Database Ready: http://localhost:'+5000);
// })