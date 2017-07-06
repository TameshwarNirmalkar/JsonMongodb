
const faker = require('faker');
const express = require('express');
const bodyParser = require("body-parser");
const Promise = require('bluebird');
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// const jsonServer = require('json-server');
// const serverCreate = jsonServer.create();
// const middlewares = jsonServer.defaults()
const app = express();
// const jsonRouter = jsonServer.router('db.json');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const router = express.Router();
const port = process.env.PORT || 8080;



// const API = require('fetch-api');
// const fetch = require('whatwg-fetch');
 
// instantiate a new API instance 
// let api = new API({
//   baseURI: 'http://localhost:3004/merchantAdmin/private/organization'
// });

function ajaxGetAsync(url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest;
        xhr.addEventListener("error", reject);
        xhr.addEventListener("load", resolve);
        xhr.open("GET", url);
        xhr.send(null);
    });
}

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

router.route('/productionAccess')
    // get all the bears (accessed at GET http://localhost:8080/api/bears)
    .get(function(req, res) {
        ajaxGetAsync('http://localhost:3004/merchantAdmin/private/organization/productionAccess').then(function(response){
            console.log('response ===== ', response );
        }, function(err){
            console.log(err);
        })
        // Bear.find(function(err, orgnations) {
            // if (err)
                // res.send(err);
            // res.json();
        // });
    });

app.use('/merchantAdmin/private/organization', router);

app.listen(port, function(){
  console.log('Magic happens on port ' + port);
});