function meteo() {
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Toulouse,fr&appid=b02f05d16caf34de5fadc0767bce8e0b&units=metric",

        function (data) {
            var weather = data.weather[0].description;
            var temp = data.main.temp;
            // console.log(weather);
            console.log(temp);
            console.log(weather);

            // console.log(data);

            $('#meteo').html("le ciel est " + weather + "   la température est de " + temp + " degrés");


        });

}

function longlat() {
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Saint-gaudens,fr&appid=b02f05d16caf34de5fadc0767bce8e0b&units=metric",

        function (coordonnees) {
            var lon = coordonnees.coord.lon;
            var lat = coordonnees.coord.lat;
            console.log(coordonnees.coord.lat);
            console.log(coordonnees.coord.lon);

            $("#longlat").html("longitude" + lon + "latitude" + lat);

        });
}

function roadTrip() {
   $.getJSON("https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=Toulouse,FR&destinations=Saint-Gaudens,FR&key=%20AIzaSyBO_UwtytTUiPuEYFn9drokMf3X6FfLhLM",

        function (route) {
            var distance = route.rows[0].elements[0].distance.text;
            var duree = route.rows[0].elements[0].distance.duration.textoute.formattedTime;
            console.log(route.rows[0].elements[0].distance.text);
            console.log(route.rows[0].elements[0].distance.duration.text);
        });
}


//CLE API METEO TOULOUSE b02f05d16caf34de5fadc0767bce8e0b

//http:api.openweathermap.org/data/2.5/weather?q=Toulouse,fr&appid=b02f05d16caf34de5fadc0767bce8e0b&units=metric


//https://www.mapquestapi.com/directions/v2/route?E6gUrzGzMYldhexJ0GCm1bfTnUXGEG65&from=Toulouse%2CFR&to=Saint-gaudens%2CFR&outFormat=json&ambiguities=ignore&routeType=fastest&doReverseGeocode=false&enhancedNarrative=false&avoidTimedConditions=false
 	//E6gUrzGzMYldhexJ0GCm1bfTnUXGEG65

//https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=Toulouse,FR&destinations=Saint-Gaudens,FR&key= AIzaSyBO_UwtytTUiPuEYFn9drokMf3X6FfLhLM
