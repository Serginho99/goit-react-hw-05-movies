import { Link } from 'react-router-dom';

export default function MovieList({ items, loadMore }) {
  const elements = items.map(({ id, original_title }) => {
    return (
      <li key={id}>
        <Link to={'/movies'}>{original_title}</Link>
      </li>
    );
  });
  return (
    <>
      <h1>Trending today</h1>
      <ul>{elements}</ul>
      <button type="button" onClick={loadMore}>
        Load more
      </button>
    </>
  );
}
