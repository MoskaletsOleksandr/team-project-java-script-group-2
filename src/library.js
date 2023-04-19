//імпортуємо бібліотеки та інші файли
import refs from './js/refs';
import './js/onScrollHeader';
import './js/btnUp';
import './js/btnTheme';
import throttle from 'lodash.throttle'; // npm i lodash.throttle
import { fetchTrendMoves, fetchDataById, fetchMovesByKeyword } from './js/api';
import { createMoveModalMarkup } from './js/create-modal-markup';

import { renderTrailerMarkup } from './js/createGallery';

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// refs
let movieIdForLibModalMarkup = null; //При натисканні на картку фільму на головній сторінці сюди заисується id
// фільму і за цим id відбувається запит на бекенд
export let dataForLibModalMarkup = null; //Об'єкт із повною інформацією про фільм,
//який ми отримуємо після натискання на картку фільму на головній сторінці.
// Цей об'єкт перезаписується щоразу після натискання на картку
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//Аліна присяжнюк дещо сплутала
// const headerEl = document.querySelector('.header');
// const headerContainer = document.querySelector('.header-container');
// const logoHeader = document.querySelector('.header-logo');
// const logoTextHeader = document.querySelector('.header-text-logo');
// const iconFilmHeader = document.querySelector('.icon-film');
// //const galle = document.querySelector('.search');
// let positionHeader = headerEl.offsetTop;
// function onScrollHeader() {
//   if (window.pageYOffset > positionHeader) {
//     headerEl.classList.add('fixed');
//     headerContainer.classList.add('fixed-header');
//     logoHeader.classList.add('fixed-logo');
//     logoTextHeader.classList.add('text-logo-fixed');
//     iconFilmHeader.classList.add('icon-film-fixed');
//     localStorage.setItem('pageYOffset', JSON.stringify(window.pageYOffset));
//     // refs.galleryContainerEl.classList.add('gallery-fixed');
//   } else {
//     headerEl.classList.remove('fixed');
//     headerContainer.classList.remove('fixed-header');
//     headerContainer.classList.remove('fixed-header-dark');
//     logoHeader.classList.remove('fixed-logo');
//     logoTextHeader.classList.remove('text-logo-fixed');
//     iconFilmHeader.classList.remove('icon-film-fixed');
//     localStorage.removeItem('pageYOffset');
//     // refs.galleryContainerEl.classList.remove('gallery-fixed');
//   }

//   if (window.pageYOffset > positionHeader && localStorage.theme === 'dark') {
//     headerContainer.classList.add('fixed-header-dark');
//     localStorage.setItem('pageYOffset', JSON.stringify(window.pageYOffset));
//   }
// }

// window.addEventListener('scroll', onScrollHeader);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//Олександр Миронець
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//Ігор
//
// ------- btnUp -------
//
// refs.btnUpEl.addEventListener('click', scrollUp);

// function show() {
//   refs.btnUpEl.classList.remove('btn-up_hide');
// }

// function hide() {
//   refs.btnUpEl.classList.add('btn-up_hide');
// }

// window.addEventListener(
//   'scroll',
//   throttle(() => {
//     const scrollY = window.scrollY || document.documentElement.scrollTop;

//     scrollY > 400 ? show() : hide();
//   }, 500)
// );

// function scrollUp() {
//   window.scrollTo({
//     top: 0,
//     left: 0,
//     behavior: 'smooth',
//   });
// }
//
//------- btnTheme -------
//
// const btnThemeEl = document.querySelector('.btn-theme');
// const headerContainerEl = document.querySelector('.header-container');
// const btnIconMoonEl = document.querySelector('.btn-icon-moon');
// const btnIconSunEl = document.querySelector('.btn-icon-sun');

// function setDarkTheme() {
//   document.body.classList.add('dark');

//   btnIconSunEl.classList.remove('btn-icon-hidden');
//   btnIconMoonEl.classList.add('btn-icon-hidden');
//   headerContainerEl.classList.remove('header-container');
//   headerContainerEl.classList.add('header-container-dark');
//   localStorage.theme = 'dark';
// }

// function setLightTheme() {
//   document.body.classList.remove('dark');

//   btnIconMoonEl.classList.remove('btn-icon-hidden');
//   btnIconSunEl.classList.add('btn-icon-hidden');
//   headerContainerEl.classList.remove('header-container-dark');
//   headerContainerEl.classList.add('header-container');
//   localStorage.theme = 'light';
// }

// btnThemeEl.addEventListener('click', () => {
//   if (document.body.classList.contains('dark')) {
//     setLightTheme();
//   } else {
//     setDarkTheme();
//   }

