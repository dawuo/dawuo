const express = require('express');
var bodyParser = require('body-parser');
var http = require('http');
var path = require('path');
const app = express();
require('./models/db.js');


app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes/routes')(app);
app.listen(7125);



