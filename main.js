"use strict";
// Make navbar transparent when it is on the top scroll
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  // console.log(`navbarHeight: ${navbarHeight}`); //== console.log("navbarHeight:" , navbarHeight);
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar__dark");
  } else {
    navbar.classList.remove("navbar__dark");
  }
});

// Handle scrolling when tapping on the navbar mene

const navbarmenu = document.querySelector(".navbar__menu");
navbarmenu.addEventListener("click", event => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }

  console.log(event.target.dataset.link);
  const scrolltTo = document.querySelector(link);
  scrolltTo.scrollIntoView({ behavior: "smooth", block: "center" });
});
