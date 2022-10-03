import { useState, useEffect } from 'react';
import { fetchTrendingFilms } from '../../services/fetchMovies';
import MoviesList from './MoviesList';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function trendingMovies() {
      try {
        const data = await fetchTrendingFilms(page);
        console.log(data.results);
        setMovies([...data.results]);
      } finally {
        setLoading(false);
      }
    }

    trendingMovies();
  }, [page]);

  function onLoadMore() {
    setPage(page => page + 1);
  }

  return (
    <>
      {loading && <p>load</p>}
      <MoviesList items={movies} loadMore={onLoadMore} />
    </>
  );
}
