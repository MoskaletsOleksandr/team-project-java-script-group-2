const BASE_URL = 'https://api.themoviedb.org/3/';

const API_KEY = '18d2ef0015120b4f2a7b992abe7c1251';

export async function fetchTrendMoves() {
  const trendMovesUrl = `${BASE_URL}trending/movie/day?api_key=${API_KEY}`;
  const response = await fetch(trendMovesUrl);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
}

export async function fetchDataById(id) {
  const response = await fetch(`${BASE_URL}movie/${id}?api_key=${API_KEY}`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
}

export async function fetchMovesByKeyword(keyword) {
  const movesByKeywordUrl = `${BASE_URL}search/movie?api_key=${API_KEY}&query=${keyword}`;
  const response = await fetch(movesByKeywordUrl);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
}

export async function fetchTrailer(id) {
  const trailerUrl = `${BASE_URL}movie/${id}/videos?api_key=${API_KEY}`;
  const response = await fetch(trailerUrl);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
}
