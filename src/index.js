//імпортуємо бібліотеки та інші файли
import { fetchTrendMoves, fetchDataById, fetchMovesByKeyword } from './js/api';
import {
  createTrendMovesMarkup,
  createTrailerIdAndKeysArray,
} from './js/createMarkup';
import throttle from 'lodash.throttle'; // npm i lodash.throttle
import { createMoveModalMarkup } from './js/create-modal-markup';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

//
//
//
//
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
const refs = {
  searchFormEl: document.querySelector('.form-search'),
  searchInputEl: document.querySelector('.input-search'),
  galleryContainerEl: document.querySelector('.gallery-container'),
  galleryListEl: document.querySelector('.gallery-list'),
  aboutTeamBtn: document.querySelector('.about-team'),
  btnUpEl: document.querySelector('.btn-up'),
  bodyEl: document.querySelector('body'),
  backdropMovieModal: document.querySelector('.backdrop'),
  movieModalEl: document.querySelector('div[data-movie-modal]'),
  movieModalFilmInfoEl: document.querySelector('.js-film-info'),
  modalCloseBtn: document.querySelector('button[data-movie-modal-close]'),
  // addToWatchedBtn: document.querySelector('button[data-btn-to-watched]'),
  //   addToQueueBtn: document.querySelector('button[data-btn-to-queue]'),
  teamModalOpenBtn: document.querySelector('button[data-team-modal-open]'),
  teamModalCloseBtn: document.querySelector('button[data-team-modal-close]'),
  teamModal: document.querySelector('div[data-team-modal]'),
};
//
//
let movieIdForModalMarkup = null; //При натисканні на картку фільму на головній сторінці сюди заисується id
// фільму і за цим id відбувається запит на бекенд
export let dataForModalMarkup = null; //Об'єкт із повною інформацією про фільм,
//який ми отримуємо після натискання на картку фільму на головній сторінці.
// Цей об'єкт перезаписується щоразу після натискання на картку

//Аліна присяжнюк
//
const headerEl = document.querySelector('.header');
const headerContainer = document.querySelector('.header-container');
const logoHeader = document.querySelector('.header-logo');
const logoTextHeader = document.querySelector('.header-text-logo');
const iconFilmHeader = document.querySelector('.icon-film');
//const searchBox = document.querySelector('.search');
let positionHeader = headerEl.offsetTop;
function onScrollHeader() {
  if (window.pageYOffset > positionHeader) {
    headerEl.classList.add('fixed');
    headerContainer.classList.add('fixed-header');
    logoHeader.classList.add('fixed-logo');
    logoTextHeader.classList.add('text-logo-fixed');
    iconFilmHeader.classList.add('icon-film-fixed');
    //searchBox.classList.add('fixed-search');
  } else {
    headerEl.classList.remove('fixed');
    headerContainer.classList.remove('fixed-header');
    headerContainer.classList.remove('fixed-header-dark');
    logoHeader.classList.remove('fixed-logo');
  }

  if (window.pageYOffset > positionHeader && localStorage.theme === 'dark') {
    headerContainer.classList.add('fixed-header-dark');
  }
}

window.addEventListener('scroll', onScrollHeader);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

refs.btnUpEl.addEventListener('click', scrollUp);

function show() {
  refs.btnUpEl.classList.remove('btn-up_hide');
}

function hide() {
  refs.btnUpEl.classList.add('btn-up_hide');
}

window.addEventListener(
  'scroll',
  throttle(() => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;

    scrollY > 400 ? show() : hide();
  }, 500)
);

function scrollUp() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
}
//
//------- btnTheme -------
//
const btnThemeEl = document.querySelector('.btn-theme');
const headerContainerEl = document.querySelector('.header-container');
const btnIconMoonEl = document.querySelector('.btn-icon-moon');
const btnIconSunEl = document.querySelector('.btn-icon-sun');

function setDarkTheme() {
  document.body.classList.add('dark');

  btnIconSunEl.classList.remove('btn-icon-hidden');
  btnIconMoonEl.classList.add('btn-icon-hidden');
  headerContainerEl.classList.remove('header-container');
  headerContainerEl.classList.add('header-container-dark');
  localStorage.theme = 'dark';
}

function setLightTheme() {
  document.body.classList.remove('dark');

  btnIconMoonEl.classList.remove('btn-icon-hidden');
  btnIconSunEl.classList.add('btn-icon-hidden');
  headerContainerEl.classList.remove('header-container-dark');
  headerContainerEl.classList.add('header-container');
  localStorage.theme = 'light';
}

btnThemeEl.addEventListener('click', () => {
  if (document.body.classList.contains('dark')) {
    setLightTheme();
  } else {
    setDarkTheme();
  }

  if (localStorage.theme === 'dark' && window.pageYOffset > positionHeader) {
        headerContainer.classList.add('fixed-header-dark');
  } else {
    headerContainer.classList.remove('fixed-header-dark');
      }
});

if (localStorage.theme === 'dark') {
  setDarkTheme();
}
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
// teamModalOpenBtn: document.querySelector('button[data-team-modal-open]'),
// teamModalCloseBtn: document.querySelector('div[data-team-modal-close]'),
// teamModal: document.querySelector('div[data-team-modal]'),

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
//
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

import { handleMakeBtnAddRemoveWatched } from './js/btnAddToWatched';
import { handleMakeBtnAddRemoveQueue } from './js/btnAddToQueue';
import { saveLocalStorage } from './js/localStorage';
import { loadLocalStorage } from './js/localStorage';
const keyQueue = 'queue';
const keyWatched = 'watched'; 

refs.movieModalEl.addEventListener('click', handleMakeBtnAddRemoveWatched); //обробник для кнопки AddRemoveTo Watched


refs.movieModalEl.addEventListener('click', handleMakeBtnAddRemoveQueue);


//
//
//
//
//
//
//
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
    }, 300);
  })
  .catch(error => console.log(error));

refs.searchFormEl.addEventListener('submit', handleClickSearchButton);

function handleClickSearchButton(e) {
  e.preventDefault();
  const inputData = refs.searchInputEl.value;
  if (inputData === '') {
    Notify.failure('Input is empty');
    return;
  }
  fetchMovesByKeyword(inputData.trim())
    .then(data => {
      if (data.results.length === 0) {
        Notify.failure('No results for your search');
        return;
      }
      createTrailerIdAndKeysArray(data);
      setTimeout(() => {
        renderMarkup(data);
      }, 300);
      scrollUp();
    })
    .catch(error => console.log(error));
}
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
//
//
//Ірина
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//Олена
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//Олександр
//
//
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
//
//
//
//
