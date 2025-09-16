const apiKey = "ac454cd2d1f5dd5d95e891d6100fbf67";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchButton = document.querySelector(".searchbtn")
const cityName = document.querySelector(".city")
const temperature = document.querySelector(".temp")
const humidityvalue = document.querySelector(".humidityv")
const wind = document.querySelector(".wind")
const weatherIcon = document.querySelector(".weather-icon")
const searchBox = document.querySelector(".input-field")
const errorMessage = document.querySelector(".error")
const results = document.querySelector(".results")
const feelsValue = document.querySelector(".feels")


async function checkweather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();
    
    if (!response.ok){
        errorMessage.style.display = "block";   
        results.style.display = "none";
    }
    else{
        cityName.innerHTML = data.name;
        temperature.innerHTML = Math.round(data.main.temp) + "°C";
        humidityvalue.innerHTML = data.main.humidity + "%";
        wind.innerHTML = data.wind.speed + "km/h";
        feelsValue.innerHTML = Math.round(data.main.feels_like);
        weatherIcon.src = "images/" + data.weather[0].main.toLowerCase() + ".png";
        errorMessage.style.display = "none";
        results.style.display = "block";
    }
}

searchButton.addEventListener("click", () =>{
    checkweather(searchBox.value)
});
   

