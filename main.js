
const key = '9c43b160ab6658aead003013960db21f', units = 'metric';
// let checkWeather = document.getElementById('search');


$(document).ready(function() {

  
  function fetchWeather (city) {
    

    fetch('http://api.openweathermap.org/data/2.5/weather?q='+ city +'&APPID' + '='+key +'&units' + '='+ units)
      .then((resp) => resp.json())
      .then(function(data) {
        console.log(data);
        // data = JSON.stringify(data);
        console.log(JSON.stringify(data));
        // collect required weather information
        let weather = data.weather[0].main;
        let weatherDescription = data.weather[0].description;    
        let humidity = data.main.humidity;    
        let windSpeed = data.wind.speed;
        let temperature = data.main.temp;

        // let humidity = data.main.humidity;

        //declare two paragraph element for weather and weatherDescription
        
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        
        let p1Content = document.createTextNode(weather);
        let p2Content = document.createTextNode(weatherDescription);
        

        p1.appendChild(p1Content);
        p2.appendChild(p2Content);
        
        let weatherOutput = document.getElementById('weather-h');       
        
        weatherOutput.appendChild(p1);
        weatherOutput.appendChild(p2);
        

        //temperature data
        let tempOutput = document.getElementById('temperature-h');
        let tempValue = document.createElement('p');
        tempValue.textContent = temperature + '°C';
        tempOutput.appendChild(tempValue);
        

        //humidity values
        let humidOutput = document.getElementById('humidity-h');
        let humidValue = document.createElement('p');
        humidValue.textContent = humidity;
        humidOutput.appendChild(humidValue);

        //wind values
        let windOutput = document.getElementById('wind-h');
        let windValue = document.createElement('p');
        windValue.textContent = windSpeed;
        windOutput.appendChild(windValue);
        
      })
    
      .catch(err => console.log(err));
  
  }

  $('#search').on('click', function (e) {
    e.preventDefault();
    let place = $('.search').val();
    if (place) {      
      fetchWeather(place);
    }
  })


});
 


