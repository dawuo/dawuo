var mongo = require('mongodb');
var mongoose = require('mongoose');
mongoose.connect('mongodb://wp2016_groupC:abc@localhost/wp2016_groupC');
var db =  mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback(){
        console.log("Database Connected.");
                                           });
exports.mongoose = mongoose;
