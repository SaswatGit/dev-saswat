const menu = document.querySelector(".head .menu");
const navbar = document.querySelector("#navbar");

menu.addEventListener("click", function(){
    navbar.classList.toggle("nav-active");
});
