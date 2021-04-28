"use strict";

document.addEventListener("DOMContentLoaded", () => {
  createGallery();
});

function createGallery() {
  const gallery = document.querySelector(".gallery-img");

  for (let i = 1; i <= 12; i++) {
    const image = document.createElement("img");
    image.src = `build/img/thumb/${i}.webp`;
    console.log(image.src);
    const list = document.createElement("li");
    list.appendChild(image);
    gallery.appendChild(list);
  }
}

// Create the img
// add src to the img
// Create li
// append img to li
// append li to ul
