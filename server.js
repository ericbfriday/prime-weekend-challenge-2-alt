var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var path = require('path');
var port = 5000;
var personRouter = require('./routes/person');

app.use(express.static('public'));
app.use('/person', personRouter);
app.use(bodyParser.urlencoded({extended: true}));

// index serving function
app.get('/', function(req, res) {
    var indexPath = path.join(__dirname, './public/views/index.html');
    res.sendFile(indexPath);
});

app.listen(port, function() {
    console.log('listening on ' + port);
});
