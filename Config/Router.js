var express = require('express');
var app = express();
var router = express.Router();

var Topiccontroller = require('../Controller/TopicController');

var DefaultUser="sharan"; //If you pass the user, it will take the same otherwise default will be sharan

router.use(function (req, res, next) {
    // do logging 
  
    console.log('Logging of request will be done here in this route http://localhost:8091/apiv1/ ');
    next(); // make sure we go to the next routes and don't stop here
});



router
  .route('/topics')

    .post(function(request, response, next){
        console.log('Logging of Post request will be done here in this route http://localhost:8091/api/topics ');
        Topiccontroller.createTopic(request,response,DefaultUser);
      })

    .get(function(request, response, next){
        console.log('Logging of Get request will be done here in this route http://localhost:8091/apiv1/topics ');
        Topiccontroller.getTopic(request,response);
  })



// http://localhost:8092/apiv1/topics/sharan

router
    .route('/topics/:tuser')
        .get (function (request, response,next){
            console.log('Logging of Get request will be done here in this route http://localhost:8092/apiv1/topics/sharan ');
            Topiccontroller.getTopicbyUser(request,response);
        })
        .post(function (request, response,next){
               console.log('Logging of Post request will be done here in this route http://localhost:8092/apiv1/topics/sharan ');
               Topiccontroller.createTopic(request,response,DefaultUser); //Might not required, will remove later
        })

//By Title http://localhost:8092/apiv1/topics/sharan/dotnet || http://localhost:8092/apiv1/topics/sharan/angular ||http://localhost:8092/apiv1/topics/sharan/nodejs

router
    .route('/topics/:tuser/:ttitle')
        .get (function (request, response,next){
            console.log('Logging of Get request will be done here in this route http://localhost:8091/apiv1/topics/sharan/dotnet ');
            Topiccontroller.getTopicbyUserandTitle(request,response);
        })

module.exports= router;
