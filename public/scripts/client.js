$(document).ready(onReady);

var slideIndex = 1;
var personID = 0;

function onReady() {
    console.log('JQ & JS ready!');
    $("#submitButton").on('click', personMaker);
    // $("#submitButton").on('click', personGetter);
    personGetter();
} // end onReady()

function carouselContentsUpdate(peopleArray) {
        // updating carousel contents
        $('#carouselPlacement').empty();
        for (var i = 0; i < peopleArray.length; i++) {
            $('#carouselPlacement').append('<span class="carouselCurrent" data-carouselPerson="'
            + (i + 1)
            +'">' 
            + peopleArray[i].name 
            + ': ' 
            + peopleArray[i].facts 
            + '</span>');
        } // end updating carousel contents
}

// vvv currently not working vvv
function deletePerson() {
    console.log('Deleting Person');
    console.log($(this).closest('div').data('name'));
    console.log($(this).closest('div').data('facts'));
    console.log($(this).closest('div').data('uniqueid'));
    // set var to equal clicked button's data valuenp
    var aPerson = {
        name: $(this).closest('div').data('name'),
        facts: $(this).closest('div').data('facts'),
        idNumber: $(this).closest('div').data('uniqueid'),
        purpose: 'remove'
    };

    console.log('logging aPerson within delete person before posting to /person', aPerson);

    $.ajax({
        type: 'POST',
        url: '/person',
        data: aPerson,
        success: function (serverResp) {
            peopleAppender(serverResp);
        }
    });
    console.log('running personGetter');
    personGetter();
}

function peopleAppender(peopleArray) {
    // begin regular mode peopleAppender Function
    $('#nameList').empty();
    for (i = 0; i < peopleArray.length; i++) {
        $('#nameList').append('<div class="regularList" data-name="'
        + peopleArray[i].name 
        + '" data-facts="'
        + peopleArray[i].facts        
        +'" data-uniqueid="person' 
        + peopleArray[i].idNumber
        +'">' 
        + peopleArray[i].name 
        + ': ' 
        + peopleArray[i].facts 
        + '<button class="deleteButton btn btn-danger" style="float:right">Delete</button></div>');
    } // end regular mode peopleAppender Function

    carouselContentsUpdate(peopleArray);
    $(".deleteButton").on('click', deletePerson);
    plusDivs(+1); // I use this to begin displaying carousel upon first added element to array,
                  // however it moves contents +1 position upon appending list
} // end peopleAppender()

function personGetter() {
    $.ajax({
        type: 'GET',
        url: '/person',
        success: function (serverResp) {
            console.log('client.js /person personGetter is logging serverResp ', serverResp);
            peopleAppender(serverResp);
        }
    });
} // end peopleGetter()

function personMaker() {
    personID+= 1;
    var aPerson = {
        name: $('#name').val(),
        facts: $('#facts').val(),
        idNumber: personID,
        purpose: 'add'
    };

    console.log('logging personID in personMaker: ' + personID);
    
    $.ajax({
        type: 'POST',
        url: '/person',
        data: aPerson,
        success: function (serverResp) {
            peopleAppender(serverResp);
        }
    });
    // resetting value fields
    $('#name').val("");
    $('#facts').val("");
    personGetter();
} // end personMaker()

function plusDivs(n) {
    showDivs(slideIndex += n);
} // end plusDivs()

// Using w3school method to hide all elements, and then show current element using slideIndex and the display property
function showDivs(n) {
    var x = document.getElementsByClassName("carouselCurrent");
    $('#totalPeople').html(x.length);
    if (n > x.length) {slideIndex = 1;} 
    if (n < 1) {slideIndex = x.length;}
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    $('#currentPerson').html('<span id="currentPerson">' + slideIndex + '</span>' );
    x[slideIndex-1].style.display = "block"; 
} // end showDivs()
