export function getDays(){

    var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const d = new Date();
    let day = d.getDay(); //returns a number between 0-6
    for(let i=0;i<day;i++){
    let first = days.shift();
    days.push(first);
    }
    days.pop(days.length);  // remove the last day because we show the forecst for 6 days
    
    let n = 1; // se afiseaza de la al doilea element pentru a avea previziunea pe 5 zile (primul el e data curenta)//adaugare zile in pagina
    return days;

  }