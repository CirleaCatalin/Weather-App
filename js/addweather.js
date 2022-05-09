import newWidget from "./addWidget.js";
import { getData } from "./dataweather.js";
import handleError from "./handleErrors.js";
import { hideInput, showInput } from "./getInputData.js";
const API_Key = "0067700871cbf561cafaad8074cdc569";

export async function getWeather(city) {
    try {
      hideInput();
      const request1 = await fetch(
        "https://api.openweathermap.org/geo/1.0/direct?q=" +
          city +
          "&appid=" +
          API_Key,
        { mode: "cors" }
      );

      const coord = await request1.json();
      if (coord === undefined || coord.length == 0) {
        showInput();
        handleError()
        return;
      }

      var long = coord[0].lon;
      var lat = coord[0].lat;
  
      const request2 = await fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" +
          lat +
          "&lon=" +
          long +
          "&exclude=minutely,hourly" +
          "&appid=" +
          API_Key +
          "&units=metric",
          { mode: "cors" }
          );
  
      const weather = await request2.json();
      // console.log(weather);
      if(weather === undefined || weather.length == 0){
        showInput();
        console.log("No weather"); //error function
        return;
      }
      var dataWidget = getData(weather, coord); // asigneaza unui array toate datele primite de la api care ne intereseaza
      console.log(dataWidget);

      newWidget(dataWidget);
      showInput();
    }
    catch(e){
      console.error(e)
    }
  }