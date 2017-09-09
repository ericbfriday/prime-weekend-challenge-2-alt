$(document).ready(onReady);

function onReady() {
    console.log('JQ & JS ready!');
    $("#submitButton").on('click', personMaker);
    $("#submitButton").on('click', personGetter);
    // peopleAppender(people);
} // end onReady()

// function routerTester() {
//     console.log('routerTester ACTIVATED!');
// }

function personMaker() {
    var aPerson = {
        name: $('#name').val(),
        facts: $('#facts').val()
    };
    $.ajax({
        type: 'POST',
        url: '/person',
        data: aPerson,
        success: function (serverResp) {
            // console.log('client.js /person is logging ' + serverResp);
            peopleAppender(serverResp);
        }
    });
    // resetting value fields
    $('#name').val("");
    $('#facts').val("");
} // end personMaker()

function personGetter() {
    $.ajax({
        type: 'GET',
        url: '/person',
        success: function (serverResp) {
            console.log('client.js /person is logging serverResp ', serverResp);
            peopleAppender(serverResp);
        }
    });
}

function peopleAppender(peopleArray) {
    $('#nameList').empty();
    for (i = 0; i < peopleArray.length; i++) {
        $('#nameList').append('<p>' + peopleArray[i].name + ': ' + peopleArray[i].facts);
    }
} // end peopleAppender()