//імпортуємо бібліотеки та інші файли
import { fetchTrendMoves } from './js/api';
import { createTrendMovesMarkup } from './js/createMarkup';
import { fetchDataById } from './js/fetch-data-by-id';
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
// refs
const refs = {
  searchFormEl: document.querySelector('.form-search'),
  galleryContainerEl: document.querySelector('.gallery-container'),
  galleryListEl: document.querySelector('.gallery-list'),
  aboutTeamBtn: document.querySelector('.about-team'),
  btnUpEl: document.querySelector('.btn-up'),
  backdropMovieModal: document.querySelector('.backdrop'),
  movieModalEl: document.querySelector('div[data-movie-modal]'),
  movieModalFilmInfoEl: document.querySelector('.wrap'),
  modalCloseBtn: document.querySelector('button[data-movie-modal-close]'),
  addToWatchedBtn: document.querySelector('button[data-btn-to-watched]'),
  addToQueueBtn: document.querySelector('button[data-btn-to-queue]'),
  teamOpenModalBtn: document.querySelector('button[data-team-modal-open]'),
  teamCloseModalBtn: document.querySelector('div[data-team-modal-close]'),
  teamModal: document.querySelector('div[data-team-modal]'),
};
//
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
// teamOpenModalBtn: document.querySelector('button[data-team-modal-open]'),
// teamCloseModalBtn: document.querySelector('div[data-team-modal-close]'),
// teamModal: document.querySelector('div[data-team-modal]'),

refs.teamOpenModalBtn.addEventListener('click', e => {});

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
refs.addToWatchedBtn.addEventListener('click', handleMakeBtnAddWatched);
function handleMakeBtnAddWatched() {
  dataForModalMarkup
    .then(data => {
      const getLocalStorage = localStorage.getItem('watched');
      const parseLocalStorage = JSON.parse(getLocalStorage);
      parseLocalStorage.push(data);

      localStorage.setItem('watched', JSON.stringify(parseLocalStorage));

      refs.addToWatchedBtn.textContent = 'Remove from watch';
    })
    .catch(err => {
      console.log(err);
    });
}

refs.addToQueueBtn.addEventListener('click', handleMakeBtnAddQueue);

function handleMakeBtnAddQueue() {
  dataForModalMarkup
    .then(data => {
      const getLocalStorage = localStorage.getItem('queue');
      const parseLocalStorage = JSON.parse(getLocalStorage);
      parseLocalStorage.push(data);

      localStorage.setItem('queue', JSON.stringify(parseLocalStorage));

      refs.addToQueueBtn.textContent = 'Remove from queue';
    })
    .catch(err => {
      console.log(err);
    });
}

// записав твою перевірку в окрему фінкцію, яку запускаємо при натисканні на картку. Тільки тоді воно коректно малює
//текст на кнопках. Але треба трохи допиляти логіку перевірок, бо коли я додам фільм до масиву, то все супер, функція переписує
// текст із Add to watch на Remove from watch, а Add to Queue не чіпає. Але якщо відкрити ту ж картку, то перевірка коректно
//замінить текст із Add to watch на Remove from watch, але і наступна перевірка:
// if (id === Number(movieIdForModalMarkup)) {
//   refs.addToQueueBtn.textContent = 'Add to Queue';
// } else {
//   refs.addToQueueBtn.textContent = 'Remove from Queue';
// }
//  спрацьовує і переписує Add to Queue на Remove from Queue (коли в чергу ми не додавали).
// Треба якось більш специфічно перевіряти, виходить. Щось я вже й сам заплутався((((((
function checkLocalStorage() {
  if (!localStorage.watched && !localStorage.queue) {
    let localStorageArray = [];
    localStorage.setItem('watched', JSON.stringify(localStorageArray));
    localStorage.setItem('queue', JSON.stringify(localStorageArray));
    refs.addToWatchedBtn.textContent = 'Add to watch';
    refs.addToQueueBtn.textContent = 'Add to Queue';
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
fetchTrendMoves()
  .then(data => {
    renderMarkup(data);
  })
  .catch(error => console.log(error));

function renderMarkup(array) {
  const markup = createTrendMovesMarkup(array);
  refs.galleryListEl.insertAdjacentHTML('beforeend', markup);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
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

function modalOpener(event) {
  if (
    event.target.nodeName !== 'IMG' &&
    event.target.nodeName !== 'DIV' &&
    event.target.nodeName !== 'H3' &&
    event.target.nodeName !== 'SPAN'
  ) {
    return;
  } else if (event.target.nodeName === 'DIV') {
    movieIdForModalMarkup = event.target.dataset.id;
    return;
  }
  movieIdForModalMarkup = event.target.parentElement.dataset.id;
  return;
}

function handleMovieCard(event) {
  modalOpener(event); //ця функція перезаписує значення movieIdForModalMarkup
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
refs.galleryContainerEl.addEventListener('click', handleMovieCard);

refs.modalCloseBtn.addEventListener('click', toggleModal);
