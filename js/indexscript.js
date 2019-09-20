const navStuff = document.querySelector("nav");
const logod = document.querySelectorAll(".logod");

const tl = new TimelineMax();

tl.fromTo(
  navStuff,
  1.5,
  { y: "-100%" },
  { y: "0%", ease: Power2.easeInOut }
).fromTo(
  logod,
  0.6,
  { x: "-0.2%" },
  { x: "0%", ease: Power2.easeInOut },
  "-=1.5"
);
