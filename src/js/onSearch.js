import { createPagination } from './pagination';
import { getByKeyword } from './api';
import { renderMarkup, renderTrailerMarkup } from './createGallery';
import refs from './refs';
import Notiflix from 'notiflix';
import { spinnerPlay } from '..';
import { spinnerStop } from '..';

refs.searchFormEl.addEventListener('submit', onSearchByKeyword);
let query;

function onSearchByKeyword(event) {
  event.preventDefault();
  query = event.target.searchQuery.value.trim();
  let page = 1;
  if (!query) {
    Notiflix.Notify.failure(
      'Oops.The seach is empty.Enter Movie name that you want to find'
    );
    spinnerStop();
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
        Notiflix.Notify.failure(
          'Oops. We cancot find your film. Please try again'
        );
        spinnerPlay();
        return;
      }
      Notiflix.Notify.success(
        ` Hooray! We found ${data.total_results} movies.`
      );
    spinnerStop();
      renderMarkup(data);
      renderTrailerMarkup();
      const pagination = createPagination(data.total_results, data.total_pages);
      pagination.on('beforeMove', ({ page }) => {
        refs.galleryListEl.innerHTML = '';
        // showHideLoader(refs.loader);
        getByKeyword(query, page).then(data => {
          renderMarkup(data);
          renderTrailerMarkup();
        });
      });
    })
    .catch(error => {
    spinnerStop();
    console.log(error)
  });
}
