
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



