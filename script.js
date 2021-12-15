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
    $('.selectMuscle').on('change', function () {
        const valueMuscle = $('.selectMuscle').val();


        $(document).ready(function () {
            $('.selectEquip').on('change', function () {
                const valueEquip = $('.selectEquip').val();


                $.ajax(settings).then(function (data) {
                    console.log(data)

                    const filtered = data.filter(function (ddlSelector) {
                        return ddlSelector.target === valueMuscle && ddlSelector.equipment === valueEquip




                    })


                    let html = '';
                    filtered.forEach(function (element) {
                        let card =
                            `<div id="card" style="width: 18rem;">
                        <img src='${element.gifUrl}' id="cardImgHolder" alt= 'Oops ...'>
                        <div class="card-body">
                        <h3 id="name"> Exercise Name:</h3> 
                        <p>${element.name}</p>
                        <h4 id="bodyPart">Body Part:</h4> 
                        <p>${element.target}</p>
                        <h4 id="equipment">Equipment:</h4>
                        <p>${element.equipment}</p>
                        </div>
                      </div>`

                        html = html.concat(card);

                        $('main').empty().append(html);


                    });




                })
            })
        })
    })
})
















