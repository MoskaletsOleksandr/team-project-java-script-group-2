import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '7868ad9a572405d53a4ec9d8167688dc';

export async function fetchTrendMoves(page = 1) {
  const url = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${page}`;
  return await axios
    .get(url)
    .then(response => {
      return response.data;
    })
    .catch(error => console.log(error));
}

export async function getByKeyword(query, page) {
  const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`;
  return await axios
    .get(url)
    .then(response => {
      return response.data;
    })
    .catch(error => console.log(error));
}

export async function fetchDataById(id) {
  const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
}

export async function fetchTrailer(id) {
  const trailerUrl = `${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}`;
  const response = await fetch(trailerUrl);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
}
