var Topic =require('../Models/Topic.js'); 

//apiv1/topics: POST
module.exports.createTopic=function(req,res,user){
    
    var user = req.body.tuser || user;
     Topic.create({  //Model takes first parameter as keyvalue of model and second as call back
                 
                   tuser: user,
                   ttitle: req.body.ttitle, 
                   ttopic:{
                         topictag: req.body.ttopic.topictag,
                         subtopictag:[{
                                tagname:req.body.ttopic.subtopictag[0].tagname,
                                linkname:req.body.ttopic.subtopictag[0].linkname,
                                dateadded:req.body.ttopic.subtopictag[0].dateadded,
                                smiley:req.body.ttopic.subtopictag[0].smiley,
                                 }]
                           }
                  
                                                    
                  },
                  function(err,topics){       //callback
                       
                        
                      if (err) return res.status(500).send("There was a problem adding the information to the database.");
                      console.log("Succesfully posted the topic")
                      res.status(200).send(topics);
           
                 });
}

module.exports.getTopic=function(req,res){

  
         Topic.find(function (err, topics) {
            if (err) {
                res.send(err);
            }
            console.log("Succesfully processed the get request");
            res.json(topics);
        });
}

module.exports.getTopicbyUser=function(req,res,user){


var username = req.params; 
Topic.find(username, function (err, topics) {
        if (err){
            res.send(err);
            }
        res.json(topics);
    });

}

module.exports.getTopicbyUserandTitle=function(req,res){


var Utitle = req.params; 
Topic.find(Utitle, function (err, topics) {
        if (err)
            res.send(err);
        res.json(topics);
    });

}

