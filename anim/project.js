const projects = gsap.utils.toArray(".project");

gsap.to(projects, {
    xPercent: -100 * (projects.length - 1),
    scrollTrigger: {
        trigger: ".project-con",
        pin: ".projects",
        start: "top top",
        end: () => "+="+document.querySelector(".project-con").offsetWidth,
        scrub: 1,
    }
});

gsap.from("#projects .title", {y:50, opacity: 0, duration: 1, scrollTrigger: {
    trigger: "#projects",
    start: "top 60%",
    end: () => "+=" + document.querySelector(".project-con").offsetWidth,
    toggleActions: "play reverse play reverse",
}});
gsap.from("#projects .project", {opacity: 0, duration: 1, scrollTrigger: {
    trigger: "#projects",
    start: "top 50%",
    end: () => "+=" + document.querySelector(".project-con").offsetWidth,
    toggleActions: "play reverse play reverse",
}});
