var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var path = require('path');
var port = 5000;
var person = require('./routes/person');
var router = express.Router();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/person', router);

// not sure if I need this --> apparently I do
app.get('/', function(req, res) {
    var indexPath = path.join(__dirname, './public/views/index.html');
    res.sendFile(indexPath);
});

// app.get('/person', function(req, res) {
    
// });

app.listen(port, function() {
    console.log('listening on ' + port);
});