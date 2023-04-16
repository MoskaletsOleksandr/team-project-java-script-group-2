import {BASE_IMG_URL, GENRES} from './createMarkup'


export function createLibraryMarkup( results ) {
    const genreNames = GENRES.slice(0, 2).map(genre => ` ${genre.name}`);

    if (GENRES.length > 2) {
    genreNames.push('...other');
    }
    
  return results
    .map(({ poster_path, release_date, title, id }) => {
      BASE_IMG_URL = 'https://image.tmdb.org/t/p/w400';
      if (poster_path === null) {
        BASE_IMG_URL = '';
        poster_path =
          'https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-for-website-design-or-mobile-app-no-photo-available_87543-11093.jpg?w=1480';
      }
      if (release_date === '') {
        release_date = 'None';
      }
      return `<li class="gallery-item">
                    <div class="gallery-container-img" data-id='${id}'>
                    <div class="gallery-card" data-id='${id}'>
                        <img class="gallery-img" src="${BASE_IMG_URL}${poster_path}" alt="${title}">
                        <button class="trailer-button" type="button">Trailer</button>
                        </div>
                        <div class="gallery-film" data-id='${id}'>
                        <h3 class="film-title">${title}
                        </h3>
                        <span class="film-genres">${genreNames}</span><span class="film-year"> | ${release_date.slice(
                          0,
                          4
                        )}</span></div>
                    </div>
                </li>`;
    })
    .join('');
}
