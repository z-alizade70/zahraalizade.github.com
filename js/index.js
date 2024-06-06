var SLIDE=document.getElementsByClassName("slide");
const PREV=document.querySelector(".prev");
const NEXT=document.querySelector(".next");
const ICONS=document.getElementsByClassName(".dots");
const DISCOUNT_1=document.getElementsByClassName(".discount-1");
const DISCOUNT_2=document.getElementsByClassName(".discount_2");
var n=0;
var IMAGE=document.querySelectorAll(".slide img");
function displaynone(){
for (let i=0;i<SLIDE.length;i++){
SLIDE[i].style.display = `none`;
}
}
SLIDE[0].classList.remove("active");
function notactive(){
    for(let i=0; i<SLIDE.length; i++){
    }
}
NEXT.addEventListener("click", function(){
    n++;
    if(n>SLIDE.lenght){
        n=0;}
        displaynone();
        notactive();
        SLIDE[n].style.display = `block`;
        SLIDE[n].classList.add("active");
});
PREV.addEventListener("click", function(){
    n--;
    if(n<0){
        n=SLIDE.lenght-1;
    }
    displaynone();
    notactive();
    SLIDE.style.display= `none`;
    SLIDE.classList.add("active");
});
setInterval(function(){
    n++;
    if(n>SLIDE.length-1){
        n=0;
    }
    displaynone();
    notactive();
    SLIDE[n].style.display="block";
    SLIDE[n].classList.add("active")}, 4000);
    
    ICONS.addEventListener("click", function (){
        DISCOUNT_1.style.display="none";
        DISCOUNT_2.style.display="block";
    });
   
    
    

    

