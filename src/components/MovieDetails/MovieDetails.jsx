import Loader from 'components/Loader/Loader';
import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { movieDetailsById } from 'services/fetchMovies';

export default function MovieDetails() {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();

  const IMG_URL = 'https://image.tmdb.org/t/p/w500';
  useEffect(() => {
    async function movieById() {
      setLoading(true);
      try {
        const data = await movieDetailsById(movieId);
        setMovie({ ...data });
      } finally {
        setLoading(false);
      }
    }
    movieById();
  }, [movieId]);

  const {
    original_title,
    genres,
    overview,
    poster_path,
    release_date,
    vote_average,
  } = movie;
  const genre = genres?.map(a => a.name).join(', ');
  const voteAverage = Math.ceil(vote_average * 10);
  const date = release_date?.slice(0, 4);
  const backLink = location.state?.from ?? '/movies';
  return (
    <>
      <Link to={backLink}>go back</Link>
      {loading && <Loader />}
      <img src={`${IMG_URL}/${poster_path}`} width="250" alt={original_title} />
      <h2>
        {original_title} ({date ? date : `N/A`})
      </h2>
      <p>User score: {voteAverage}%</p>
      <h2>Genres</h2>
      <p>{genre}</p>
      <h2>Overview</h2>
      <p>{overview}</p>
      <p>Additional information </p>
      <ul>
        <li>
          <Link to="cast" state={{ from: backLink }}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" state={{ from: backLink }}>
            Reviews
          </Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}
