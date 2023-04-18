//імпортуємо бібліотеки та інші файли
import './js/btnUp';
//
//
//
//
//
//
//
//
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  console.log(watchedFilms);

  if (watchedFilms.length <= 0) {
    nothingContainer.style.display = 'block';
    galleryContainerEl.innerHTML = '';
    return;
  }

  const markup = createLibraryMarkup(watchedFilms);
  galleryContainerEl.innerHTML = markup;
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
