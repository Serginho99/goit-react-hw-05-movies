import axios from 'axios';

const API_KEY = `4d4e27deea421fc269c2758df5384469`;
const BASE_URL = 'https://api.themoviedb.org/3';

export async function fetchTrendingFilms(page) {
  const res = await axios.get(
    `${BASE_URL}/trending/movie/week?api_key=${API_KEY}&page=${page}`
  );
  return res.data;
}

export async function fetchMovieByQuery(query, page) {
  const res = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`
  );
  return res.data;
}

export async function movieDetailsById(id) {
  const res = await axios.get(`
  ${BASE_URL}/movie/${id}?api_key=${API_KEY}
  `);
  return res.data;
}

export async function fetchActorsFilm(id) {
  try {
    const res = await axios.get(
      `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`
    );
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function fetchReviews(id) {
  try {
    const res = await axios.get(`
    ${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}
    `);
    return res.data;
  } catch (error) {}
}
