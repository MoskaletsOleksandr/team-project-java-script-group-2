//імпортуємо бібліотеки та інші файли
import { fetchTrendMoves } from './js/api';
import { createTrendMovesMarkup } from './js/createMarkup';
import { fetchDataById } from './js/fetch-data-by-id';
import throttle from 'lodash.throttle'; // npm i lodash.throttle
//
//
//
//
//
//
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
  movieModalFilmInfoEl: document.querySelector('.js-film-info'),
  modalCloseBtn: document.querySelector('button[data-movie-modal-close]'),
  addToWatchedBtn: document.querySelector('button[data-btn-to-watched]'),
  addToQueueBtn: document.querySelector('button[data-btn-to-queue]'),
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
// refs.addToWatchedBtn.addEventListener('click', handleMakeBtnAddWatched);
// function handleMakeBtnAddWatched() {
//   dataForModalMarkup
//     .then(data => {
//       const getLocalStorage = localStorage.getItem('watched');
//       const parseLocalStorage = JSON.parse(getLocalStorage);
//       parseLocalStorage.push(data);

//       localStorage.setItem('watched', JSON.stringify(parseLocalStorage));

//       refs.addToWatchedBtn.textContent = 'Remove from watch';
//     })
//     .catch(err => {
//       console.log(err);
//     });
// }

// refs.addToQueueBtn.addEventListener('click', handleMakeBtnAddQueue);

// function handleMakeBtnAddQueue() {
//   dataForModalMarkup
//     .then(data => {
//       const getLocalStorage = localStorage.getItem('queue');
//       const parseLocalStorage = JSON.parse(getLocalStorage);
//       parseLocalStorage.push(data);

//       localStorage.setItem('queue', JSON.stringify(parseLocalStorage));

//       refs.addToQueueBtn.textContent = 'Remove from queue';
//     })
//     .catch(err => {
//       console.log(err);
//     });
// }

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
    // console.log(parseLocalStorageWatched);
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
    // console.log(parseLocalStorageQueue);

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
const BASE_IMG_URL = 'https://image.tmdb.org/t/p/original';

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
    console.log(movieIdForModalMarkup);
    return;
  }
  movieIdForModalMarkup = event.target.parentElement.dataset.id;
  console.log(movieIdForModalMarkup);
  return;
}

function handleMovieCard(event) {
  modalOpener(event); //ця функція перезаписує значення movieIdForModalMarkup
  dataForModalMarkup = fetchDataById(movieIdForModalMarkup)
    .then(data => {
      console.log(data);
      refs.backdropMovieModal.classList.remove('is-hidden');
      refs.movieModalEl.classList.remove('is-hidden');
      refs.backdropMovieModal.addEventListener('click', onCloseMovieModal);
      window.addEventListener('keydown', onCloseMovieModal);
      const {
        poster_path,
        title,
        vote_average,
        vote_count,
        popularity,
        original_title,
        genres,
        overview,
      } = data;
      return (refs.movieModalFilmInfoEl.innerHTML = `
                   <div class="js-film-info__thumb">
                     <img
                       src="${BASE_IMG_URL}${poster_path}"
                       alt="${title}"
                       width="240"
                       class="js-film-info__poster"
                     />
                  </div>
                  <div class="js-film-info__content">
                    <h2 class="js-film-info__name">${title}</h2>
                    <table class="js-film-info__table-thumb">
                      <tr class="js-film-info__item">
                        <td class="js-film-info__title">Vote / Votes</td>
                        <td>
                          <span class="js-film-info__vote">${vote_average}</span>
                          <span class="slash">/</span>
                          <span class="js-film-info__votes">${vote_count}</span>
                        </td>
                      </tr>
                      <tr class="js-film-info__item">
                        <td class="js-film-info__title">Popularity</td>
                        <td class="js-film-info__popularity">${popularity}</td>
                      </tr>
                      <tr class="js-film-info__item">
                        <td class="js-film-info__title">Original Title</td>
                        <td class="js-film-info__original-title">${original_title}</td>
                      </tr>
                      <tr class="js-film-info__item">
                        <td class="js-film-info__title">Genre</td>
                        <td class="js-film-info__genre">${genres}</td>
                      </tr>
                    </table>
                    <h3 class="js-film-info__description-title">About</h3>
                    <p class="js-film-info__description-text">${overview}
                    </p>
                    <div class="js-film-info__btns">
                      <button
                        type="button"
                        class="js-film-info__btn active-btn"
                        data-btn-to-watched
                      >
                        add to Watched
                      </button>
                      <button type="button" class="js-film-info__btn" data-btn-to-queue>
                        add to queue
                      </button>
                    </div>
                  </div>`);
    })
    .catch(error => console.log(error));
  checkLocalStorage();
}
