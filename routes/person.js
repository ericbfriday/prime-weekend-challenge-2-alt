var bodyParser = require('body-parser');
var express = require('express');
var router = express.Router();

var people = [];

router.use(bodyParser.urlencoded({extended: true}));

// idea 1:
// create if loop to run adding function vs removing function based on person.purpose
// this should be inside of post function, as both POST functions send same basic request type
// if add, then people.push purpose
// if remove, then run remove function. 

router.post('/', function(req, res) {
    var person = {
        name: req.body.name,
        facts: req.body.facts,
        idNumber: req.body.idNumber,
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

    else if (person.purpose == 'remove') {

        console.log('logging person in remove function ', person);
        
        people.splice( people.indexOf(person.idNumber));

        for (var i = 0; i <people.length; i++) {
            if (person.idNumber == people[i].idNumber) {
                people.splice(i,1);
                console.log('spliced person');
            }
        }
    }

    else {
        console.log('Invalid Person Object handled inside person.js');
    }

    //     people = people.filter(function(people) {
    //         return (people.idNumber != req.body.idNumber);
    //     });
    //     console.log(people);
    //     res.send(people);


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