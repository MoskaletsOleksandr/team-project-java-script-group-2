import { saveLocalStorage } from './localStorage';
import { loadLocalStorage } from './localStorage';
import { dataForModalMarkup } from '..';
const keyQueue = 'queue';
export function handleMakeBtnAddRemoveQueue(event) {
  const btnEl = document.querySelector('.js-film-info__btns');
  if (event.target.dataset.queueBtn === 'add-to-queue') {
    dataForModalMarkup
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
    dataForModalMarkup
      .then(data => {
        const queuedArray = loadLocalStorage(keyQueue);
        const index = queuedArray.findIndex(
          el => Number(el.id) === Number(data.id)
        );
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
