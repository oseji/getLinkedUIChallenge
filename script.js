"use strict";

const navbar = document.querySelector(".navbar");
const navListContainer = document.querySelector(".navListContainer");
const hamburgerMenu = document.querySelector(".hamburgerMenu");
const closeMenu = document.querySelector(".closeMenu");
const logo = document.querySelector(".logo");

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

  //open menu
  if (clicked.id == "menuBtn") {
    console.log("clicked menu");
    hamburgerMenu.classList.toggle("hidden");
    closeMenu.classList.toggle("hidden");
    logo.classList.add("hidden");

    // navListContainer.classList.remove("hidden");
    navListContainer.classList.remove("closeList");
    navbar.classList.remove("closedNav");
  }

  //close menu
  if (clicked.id == "closeBtn") {
    console.log("clicked menu");
    hamburgerMenu.classList.toggle("hidden");
    closeMenu.classList.toggle("hidden");
    logo.classList.remove("hidden");

    navListContainer.classList.add("closeList");
    navbar.classList.add("closedNav");
  }
});
