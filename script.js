// Banner slider

let slides = document.querySelectorAll(".slide");

let hero = document.getElementById("hero");


let images = [

"images/banner.jpg",

"images/banner2.jpg",

"images/banner3.jpg"

];


let current = 0;



if(slides.length > 0){


setInterval(()=>{


slides[current].classList.remove("active");


current++;


if(current >= slides.length){

current = 0;

}



slides[current].classList.add("active");



hero.style.backgroundImage =

"linear-gradient(rgba(0,91,115,.35),rgba(0,91,115,.35)),url('" 
+ images[current] + "')";



},5000);


}




// Mobile menu

function openMenu(){

let menu = document.getElementById("menu");

menu.classList.toggle("show");

}
