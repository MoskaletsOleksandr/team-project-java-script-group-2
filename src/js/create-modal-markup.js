export function createMoveModalMarkup(data) {
  const BASE_IMG_URL = 'https://image.tmdb.org/t/p/original';

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

  const listOfGenres = genres.map(genre => genre.name).join(', ');

  return `
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
                        <td class="js-film-info__genre">${listOfGenres}</td>
                      </tr>
                    </table>
                    <h3 class="js-film-info__description-title">About</h3>
                    <p class="js-film-info__description-text">${overview}
                    </p>
                    <div class="js-film-info__btns">
                      <button
                        type="button"
                        class="js-film-info__btn active-btn"
                        data-watched-btn=add-to-watched
                      >
                        add to Watched
                      </button>
                      <button type="button" class="js-film-info__btn" data-queue-btn=add-to-queue>
                        add to queue
                      </button>
                    </div>
                  </div>`;
}
