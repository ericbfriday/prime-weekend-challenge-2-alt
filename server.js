var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var path = require('path');
var port = 5000;

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
    var indexPath = path.join(__dirname, './public/views/index.html');
    res.sendFile(indexPath);
});




app.listen(port, function() {
    console.log('listening on ' + port);
});