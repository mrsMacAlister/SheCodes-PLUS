function showTime(time) {
  let currentHour = time.getHours();
  if (currentHour < 10) {
    currentHour = `0${currentHour}`;
  }
  let currentMinutes = time.getMinutes();
  if (currentMinutes < 10) {
    currentMinutes = `0${currentMinutes}`;
  }
  let currentTime = `${currentHour}:${currentMinutes}`;
  console.log(currentTime);

  return currentTime;
}

let timeElement = document.querySelector("#current-time");
let currentTime = new Date();
timeElement.innerHTML = showTime(currentTime);

function showDay(day) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let currentDay = days[day.getDay()];

  return currentDay;
}

let dayElement = document.querySelector("#current-day");
let currentDay = new Date();
dayElement.innerHTML = showDay(currentDay);

//Feature #2
function searchWeather(event) {
  //event.preventDefault();
  let citySearch = document.querySelector("#search-bar");
  citySearch = citySearch.value;
  console.log(citySearch);
  citySearch = citySearch.trim();

  let citySearchCapitalized =
    citySearch.charAt(0).toUpperCase() + citySearch.slice(1);
  let cityName = document.querySelector("#h2-city");
  cityName.innerHTML = citySearchCapitalized;
  //citySearch.innerHTML = cityName; <-- HOW?
  /*if (citySearch.value) {
    cityName.innerHTML = citySearchCapitalized;
  } else {
    cityName.innerHTML = cityName;
  }*/

  //add axios(apiUrl).then(showTemp).then(showCelsius) <-- is it possible? THE showCelsius FUNCTION IS EXECUTED UPON CLICK! DIFFERENT
  //API code below - wk5
  let units = "metric";
  let apiKey = "4c09ae07987b07a4993b3f7e761af71d";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${citySearchCapitalized}&appid=${apiKey}&units=${units}`;

  //let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Sydney&appid=4c09ae07987b07a4993b3f7e761af71d&units=metric`;

  axios.get(apiUrl).then(showTemp);

  let timeElement = document.querySelector("#current-time");
  let currentTime = new Date();
  timeElement.innerHTML = showTime(currentTime);
  let dayElement = document.querySelector("#current-day");
  let currentDay = new Date();
  dayElement.innerHTML = showDay(currentDay);
}

let searchEngine = document.querySelector("#search-form");
searchEngine.addEventListener("submit", searchWeather);

//this function works - don't touch, lolz
function showTemp(response) {
  console.log(response.data.main.temp);
  let temperature = Math.round(response.data.main.temp);
  console.log(temperature);
  let currentTemp = document.querySelector("#big-degrees");
  currentTemp.innerHTML = `${temperature}`;
  /*let cityName = response.data.name;
  console.log(cityName);*/
}

function clickFahrenheits() {
  //Matt's solution edited
  //event.preventDefault();
  /*let bigDegrees = document.querySelector("#big-degrees");
  let degrees = bigDegrees.innerHTML;
  degrees = Number(degrees); //'string' to NUMBER conversion
  bigDegrees.innerHTML = Math.round((degrees * 9) / 5 + 32); //formula celsius to fahrenheit + rounding up the number
*/
  //WK5: HW
  let cityName = document.querySelector("#h2-city");
  console.log(cityName);
  let city = cityName.innerHTML; // Necessary to get the "value" out!!
  console.log(city);
  let units = "imperial";
  let apiKey = "4c09ae07987b07a4993b3f7e761af71d";

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

  //let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Sydney&appid=4c09ae07987b07a4993b3f7e761af71d&units=metric`;

  axios.get(apiUrl).then(showFahrenheits);

  let timeElement = document.querySelector("#current-time");
  let currentTime = new Date();
  timeElement.innerHTML = showTime(currentTime);
  let dayElement = document.querySelector("#current-day");
  let currentDay = new Date();
  dayElement.innerHTML = showDay(currentDay);
}

