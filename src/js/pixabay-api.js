import axios from 'axios';

export const PER_PAGE = 15;
export async function getImagesByQuery(query, page = 1) {
  const BASE_URL = 'https://pixabay.com/';
  const END_POINT = 'api/';
  const API_KEY = '34575969-428170e5bc4fca7f33bfb3efe';
  const params = new URLSearchParams({
    q: query,
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: PER_PAGE,
    page,
  });
  const url = `${BASE_URL}${END_POINT}`;
  try {
    const response = await axios.get(url, { params });
    return response.data;
  } catch (error) {
    throw error;
  }
}
