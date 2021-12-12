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

$.ajax(settings).done(function (response) {
	console.log(response);
});