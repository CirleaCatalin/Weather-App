export default function getMinMax(data){
  var min_Max = [];
   for(let i=1; i<=5;i++){
    let min = Math.round(data.daily[i].temp.min) + "°";
    let max = Math.round(data.daily[i].temp.max) + "°";
    min_Max.push(min+"/"+max)
   }
  return min_Max;
}