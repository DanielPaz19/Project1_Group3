"use strict";
const navToggler = document.querySelector(".med_screen_toggler");
const navBar = document.querySelector("nav");
const headerFirstRow = document.querySelector("#headerFirstRow");

const hideNavBar = function () {
  headerFirstRow.classList.add("header__border");
  navBar.style.top = "-100px";
  navToggler.classList.remove("showed");
};

const showNavBar = function () {
  headerFirstRow.classList.remove("header__border");
  if (screen.width > 767) {
    navBar.style.top = "0";
    return;
  }
  navBar.style.top = "";
};

// Hide Nav when scrolled
window.addEventListener("scroll", function () {
  const scrollLimit = 20;

  console.log(window.pageYOffset);

  if (window.pageYOffset >= scrollLimit) {
    if (navToggler.className.includes("showed")) return;
    if (screen.width > 767) {
      navToggler.classList.remove("d-none");
      hideNavBar();
    }
  }

  if (window.pageYOffset <= scrollLimit) {
    navToggler.classList.add("d-none");
    navToggler.classList.remove("showed");
    navBar.style.transition = "0s";

    showNavBar();
  }
});

// Show Nav on Toggler Click
navToggler.addEventListener("click", function () {
  this.classList.toggle("showed");
  if (this.className.includes("showed")) {
    navBar.style.transition = "0.25s";
    showNavBar();
  } else {
    hideNavBar();
  }
  //   if (!navBar.className.includes("showed")) {
  //     this.classList.remove("showed");
  //     navBar.style.top = "-100px";
  //   } else {
  //     this.classList.add("showed");
  //     navBar.style.top = "";
  //   }
});

// When window is resized
window.addEventListener("resize", function () {
  location.reload();
});
