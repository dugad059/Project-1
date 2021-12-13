// Variables
const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://exercisedb.p.rapidapi.com/exercises",
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "exercisedb.p.rapidapi.com",
        "x-rapidapi-key": "d2d1a1c573msh70dec9a00978dd2p1d89c4jsn6b5434d2a868"
    }
};

// Element Refs
const $exerciseName = $('#name');
const $bodyPart = $('#target');
const $equipment = $('#equipment');
const $form = $('form');
const $input = $('input[type="text"]');

// Event Listeners
$form.on('sumbit', handleGetData);

// Functions 
function handleGetData(evt) {
    evt.preventDefault();
    const userInput = $input.val()

    $.ajax(settings + userInput).then(function (data) {
        console.log(data);
        $exerciseName.text(data[0].name);
        $bodyPart.text(data[0].target);
        $equipment.text(data[0].equipment)


    }, function (error) {
        console.log('Something went wrong')
        console.log(error);
    })
};