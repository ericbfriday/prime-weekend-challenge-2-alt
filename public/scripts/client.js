$(document).ready(onReady);

function onReady() {
    console.log('JQ & JS ready!');
    $("#submitButton").on('click', personMaker);

  }

var people = [];

function personMaker() {
    var aPerson = {name: $('#name').val(), facts: $('#facts').val()};
    people.push(aPerson);
    console.log($('#name').val() + ' pushed into array "people"');
    
}