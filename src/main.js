import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions.js';

const formElem = document.querySelector('.form');
const inputElem = document.querySelector('.input-text');

let query = ''; /////////!!!!!!!!!
formElem.addEventListener('submit', async e => {
  e.preventDefault();

  clearGallery();
  query = inputElem.value.trim(); ////////!!!!!!!!!!!!!

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
  try {
    const data = await getImagesByQuery(query);

    if (data.hits.length === 0) {
      iziToast.error({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please, try again!',
        position: 'topRight',
      });
      hideLoader();
      return;
    }

    createGallery(data.hits);
    showLoadMoreButton();
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again later...',
      position: 'topRight',
    });
  }

  hideLoader();
});
