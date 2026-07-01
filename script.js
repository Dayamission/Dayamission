let slides=document.querySelectorAll(".slide");

let current=0;


setInterval(()=>{


slides[current].classList.remove("active");


current++;


if(current>=slides.length){

current=0;

}


slides[current].classList.add("active");


},5000);





function openMenu(){

document.getElementById("menu")
.classList.toggle("show");

}
