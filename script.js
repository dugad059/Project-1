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


// Event Listeners
$(document).ready(function() {
$('.select').on('change', function () {
    const value = $(this).val();
    console.log(value)

})
})

// Functions 

$.ajax(settings).then(function (response) {
    console.log(response);
    let html = '';
    response.forEach(element => {
        let card = `<div class="card">
                    <div class="card-body">
                    <h5 class="card-title">Exercise</h5>
                    <p id="name"> Exercise Name: ${element.name}</p>
                    <p id="bodyPart">Body Part: ${element.target}</p>
                    <p id="equipment">Equipment: ${element.equipment}</p>
                    </div>
                  </div>`  

    html = html.concat(card);

    $(main).empty().append(html);

   
        
    });
})












