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

  scrollIntoView(link);
});
//home__contact handle on [contact me] btn on home
const homecontacme = document.querySelector(".home__contact");
homecontacme.addEventListener("click", event => {
  scrollIntoView("#contact");
});

// Make home slowly fade
const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// Show arrow up when scrolling down
const arrowUp = document.querySelector(".arrow-up");
document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add("visible");
  } else {
    arrowUp.classList.remove("visible");
  }
});

//Handle click on the arrow up btn
arrowUp.addEventListener("click", () => {
  scrollIntoView("#home");
});

//projects data filter
const workBtnContainer = document.querySelector(".work__categories");
const projectsContainer = document.querySelector(".work__projects");
const projects = document.querySelectorAll(".project");
workBtnContainer.addEventListener("click", e => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if (filter == null) {
    return;
  }
  projectsContainer.classList.add("anim-out");
  setTimeout(() => {
    projects.forEach(project => {
      console.log(project.dataset.type);
      if (filter === "*" || filter === project.dataset.type) {
        project.classList.remove("invisible");
      } else {
        project.classList.add("invisible");
      }
    });
    projectsContainer.classList.remove("anim-out");
  }, 250);
});

// 쉽게 스크롤 메소드
function scrollIntoView(selector) {
  const scrolltTo = document.querySelector(selector);
  scrolltTo.scrollIntoView({ behavior: "smooth", block: "center" });
}
