//імпортуємо бібліотеки та інші файли
import { fetchTrendMoves, fetchDataById, fetchMovesByKeyword } from './js/api';
import { createTrendMovesMarkup } from './js/createMarkup';
import throttle from 'lodash.throttle'; // npm i lodash.throttle
import { createMoveModalMarkup } from './js/create-modal-markup';
//
//
//
//
//
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
  backdropMovieModal: document.querySelector('.backdrop'),
  movieModalEl: document.querySelector('div[data-movie-modal]'),
  movieModalFilmInfoEl: document.querySelector('.js-film-info'),
  modalCloseBtn: document.querySelector('button[data-movie-modal-close]'),
  // addToWatchedBtn: document.querySelector('button[data-btn-to-watched]'),
  // addToQueueBtn: document.querySelector('button[data-btn-to-queue]'),
  teamModalOpenBtn: document.querySelector('button[data-team-modal-open]'),
  teamModalCloseBtn: document.querySelector('button[data-team-modal-close]'),
  teamModal: document.querySelector('div[data-team-modal]'),
};
//
//
//
let movieIdForModalMarkup = null; //При натисканні на картку фільму на головній сторінці сюди заисується id
// фільму і за цим id відбувається запит на бекенд
let dataForModalMarkup = null; //Об'єкт із повною інформацією про фільм,
//який ми отримуємо після натискання на картку фільму на головній сторінці.
// Цей об'єкт перезаписується щоразу після натискання на картку

//
//
//
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
refs.movieModalEl.addEventListener('click', handleMakeBtnAddRemoveWatched);
function handleMakeBtnAddRemoveWatched(event) {
  if (event.target.dataset.watchedBtn === 'add-to-watched') {
    console.log(event.target.dataset);
    dataForModalMarkup
      .then(data => {
        const getLocalStorage = localStorage.getItem('watched');
        const parseLocalStorage = JSON.parse(getLocalStorage);
        parseLocalStorage.push(data);

        localStorage.setItem('watched', JSON.stringify(parseLocalStorage));

        event.target.textContent = 'Remove from watched';
        event.target.dataset.watchedBtn = 'remove-from-watched';
      })
      .catch(err => {
        console.log(err);
      });
  } else if (event.target.dataset.watchedBtn === 'remove-from-watched') {
    console.log(event.target.dataset);
    dataForModalMarkup
      .then(data => {
        const getLocalStorage = localStorage.getItem('watched');
        const parseLocalStorage = JSON.parse(getLocalStorage);
        parseLocalStorage.push(data);

        localStorage.setItem('watched', JSON.stringify(parseLocalStorage));

        event.target.textContent = 'Add to watched';
        event.target.dataset.watchedBtn = 'add-to-watched';
      })
      .catch(err => {
        console.log(err);
      });
  }
  return;
}

refs.movieModalEl.addEventListener('click', handleMakeBtnAddRemoveQueue);

function handleMakeBtnAddRemoveQueue(event) {
  if (event.target.dataset.queueBtn === 'add-to-queue') {
    console.log(event.target.dataset);
    dataForModalMarkup
      .then(data => {
        const getLocalStorage = localStorage.getItem('queue');
        const parseLocalStorage = JSON.parse(getLocalStorage);
        parseLocalStorage.push(data);

        localStorage.setItem('queue', JSON.stringify(parseLocalStorage));

        event.target.textContent = 'Remove from queue';
        event.target.dataset.queueBtn = 'remove-from-queue';
      })
      .catch(err => {
        console.log(err);
      });
  } else if (event.target.dataset.queueBtn === 'remove-from-queue') {
    console.log(event.target.dataset);
    dataForModalMarkup
      .then(data => {
        const getLocalStorage = localStorage.getItem('queue');
        const parseLocalStorage = JSON.parse(getLocalStorage);
        parseLocalStorage.push(data);

        localStorage.setItem('queue', JSON.stringify(parseLocalStorage));

        event.target.textContent = 'Add to queue';
        event.target.dataset.queueBtn = 'add-to-queue';
      })
      .catch(err => {
        console.log(err);
      });
  }
  return;
}

function checkLocalStorage() {
  if (!localStorage.watched && !localStorage.queue) {
    let localStorageArray = [];
    localStorage.setItem('watched', JSON.stringify(localStorageArray));
    localStorage.setItem('queue', JSON.stringify(localStorageArray));
    // refs.addToWatchedBtn.textContent = 'Add to watch';
    // refs.addToQueueBtn.textContent = 'Add to Queue';
  } else {
    const getLocalStorageWatched = localStorage.getItem('watched');
    const parseLocalStorageWatched = JSON.parse(getLocalStorageWatched);
    parseLocalStorageWatched.map(el => {
      const { id } = el;
      if (id === Number(movieIdForModalMarkup)) {
        refs.addToWatchedBtn.textContent = 'Remove from watch';
      } else {
        refs.addToWatchedBtn.textContent = 'Add to watch';
      }
    });
    const getLocalStorageQueue = localStorage.getItem('queue');
    const parseLocalStorageQueue = JSON.parse(getLocalStorageQueue);

    parseLocalStorageQueue.map(el => {
      const { id } = el;
      if (id === Number(movieIdForModalMarkup)) {
        refs.addToQueueBtn.textContent = 'Add to Queue';
      } else {
        refs.addToQueueBtn.textContent = 'Remove from Queue';
      }
    });
  }
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
//Денис
function renderMarkup(array) {
  const markup = createTrendMovesMarkup(array);
  refs.galleryListEl.innerHTML = '';
  refs.galleryListEl.insertAdjacentHTML('beforeend', markup);
}
fetchTrendMoves()
  .then(data => {
    renderMarkup(data);
  })
  .catch(error => console.log(error));

refs.searchFormEl.addEventListener('submit', handleClickSearchButton);

function handleClickSearchButton(e) {
  e.preventDefault();
  const inputData = refs.searchInputEl.value;
  if (inputData === '') {
    alert('Please try again');
    return;
  }
  fetchMovesByKeyword(inputData.trim())
    .then(data => {
      console.log(data);
      if (data.results.length === 0) {
        alert('Please try again');
        return;
      }
      renderMarkup(data);
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
    e.target.classList[0] === 'modal__close' ||
    e.target.classList[0] === 'icon-close' ||
    e.target.classList[0] === 'svg-icon-close' ||
    e.code === 'Escape'
  ) {
    refs.backdropMovieModal.classList.add('is-hidden');
    refs.movieModalEl.classList.add('is-hidden');
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

function handleMovieCard(event) {
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

      const markup = createMoveModalMarkup(data);
      refs.movieModalFilmInfoEl.innerHTML = markup;
      return data;
    })
    .catch(error => console.log(error));
  checkLocalStorage();
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
