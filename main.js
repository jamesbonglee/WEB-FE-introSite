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
