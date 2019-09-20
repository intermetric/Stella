const images = document.querySelectorAll(".about-img");

const tl = new TimelineMax();

tl.fromTo(
  images,
  0.5,
  { width: "0%" },
  { width: "25%", ease: Power2.easeInOut }
);
