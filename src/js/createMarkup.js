const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w400';
const GENRES = [
  { id: 28, name: 'Action' },
  { id: 12, name: 'Adventure' },
  { id: 16, name: 'Animation' },
  { id: 35, name: 'Comedy' },
  { id: 80, name: 'Crime' },
  { id: 99, name: 'Documentary' },
  { id: 18, name: 'Drama' },
  { id: 10751, name: 'Family' },
  { id: 14, name: 'Fantasy' },
  { id: 36, name: 'History' },
  { id: 27, name: 'Horror' },
  { id: 10402, name: 'Music' },
  { id: 9648, name: 'Mystery' },
  { id: 10749, name: 'Romance' },
  { id: 878, name: 'Science Fiction' },
  { id: 10770, name: 'TV Movie' },
  { id: 53, name: 'Thriller' },
  { id: 10752, name: 'War' },
  { id: 37, name: 'Western' },
];

function createGenresArray(array) {
  const newArray = [];
  for (const element of array) {
    GENRES.forEach(item => {
      if (item.id === element) {
        newArray.push(` ${item.name}`);
      }
    });
  }
  return newArray;
}

function cutGenresArray(array) {
  if (array.length > 2) {
    let cutArray = array.slice(0, 2);
    cutArray.push(' ...other');
    return cutArray;
  }
  return array;
}

export function createTrendMovesMarkup({ results }) {
  return results
    .map(({ backdrop_path, genre_ids, release_date, title }) => {
      let genresArray = createGenresArray(genre_ids);
      genresArray = cutGenresArray(createGenresArray(genre_ids));

      return `<ul class="gallery-list">
                <li class="gallery-item">
                    <div class="gallery-card">
                        <img src="${BASE_IMG_URL}${backdrop_path}" width="395" alt="${title}">
                        <button class="trailer-button" type="button">Trailer</button>
                        <h3 class="film-title">${title}</h3>
                        <span class="film-genres">${genresArray}</span> | <span class="film-year">${release_date.slice(
        0,
        4
      )}</span>
                    </div>
                </li>
            </ul>`;
    })
    .join('');
}
