import refs from './refs';
import { getByKeyword } from './api';
import { createMarkup } from './createMarkup';
import { createPagination } from './pagination';
import Notiflix from 'notiflix';

refs.searchFormEl.addEventListener('submit', onSearchByKeyword);
let query;


function onSearchByKeyword(event) {
 event.preventDefault();
 query = event.target.searchQuery.value.trim();
 let page = 1;
 if (!query) {
   Notiflix.Notify.failure('Oops.The seach is empty.Enter Movie name that you want to find');
   return;
 }
 refs.galleryListEl.innerHTML = '';
 if (page === 1) {
   refs.pagination.style.display = 'none';
 } else {
   refs.pagination.style.display = 'block';
 }
 getByKeyword(query, page)
   .then(data => {

     if (!data.total_results) {
       Notiflix.Notify.failure('Oops. We cancot find your film. Please try again');
       return;
     }
     Notiflix.Notify.info(` Hooray! We found ${data.total_results} movies.`);
     refs.galleryListEl.innerHTML = createMarkup(data.results);


     const pagination = createPagination(data.total_results, data.total_pages);


     pagination.on('beforeMove', ({ page }) => {
       refs.galleryListEl.innerHTML = '';
       getByKeyword(query, page).then(data => {
         refs.galleryListEl.innerHTML = createMarkup(data.results);
       });
     });
   })
   .catch(error => console.log(error));
}
