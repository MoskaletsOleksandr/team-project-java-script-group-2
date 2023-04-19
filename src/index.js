//імпортуємо бібліотеки та інші файли
import './js/createGallery';
import './js/onSearch';
import './js/pagination';
import './js/onScrollHeader';
import './js/btnUp';
import './js/btnTheme';
import './js/spinner';
import { fetchTrendMoves, fetchDataById, fetchMovesByKeyword } from './js/api';
import {
  createTrendMovesMarkup,
  createTrailerIdAndKeysArray,
} from './js/createMarkup';
import { createMoveModalMarkup } from './js/create-modal-markup';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import refs from './js/refs';
import { onScrollHeader } from './js/onScrollHeader';

let movieIdForModalMarkup = null; //При натисканні на картку фільму на головній сторінці сюди заисується id
// фільму і за цим id відбувається запит на бекенд
export let dataForModalMarkup = null; //Об'єкт із повною інформацією про фільм,
//який ми отримуємо після натискання на картку фільму на головній сторінці.
// Цей об'єкт перезаписується щоразу після натискання на картку



function openTeamModal() {
  refs.teamModal.classList.remove('is-hidden-team');
}
//
function closeTeamModal() {
  refs.teamModal.classList.add('is-hidden-team');
}
//
refs.teamModalOpenBtn.addEventListener('click', openTeamModal);

refs.teamModalCloseBtn.addEventListener('click', closeTeamModal);

refs.teamModal.addEventListener('click', function (event) {
  if (event.target === refs.teamModal) {
    closeTeamModal();
  }
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeTeamModal();
  }
});



import { handleMakeBtnAddRemoveWatched } from './js/btnAddToWatched';
import { handleMakeBtnAddRemoveQueue } from './js/btnAddToQueue';
import { saveLocalStorage } from './js/localStorage';
import { loadLocalStorage } from './js/localStorage';
const keyQueue = 'queue';
const keyWatched = 'watched';

refs.movieModalEl.addEventListener('click', handleMakeBtnAddRemoveWatched); //обробник для кнопки AddRemoveTo Watched

refs.movieModalEl.addEventListener('click', handleMakeBtnAddRemoveQueue);



//

refs.backdropMovieModal.addEventListener('click', onCloseMovieModal);
window.addEventListener('keydown', onCloseMovieModal);
refs.galleryContainerEl.addEventListener('click', handleMovieCard);

function onCloseMovieModal(e) {
  if (
    e.target.className === 'backdrop' ||
    e.target.classList[0] === 'modal__close-btn' ||
    e.target.classList[0] === 'icon-close' ||
    e.target.classList[0] === 'svg-icon-close' ||
    e.code === 'Escape'
    ) {
      refs.backdropMovieModal.classList.add('is-hidden');
      refs.movieModalEl.classList.add('is-hidden');
      refs.bodyEl.style.overflow = 'scroll';
      refs.backdropMovieModal.removeEventListener('click', onCloseMovieModal);
      window.removeEventListener('keydown', onCloseMovieModal);
    }
  }
  
  function idRewriter(event) {
    if (event.target.nodeName === 'DIV') {
      movieIdForModalMarkup = event.target.dataset.id;
      return;
    }
    movieIdForModalMarkup = event.target.parentElement.dataset.id;
  return;
}

export function handleMovieCard(event) {
  idRewriter(event); //ця функція перезаписує значення movieIdForModalMarkup
  if (
    event.target.nodeName !== 'IMG' &&
    event.target.nodeName !== 'DIV' &&
    event.target.nodeName !== 'H3' &&
    event.target.nodeName !== 'SPAN'
  ) {
    return;
  }
  dataForModalMarkup = fetchDataById(movieIdForModalMarkup)
    .then(data => {
      refs.backdropMovieModal.classList.remove('is-hidden');
      refs.movieModalEl.classList.remove('is-hidden');
      refs.backdropMovieModal.addEventListener('click', onCloseMovieModal);
      window.addEventListener('keydown', onCloseMovieModal);
      const markup = createMoveModalMarkup(data, movieIdForModalMarkup);
      refs.movieModalFilmInfoEl.innerHTML = markup;
      refs.bodyEl.style.overflow = 'hidden';
      return data;
    })
    .catch(error => console.log(error));
}

