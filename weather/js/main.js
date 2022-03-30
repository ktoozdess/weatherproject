var button = document.querySelector('.btn-secondary');
var inputValue = document.querySelector('.form-control');
var cityName = document.querySelector('.name');
var description = document.querySelector('.desc');
var temp = document.querySelector('.temp');
var cloudy = document.querySelector('.cloudy');
var wind = document.querySelector('.wind');
var feels = document.querySelector('.feels-like');
var humidity = document.querySelector('.humidity');

button.addEventListener('click', function() {
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=5da9443f61d4ff0755b6d1860ea75d22')
   .then(response => response.json())
   .then(data => {
     var nameValue = data['name'];
     var tempValue = data['main']['temp'];
     var descValue = data['weather'][0]['description']
     var cloudyValue = data['clouds']['all']
     var windValue = data['wind']['speed']
     var feelsValue = data['main']['feels_like']
     var humidityValue = data['main']['humidity']
     console.log(data);
     cityName.innerHTML = nameValue;
     temp.innerHTML = Math.round(tempValue - 273) + '&deg';
     description.innerHTML = descValue;
     cloudy.innerHTML = 'Cloudy ' + cloudyValue + '%';
     wind.innerHTML = 'Wind ' + windValue + 'm/s';
     feels.innerHTML = 'Feels like ' + Math.round(feelsValue - 273) + '&deg';
     humidity.innerHTML = 'Humidity ' + humidityValue + '%';
   })




  .catch(err => alert('wrong city'));
})



