gsap.registerPlugin(ScrollTrigger);

gsap.from("#hero .me", {
    opacity: 0, duration: 1, y: 100, scrollTrigger: {
        trigger: "#hero",
        top: "top top",
        end: "center top",
        toggleActions: "play reverse play reverse",
    }
});



