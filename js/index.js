const sliderContainer = document.querySelector("#slider-container");
const slides = document.querySelectorAll(".slide");
const slideButtons = document.querySelectorAll(".slide-button");
let slidePercent = 0;

// SLIDE CHANGE FUNCTION
setInterval(() => {
    slidePercent += 100;

    if(slidePercent < 400){
        slides.forEach((slide,index) => {
            slide.style.transform = `translateX(-${slidePercent}%)`; 
        })
        slideButtons.forEach(button => {
            button.classList.remove("active");
        })
        slideButtons[slidePercent/100].classList.add("active");

    }else{
        slidePercent = 0;
        slides.forEach((slide,index) => {
            slide.style.transform = `translateX(-${slidePercent}%)`;
        })
        slideButtons.forEach(button => {
            button.classList.remove("active");
        })
        slideButtons[slidePercent/100].classList.add("active");
    }
}, 5000);


// NAV MENU FUNCTIONS
const navIcon = document.querySelector("#nav-icon");
const nav = document.querySelector("#nav");
let isNavOpen = false;

navIcon.addEventListener("click",() => {
    if(isNavOpen){
        nav.style.transform = "translateX(-110%)";
        navIcon.style.transform = "rotate(0deg)";
        isNavOpen = false;
    }else{
        nav.style.transform = "translateX(0%)";
        navIcon.style.transform = "rotate(90deg)";
        isNavOpen = true;
    }
})



