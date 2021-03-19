const menuIcon = document.querySelector(".hamburger");
const closeMenu = document.querySelector(".close-icon");
const menuLinks = document.querySelectorAll(".menu a");

var timeline = gsap.timeline({
  defaults: { duration: 1, ease: Back.easeOut.config(7) },
});

timeline.paused(true);

timeline.to(".menu", { clipPath: "circle(100%)" });

menuIcon.addEventListener("click", () => {
  timeline.play();
});

closeMenu.addEventListener("click", () => {
  timeline.reverse(0.4);
});
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    timeline.reverse(0.4);
  });
});
