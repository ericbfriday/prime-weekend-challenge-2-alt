$(document).ready(onReady);

var slideIndex = 1;

function onReady() {
    console.log('JQ & JS ready!');
    $("#submitButton").on('click', personMaker);
    $("#submitButton").on('click', personGetter);
    personGetter();
} // end onReady()

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
    // begin regular mode peopleAppender Function
    $('#nameList').empty();
    for (i = 0; i < peopleArray.length; i++) {
        $('#nameList').append('<div class="regularList">' + peopleArray[i].name + ': ' + peopleArray[i].facts);
    } // end regular mode peopleAppender Function

    // updating carousel
    $('#carouselPlacement').empty();
    for (var i = 0; i < peopleArray.length; i++) {
        $('#carouselPlacement').append('<div class="carouselCurrent">' 
        + peopleArray[i].name 
        + ': ' 
        + peopleArray[i].facts 
        + '</div>');
    } // end updating carousel
    plusDivs(+1); // use this to begin carousel upon first added element to array
} // end peopleAppender()

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
