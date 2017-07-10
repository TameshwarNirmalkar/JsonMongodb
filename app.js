const express = require('express');
const mongodb = require('mongodb');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();

const userRoutes = require('./routes/user.routes');
const utility = require('./Utility')();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

router.use('/users', userRoutes);

router.post('/user', function(req, res, next){
    console.log(req);
})
/*
app.use('/testlist', function(){
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
         
        // colle.remove(function(){
        //     colle.find().toArray(function(err, result){
        //         if(err) throw err;
        //         console.log( result );
        //         db.close();
        //     })
        // })
        
        
    })
});
*/
app.listen(5000, () => {
  console.log('Mongo Database Ready: http://localhost:'+5000);
})