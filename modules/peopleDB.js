var express = require('express');
var app = express();
var path = require('path');
var people = [];

app.get('/person', function(req, res){
    console.log(req.body.name);
    console.log(req.body.facts);
    res.send(people);
});

