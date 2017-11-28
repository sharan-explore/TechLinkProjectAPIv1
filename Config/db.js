module.exports.dbConnect =function(){

var mongoose = require( 'mongoose' ); 

// Build the connection string 
var dbURI = 'mongodb://localhost:27017/Topicdb'; 


//connect to the database
mongoose.connect(dbURI, {useMongoClient:true}, function(err){

  if(err){console.log(err);return 0}
  console.log("Succesfully connected to "+ dbURI); // This is shown

});


 // CONNECTION EVENTS
//When successfully connected
mongoose.connection.on('connected', function () {  
  console.log('Mongoose default connection open to ' + dbURI);
}); 

// //If the connection throws an error
mongoose.connection.on('error',function (err) {  
  console.log('Mongoose default connection error: ' + err);
}); 

//When the connection is disconnected
mongoose.connection.on('disconnected', function () {  
  console.log('Mongoose default connection disconnected'); 
});

//If the Node process ends, close the Mongoose connection 
process.on('SIGINT', function() {  
  mongoose.connection.close(function () { 
    console.log('Mongoose default connection disconnected through app termination'); 
   process.exit(0); 
  }); 
}); 

}