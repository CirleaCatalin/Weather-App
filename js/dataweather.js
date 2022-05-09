import { getDays } from "./dayList.js";
import getMinMax from "./minmaxtemp.js";
import renderImage from "./imageforecast.js"

let temWidgets=[];
export function getData(weather, coord){
    var object={};
    object={
      city: null,
      lat: null,
      long: null,
      temp: null,
      minTemp: null, 
      maxTemp: null ,
      condition: null, 
      icon:null, 
      days: getDays(),
      icons: renderImage(weather),
      minmax: getMinMax(weather)
    }
    object.city = coord[0].name + " | " + coord[0].country;
    object.lat= coord[0].lat;
    object.long= coord[0].lon;
    object.temp=  Math.round(weather.daily[0].temp.day) + "°";
    object.minTemp= Math.round(weather.daily[0].temp.min) + "°";
    object.maxTemp= Math.round(weather.daily[0].temp.max) + "°";
    object.condition= weather.daily[0].weather[0].description;
    object.icon= "img/" + weather.daily[0].weather[0].icon + ".svg";
    // object.icons= renderImage(weather);
    temWidgets.push(object);
    return temWidgets;
  }