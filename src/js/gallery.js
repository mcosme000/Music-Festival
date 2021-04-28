document.addEventListener("DOMContentLoaded", () => {
  createGallery();
});

function createGallery() {
  const gallery = document.querySelector(".gallery-img");

  for (let i = 1; i <= 12; i++) {
    const image = document.createElement("li");
    image.src = `build/img/thumb/${i}.webp`;
    console.log(image.src);
    gallery.appendChild(image);
  }
}
