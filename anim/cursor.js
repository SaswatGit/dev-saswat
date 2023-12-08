const cursor = document.querySelector(".cursor");
window.addEventListener("mousemove", function(event){
    gsap.to(cursor, {x: event.clientX, y: event.clientY, duration: 0});
});