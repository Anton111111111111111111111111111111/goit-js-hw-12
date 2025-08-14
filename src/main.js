import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

const formElem = document.querySelector('.form');
const inputElem = document.querySelector('.input-text');

formElem.addEventListener('submit', e => {
  e.preventDefault();

  clearGallery();
  const query = inputElem.value.trim();

  if (query === '') {
    iziToast.error({
      title: 'Warning',
      message: 'Please enter a search query!',
      position: 'topRight',
    });
    return;
  }
  inputElem.value = '';

  showLoader();
  getImagesByQuery(query)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please, try again!',
          position: 'topRight',
        });
        return;
      }

      createGallery(data.hits);
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong. Please try again later...',
        position: 'topRight',
      });
    })
    .finally(() => {
      hideLoader();
    });
});
