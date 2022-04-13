const day = document.querySelector('.day');
const btnDay = document.querySelector('.btnDay');
const btnNight = document.querySelector('.btnNight');
function day2night(){
    day.setAttribute("class","night");
}
function night2day(){
    day.setAttribute("class","day");
}

btnDay.addEventListener("click", night2day);
btnNight.addEventListener("click", day2night);

