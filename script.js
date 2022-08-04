"use strict";
const navToggler = document.querySelector(".med_screen_toggler");
const navBar = document.querySelector("nav");
const headerFirstRow = document.querySelector("#headerFirstRow");
const formSearch = document.querySelector(".form--search");
const inputSearch = document.querySelector(".input--search");

const hideNavBar = function () {
  headerFirstRow.classList.add("header__border");
  navBar.style.top = "-100px";
  navToggler.classList.remove("showed");
};

const showNavBar = function () {
  if (screen.width > 767) {
    headerFirstRow.classList.remove("header__border");

    navBar.style.top = "0";
    return;
  }
  navBar.style.top = "";
};

// Hide Nav when scrolled
window.addEventListener("scroll", function () {
  const scrollLimit = 10;

  if (window.pageYOffset >= scrollLimit) {
    if (navToggler.className.includes("showed")) return;
    if (screen.width > 767) {
      navToggler.classList.remove("d-none");
      navToggler.classList.add("d-md-inline-block");
      hideNavBar();
    }
  }

  if (window.pageYOffset <= scrollLimit) {
    navToggler.classList.add("d-none");
    navToggler.classList.remove("d-md-inline-block");
    navToggler.classList.remove("showed");
    navBar.style.transition = "0.01s";

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
// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

// Prevent page from reloading
formSearch.addEventListener("click", function (e) {
  e.preventDefault();
  e.stopPropagation();
});

inputSearch.addEventListener("click", function (e) {
  e.preventDefault();
  e.stopPropagation();
});
