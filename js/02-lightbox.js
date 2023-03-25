import { galleryItems } from './gallery-items.js';
// Change code below this line
function createGalleryItem(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
      <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
      </div>`;
    })
    .join("");
}

//add items of img
const gallery = document.querySelector(".gallery");
const items = createGalleryItem(galleryItems);
gallery.insertAdjacentHTML("beforeend", items);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
console.log(galleryItems);
