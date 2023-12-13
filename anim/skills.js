gsap.registerPlugin(ScrollTrigger);
gsap.from("#skills h1", {y: 50, opacity: 0, scrollTrigger: {
    trigger: "#skills",
    start: "top 80%",
    toggleActions: "play reverse play reverse",
}});

gsap.from("#skills p", {x: -100, opacity: 0, scrollTrigger: {
    trigger: "#skills",
    start: "top 60%",
    toggleActions: "play reverse play reverse",
}});
