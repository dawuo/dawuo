var User = require('./../models/User.js');
    exports.useradd = function(req, res){
     var json = JSON.parse(req.body.content); 
     console.log(json);
     User.findById(json.id, function(err, obj){
     if(obj == null){
     User.save(json, function(err, obj){
              if(err){
                 res.send({'success':false, 'err':err});
                     }
              else{
                 res.send({'success':true});
                  }       
                                                 });
        
                      }   
    else{
       User.findByIdAndUpdate(json, function(err){
          if(err){
            res.send({'success':false, 'err':err});
                 }
          else{
            res.send({'success':true});
              }
                                    });
        }
                                          });       
                                        };


exports.userJSON = function(){
     User.findById(req.params.name,function(err, obj){
                  res.send(obj);
                 });

              
                             };










