"use strict";

document.addEventListener("DOMContentLoaded", () => {
  createGallery();
});

function createGallery() {
  const gallery = document.querySelector(".gallery-img");

  for (let i = 1; i <= 12; i++) {
    const image = document.createElement("img");
    image.src = `build/img/thumb/${i}.webp`;
    const list = document.createElement("li");
    list.appendChild(image);
    gallery.appendChild(list);
  }
}
