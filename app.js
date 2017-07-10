const express = require('express');
const mongodb = require('mongodb');
const bodyParser = require('body-parser');
const path = require('path');
var app = express();
const db = require(path.resolve(__dirname+'/usermodule/db') ); //Database connection name

// ADD THESE TWO LINES
const UserController = require(path.resolve(__dirname+'/usermodule/UserController') );
app.use('/users', UserController);

app.listen(5000, () => {
  console.log('Mongo Database Ready: http://localhost:'+5000);
})