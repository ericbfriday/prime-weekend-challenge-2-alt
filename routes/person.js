var express = require('express');
var app = express();
var path = require('path');
var router = express.Router();

// GET method route
app.get('/person', function (req, res) {
    console.log('inside the person.js GET route');
    console.log(req.body.data);
  });

//   // POST method route
//   app.post('/peopleDB', function (req, res) {
//       console.log('inside the person.js POST route');
      
//     res.send('POST request to the homepage');
//   });