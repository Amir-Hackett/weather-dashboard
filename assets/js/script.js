var cityFormEl = document.querySelector("#city-search-form")
var weatherContainer = document.querySelector("#current-weather-container")

function cityFetch(){
   var apiCity = "https://api.openweathermap.org/data/2.5/weather?q=orlando&appid=b82992c00ffe5866266f560867525932"
   fetch(apiCity)
   .then(function(response){
       if(response.ok){
           response.json().then(function(data){
            var lat = data.coord.lat
            var lon = data.coord.lon   
            displayCity(lat, lon)
           })
       }
   })
}

function displayCity(lat, lon){
    var apiLatLong = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude={part}&appid=b82992c00ffe5866266f560867525932"
        fetch(apiLatLong)
        .then(function(response){
            //console.log(response)
            if(response.ok){
                response.json().then(function(response){
                    for(var i = 0; i < response.daily.length -3; i++){
                        var dateCard = document.createElement("div")
                        dateCard.textContent = moment.unix(response.daily[i].dt).format("MM/DD/YYYY")
                        var condCard = document.createElement("img")
                        condCard.setAttribute("src", `https://openweathermap.org/img/w/${response.daily[i].weather[0].icon}.png`)
                        var tempCard = document.createElement("div")
                        tempCard.textContent 
                        var windCard = document.createElement("div")
                        windCard.textContent
                        var humidCard = document.createElement("div")
                        humidCard.textContent
                        var card = document.createElement("div")
                        card.setAttribute("class", "card")
                        card.append(dateCard, condCard, tempCard, windCard, humidCard)
                        weatherContainer.append(card)
                        console.log(response)
                    }
                })
            }
        })
    }


cityFetch()