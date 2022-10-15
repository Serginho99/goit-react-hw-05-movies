import { useState, useEffect, useContext } from 'react';
import { fetchTrendingFilms } from '../../services/fetchMovies';
import MoviesList from '../../components/MovieList/MoviesList';
import Loader from 'components/Loader/Loader';
import { Title } from './HomePage.styled';
import LoadMore from 'components/LoadMore/LoadMore';
import { PageContext } from 'components/PageContext/PageContext';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const { page } = useContext(PageContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function trendingMovies() {
      try {
        setLoading(true);
        const data = await fetchTrendingFilms(page);
        setMovies(movies => [...movies, ...data.results]);
      } finally {
        setLoading(false);
      }
    }

    trendingMovies();
  }, [page]);

  return (
    <>
      <Title>Trending today</Title>
      {movies && <MoviesList items={movies} />}

      {loading ? <Loader /> : <LoadMore />}
    </>
  );
}
