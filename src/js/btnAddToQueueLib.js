import { saveLocalStorage } from "./localStorage";
import { loadLocalStorage } from "./localStorage";
import { dataForLibModalMarkup } from "../library";

const keyQueue = 'queue';

export function handleMakeBtnAddRemoveQueueLib(event) {
  const btnEl = document.querySelector('.js-film-info__btns');
  const liEl = document.querySelector('.gallery-item');
    
  if (event.target.dataset.queueBtn === 'add-to-queue') {
    dataForLibModalMarkup
      .then(data => {
        const queuedArray = loadLocalStorage(keyQueue);
        queuedArray.push(data);
        saveLocalStorage(keyQueue, queuedArray);
        event.target.textContent = 'Remove from queue';
        event.target.dataset.queueBtn = 'remove-from-queue';
        event.target.classList.add('active-btn');
        btnEl.children[0].classList.remove('active-btn');
      })
      .catch(err => {
        console.log(err);
      });
  } else if (event.target.dataset.queueBtn === 'remove-from-queue') {

    dataForLibModalMarkup
      .then(data => {
        const queuedArray = loadLocalStorage(keyQueue);
        const index = queuedArray.findIndex(el => Number(el.id) === Number(data.id));
        queuedArray.splice(index, 1);
        localStorage.removeItem(keyQueue);
        saveLocalStorage(keyQueue, queuedArray);
        event.target.textContent = 'Add to queue';
        event.target.dataset.queueBtn = 'add-to-queue';
        event.target.classList.add('active-btn');
        btnEl.children[0].classList.remove('active-btn');
        
      })
      .catch(err => {
        console.log(err);
      });
  }
  return;
}
