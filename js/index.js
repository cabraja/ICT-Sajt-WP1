
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

// AUTHOR SKILLS
const authorSkills = document.getElementById("author-skills");
let skills = ['HTML 5','CSS 3','SCSS','Javascript','React.js','Node.js','XML'];

for(let i = 0; i <skills.length; i++){
    authorSkills.innerHTML += `<h6>-${skills[i]}</h6>`
}

