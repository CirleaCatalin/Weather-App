export default function render(weather, cont){
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

    prevision.setAttribute("class", "prevision");
    city.setAttribute("id", "city-name");
    box.setAttribute("class", "box");
    currentIcon.setAttribute("id", "main-icon");
    temp.setAttribute("id", "city-C");
    minMaxTemp.setAttribute("class", "min-max-temp");
    minTemp.setAttribute("class", "temp-min");
    maxTemp.setAttribute("class", "temp-max");
    condition.setAttribute("id", "condition");

    city.textContent = weather[cont].city;
    temp.textContent = weather[cont].temp;
    minTemp.textContent = weather[cont].minTemp;
    maxTemp.textContent = weather[cont].maxTemp;
    currentIcon.src = weather[cont].icon;
    condition.textContent = weather[cont].condition;
    minMaxTemp.appendChild(minTemp);
    minMaxTemp.appendChild(maxTemp);

    box.appendChild(currentIcon);
    box.appendChild(temp);
    box.appendChild(minMaxTemp);
    box.appendChild(line);
    box.appendChild(condition);

    prevision.appendChild(city);
    prevision.appendChild(box);

    console.log(prevision);

    return prevision;
}
