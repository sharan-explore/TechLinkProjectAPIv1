
https://github.com/sharan-explore/TechLinkProjectAPI

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var router = express.Router();
var mongoose = require('mongoose');
var db = require('./Config/db');
var router = require('./Config/Router');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = process.env.PORT || 8092;

// Connect to database

db.dbConnect();

//Routing to apiv1

app.use(function(req,resp,next){
 console.log('Starting of api will be done here in parent route,http://localhost:8091/apiv1');
 next(); // make sure we go to the next routes and don't stop here
});


app.use(cors());
app.use('/apiv1', router);
app.listen(port);
console.log('REST API apiv1 is runnning at ' + port);


