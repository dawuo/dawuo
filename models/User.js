
var mongodb = require('./db.js') ;
Schema = mongodb.mongoose.Schema;


var UserSchema = new Schema({
           name: String,
           id: String,
           email: String,
           picture: {
                  data: {
                  url: String
                        }
                  },
           friends: {
                data: []      
                      },
          record: {data:[]}
           
                                      }); 
/*UserSchema.methods.addUser = function(user, callback) {
           this.name = user.name;
           this.photo = user.photo;
           this.friends = user.friends;
           this.email = user.email;
           this.save(callback);
                                                       }*/

var User = mongodb.mongoose.model('users', UserSchema);
var UserDAO = function(){};

UserDAO.prototype.save = function(obj, callback){
           var instance = new User(obj);
           instance.save(function(err){
               callback(err);
                                      });
                                               };


UserDAO.prototype.findByIdAndUpdate = function(obj,callback){
  var friends=obj.friends;
  delete obj.friends;
  User.findOneAndUpdate(friends, obj, function(err,obj){
      callback(err, obj);
                                                    });
                                                             }
UserDAO.prototype.findById = function(id, callback){
             User.findOne({id:id},function(err, obj){
             callback(err, obj);
                                                        }
                         );
 
                                                    };



module.exports = new UserDAO();




