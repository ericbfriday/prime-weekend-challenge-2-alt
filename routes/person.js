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
        facts: req.body.facts
    };
    var personName = req.body.name;
    var personFacts = req.body.facts;
    console.log('logging person ' + person);
    
    people.push(person);
    // testing below
    // console.log('logging req.body.name ' + req.body.name);
    // console.log('logging req.body.facts ' + req.body.facts);
    console.log('logging person ' + req.body.person);
    console.log('person.js is now logging people: ' + people);
});

router.get('/', function(req, res) {
    console.log('inside router.get"/" GET function');
    res.send(people);
});

module.exports = router;