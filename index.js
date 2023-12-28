const apiKey = "a58d3bdabb09957897dc2679521a528c";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&";

async function checkweather(city) {
  const res = await fetch(apiurl + `q=${city}` + `&appid=${apiKey}`);
  var data = await res.json();
  console.log(data);

  document.querySelector(".temp").innerHTML = `${Math.round(data.main.temp)}°c`;
  document.querySelector(".city").innerHTML = `${data.name}`;
  document.querySelector(
    ".humidity-percent"
  ).innerHTML = `${data.main.humidity}%`;
  document.querySelector(
    ".speed-percent"
  ).innerHTML = `${data.wind.speed} Km/h`;

  if (data.weather[0].main == "Clouds") {
    document.querySelector(".search-img").src = "images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    document.querySelector(".search-img").src = "images/clear.png";
  } else if (data.weather[0].main == "Drizzle") {
    document.querySelector(".search-img").src = "images/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    document.querySelector(".search-img").src = "images/mist.png";
  } else if (data.weather[0].main == "Snow") {
    document.querySelector(".search-img").src = "images/snow.png";
  } else if (data.weather[0].main == "Rain") {
    document.querySelector(".search-img").src = "images/rain.png";
  }
}

let search_btn = document.querySelector(".search-btn");
search_btn.addEventListener("click", function (city) {
  let input = document.querySelector(".search-input").value;
  checkweather(input);
});
