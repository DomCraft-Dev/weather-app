
const base_Url = "https://api.openweathermap.org/data/2.5/weather";
let inputText = document.getElementById("inputText");
let btnSearch = document.getElementById("btnSearch");
let result = document.getElementById("result");
let DataCity ="";

import { API_KEY } from "./config.js";
//api
async function getWeather(city){
let url = `${base_Url}?q=${city}&appid=${API_KEY}&units=metric`;
let res = await fetch(url);
let data = await res.json();

const { name, main, weather, wind } = data;

const html = `
    <h2>${name}</h2>
    <p>🌡️ ${main.temp}°C</p>
    <p>☁️ ${weather[0].description}</p>
    <p>💧 ${main.humidity}%</p>
    <p>💨 ${wind.speed} m/s</p>
  `;
  result.innerHTML = html;
}

//render
btnSearch.addEventListener("click",function(){
    DataCity = inputText.value;
    getWeather(DataCity);

});
inputText.addEventListener("keydown", (e)=>{
    if (e.key === "Enter"){
        DataCity = inputText.value;
        getWeather(DataCity);
    }
});
