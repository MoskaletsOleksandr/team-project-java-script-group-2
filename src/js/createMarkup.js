const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w400';

export function createTrendMovesMarkup({ results }) {
  return results
    .map(({ backdrop_path, genre_ids, release_date, title }) => {
      return `<ul class="gallery-list">
                <li class="gallery-item">
                    <div class="gallery-card">
                        <img src="${BASE_IMG_URL}${backdrop_path}" width="395" alt="${title}">
      <button class="trailer-button" type="button">Trailer</button>
                        <h3 class="film-title">${title}</h3>
                        <span class="film-genres">Drama, Action</span>|<span class="film-year">${release_date}</span>
                    </div>
                </li>
            </ul>`;
    })
    .join('');
}
