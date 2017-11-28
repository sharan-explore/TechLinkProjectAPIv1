var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var TopicSchema   = new Schema({
    tuser:  String,  
    ttitle: String,  
    ttopic: {
            topictag :String, 
            subtopictag: [{
                        tagname: String, 
                        linkname: String,
                        dateadded: Date,
                        smiley: Boolean
                        }]
            }
});


module.exports = mongoose.model('Topic', TopicSchema,'topics'); 