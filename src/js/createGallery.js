import { createPagination } from './pagination';
import { fetchTrendMoves, fetchTrailer } from './api';
import { createTrendMovesMarkup, createTrailerMarkup } from './createMarkup';
import refs from './refs';

export function renderMarkup(array) {
  const markup = createTrendMovesMarkup(array);
  refs.galleryListEl.innerHTML = '';
  refs.galleryListEl.insertAdjacentHTML('beforeend', markup);
}

export function renderTrailerMarkup(array) {
  const galleryCardElArray = document.querySelectorAll('.gallery-card');
  for (const galleryCardEl of galleryCardElArray) {
    fetchTrailer(galleryCardEl.dataset.id)
      .then(data => {
        createTrailerMarkup(galleryCardEl, data.results[0].key);
      })
      .catch(error => console.log(error));
  }
}

fetchTrendMoves()
  .then(data => {
    renderMarkup(data);
    renderTrailerMarkup(data);

    const pagination = createPagination(data.total_results, data.total_pages);
    pagination.on('beforeMove', ({ page }) => {
      refs.galleryListEl.innerHTML = '';
      // showHideLoader(refs.loader);
      fetchTrendMoves(page).then(data => {
        renderMarkup(data);
        renderTrailerMarkup(data);
      });
    });
  })
  .catch(error => console.log(error));
