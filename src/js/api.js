const BASE_URL =
  'https://api.themoviedb.org/3/trending/movie/day?api_key=18d2ef0015120b4f2a7b992abe7c1251';

const API_KEY = '18d2ef0015120b4f2a7b992abe7c1251';

export async function fetchTrendMoves() {
  const trendMovesUrl = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
  const response = await fetch(trendMovesUrl);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
}
