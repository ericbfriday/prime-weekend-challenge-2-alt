$(document).ready(onReady);

function onReady() {
    console.log('JQ & JS ready!');
    $("#submitButton").on('click', personMaker);
    peopleAppender(people);
}


var people = []; // just using this for front end testing purposes

function personMaker() {
    var aPerson = {name: $('#name').val(), facts: $('#facts').val()};
    people.push(aPerson); // just using this for front end testing purposes
    console.log($('#name').val() + ' pushed into array "people"'); // just using this for front end testing purposes
    $.ajax({
        type: 'POST',
        url: '/person',
        data: aPerson, // data hold value we want to send
        success: function(serverResp) {
            console.log(serverResp);
        }
    });
    peopleAppender(people);
}

function peopleAppender(peopleArray) {
    $('#nameList').empty();
    for (i=0; i < peopleArray.length; i++) {
        $('#nameList').append('<p>' + peopleArray[i].name + ': ' + peopleArray[i].facts);
    }
}