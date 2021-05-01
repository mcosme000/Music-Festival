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

document.addEventListener("DOMContentLoaded", () => {
  createGallery();
});

function createGallery() {
  const gallery = document.querySelector(".gallery-img");

  for (let i = 1; i <= 12; i++) {
    const image = document.createElement("img");
    image.src = `build/img/thumb/${i}.webp`;
    // adding an ID to each of the images:
    image.id = i;

    const list = document.createElement("li");
    list.appendChild(image);
    gallery.appendChild(list);

    // imageClick function:
    image.onclick = imageClick;
  }
}

function imageClick(e) {
  const id = parseInt(e.target.id);
  console.log(id);

  //create a new image
  const wideImg = document.createElement("img");
  wideImg.src = `build/img/grande/${id}.jpg`;
  wideImg.className = "wideImg";

  //create a new container to show that image
  const overlay = document.createElement("div");
  overlay.appendChild(wideImg);
  overlay.className = "overlayImg";

  //create button to close the img
  const btn = document.createElement("button");
  btn.textContent = "X";
  btn.className = "close";
  overlay.appendChild(btn);

  //to close the image
  btn.addEventListener("click", () => {
    overlay.remove();
  });

  //on click, close the image too
  overlay.addEventListener("click", () => {
    overlay.style.display = "none";
  });

  //show that div in the HTML
  const body = document.querySelector("body");
  body.appendChild(overlay);
  body.className = "fixBody";
}

//Para añadir la función de hacer img grandes:
/**
1. Añado id a las imágenes = i
2. Añado evento onclick.

** e.target.id = puedo saber el id del elemento que he click

3. El número id lo quiero convertir a NÚMERO (es un string al principio)
4. parseint

5. creo un nuevo elemento imagen, 
pero uso el tamaño grande
 */
