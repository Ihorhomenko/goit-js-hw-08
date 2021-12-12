// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryCards = createGalleryCards(galleryItems);
const gallery = document.querySelector('.gallery');
gallery.insertAdjacentHTML('afterbegin', galleryCards);

function createGalleryCards(gallery) {
  return gallery
    .map(
      ({ preview, original, description }) => `<a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
    `,
    )
    .join('');
}

let gallerySimpleLightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