function clickCelsius() {
  let cityName = document.querySelector("#h2-city");
  console.log(cityName);
  let city = cityName.innerHTML; // Necessary to get the "value" out!!
  console.log(city);
  let units = "metric";
  let apiKey = "4c09ae07987b07a4993b3f7e761af71d";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

  //let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Sydney&appid=4c09ae07987b07a4993b3f7e761af71d&units=metric`;

  axios.get(apiUrl).then(showTemp);

  let timeElement = document.querySelector("#current-time");
  let currentTime = new Date();
  timeElement.innerHTML = showTime(currentTime);
  let dayElement = document.querySelector("#current-day");
  let currentDay = new Date();
  dayElement.innerHTML = showDay(currentDay);
}
let degreesFahrenheit = document.querySelector("#fahrenheit");
degreesFahrenheit.addEventListener("click", clickFahrenheits);
let degreesCelsius = document.querySelector("#celsius");
degreesCelsius.addEventListener("click", clickCelsius);
let bigDegrees = document.querySelector("#big-degrees");

function showFahrenheits(response) {
  let bigFahrenheits = Math.round(response.data.main.temp);
  console.log(bigFahrenheits);
  let elementFahrenheits = document.querySelector("#big-degrees");
  elementFahrenheits.innerHTML = `${bigFahrenheits}`;
}
/*🙀 Bonus point:
Add a Current Location button. When clicking on it, 
it uses the Geolocation API to get your GPS coordinates 
and display and the city and current temperature using 
the OpenWeather API. */

/*function clickMyLocation() {
  console.log(`button doesn't work - wtf`);

  // navigator.geolocation.getCurrentPosition(showMyLocation);
}

let myLocationButton = document.querySelector("#my-locat");
myLocationButton = addEventListener("click", clickMyLocation);

function showMyLocation(retrieve) {
  let lati = retrieve.coords.latitude;
  console.log(lati);
  let longi = retrieve.coords.longitude;
  console.log(longi);

  let units = "metric";
  let apiKey = "4c09ae07987b07a4993b3f7e761af71d";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${longi}&appid=${apiKey}&units=${units}`;

  //let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Sydney&appid=4c09ae07987b07a4993b3f7e761af71d&units=metric`;

  axios.get(apiUrl).then(showTemp);

  let timeElement = document.querySelector("#current-time");
  let currentTime = new Date();
  timeElement.innerHTML = showTime(currentTime);
  let dayElement = document.querySelector("#current-day");
  let currentDay = new Date();
  dayElement.innerHTML = showDay(currentDay);
}
*/
//debugger;
/*function clickMyLocation() {
  let searchBar = document.querySelector("#search-bar");
  searchBar.value = "";
  let units = "metric";
  let apiKey = "4c09ae07987b07a4993b3f7e761af71d";

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(showMyLocation);

  // navigator.geolocation.getCurrentPosition(showMyLocation);
}

function showMyLocation(position) {
  let lat = position.coords.latitude;
  console.log(lat);
  let lon = position.coords.longitude;
  console.log(lon);
  let units = "metric";
  let apiKey = "4c09ae07987b07a4993b3f7e761af71d";

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(showMyLocationWeather);

  let timeElement = document.querySelector("#current-time");
  let currentTime = new Date();
  timeElement.innerHTML = showTime(currentTime);
  let dayElement = document.querySelector("#current-day");
  let currentDay = new Date();
  dayElement.innerHTML = showDay(currentDay);
}

function showMyLocationWeather(response) {
  let myLocation = response.data.name;
  console.log(myLocation);
  let myWeather = document.querySelector("#h2-city");
  myWeather.innerHTML = `${myLocation}`;
  let myTemperature = Math.round(response.data.main.temp);
  currentTemp = document.querySelector("#big-degrees");
  currentTemp.innerHTML = `${myTemperature}`;
}


navigator.geolocation.getCurrentPosition(showMyLocation);
*/
