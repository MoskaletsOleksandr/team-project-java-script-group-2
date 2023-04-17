import { saveLocalStorage } from "./localStorage";
import { loadLocalStorage } from "./localStorage";
import { dataForModalMarkup } from "..";

const keyWatched = 'watched'; 

export function handleMakeBtnAddRemoveWatched(event) {
  if (event.target.dataset.watchedBtn === 'add-to-watched') {
    console.log(event.target.dataset);
    dataForModalMarkup
      .then(data => {
        const watchedArray = loadLocalStorage(keyWatched);                      
        watchedArray.push(data);
        saveLocalStorage(keyWatched, watchedArray);
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
       const watchedArray = loadLocalStorage(keyWatched);
        const index = watchedArray.findIndex(el => Number(el.id) === Number(data.id));
        watchedArray.splice(index, 1);
        localStorage.removeItem(keyWatched);
        saveLocalStorage(keyWatched, watchedArray); 
        event.target.textContent = 'Add to watched';
        event.target.dataset.watchedBtn = 'add-to-watched';
      })
      .catch(err => {
        console.log(err);
      });
  }
  return;
}