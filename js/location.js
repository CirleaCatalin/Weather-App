import enableCoord from "./currentloc.js";
import { getWeather } from "./addweather.js";

export function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showDefault);
        return true;
    } else {
       console.log("The Browser Does not Support Geolocation");
    }
  }

  function showPosition(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    enableCoord(lat, lon); //afisare weather card cu coordonatele de la browser
  }
  
  function showDefault(error) {
   getWeather("Dublin"); // daca nu se permite accesul la coordonatele gps default o sa fie london
   console.warn(error);
  }