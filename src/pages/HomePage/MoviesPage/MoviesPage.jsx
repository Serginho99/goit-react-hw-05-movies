import { useState, useEffect, useContext } from 'react';
import { fetchMovieByQuery } from 'services/fetchMovies';
import SearchBar from 'components/SearchBar/SearchBar';
import MovieList from 'components/MovieList/MoviesList';
import { useSearchParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import { Notify } from 'notiflix';
import { PageContext } from 'components/PageContext/PageContext';
import LoadMore from 'components/LoadMore/LoadMore';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const { page } = useContext(PageContext);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const nameFilm = searchParams.get('name_film') ?? '';
  // console.log(nameFilm);

  useEffect(() => {
    async function getMoviesByQuery() {
      setLoading(true);
      try {
        const data = await fetchMovieByQuery(nameFilm, page);
        if (data.total_results === 0) {
          return Notify.failure('No such films');
        }
        setMovies(prev => [...prev, ...data.results]);
        const totalPages = Math.ceil(data.total_results / 20);
        setTotalPages(totalPages);
        if (page >= totalPages) {
          Notify.warning(
            "We're sorry, but you've reached the end of search results."
          );
        }
      } finally {
        setLoading(false);
      }
    }
    if (nameFilm) {
      getMoviesByQuery();
    }
  }, [nameFilm, page]);

  function handleSubmit({ moviesName }) {
    setMovies([]);
    setSearchParams({ name_film: moviesName });
  }

  const endList = page < totalPages;
  const isFilms = movies?.length !== 0;

  return (
    <>
      <SearchBar submit={handleSubmit} />
      {movies && <MovieList items={movies} />}
      {loading ? <Loader /> : endList && isFilms && <LoadMore />}
    </>
  );
}
