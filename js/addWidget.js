import { modalWidget } from "./modal.js";
import createContent from "./createContent.js";
import { getData } from "./dataweather.js";
import render from "./rendercontent.js";
const displayContent = document.querySelector('.content');
let widget = document.querySelectorAll('.widget');
var cont=0; //for id name of the widget 

export default function newWidget(weather){
    let newWidget = document.createElement('div');
    newWidget.setAttribute('class', 'widget');
    newWidget.setAttribute('id', "widget" + cont);
    
    let closeBtn = document.createElement('span');
    closeBtn.setAttribute('class', 'remove');
    closeBtn.setAttribute('id', 'remove' +cont);
    closeBtn.textContent = '✕';


    displayContent.appendChild(newWidget);
    newWidget.appendChild(closeBtn);

    const widgetCard = document.querySelector("#widget"+cont);
    const content = render(weather, cont);
    
    widgetCard.appendChild(content);
    console.log(widgetCard);

    //remove the cards
    var close = document.querySelectorAll("span");
    for(let i=0 ; i<close.length; i++){
        close[i].addEventListener('click', () =>{
            close[i].parentElement.remove();
        })
    }

    widget = document.querySelectorAll('.widget'); //preia toate widget-urile create si le adauga un event.
    getWidget(widget);
    cont=cont+1;
}

function getWidget(data){
    data.forEach( item => {
        if(item.classList.contains("trues") === false ){
            item.addEventListener('dblclick', showModal);
        }
        item.classList.add("trues");
        function showModal(){
            var idWidget = item.id;
            console.log("Ai apasat pe widget-ul cu id: " + idWidget);
            modalWidget(idWidget);
        }
    })
}