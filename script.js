// Variables
const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://exercisedb.p.rapidapi.com/exercises",
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "exercisedb.p.rapidapi.com",
        "x-rapidapi-key": "561fa1cdadmsh061526f3ccafe2cp1f6fafjsn0cac3358fd80"
    }
};






$(document).ready(function () {
    $('.select').on('change', function () {
        const value = $('.select').val();
        console.log(value)

        $.ajax(settings).then(function (data) {
            console.log(data)

            const filtered = data.filter(function(ddlSelector){
                    return ddlSelector.target === value
            } )
                console.log(filtered)

            let html = '';
            filtered.forEach(element => {
                let card = `<div class="card">
                        <div class="card-body">
                        <h5 class="card-title">Exercise</h5>
                        <p id="name"> Exercise Name: ${element.name}</p>
                        <p id="bodyPart">Body Part: ${element.target}</p>
                        <p id="equipment">Equipment: ${element.equipment}</p>
                        </div>
                      </div>`

                html = html.concat(card);

                $('main').empty().append(html);



            });


        })
    })
})
















