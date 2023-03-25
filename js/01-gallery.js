import { galleryItems } from './gallery-items.js';
// Change code below this line
function createGalleryItem(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`;
    })
    .join("");
}

//add items of img
const gallery = document.querySelector(".gallery");
const items = createGalleryItem(galleryItems);
gallery.insertAdjacentHTML("beforeend", items);

gallery.addEventListener("click", onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault();
  const isImgClick = event.target.classList.contains("gallery__image");
  if (!isImgClick) {
    return;
  }

  const instance = basicLightbox.create(`<img src="${event.target.dataset.source}" width="800" height="600">`, {
    onShow: () => {
      document.addEventListener("keydown", keyEsc);
    },
    onClose: () => {
      document.removeEventListener("keydown", keyEsc);
    },
  });

  const keyEsc = (event) => {
    if (event.key === "Escape") {
      instance.close();
    }
  };

  instance.show();
}

console.log(galleryItems);
