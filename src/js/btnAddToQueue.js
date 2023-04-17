import { saveLocalStorage } from "./localStorage";
import { loadLocalStorage } from "./localStorage";
import { dataForModalMarkup } from "..";
const keyQueue = 'queue';
export function handleMakeBtnAddRemoveQueue(event) {
  if (event.target.dataset.queueBtn === 'add-to-queue') {
    console.log(event.target.dataset);
    dataForModalMarkup
      .then(data => {
        const queuedArray = loadLocalStorage(keyQueue);
        queuedArray.push(data);
        saveLocalStorage(keyQueue, queuedArray);
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
        const queuedArray = loadLocalStorage(keyQueue);
        const index = queuedArray.findIndex(el => Number(el.id) === Number(data.id));
        queuedArray.splice(index, 1);
        localStorage.removeItem(keyQueue);
        saveLocalStorage(keyQueue, queuedArray);
        event.target.textContent = 'Add to queue';
        event.target.dataset.queueBtn = 'add-to-queue';
      })
      .catch(err => {
        console.log(err);
      });
  }
  return;
}
