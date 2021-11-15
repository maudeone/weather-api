var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var button = document.querySelector('.submit');
var humid = document.querySelector('.humid');


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&units=imperial&appid=a4a8df85cc92d665fd62f04e8946894c')
.then(response => response.json())
.then(data => {
  console.log(data);  
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];
  var humidValue = data['main']['humidity'];

  main.innerHTML = nameValue;
  desc.innerHTML = "Description - "+descValue;
  temp.innerHTML = "Temperature - "+tempValue+"℉";
  humid.innerHTML = "Humidity - "+humidValue+"%";
  input.value ="";

})

.catch(err => alert("Wrong city name!"));
})