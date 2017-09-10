var bodyParser = require('body-parser');
var express = require('express');
var router = express.Router();

var people = [];

router.use(bodyParser.urlencoded({extended: true}));

// personID = 0; // only needed for pro mode

// person function to run inside server
router.post('/', function(req, res) {
    // personID ++; // only needed for pro mode
    // console.log('inside person.js POST function');
    var person = {
        name: req.body.name,
        facts: req.body.facts,
        data: req.body.data
    };

    var personName = req.body.name;
    var personFacts = req.body.facts;
    var personID = req.body.data;

    console.log('logging person in POST route hit: ', person);

    people.push(person);
    // testing below -- The two below work
    // console.log('logging req.body.name ' + req.body.name);
    // console.log('logging req.body.facts ' + req.body.facts);
    console.log('logging people in POST route hit: ', people);
});

router.get('/', function(req, res) {
    // console.log('inside router.get"/" GET function');
    console.log('logging nothing in GET route hit: ');
    
    res.send(people);
});

module.exports = router;