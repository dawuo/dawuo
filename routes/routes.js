var user = require('./user.js');
module.exports = function (app) {
        //basic
        app.get('/', function (req, res){
           res.sendfile('./views/index.html');
                                        });
        
        //mongo
        app.post('/user/add', user.useradd);                        
              
                                };
