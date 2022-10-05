import { useState, useEffect } from 'react';
import { fetchMovieByQuery } from 'services/fetchMovies';
import SearchBar from 'components/SearchBar/SearchBar';
import MovieList from 'components/MovieList/MoviesList';
import { useSearchParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [movieName, setMovieName] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const nameFilm = searchParams.get('name_film') ?? '';
  // console.log(nameFilm);

  useEffect(() => {
    async function getMoviesByQuery() {
      setLoading(true);
      try {
        const data = await fetchMovieByQuery(nameFilm, page);
        setMovies(prev => [...prev, ...data.results]);
      } finally {
        setLoading(false);
      }
    }
    if (nameFilm) {
      getMoviesByQuery();
    }
  }, [nameFilm, page]);

  function handleSubmit({ moviesName }) {
    setMovieName(moviesName);
    setSearchParams({ name_film: moviesName });
  }

  function onLoadMore() {
    setPage(page => page + 1);
  }

  return (
    <>
      <SearchBar submit={handleSubmit} />
      {loading && <Loader />}
      {movies && <MovieList items={movies} />}

      {movieName && (
        <button type="button" onClick={onLoadMore}>
          Load more
        </button>
      )}
    </>
  );
}
