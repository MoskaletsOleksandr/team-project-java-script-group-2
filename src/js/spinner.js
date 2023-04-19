import refs from './refs';

export function spinnerPlay() {
  refs.bodyEl.classList.add('loading');
}

export function spinnerStop() {
  setTimeout(function () {
    refs.bodyEl.classList.remove('loading');
    refs.bodyEl.classList.add('loaded');
  }, 1000);
}
spinnerPlay();
spinnerStop();
