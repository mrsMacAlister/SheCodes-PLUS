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
};

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

/*let number = 22.9;
console.log(Math.round(number));*/
weather.paris.temp = Math.round(weather.paris.temp);
weather.tokyo.temp = Math.round(weather.tokyo.temp);
weather.lisbon.temp = Math.round(weather.lisbon.temp);
weather["san francisco"].temp = Math.round(weather["san francisco"].temp);

/*console.log(weather.paris.temp);
console.log(weather.tokyo.temp);
console.log(weather.lisbon.temp);
console.log(weather["san francisco"].temp);
console.log(weather.moscow.temp);*/

weather.paris.tempUS = weather.paris.temp * (9 / 5) + 32;
weather.tokyo.tempUS = weather.tokyo.temp * (9 / 5) + 32;
weather.lisbon.tempUS = weather.lisbon.temp * (9 / 5) + 32;
weather["san francisco"].tempUS = weather["san francisco"].temp * (9 / 5) + 32;
weather.moscow.tempUS = weather.moscow.temp * (9 / 5) + 32;

weather.paris.tempUS = Math.round(weather.paris.tempUS);
weather.tokyo.tempUS = Math.round(weather.tokyo.tempUS);
weather.lisbon.tempUS = Math.round(weather.lisbon.tempUS);
weather["san francisco"].tempUS = Math.round(weather["san francisco"].tempUS);
weather.moscow.tempUS = Math.round(weather.moscow.tempUS);

let city = prompt("Enter a city:");

city = city.trim();
city = city.toLowerCase();

city = city = city.replace("tokio", "tokyo");
city = city.replace("lisbona", "lisbon");
city = city.replace("lisboa", "lisbon");

if (city === "paris") {
  alert(
    `It is currently ${weather.paris.temp}°C (${weather.paris.tempUS}°F) in ${city} with a humidity of ${weather.paris.humidity}%.`
  );
} else if (city === "tokyo") {
  alert(
    `It is currently ${weather.tokyo.temp}°C (${weather.tokyo.tempUS}°F) in ${city} with a humidity of ${weather.tokyo.humidity}%.`
  );
} else if (city === "lisbon") {
  alert(
    `It is currently ${weather.lisbon.temp}°C (${weather.lisbon.tempUS}°F) in ${city} with a humidity of ${weather.lisbon.humidity}%.`
  );
} else if (city === "san francisco") {
  alert(
    `It is currently ${weather["san francisco"].temp}°C (${weather["san francisco"].tempUS}°F) in ${city} with a humidity of ${weather["san francisco"].humidity}%.`
  );
} else if (city === "moscow") {
  alert(
    `It is currently ${weather.moscow.temp}°C (${weather.moscow.tempUS}°F) in ${city} with a humidity of ${weather.moscow.humidity}%.`
  );
} else if (city === "") {
  alert(`Please enter a city`);
} else {
  alert(
    `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
  );
}

/*
weather.forEach(function (weatherTemp) {
  for (let prop in forecast) {
    alert(prop + ` is ` + forecast[prop]);
  }
});

for (let prop in weather) {
  Math.round(prop);
}
console.log(weather.lisbon.temp);
console.log(weather[1].temp);
console.log(weather[2].temp);
console.log(weather[3].temp);
console.log(weather[4].temp);



console.log(weather[1]); */
