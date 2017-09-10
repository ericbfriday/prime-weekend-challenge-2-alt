$(document).ready(onReady);

var slideIndex = 1;
var clickCount = 0;
var testingArray = [1,2,3,4,5,6,7,8];

function onReady() {
    console.log('JQ & JS ready!');
    $("#submitButton").on('click', personMaker);
    $("#submitButton").on('click', personGetter);
    personGetter();
} // end onReady()

// function carouselCounter(peopleArray) {
//     var length = parseInt(peopleArray.length);
//     console.log('Logging length in carouselCounter: ' + length);
//     var personPosition = (parseInt(peopleArray.indexOf(targetPerson + 1)));
//     console.log('Logging position in carouselCounter: ' + personPosition);
//     var targetPerson = person.data('id');//make this be return from logic;
//     console.log('Logging target in carouselCounter: ' + targetPerson);

//     for ( var i = 0; i < peopleArray.length; i++ ) {
//         if ( targetPerson == personPosition ) {
//             $("#currentPerson").html(personPositon);
//         }
//     } // end for loop

//     $("#totalPeople").html('' + length);
// } // end carouselCounter()

function carouselContentsUpdate(peopleArray) {
        // updating carousel contents
        $('#carouselPlacement').empty();
        for (var i = 0; i < peopleArray.length; i++) {
            $('#carouselPlacement').append('<div class="carouselCurrent">' 
            + peopleArray[i].name 
            + ': ' 
            + peopleArray[i].facts 
            + '</div>');
        } // end updating carousel contents
}

function carouselCounterUpdate(peopleArray) {
    // updating carousel nav buttons
    $('#carouselCounter').empty();
    for (var i = 0; i < peopleArray.length; i++) {
        $('#carouselCounter').append('<button class="carouselIndexButton"'// onclick="currentDiv(' 
        + (i + 1) 
        + ')" style= "display: inline">' 
        + (i + 1) 
        + '</button>'); 
    // end updating carousel nav buttons
    } 
      // end carouselCounterUpdate()
}

function peopleAppender(peopleArray) {
    var buttonNumber = document.getElementsByClassName("carouselIndexButton");
    // begin regular mode peopleAppender Function
    $('#nameList').empty();
    for (i = 0; i < peopleArray.length; i++) {
        $('#nameList').append('<div class="regularList">' 
        + peopleArray[i].name 
        + ': ' 
        + peopleArray[i].facts);
    } // end regular mode peopleAppender Function

    carouselContentsUpdate(peopleArray);
    carouselCounterUpdate(peopleArray); // updates and appends carousel buttons
    showDivs(buttonNumber);
    plusDivs(+1); // use this to begin displaying carousel upon first added element to array,
                 // however it moves contents to +1 position upon appending list
} // end peopleAppender()

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

function personMaker() {
    clickCount++;
    var aPerson = {
        name: $('#name').val(),
        facts: $('#facts').val(),
        data: clickCount
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

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var x = document.getElementsByClassName("carouselCurrent");
    if (n > x.length) {slideIndex = 1;} 
    if (n < 1) {slideIndex = x.length;}
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    x[slideIndex-1].style.display = "block"; 
}
