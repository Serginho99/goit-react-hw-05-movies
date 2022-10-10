// import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { ListItem, Img, LinkItem, Title } from './MovieItem.styled';
import defaultImage from '../../Images/default-poster.jpg';

export default function MovieItem({ id, original_title, poster_path }) {
  const location = useLocation();
  const IMG_URL = 'https://image.tmdb.org/t/p/w500';
  const IMG = poster_path ? `${IMG_URL}/${poster_path}` : defaultImage;
  return (
    <ListItem key={id}>
      <LinkItem to={`/movies/${id}`} state={{ from: location }}>
        <Img src={IMG} alt="" />
        <Title>{original_title}</Title>
      </LinkItem>
    </ListItem>
  );
}
