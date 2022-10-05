import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchActorsFilm } from 'services/fetchMovies';

export default function Cast() {
  const [actors, setActors] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchActorsFilm(movieId).then(setActors);
  }, [movieId]);

  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

  return (
    <ul>
      {actors?.cast.map(({ name, character, profile_path, id }) => {
        const IMG = `${IMAGE_BASE_URL}/${profile_path}`;
        return (
          <li key={id}>
            {' '}
            <img src={IMG} alt="" width="150" />
            <h2>{name}</h2>
            <p>Character: {character}</p>
          </li>
        );
      })}
    </ul>
  );
}
