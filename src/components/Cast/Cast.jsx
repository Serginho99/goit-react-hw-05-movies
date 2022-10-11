import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchActorsFilm } from 'services/fetchMovies';
import { List, Title, Text, ListItem, Img } from './Cast.styled';
import defaultImage from '../../Images/default-poster.jpg';

export default function Cast() {
  const [actors, setActors] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchActorsFilm(movieId).then(setActors);
  }, [movieId]);

  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

  return (
    <List>
      {actors?.cast.map(({ name, character, profile_path, id }) => {
        const IMG = profile_path
          ? `${IMAGE_BASE_URL}/${profile_path}`
          : defaultImage;
        return (
          <ListItem key={id}>
            <Img src={IMG} alt="" width="150" />
            <Title>{name}</Title>
            <Text>Character: {character}</Text>
          </ListItem>
        );
      })}
    </List>
  );
}
