import { fetchTrailer } from './api';

let videoKeysArray = [];

// const array111 = ['q', 'w', 'e', 'r', 't'];

let BASE_IMG_URL = 'https://image.tmdb.org/t/p/w400';
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

function searchVideoKeyById(id, array) {
  //   console.log(id);
  console.log(array);

  //   array.forEach(item => {
  //     console.log(item);
  //   });
  //   for (const item of array) {
  // console.log(111);
  //   }
}

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
    .map(({ poster_path, genre_ids, release_date, title, id }) => {
      BASE_IMG_URL = 'https://image.tmdb.org/t/p/w400';
      if (poster_path === null) {
        BASE_IMG_URL = '';
        poster_path =
          'https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-for-website-design-or-mobile-app-no-photo-available_87543-11093.jpg?w=1480';
      }

      if (release_date === '') {
        release_date = 'None';
      }
      let genresArray = createGenresArray(genre_ids);
      genresArray = cutGenresArray(genresArray);

      if (genresArray.length === 0) {
        genresArray = 'Unknown genres';
      }

      fetchTrailer(id)
        .then(data => {
          const videoKeys = {};
          videoKeys.id = id;
          videoKeys.key = data.results[0].key;

          //   console.log(videoKeys.id);
          //   if (!data.results[0].key) {
          //     videoKeys.key = '';
          //   } else {
          //     videoKeys.key = data.results[0].key;
          //   }
          //   console.log(data.results[0].key);
          // data.results[0].key;
          videoKeysArray.push(videoKeys);
          //   console.log(videoKeysArray);
          //   console.log(videoKeysArray);
        })
        .catch(error => console.log(error));

      searchVideoKeyById(id, videoKeysArray);

      // <button class="trailer-button tube" onclick=document.location="https://www.youtube.com/watch?v=23XQsJMYG84" type="button">Trailer</button>
      return `<li class="gallery-item">
                    <div class="gallery-container-img" data-id='${id}'>
                    <div class="gallery-card" data-id='${id}'>
                        <img class="gallery-img" src="${BASE_IMG_URL}${poster_path}" alt="${title}">
                      
                        <a class="tube" href="https://www.youtube.com/watch?v=y_0CaX66H9M">Trailer</a>
                        </div>
                        <div class="gallery-film" data-id='${id}'>
                        <h3 class="film-title">${title}
                        </h3>
                        <span class="film-genres">${genresArray}</span><span class="film-year"> | ${release_date.slice(
        0,
        4
      )}</span></div>
                    </div>
                </li>`;
    })
    .join('');
}

// const ttt = fetchTrailer(id)
//   .then(data => {
//     //   console.log(data.results[0].key);
//     data.results[0].key;
//     let wer = 1;
//     function createMarkupTrailer(id) {
//       return results
//         .map(id => {
//           return `<a class="tube" href="https://www.youtube.com/watch?v=23XQsJMYG84${data.results[0].key}">Trailer</a>`;
//         })
//         .join('');
//     }
//   })
//   .catch(error => console.log(error));
