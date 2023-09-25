"use strict";

const navbar = document.querySelector(".navbar");
const landingPage = document.querySelector(".landingPage");
const contactPage = document.querySelector(".contactPage");
const registarationPage = document.querySelector(".registarationPage");

navbar.addEventListener("click", (e) => {
  const clicked = e.target;
  console.log(clicked);

  if (clicked.id == "contactLink") {
    e.preventDefault();
    contactPage.classList.remove("extraPageHidden");

    contactPage.classList.add("extraPageVisible");
    registarationPage.classList.remove("extraPageVisible");
    registarationPage.classList.add("extraPageHidden");
    landingPage.classList.add("extraPageHidden");
  }

  if (clicked.id == "registrationLink") {
    e.preventDefault();
    registarationPage.classList.remove("extraPageHidden");

    registarationPage.classList.add("extraPageVisible");
    contactPage.classList.remove("extraPageVisible");
    contactPage.classList.add("extraPageHidden");
    landingPage.classList.add("extraPageHidden");
  }

  if (clicked.id == "overview") {
    e.preventDefault();
    landingPage.classList.remove("extraPageHidden");

    registarationPage.classList.add("extraPageHidden");
    registarationPage.classList.remove("extraPageVisible");
    contactPage.classList.add("extraPageHidden");
    contactPage.classList.remove("extraPageVisible");
  }
});
