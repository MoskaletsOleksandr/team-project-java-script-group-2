import { saveLocalStorage } from "./localStorage";
import { loadLocalStorage } from "./localStorage";
import noimage from '../images/noimage.jpg';
export function createMoveModalMarkup(data, movieIdForModalMarkup) {

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
  const poster = poster_path
  ? `https://image.tmdb.org/t/p/w400/${poster_path}`
  : noimage;
  const listOfGenres = genres.map(genre => genre.name).join(', ');
  // ------------ ls---------------------------------------
  let addToWatchedAtr = 'add-to-watched';
  let addToWatchedText = 'add to watched';
  let addToQueueAtr = 'add-to-queue';
  let addToQueueText = 'add to queue';
  const keyWatched = 'watched';
  const keyQueue = 'queue';

  if (!localStorage.watched && !localStorage.queue) {
    let objectArray = [];
    saveLocalStorage(keyWatched, objectArray);
    saveLocalStorage(keyQueue, objectArray);
   
  } else {
    const watchedArray = loadLocalStorage(keyWatched);
    const queueArray = loadLocalStorage(keyQueue);
    
    if (watchedArray.some(el => Number(el.id) === Number(data.id))) {
      addToWatchedAtr = 'remove-from-watched';
      addToWatchedText = 'remove from watched';      
    }
    if (queueArray.some(el => Number(el.id) === Number(data.id))) {
      addToQueueAtr = 'remove-from-queue';
      addToQueueText = 'remove from queue';     
    }
  }

  return `
                   <div class="js-film-info__thumb">
                     <img
                       src="${poster}"
                       alt="${title}"
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
                        <td class="js-film-info__genre">${listOfGenres}</td>
                      </tr>
                    </table>
                    <h3 class="js-film-info__description-title">About</h3>
                    <p class="js-film-info__description-text">${overview}
                    </p>
                    <div class="js-film-info__btns">
                      <button
                        type="button"
                        class="js-film-info__btn"
                        data-watched-btn=${addToWatchedAtr}
                      >
                        ${addToWatchedText}
                      </button>
                      <button type="button" class="js-film-info__btn" data-queue-btn=${addToQueueAtr}>
                        ${addToQueueText}

                      </button>
                    </div>
                  </div>`;
}
