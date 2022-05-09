import { getLocation } from './js/location.js';
import createContent from "./js/createContent.js"
// import {getWeather} from './js/addweather.js';
import getInputName from './js/getInputData.js';

const addWidget = document.querySelector(".addButton");

getLocation();

addWidget.addEventListener('click', getInputName);



