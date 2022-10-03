import axios from 'axios';

const API_KEY = `4d4e27deea421fc269c2758df5384469`;
const BASE_URL = 'https://api.themoviedb.org/3';

export async function fetchTrendingFilms(page) {
  const res = await axios.get(
    `${BASE_URL}/trending/movie/week?api_key=${API_KEY}&page=${page}`
  );
  return res.data;
}
