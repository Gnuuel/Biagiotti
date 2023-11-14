const clickMe= document.querySelector(".banaTikla")

clickMe.addEventListener("click", () => {
    document.body.scrollTop = 0
})










// navbar click 
const navIcon = document.querySelector("#telephone")
const navRes = document.querySelector(".nav-res")
const main=document.querySelector("main")



navIcon.addEventListener("click", () => {
    navRes.classList.toggle("nav-show")
})

window.onscroll=function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 150 || 
      document.documentElement.scrollTop > 150) {
      navRes.classList.remove("nav-show");
    } 
  }

main.addEventListener("click", ()=>{
    navRes.classList.remove("nav-show");
})
// navbar click 
window.onscroll = function() {scrollFunction()};
let navigationBarScroll=document.querySelector(".navigation-bar-scroll")
let scrollRespHeader=document.querySelector(".scroll-resp-header")
let navigationBar=document.querySelector(".navigation-bar")

function scrollFunction() {
  if (document.body.scrollTop > 400 || 
    document.documentElement.scrollTop > 400) {
        navigationBarScroll.classList.add("scroll-active");
    } else {
        navigationBarScroll.classList.remove("scroll-active");
  }
}

//navbar scroll

//navbar responsive scroll
// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
// var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("nav-ress").style.top = "0";
//   } else {
//     document.getElementById("nav-ress").style.top = "-50px";
//   }
//   prevScrollpos = currentScrollPos;
// }
//navbar responsive scroll


// base slider 
const slides = document.querySelectorAll(".slide");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const base = document.getElementById("base")
const auto=true;
const time=5000;
let interval;

const nextSlide = () => {
    const activeSlide = document.querySelector(".active-slide");
    activeSlide.classList.remove("active-slide");
    if (activeSlide.nextElementSibling) {
        activeSlide.nextElementSibling.classList.add("active-slide");
    }
    else {
        slides[0].classList.add("active-slide");
    }
}
const prevSlide = () => {
    const activeSlide = document.querySelector(".active-slide");
    activeSlide.classList.remove("active-slide");
    if (activeSlide.previousElementSibling) {
        activeSlide.previousElementSibling.classList.add("active-slide");
    }
    else {
        slides[slides.length-1].classList.add("active-slide");
    }
}

next.addEventListener("click", ()=>{
    nextSlide();
})
base.addEventListener("click", ()=>{
    nextSlide();
})
prev.addEventListener("click", ()=>{
    prevSlide();
})
if(auto){
    interval=setInterval(nextSlide,time)
}


// burger click
const burger = document.querySelector(".destkop");
const burgerOpen=document.querySelector(".burger-open");
const closee=document.querySelector(".closee")
burger.addEventListener("click",()=>{
    burgerOpen.classList.add("burger-show");
})

closee.addEventListener("click",()=>{
    burgerOpen.classList.remove("burger-show");
})
// burger click


