const sliderContainer = document.querySelector("#slider-container");
const slides = document.querySelectorAll(".slide");
let slidePercent = 0;

setInterval(() => {
    slidePercent += 100;

    if(slidePercent < 400){
        slides.forEach(slide => {
            slide.style.transform = `translateX(-${slidePercent}%)`;   
        })

    }else{
        slidePercent = 0;
        slides.forEach(slide => {
            slide.style.transform = `translateX(-${slidePercent}%)`;   
        })
    }
}, 4000);