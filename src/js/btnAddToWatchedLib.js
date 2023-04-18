import { saveLocalStorage } from "./localStorage";
import { loadLocalStorage } from "./localStorage";
import { dataForLibModalMarkup } from "../library";

const keyWatched = 'watched'; 

export function handleMakeBtnAddRemoveWatchedLib(event) {
  const btnEl = document.querySelector('.js-film-info__btns');
  const liEl = document.querySelector('.gallery-item');

  if (event.target.dataset.watchedBtn === 'add-to-watched') {
     dataForLibModalMarkup 
      .then(data => {
        const watchedArray = loadLocalStorage(keyWatched);  
        watchedArray.forEach(el => { 
          if (Number(el.id) === Number(data.id)){ liEl.remove();}});                  
        watchedArray.push(data);
        saveLocalStorage(keyWatched, watchedArray);
        event.target.textContent = 'Remove from watched';
        event.target.dataset.watchedBtn = 'remove-from-watched';
        event.target.classList.add('active-btn');
        btnEl.children[1].classList.remove('active-btn');
      })
      .catch(err => {
        console.log(err);
      });
  } else if (event.target.dataset.watchedBtn === 'remove-from-watched') {
    
    dataForLibModalMarkup 
      .then(data => {
       const watchedArray = loadLocalStorage(keyWatched);
        const index = watchedArray.findIndex(el => Number(el.id) === Number(data.id));
        watchedArray.splice(index, 1);
        localStorage.removeItem(keyWatched);
        saveLocalStorage(keyWatched, watchedArray); 
        event.target.textContent = 'Add to watched';
        event.target.dataset.watchedBtn = 'add-to-watched';
        event.target.classList.add('active-btn');
        btnEl.children[1].classList.remove('active-btn');
      })
      .catch(err => {
        console.log(err);
      });
  }
  return;
}