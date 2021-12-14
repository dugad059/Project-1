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
$('.select').on('change', function () {
    const value = $(this).val();
    console.log(value)
  
})

// Functions 

$.ajax(settings).then(function (response) {
    const myArray = response
    console.log(myArray);
}), function searchTable( value, myArray) {
    let filterData = []

    for (let i=0; i<myArray.lenght; i++) {
        const muscleGroup = myArray[i].bodyPart

        if(name.includes(value)){
            filterData.push(data[i])

        }
    }

    console.log(filterData)
}









