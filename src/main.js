import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery, PER_PAGE } from './js/pixabay-api.js';
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
const loadMoreElem = document.querySelector('.js-more');

let query;
let maxPages;
let currentPage;

formElem.addEventListener('submit', async e => {
  e.preventDefault();
  hideLoadMoreButton();
  clearGallery();
  query = inputElem.value.trim();
  currentPage = 1;

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
    const data = await getImagesByQuery(query, currentPage);
    maxPages = Math.ceil(data.totalHits / PER_PAGE);

    if (data.hits.length === 0) {
      iziToast.error({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please, try again!',
        position: 'topRight',
      });

      return;
    }
    if (currentPage < maxPages) {
      showLoadMoreButton();
    } else {
      hideLoadMoreButton();
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
      });
    }

    createGallery(data.hits);
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again later...',
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
});

loadMoreElem.addEventListener('click', async e => {
  e.preventDefault();
  currentPage += 1;
  showLoader();
  hideLoadMoreButton();

  try {
    const data = await getImagesByQuery(query, currentPage);
    createGallery(data.hits);

    const cardElem = document.querySelector('.gallery').children[0];
    const firstCard = cardElem.getBoundingClientRect();
    const cardHeight = firstCard.height;
    window.scrollBy({ top: cardHeight * 2, behavior: 'smooth' });

    if (currentPage < maxPages) {
      showLoadMoreButton();
    } else {
      hideLoadMoreButton();
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
      });
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again later...',
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
});
