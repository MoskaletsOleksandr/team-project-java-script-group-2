import {createPagination} from  './pagination';
import {getByKeyword } from './api';
import {
  createTrendMovesMarkup,
  createTrailerIdAndKeysArray,
} from './createMarkup';
import refs from './refs';
import Notiflix from 'notiflix';

refs.searchFormEl.addEventListener('submit', onSearchByKeyword);
let query;

function renderMarkup(array) {
    const markup = createTrendMovesMarkup(array);
    refs.galleryListEl.innerHTML = '';
    refs.galleryListEl.insertAdjacentHTML('beforeend', markup);
  }
function onSearchByKeyword(event) {
 event.preventDefault();
 query = event.target.searchQuery.value.trim();
 let page = 1;
 if (!query) {
   Notiflix.Notify.failure('Oops.The seach is empty.Enter Movie name that you want to find');
   return;
 }
//   showHideLoader(refs.loader);
 if (page === 1) {
   refs.pagination.style.display = 'none';
 } else {
   refs.pagination.style.display = 'block';
 }
 getByKeyword(query, page)
   .then(data => {
   //   showHideLoader(refs.loader);
     if (!data.total_results) {
       Notiflix.Notify.failure('Oops. We cancot find your film. Please try again');
       return;
     }
     Notiflix.Notify.success(` Hooray! We found ${data.total_results} movies.`);
     createTrailerIdAndKeysArray(data);
    setTimeout(() => {
      renderMarkup(data);
    }, 1000);
    const pagination = createPagination(data.total_results, data.total_pages);
    pagination.on('beforeMove', ({ page }) => {
      refs.galleryListEl.innerHTML = '';
      // showHideLoader(refs.loader);
      getByKeyword(query, page).then(data => {
        setTimeout(() => {
          renderMarkup(data);
        }, 1000);
      });
    });
  })
   .catch(error => console.log(error));
}

// refs.searchFormEl.addEventListener('submit', handleClickSearchButton);
// function handleClickSearchButton(e) {
//     e.preventDefault();
//     const inputData = refs.searchInputEl.value;
//     if (inputData === '') {
//       Notify.failure('Input is empty');
//       return;
//     }
//     fetchMovesByKeyword(inputData.trim())
//       .then(data => {
//         if (data.results.length === 0) {
//           Notify.failure('No results for your search');
//           return;
//         }
//         createTrailerIdAndKeysArray(data);
//         setTimeout(() => {
//           renderMarkup(data);
//         }, 300);
//         scrollUp();
//       })
//       .catch(error => console.log(error));
//   }