var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var path = require('path');
var port = 5000;
var person = require('./routes/person');
var router = express.Router();

var people = [];

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/person', router);

// not sure if I need this --> apparently I do
app.get('/', function(req, res) {
    var indexPath = path.join(__dirname, './public/views/index.html');
    res.sendFile(indexPath);
});

app.post('/peopleMover', function(req, res) {
    console.log('inside server.js /peopleMover node');
    // console.log(req.body);
    people.push(req.body);
    console.log('server.js peopleMover is logging ' + people);
    // individual = person(req.body);
    // peopleArray = {data: people};
    res.send(people);
    // res.sendStatus(200);
});

app.get('/peopleReturner', function(){
    res.send(people);
});

app.listen(port, function() {
    console.log('listening on ' + port);
});