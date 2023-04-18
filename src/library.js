//імпортуємо бібліотеки та інші файли
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
const refs = {
  searchFormEl: document.querySelector('.form-search'),
  galleryContainerEl: document.querySelector('.gallery-container'),
  aboutTeamBtn: document.querySelector('.about-team'),
  backdropMovieModal: document.querySelector('.backdrop'),
  movieModalEl: document.querySelector('div[data-movie-modal]'),
  modalCloseBtn: document.querySelector('button[data-movie-modal-close]'),
  addToWatchedBtn: document.querySelector('button[data-btn-to-watched]'),
  addToQueueBtn: document.querySelector('button[data-btn-to-queue]'),
  removeFromWatchedBtn: document.querySelector('.remove-from-watched-btn'), // <--- цієї кнопки більше немає в розмітці
  removeFromQueueBtn: document.querySelector('.remove-from-queue-btn'), // <--- цієї кнопки більше немає в розмітці
  btnUpEl: document.querySelector('.btn-up'),

  galleryLibListEl: document.querySelector(".gallery-lib-list"),
  movieModalFilmInfoEl: document.querySelector('.js-film-info'),
  bodyLibEl: document.querySelector(".body-lib")
};
//
//
//
//
//
//
//
//
//
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
    // iconFilmHeader.classList.add('icon-film-fixed');
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

refs.movieModalEl.addEventListener('click',handleMakeBtnAddRemoveQueueLib);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

  watchedFilms = JSON.parse(localStorage.getItem('watched')) || [];
  // console.log(watchedFilms);

  if (watchedFilms.length <= 0) {
    nothingContainer.style.display = 'block';
    galleryContainerEl.innerHTML = '';
    return;
  }

  const markup = createLibraryMarkup(watchedFilms);
  console.log(watchedFilms);
  galleryContainerEl.innerHTML = markup;
  renderTrailerMarkup(watchedFilms);
}

function handleQueueBtn() {
  queueFilms = JSON.parse(localStorage.getItem('queue')) || [];

  nothingContainer.style.display = 'none';

  if (queueFilms.length <= 0) {
    nothingContainer.style.display = 'block';
    galleryContainerEl.innerHTML = '';
    return;
  }
  const markup = createLibraryMarkup(queueFilms);
  galleryContainerEl.innerHTML = markup;
  renderTrailerMarkup(watchedFilms);
}

handleWatchedBtn();

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
let movieIdForLibModalMarkup = null; //При натисканні на картку фільму на головній сторінці сюди заисується id
// фільму і за цим id відбувається запит на бекенд
export let dataForLibModalMarkup = null; //Об'єкт із повною інформацією про фільм,
//який ми отримуємо після натискання на картку фільму на головній сторінці.
// Цей об'єкт перезаписується щоразу після натискання на картку


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
      refs.bodyLibEl.style.overflow = 'hidden';
      console.log(`це dataForLibModalMarkup перед виходом з функції:`, dataForLibModalMarkup);
      console.log(`це movieIdForLibModalMarkup перед виходом з функції:`, movieIdForLibModalMarkup);
      console.log(`це data перед виходом з функції:`, data);
      return data;
    })
    .catch(error => console.log(error));
}