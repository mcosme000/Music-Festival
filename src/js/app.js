"use strict";

//SMOOTH SCROLL:

document.addEventListener("DOMContentLoaded", () => {
  scrollNav();
});

function scrollNav() {
  const links = document.querySelectorAll(".header-nav a");
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      console.log(e.target.attributes.href.value);

      //this is the section we are clickin in to.
      const section = document.querySelector(e.target.attributes.href.value);

      section.scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}

// CREATING THE SMOOTH SCROLL:
/**
1. when we have a group of elements, we need to iterate through them to
    add event listeners to each of the links.

2. console.log(e.target.attributes.href);
    nos muestra el href="#tickets"

3. console.log(e.target.attributes.href.value);
    nos indica a dónde va el link
 */
