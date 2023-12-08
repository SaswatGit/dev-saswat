gsap.registerPlugin(ScrollTrigger);
gsap.from("#skills h1", {y: 50, opacity: 0, scrollTrigger: {
    trigger: "#skills",
    start: "top 40%",
    toggleActions: "play reverse play reverse",
}});
gsap.from("#skills .skill-con", {scale: 0.1, opacity: 0, scrollTrigger: {
    trigger: "#skills",
    start: "top 20%",
    toggleActions: "play reverse play reverse",
}});