var express = require('express');
var path = require('path');
var app = express();
var port = 3000;

app.use(express.static(path.join(__dirname, '/ES6_Module_&_Classes/')));
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname,'ES6_Module_&_Classes/index.html'));
});

app.listen(port, function () {
  console.log('listening on port 3000');
});