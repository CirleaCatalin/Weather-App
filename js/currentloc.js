const API_Key = "0067700871cbf561cafaad8074cdc569";
import newWidget from "./addWidget.js";
import createContent from "./createContent.js";
import { getData } from "./dataweather.js";
import { hideInput, showInput } from "./getInputData.js";

export default async function enableCoord(lat, lon){
    hideInput();
    const request1 = await fetch(
      "https://api.openweathermap.org/geo/1.0/reverse?lat=" +
        lat +
        "&lon="+
        lon+
        "&appid=" +
        API_Key,
      { mode: "cors" }
    );
    const coord = await request1.json();
    
    if (coord === undefined || coord.length == 0) {
      console.warn("The city entered is invalid. Try again.");   // insert the error function
      handleError();
      return;
    }
    const request2 = await fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" +
        lat +
        "&lon=" +
        lon +
        "&exclude=minutely,hourly" +
        "&appid=" +
        API_Key +
        "&units=metric",
        { mode: "cors" }
        );
    const weather = await request2.json();
    // console.log(weather);
    if(weather === undefined || weather.length == 0){
      console.log("No weather"); //error function
      return;
    }

    var dataWidget = getData(weather, coord); // asigneaza unui array toate datele primite de la api care ne intereseaza
    console.log(dataWidget);

    newWidget(dataWidget);
    showInput();
  }