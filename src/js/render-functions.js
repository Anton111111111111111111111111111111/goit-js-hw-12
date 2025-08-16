import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const listElem = document.querySelector('.gallery');
const loaderElem = document.querySelector('.loader');
const loadMoreElem = document.querySelector('.js-more');

let lightbox;
export async function createGallery(images) {
  const markup = images
    .map(
      image =>
        `
      <a class="gallery-link" href="${image.largeImageURL}">
      <img
        class="gallery-image"
        src="${image.webformatURL}"
        alt="${image.tags}"
        width='360'
        height="200"
      />
      <ul class="img-info-list">
        <li class="info-item">
          <h2 class="info-title">Likes</h2>
          <p class="info-text">${image.likes}</p>
        </li>
        <li class="info-item">
          <h2 class="info-title">Views</h2>
          <p class="info-text">${image.views}</p>
        </li>
        <li class="info-item">
          <h2 class="info-title">Comments</h2>
          <p class="info-text">${image.comments}</p>
        </li>
        <li class="info-item">
          <h2 class="info-title">Downloads</h2>
            <p class="info-text">${image.downloads}</p>
        </li>
      </ul>
    </a>`
    )
    .join('\n');

  listElem.insertAdjacentHTML('beforeend', markup);

  if (!lightbox) {
    lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionPosition: 'bottom',
      captionDelay: 250,
    });
  } else {
    lightbox.refresh();
  }
}

export function clearGallery() {
  listElem.innerHTML = '';
}

export function showLoader() {
  loaderElem.classList.add('is-visible');
}
export function hideLoader() {
  loaderElem.classList.remove('is-visible');
}

export function showLoadMoreButton() {
  loadMoreElem.classList.remove('hidden');
}
export function hideLoadMoreButton() {
  loadMoreElem.classList.add('hidden');
}
