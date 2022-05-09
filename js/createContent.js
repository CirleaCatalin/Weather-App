// import { getWeather } from "./addweather.js"
const widget = document.createElement("div")
const prevision = document.createElement("div");
const city = document.createElement("h3");
const box = document.createElement("div");
const currentIcon = document.createElement("img");
const temp = document.createElement("h1");
const minMaxTemp = document.createElement("div");
const minTemp = document.createElement("h2");
const maxTemp = document.createElement("h2");
const line = document.createElement("hr");
const condition = document.createElement("p");

// widget.setAttribute("class", "widget");
// widget.setAttribute("id", "widget0");
prevision.setAttribute("class", "prevision");
city.setAttribute("id", "city-name");
box.setAttribute("class", "box");
currentIcon.setAttribute("id", "main-icon");
currentIcon.src = "img/01d.svg";
temp.setAttribute("id", "city-C");
minMaxTemp.setAttribute("class", "min-max-temp");
minTemp.setAttribute("class", "temp-min");
minTemp.textContent="6°"
maxTemp.setAttribute("class", "temp-max");
maxTemp.textContent="23°"
condition.setAttribute("id", "condition");
// condition.textContent="Scattered Thundershowers";

export default function createContent(weather, coord){
    city.textContent = coord[0].name + " | " + coord[0].country;
    temp.textContent = Math.round(weather.daily[0].temp.day) + "°";
    minTemp.textContent = Math.round(weather.daily[0].temp.min) + "°";
    maxTemp.textContent = Math.round(weather.daily[0].temp.max) + "°";
    currentIcon.src = "img/" + weather.daily[0].weather[0].icon + ".svg";
    condition.textContent = weather.daily[0].weather[0].description;
    console.log(weather);
    minMaxTemp.appendChild(minTemp);
    minMaxTemp.appendChild(maxTemp);

    box.appendChild(currentIcon);
    box.appendChild(temp);
    box.appendChild(minMaxTemp);
    box.appendChild(line);
    box.appendChild(condition);

    prevision.appendChild(city);
    prevision.appendChild(box);

    return prevision;
}
