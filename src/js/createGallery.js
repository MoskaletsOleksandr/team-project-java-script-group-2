import { createPagination } from './pagination';
import { fetchTrendMoves, fetchTrailer } from './api';
import { createTrendMovesMarkup, createTrailerMarkup } from './createMarkup';
import refs from './refs';
import { spinnerPlay, spinnerStop } from './spinner';

export function renderMarkup(array) {
  const markup = createTrendMovesMarkup(array);
  if (refs.galleryListEl !== null) {
    refs.galleryListEl.innerHTML = '';
    refs.galleryListEl.insertAdjacentHTML('beforeend', markup);
  }
}

export function renderTrailerMarkup() {
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
    setTimeout(function () {
      renderMarkup(data);
      renderTrailerMarkup();
    }, 1000);

    const pagination = createPagination(data.total_results, data.total_pages);
    pagination.on('beforeMove', ({ page }) => {
      refs.galleryListEl.innerHTML = '';
      spinnerPlay();
      setTimeout(function () {
        fetchTrendMoves(page).then(data => {
          renderMarkup(data);
          renderTrailerMarkup();
        });
      }, 1000);
      spinnerStop();
    });
  })
  .catch(error => console.log(error));
