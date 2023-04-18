import { saveLocalStorage } from "./localStorage";
import { loadLocalStorage } from "./localStorage";
import { dataForModalMarkup } from "..";

const keyWatched = 'watched'; 
const btnEl = document.querySelector('.js-film-info__btns');

console.log(btnEl);
export function handleMakeBtnAddRemoveWatched(event) {
  const btnEl = document.querySelector('.js-film-info__btns');
  if (event.target.dataset.watchedBtn === 'add-to-watched') {
<<<<<<< Updated upstream
    // console.log(event.target.dataset);
=======
>>>>>>> Stashed changes
    dataForModalMarkup
      .then(data => {
        const watchedArray = loadLocalStorage(keyWatched);                      
        watchedArray.push(data);
        saveLocalStorage(keyWatched, watchedArray);
        event.target.textContent = 'Remove from watched';
        event.target.dataset.watchedBtn = 'remove-from-watched';
<<<<<<< Updated upstream
        event.target.classList.add('active-btn')
=======
        event.target.classList.add('active-btn');
        btnEl.children[1].classList.remove('active-btn');
>>>>>>> Stashed changes
      })
      .catch(err => {
        console.log(err);
      });
  } else if (event.target.dataset.watchedBtn === 'remove-from-watched') {
    console.log(event.target.dataset);
    dataForModalMarkup
      .then(data => {
        const watchedArray = loadLocalStorage(keyWatched);
        const index = watchedArray.findIndex(el => Number(el.id) === Number(data.id));
        watchedArray.splice(index, 1);
        localStorage.removeItem(keyWatched);
        saveLocalStorage(keyWatched, watchedArray); 
        event.target.textContent = 'Add to watched';
        event.target.dataset.watchedBtn = 'add-to-watched';
<<<<<<< Updated upstream
        event.target.classList.add('active-btn')
=======
        event.target.classList.add('active-btn');
        btnEl.children[1].classList.remove('active-btn');
>>>>>>> Stashed changes
      })
      .catch(err => {
        console.log(err);
      });
  }
  return;
}