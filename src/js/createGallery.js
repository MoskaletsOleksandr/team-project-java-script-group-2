

import { fetchTrendMoves } from './api';
import { createMarkup } from './createMarkup';
import { createPagination } from './pagination';
import refs from './refs';




const galleryListEl = document.querySelector('.gallery-list');
fetchTrendMoves().then(data => {
 galleryListEl.insertAdjacentHTML(
   'beforeend',
   createMarkup(data.results)
 );


 const pagination = createPagination(data.total_results, data.total_pages);
 pagination.on('beforeMove', ({ page }) => {
   refs.galleryListEl.innerHTML = '';
   fetchTrendMoves(page).then(data => {
     refs.galleryListEl.innerHTML = createMarkup(data.results);
   });
 });
});
