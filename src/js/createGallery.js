import {createPagination} from  './pagination';
import { fetchTrendMoves} from './api';
import {
  createTrendMovesMarkup,
  createTrailerIdAndKeysArray,
} from './createMarkup';
import refs from './refs';
function renderMarkup(array) {
  const markup = createTrendMovesMarkup(array);
  refs.galleryListEl.innerHTML = '';
  refs.galleryListEl.insertAdjacentHTML('beforeend', markup);
}
fetchTrendMoves()
  .then(data => {
    createTrailerIdAndKeysArray(data);
    setTimeout(() => {
      renderMarkup(data);
    }, 1000);
    const pagination = createPagination(data.total_results, data.total_pages);
    pagination.on('beforeMove', ({ page }) => {
      refs.galleryListEl.innerHTML = '';
      // showHideLoader(refs.loader);
      fetchTrendMoves(page).then(data => {
        setTimeout(() => {
          renderMarkup(data);
        }, 1000);
      });
    });
  })
  .catch(error => console.log(error));
