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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

// функція додає обєкт до сховища
function saveLocalStorage(key, value) {
  try {localStorage.setItem(key, JSON.stringify(value));}
  catch {console.log(error);}
}
// функція повертає інформацію про обєкт із сховища
function loadLocalStorage(key) {
  try {const get = localStorage.getItem(key);
    return parse = JSON.parse(get);}
  catch {console.log(error);}
}
// оголошую змінні для ключів до сховища
const keyWatched = 'watched'; 
const keyQueue = 'queue';

// функція викликаться при завантаженні модалки
function checkLocalStorage() {
  const objectArray = [];   // огошую прожній масив
  dataForModalMarkup.then((data) => {     
    if (localStorage.length === 0) {          // якщо сховище порожнє, добавляю порожний масив по двом ключам
      saveLocalStorage(keyWatched, objectArray);
      saveLocalStorage(keyQueue, objectArray);
     
    } else {                                    //якщо масив не порожний, шукаю, чи даний обєкт є сховищі
       const watchedArray = loadLocalStorage(keyWatched);                   // для watched
      if (watchedArray.some(el => Number(el.id) === Number(data.id))) {    //тут потрібно задати кнопці textContent = remove
          divBtnEl.children[0].textContent = 'remove from Watched';        // але не можу перезаписати значення
      }
       
      // const queueArray = loadLocalStorage(keyQueue);
      // if (queueArray.some(el => Number(el.id) === Number(data.id))) {      // тут для queue
      //   divBtnEl.children[1].textContent = 'remove from Queue';
      // }
  } 
  })
  .catch(err=>console.log(err))
}
  

refs.movieModalEl.addEventListener('click', handleMakeBtnAddRemoveWatched); // клік по кнопці watched

function handleMakeBtnAddRemoveWatched(event) {                                 // функція обробника події кліку
  dataForModalMarkup
    .then((data) => {
      console.log(data);
      if (event.target.textContent.trim() === "add to Watched") {                //якщо надпис на кнопці add то додаємо обєкт до сховища 
        const watchedArray = loadLocalStorage(keyWatched);                       // з ключем watched   
        watchedArray.push(data);
        saveLocalStorage(keyWatched, watchedArray);
        event.target.textContent = "remove from Watched"; 
      }
      else if (event.target.textContent.trim() === "remove from Watched") {       //якщо надпис remove то видаляє обєкт зі сховища 
        const watchedArray = loadLocalStorage(keyWatched);
        const index = watchedArray.findIndex(el => Number(el.id) === Number(data.id));
        watchedArray.splice(index, 1);
        localStorage.removeItem(keyWatched);
        saveLocalStorage(keyWatched, watchedArray);
        event.target.textContent = "add to Watched";
      }
    }
     
    )   
}

// refs.movieModalEl.addEventListener('click', handleMakeBtnAddRemoveQueue);          // зробила аналогічну функцію для кнопки queue
// function handleMakeBtnAddRemoveQueue(event) {                                      // але не можу зрозуміти як добавити слухача на неї
//   dataForModalMarkup
//     .then((data) => {
    
//         if (event.target.textContent.trim() === "add to Watched") {
//         const queuedArray = loadLocalStorage(keyQueue);
//         queuedArray.push(data);
//         saveLocalStorage(keyQueue, queuedArray);
//         event.target.textContent = "remove from Queue"; 
//         } else if (event.target.textContent.trim() === "remove from Queue") {
//         const queuedArray = loadLocalStorage(keyQueue);
//         const index = queuedArray.findIndex(el => Number(el.id) === Number(data.id));
//         queuedArray.splice(index, 1);
//         localStorage.removeItem(keyQueue);
//         saveLocalStorage(keyWatched, queuedArray);
//         event.target.textContent = "add to Watched";
//     }
//     }
     
//     )
     
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