//   if (localStorage.theme === 'dark' && window.pageYOffset > positionHeader) {
//     headerContainer.classList.add('fixed-header-dark');
//   } else {
//     headerContainer.classList.remove('fixed-header-dark');
//   }
// });

// if (localStorage.theme === 'dark') {
//   setDarkTheme();
// }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//Ірина Петренко
//
//
//
//
//
//
//
//
//
//
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//Мар'яна Собашевська
import { handleMakeBtnAddRemoveWatchedLib } from './js/btnAddToWatchedLib';
import { handleMakeBtnAddRemoveQueueLib } from './js/btnAddToQueueLib';

refs.movieModalEl.addEventListener('click', handleMakeBtnAddRemoveWatchedLib); //обробник для кнопки AddRemoveTo Watched

refs.movieModalEl.addEventListener('click', handleMakeBtnAddRemoveQueueLib);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//Сергій Трефель
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//Денис
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//Матвій Прищенко
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//Ірина
import { createLibraryMarkup } from './js/createLibraryMarkup.js';

const watchedBtn = document.querySelector('.watched-btn');
const queueBtn = document.querySelector('.queue-btn');
const galleryContainerEl = document.querySelector('.gallery-lib-list');
const nothingContainer = document.querySelector('.library-container');

watchedBtn.addEventListener('click', handleWatchedBtn);
queueBtn.addEventListener('click', handleQueueBtn);

let watchedFilms = [];
let queueFilms = [];

function handleWatchedBtn() {
  nothingContainer.style.display = 'none';
  watchedBtn.classList.add('is-active-lib');
  queueBtn.classList.remove('is-active-lib');

  watchedFilms = JSON.parse(localStorage.getItem('watched')) || [];

  if (watchedFilms.length <= 0) {
    nothingContainer.style.display = 'block';
    galleryContainerEl.innerHTML = '';
    return;
  }

  const markup = createLibraryMarkup(watchedFilms);
  galleryContainerEl.innerHTML = markup;
  renderTrailerMarkup(watchedFilms);
}

function handleQueueBtn() {
  watchedBtn.classList.remove('is-active-lib');
  queueBtn.classList.add('is-active-lib');

  queueFilms = JSON.parse(localStorage.getItem('queue')) || [];

  nothingContainer.style.display = 'none';

  if (queueFilms.length <= 0) {
    nothingContainer.style.display = 'block';
    galleryContainerEl.innerHTML = '';
    return;
  }
  const markup = createLibraryMarkup(queueFilms);
  galleryContainerEl.innerHTML = markup;
  renderTrailerMarkup(queueFilms);
}

handleWatchedBtn();

//
//
//
let initialLocalStorageWatched;
let initialLocalStorageQueue;
//
function reNewMarkupByCloseBtn() {
  const afterLocalStorageWatched = JSON.parse(localStorage.getItem('watched'));
  const afterLocalStorageQueue = JSON.parse(localStorage.getItem('queue'));
  if (
    watchedBtn.classList[2] &&
    initialLocalStorageWatched !== afterLocalStorageWatched
  ) {
    handleWatchedBtn();
  }
  if (
    queueBtn.classList[2] &&
    initialLocalStorageQueue !== afterLocalStorageQueue
  ) {
    handleQueueBtn();
  }
}
//

refs.backdropMovieModal.addEventListener('click', onCloseMovieModal);
window.addEventListener('keydown', onCloseMovieModal);
refs.galleryLibListEl.addEventListener('click', handleMovieCard);

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

    reNewMarkupByCloseBtn();
  }
}

function idRewriter(event) {
  if (event.target.nodeName === 'DIV') {
    movieIdForLibModalMarkup = event.target.dataset.id;
    return;
  }
  movieIdForLibModalMarkup = event.target.parentElement.dataset.id;
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
  dataForLibModalMarkup = fetchDataById(movieIdForLibModalMarkup)
    .then(data => {
      refs.backdropMovieModal.classList.remove('is-hidden');
      refs.movieModalEl.classList.remove('is-hidden');
      refs.backdropMovieModal.addEventListener('click', onCloseMovieModal);
      window.addEventListener('keydown', onCloseMovieModal);
      const markup = createMoveModalMarkup(data, movieIdForLibModalMarkup);
      refs.movieModalFilmInfoEl.innerHTML = markup;
      refs.bodyEl.style.overflow = 'hidden';

      return data;
    })
    .catch(error => console.log(error));
  initialLocalStorageWatched = JSON.parse(localStorage.getItem('watched'));
  initialLocalStorageQueue = JSON.parse(localStorage.getItem('queue'));
}
