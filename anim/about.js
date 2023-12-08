gsap.registerPlugin(ScrollTrigger);

gsap.from("#about h1", {x: -100, opacity: 0, scrollTrigger: {
    trigger: "#about",
    start: "top center",
    toggleActions: "play reverse play reverse",
}});
gsap.from("#about p", {x: 100, opacity: 0, scrollTrigger: {
    trigger: "#about",
    start: "top center",
    toggleActions: "play reverse play reverse",
}});