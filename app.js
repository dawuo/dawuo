const express = require('express')
const app = express()

app.listen(7125)

app.get('/index', function(req, res){

  res.sendfile('index.html')
})

