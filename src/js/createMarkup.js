import noimage from '../images/noimage.jpg';




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
if (!array.length) {
  return 'Unknown genre';
} else if (array.length > 2) {
  let cutArray = array.slice(0, 2);
  cutArray.push(' ...other');
  return cutArray;
}
return array;
}


export function createMarkup(movies) {
return movies
  .map(movie => {
    let genresArray = createGenresArray(movie.genre_ids);
    genresArray = cutGenresArray(genresArray);
    const movieDate = movie.release_date ?? movie.first_air_date ?? null;
    const movieYear = movieDate ? movieDate.slice(0, 4) : 'Unknown year';
    const poster = movie.poster_path
      ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
      : noimage;




      return `
      <li class="gallery-item">
      <div class="gallery-container-img" data-movie="${movie.id}"
        <div class="gallery-card" data-movie="${movie.id}">
            <img class="gallery-img"
            src="${poster}"
            alt=${movie.title ?? movie.name}
            loading="lazy"
            />
            <button class="trailer-button" type="button">Trailer</button>
        </div>
        <div class="gallery-film" data-movie="${movie.id}">
          <p class="film-title">${movie.title ?? movie.name}</p>
          <p class="film-genres">${genresArray} | ${movieYear}</p>
        </div>
        </div>
      </li>`;
     })
     .join('');
 }
