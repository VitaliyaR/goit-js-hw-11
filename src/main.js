
import { getImagesByQuery } from './js/pixabay-api.js';


import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions.js';
import iziToast from 'izitoast';
import "izitoast/dist/css/iziToast.min.css";


const form = document.querySelector('.form');
const input = form.querySelector('input[name="search-text"]');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const query = input.value.trim();
  
  if (!query) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search term.',
    });
    return;
  }

  showLoader();
  clearGallery();

  const images = await getImagesByQuery(query);

  if (images.length === 0) {
    iziToast.info({
      title: 'No results',
      message: 'Sorry, there are no images matching your search query. Please try again!',
    });
  } else {
    createGallery(images);
  }
  
  hideLoader();
});
