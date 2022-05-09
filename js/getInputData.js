import handleError from "./handleErrors.js";
import { getWeather } from "./addweather.js";

const wrap = document.querySelector('.wrap');
const citySearch = document.querySelector('.searchTerm');
const search = document.querySelector(".search");
const but = document.querySelector(".addButton");

let er = document.createElement('div');
er.setAttribute("class", "error");

var letters = /^[A-Za-z]+$/;

citySearch.addEventListener("blur", () => {
    if(citySearch.value.length<3){
       errorLength();
    } else if(!citySearch.value.match(letters)){
       errorLetters();
    }
})

citySearch.addEventListener('input', () =>{
    citySearch.classList.remove("not-found");
    if(citySearch.value.length === 0){
        removeError();
    }
    if(citySearch.value.length>3){
        removeError();
     } 
     if(citySearch.value.length<3 && (citySearch.value.match(letters))){
        errorLength();
     } else if (citySearch.value.length<3 && (!citySearch.value.match(letters)) && (citySearch.value.length !== 0)){
        errorLetters();
     } else if(citySearch.value.length>3 && (!citySearch.value.match(letters))){
        errorLetters();
     }
});

export default function getInputName(){
    if(citySearch.value.length > 3 && citySearch.value.match(letters)) {
        const cityName = citySearch.value;
        citySearch.placeholder= "Add a city";
        citySearch.classList.remove("not-found");
        citySearch.style.color='black';
        citySearch.value="";
        getWeather(cityName);
    } else if(citySearch.value.length<4 || (!citySearch.value.match(letters))){
        citySearch.value="";
        handleError();
        errorLength();
    } 
}

export function hideInput(){
    const loading = document.createElement("img");
    loading.setAttribute("class", "loading-img");
    loading.src= "./img/loading.gif";
    citySearch.style.display = "none";
    but.style.display = "none";
    search.appendChild(loading);
}
export function showInput(){
    const imageLoading = document.querySelector(".loading-img")
    citySearch.style.display = "block";
    but.style.display="block";
    search.removeChild(imageLoading);
}

function errorLength(){
    search.classList.add("error");
    er.textContent="Please introduce more than 3 characters";
    wrap.appendChild(er);
}

function errorLetters(){
    search.classList.add("error");
    er.textContent="Please introduce only letters";
    wrap.appendChild(er);
}

function removeError(){
    er.textContent="";
}