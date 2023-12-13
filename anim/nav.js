const menu = document.querySelector(".head .menu");
const navbar = document.querySelector("#navbar");

gsap.to(".menu span", 1, {rotationZ: 360, stagger: 0.4, yoyo: true, repeat: -1, repeatDelay: 1});

menu.addEventListener("click", function(){
    navbar.classList.toggle("nav-active");
});
