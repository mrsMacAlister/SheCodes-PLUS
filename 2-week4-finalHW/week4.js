/* CODE FROM WEEK 3 HOMEWORK
let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  moscow: {
    temp: -5,
    humidity: 20,
  },
}; */

//Matt's solution
/* let city = prompt("Enter a city?");
city = city.toLowerCase();
if (weather[city] !== undefined) {
  let temperature = weather[city].temp;
  let humidity = weather[city].humidity;
  let celsiusTemperature = Math.round(temperature);
  let fahrenheitTemperature = Math.round((temperature * 9) / 5 + 32);

  alert(
    `It is currently ${celsiusTemperature}°C (${fahrenheitTemperature}°F) in ${city} with a humidity of ${humidity}%`
  );
} else {
  alert(
    `Sorry we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
  );
} */

/*
WEEK 4 HOMEWORK:
Implement the 2 following features, plus the bonus feature if you can 💪:

⏰Feature #1
In your project, display the current date and time using JavaScript: Tuesday 16:00

🕵️‍♀️Feature #2
Add a search engine, when searching for a city (i.e. Paris),
display the city name on the page after the user submits
the form.

🙀Bonus Feature
Display a fake temperature (i.e 17) in Celsius and 
add a link to convert it to Fahrenheit. 
When clicking on it, it should convert the temperature
to Fahrenheit. When clicking on Celsius, it should
convert it back to Celsius.
*/

//ALWAYS PUT YOUR <SCRIPT> RIGHT BEFOR </BODY>!!!

//Feature #1

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

/*
#h2 - degrees
#celsius
#fahrenheit

#h2 - city <- DONE
#current - time <- DONE
#current - day <- DONE
*/

//Feature #2
function searchWeather(event) {
  event.preventDefault();
  let citySearch = document.querySelector("#search-bar");
  citySearch = citySearch.value;
  console.log(citySearch);
  citySearch = citySearch.trim();

  let citySearchCapitalized =
    citySearch.charAt(0).toUpperCase() + citySearch.slice(1);
  let cityName = document.querySelector("#h2-city");
  cityName.innerHTML = citySearchCapitalized;
  /*if (citySearch.value) {
    cityName.innerHTML = citySearchCapitalized;
  } else {
    cityName.innerHTML = cityName;
  }*/
}

let searchEngine = document.querySelector("#search-form");
searchEngine.addEventListener("submit", searchWeather);
/*
let searchButton = document.querySelector("#search-button");
searchButton.addEventListener("click", searchWeather);
//"SUBMIT" doesn't work?! - tried changing <button> to <input type="submit">, however, it still didn't work.
//becasue it has to be connected to the entire FORM
*/

//Bonus Feature
//Matt's solution!
/*function convertToFahrenheit(event) {
  event.preventDefault();
  let tenperatureElement = document.querySelector("#big-degrees");
  let temperature = temperatureElement.innerHTML;
  temperature = Number(temperature); //'string' to NUMBER conversion
  temperatureElement.innerHTML = Math.round((temperature * 9) / 5 + 32); //formula celsius to fahrenheit + rounding up the number
}
function convertToCelsius(event) {
  same as mine
}
*/

function showFahrenheits(event) {
  //Matt's solution edited
  event.preventDefault();
  let bigDegrees = document.querySelector("#big-degrees");
  let degrees = bigDegrees.innerHTML;
  degrees = Number(degrees); //'string' to NUMBER conversion
  bigDegrees.innerHTML = Math.round((degrees * 9) / 5 + 32); //formula celsius to fahrenheit + rounding up the number

  // my solution:
  //THIS: let bigDegrees = document.querySelector("#big-degrees");
  /*for some reason this piece of code doesn't work
  let smallDegreesSymbol = document.querySelectorAll(".small-degrees");
  smallDegreesSymbol.innerHTML = "F";*/
  //HOW do I make bigDegrees a number so I can add a fahrenheit formula to it?!
  //THIS: bigDegrees.innerHTML = bigDegrees.innerHTML * 2;
  //HOW do I make sure the fahrenheit temperature remains the same if it was already clicked/calculated before?!
}

function showCelsius() {
  let bigDegrees = document.querySelector("#big-degrees");
  bigDegrees.innerHTML = 17;
  //HOW do I annul the function showFahrenheits()??
}
let degreesFahrenheit = document.querySelector("#fahrenheit");
degreesFahrenheit.addEventListener("click", showFahrenheits);
let degreesCelsius = document.querySelector("#celsius");
degreesCelsius.addEventListener("click", showCelsius);
let bigDegrees = document.querySelector("#big-degrees");
