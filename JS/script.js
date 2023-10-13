const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");

menu.addEventListener("click", ()=>{
    menu.classList.toggle("active");
    navbar.classList.toggle("active");
});

const navlink = document.querySelectorAll(".navlink");
navlink.forEach(n=> n.addEventListener("click", ()=>{
    menu.classList.remove("active");
    navbar.classList.remove("active");
}));