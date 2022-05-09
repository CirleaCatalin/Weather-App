export default function renderImage(data){
    var icons = [];
    for(let i=1;i<=5;i++){
        let sourceImg = "img/" + data.daily[i].weather[0].icon + ".svg";
        icons.push(sourceImg);
    }
    return icons;
  }