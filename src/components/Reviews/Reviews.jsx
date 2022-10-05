import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'services/fetchMovies';

export default function Reviews() {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <ul>
      {reviews?.results.length === 0 ? (
        <p>We dont't have any reviews for this movie.</p>
      ) : (
        reviews?.results.map(({ id, author, content }) => {
          return (
            <li key={id}>
              <h2>{author}</h2>
              <p>{content}</p>
            </li>
          );
        })
      )}
    </ul>
  );
}
