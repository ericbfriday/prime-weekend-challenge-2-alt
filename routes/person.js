var bodyParser = require('body-parser');
var express = require('express');
var router = express.Router();

var people = [];

router.use(bodyParser.urlencoded({extended: true}));

router.post('/', function(req, res) {
    var person = {
        name: req.body.name,
        facts: req.body.facts,
        idNumber: req.body.idNumber,
        purpose: req.body.purpose
    };
    // console.log('logging person in POST route hit - this is before if/else if: ', person);
    if (person.purpose == 'add') {
        people.push(person);
    } // end if 'add'
    else if (person.purpose == 'remove') {
        var deleteThem = req.body.idNumber;
        for (var i = 0 ; i < people.length ; i++ ){
            // console.log('logging people[i].idNumber ' + 'person' + people[i].idNumber);
            // console.log('logging deleteThem ' + deleteThem);
            if (('person' + people[i].idNumber) == deleteThem ){

                people.splice(i, 1);
                return;
            }
            else {
                console.log('no match found for deletion');
                
            }
        }
    } // end else if for remove
    else {
        console.log('Invalid Person Object handled inside person.js');
    } // end else for not found
    console.log('logging people in POST route hit: ', people);
    res.sendStatus(201);
});

router.get('/', function(req, res) {
    // console.log('inside router.get"/" GET function');
    console.log('logging nothing in GET route hit: sending people');
    
    res.send(people);
});

module.exports = router;