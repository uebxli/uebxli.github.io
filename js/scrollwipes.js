gsap.registerPlugin(ScrollTrigger);

gsap.defaults({
ease: "none",
duration: 2
});

const tl = gsap.timeline();
tl.from(".two", {
xPercent: 100
})
.from(".three", {
xPercent: 100
})
.from(".four", {
xPercent: 100
});

ScrollTrigger.create({
animation: tl,
trigger: "#plo",
start: "top top",
end: "+=4000",
scrub: true,
pin: true,
anticipatePin: 1
});