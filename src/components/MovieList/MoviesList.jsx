import MovieItem from 'components/MovieItem/MovieItem';
import { List } from './MoviesList.styled';
export default function MovieList({ items }) {
  return (
    <>
      <List>
        {items.map(item => {
          return <MovieItem key={item.id} {...item} />;
        })}
      </List>
    </>
  );
}
