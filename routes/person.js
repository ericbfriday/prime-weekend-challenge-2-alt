var express = require('express');
var app = express();
var path = require('path');


// GET method route
app.get('/person', function (req, res) {
    console.log('inside person.js GET route');
  });

  // POST method route
  app.post('/peopleDB', function (req, res) {
      console.log('inside the person.js POST route');
      
    res.send('POST request to the homepage');
  });