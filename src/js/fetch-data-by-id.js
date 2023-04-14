const API_KEY = '18d2ef0015120b4f2a7b992abe7c1251';
const BASE_URL = 'https://api.themoviedb.org/3/movie/';

export async function fetchDataById(id) {
  const response = await fetch(`${BASE_URL}${id}?api_key=${API_KEY}`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
}
