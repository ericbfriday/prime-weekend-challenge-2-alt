var bodyParser = require('body-parser');
var express = require('express');
var router = express.Router();

var people = [];

router.use(bodyParser.urlencoded({extended: true}));

// create if loop to run adding function vs removing function based on person.purpose
// this should be inside of post function, as both POST functions send same basic request type
// if add, then people.push purpose
// if remove, then run remove function. 

router.post('/', function(req, res) {
    var person = {
        name: req.body.name,
        facts: req.body.facts,
        idnumber: req.body.idnumber,
        purpose: req.body.purpose
    };

    // var personName = req.body.name;
    // var personFacts = req.body.facts;
    // var personID = req.body.idnumber;
    // var personPurpose = req.body.purpose;

    console.log('logging person in POST route hit: ', person);

    if (person.purpose == 'add') {
        people.push(person);
    }

    // else if (person.purpose == 'remove') {
    //     for (var i = 0; i <people.length; i++) {
    //         if (people[i].purpose == 'remove') {
    //             people.pop(people[i]);
    //         }
    //     }

        // people = people.filter(function(people) {
        //     return (el.idnumber != req.body.idnumber);
        // });
        // console.log(people);
        // res.send(people);
    // }

    else {
        console.log('Invalid Person Object handled inside person.js');
    }

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