// Banner slider

let slides=document.querySelectorAll(".slide");

let current=0;


if(slides.length>0){


setInterval(()=>{


slides[current].classList.remove("active");


current++;


if(current>=slides.length){

current=0;

}


slides[current].classList.add("active");


},5000);


}



// Mobile menu


function openMenu(){

let menu=document.getElementById("menu");


menu.classList.toggle("show");


}
