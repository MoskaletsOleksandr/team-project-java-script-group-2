import axios from 'axios';


const BASE_URL ='https://api.themoviedb.org/3';
const API_KEY = '18d2ef0015120b4f2a7b992abe7c1251';



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
  const response = await fetch(`${BASE_URL}movie/${id}?api_key=${API_KEY}`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
}

// export async function fetchMovesByKeyword(keyword) {
//   const movesByKeywordUrl = `${BASE_URL}search/movie?api_key=${API_KEY}&query=${keyword}`;
//   const response = await fetch(movesByKeywordUrl);
//   if (!response.ok) {
//     throw new Error(response.statusText);
//   }
//   return await response.json();
// }
