const weatherDescription = document.getElementById("weatherdescription");
const temperatureDescription = document.getElementById("weathertemp");
const weatherWind = document.getElementById("weatherwind");

// Coordinates for Newcastle City Centre (presumably)
const lat = 54.987207731081455;
const lon = -1.6191434467079253;



async function getCurrentWeather() {
    
   

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appId=${apiKey}`);
    const data = await response.json();
    weatherDescription.innerText = data.weather[0].description;
    temperatureDescription.innerText = data.main.temp;
    weatherWind.innerText = data.wind.speed;
};


const weatherAQI = document.getElementById("weatheraqi");
const weatherCO2 = document.getElementById("weatherco2");

async function getCurrentPolution() {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`);
    const data = await response.json();
    console.log(data);
    weatherAQI.innerText = data.list[0].main.aqi;
    weatherCO2.innerText = data.list[0].components.co;

};
document.addEventListener("DOMContentLoaded", () => {
    // code to run when page loads
    getCurrentWeather();
    getCurrentPolution();
});