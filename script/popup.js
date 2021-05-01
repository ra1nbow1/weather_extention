
function getWeather(lat, lon, id){
    $.getJSON("https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"32&appid=1f27ec38b1c383c24597a795e2b27a3f&lang=ru&units=metric", function(obj){
        // console.log(obj)
        $('.city').text(obj["name"])
        $('.desc').text(titleCase(obj["weather"][0]["description"]))
        $('.icon').addClass("wi wi-owm-" + obj["weather"][0]["id"])
        $('.real').text(Math.round(obj["main"]["temp"])+ "°C")
        $('.feelslike').text("Ощущается как " + Math.round(obj["main"]["feels_like"])+ "°C")
        $('.humidity .val').text(obj["main"]["humidity"] + '%')
        $('.pressure .val').text(Math.round(obj["main"]["pressure"] * 0.75) + " рт.с.")
        $('.wind .val').text(obj["wind"]["speed"] + " м/с")
    
    });
}


function titleCase(str) {
     words = str.toLowerCase().split(' ');

     for(var i = 0; i < words.length; i++) {
          var letters = words[i].split('');
          letters[0] = letters[0].toUpperCase();
          words[i] = letters.join('');
     }
     return words.join(' ');
}

$(document).ready(function(){
    if(navigator.geolocation){
     navigator.geolocation.getCurrentPosition(function(position){
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
        getWeather(lat,lon,0);
    });
     };
})