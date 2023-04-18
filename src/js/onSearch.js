import { createPagination } from './pagination';
import { getByKeyword } from './api';
import { renderMarkup, renderTrailerMarkup } from './createGallery';
import refs from './refs';
import Notiflix from 'notiflix';
import { spinnerPlay, spinnerStop } from './spinner';


refs.searchFormEl.addEventListener('submit', onSearchByKeyword);
let query;

function onSearchByKeyword(event) {
    event.preventDefault();
    query = event.target.searchQuery.value.trim();
    let page = 1;
    if (!query) {
        Notiflix.Notify.failure(
            'Oops.The seach is empty.Enter movie name that you want to find'
        );
        return;
    }
    if (page === 1) {
        refs.pagination.style.display = 'none';
    } else {
        refs.pagination.style.display = 'block';
    }
    getByKeyword(query, page)
        .then(data => {
            if (!data.total_results) {
                Notiflix.Notify.failure(
                    'Oops. We can not find your film. Please try again'
                );
                return;
            }
            spinnerPlay();
            setTimeout(function () {
            Notiflix.Notify.success(
                ` Hooray! We found ${data.total_results} movies.`
            );
          
                renderMarkup(data);
                renderTrailerMarkup();
            }, 1000);
             spinnerStop();
            const pagination = createPagination(data.total_results, data.total_pages);
            pagination.on('beforeMove', ({ page }) => {
                refs.galleryListEl.innerHTML = '';
                spinnerPlay();
                setTimeout(function () {
                    getByKeyword(query, page).then(data => {
                        renderMarkup(data);
                        renderTrailerMarkup();
                    });
                }, 1000);
                spinnerStop();
            });
        })
        .catch(error => {
            console.log(error)
        });
}

