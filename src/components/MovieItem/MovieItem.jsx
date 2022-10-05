// import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { ListItem, Img, LinkItem, Title } from './MovieItem.styled';

export default function MovieItem({ id, original_title, poster_path }) {
  const location = useLocation();
  const IMG_URL = 'https://image.tmdb.org/t/p/w500';
  return (
    <ListItem key={id}>
      <LinkItem to={`/movies/${id}`} state={{ from: location }}>
        <Img src={`${IMG_URL}/${poster_path}`} alt="" />
        <Title>{original_title}</Title>
      </LinkItem>
    </ListItem>
  );
}
