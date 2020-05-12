const API_KEY = "get API key from secret.key";
const city = document.querySelector(".location");
const senddetails = document.querySelector(".weather-details");
const cityname = document.querySelector(".city-name");
const temparature = document.querySelector(".temp");
const winddetails = document.querySelector(".wind");
const description = document.querySelector(".description");

async function getWeatherDetails(city) {
  try {
    const results = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`,
      { mode: "cors" }
    );
    const data = await results.json();
    console.log(data);
    render(data);
  } catch (err) {
    console.log(`error: ${err.message}`);
  }
}

console.log("hello");
function getDetails() {
  if (city.value !== "") {
    getWeatherDetails(city.value);
  } else {
    alert("enter a valid city name..");
  }
}

function render(data) {
  const { main, weather, wind, name } = data;
  console.log(main);
  console.log(weather);
  console.log(wind);

  cityname.innerHTML = `${name}`;
  temparature.innerHTML = `Temparature :- ${main.temp} Celsius`;
  winddetails.innerHTML = `Wind :- ${wind.speed} m/s`;
  description.innerHTML = `${weather[0].description}`;
  senddetails.style.display = "block";
}

//getWeatherDetails(prompt("enter the location"));
