var mongodb = require('./models/db.js');
var schema = mongodb.mongoose.schema;

var DawuoSchema = new mogoose.Schema(
    {
category: String;
time: String;
address: String;
name: String;
photo: String;
timelog: Timestamp;
}
);

var Dawuo = mongodb.model('Dawuo', DawuoSchema);
module.exports = Dawuo;
