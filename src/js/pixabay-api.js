import axios from 'axios';

export function getImagesByQuery(query) {
  const BASE_URL = 'https://pixabay.com/';
  const END_POINT = 'api/';
  const API_KEY = '34575969-428170e5bc4fca7f33bfb3efe';
  const params = new URLSearchParams({
    q: query,
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  const url = `${BASE_URL}${END_POINT}`;

  return axios
    .get(url, { params })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error('Помилка при отриманні зображень:', error.message);
      throw error;
    });
}
