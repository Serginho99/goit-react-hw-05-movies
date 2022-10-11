import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'services/fetchMovies';
import { List, Title, Text } from './Reviews.styled';

export default function Reviews() {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <List>
      {reviews?.results.length === 0 ? (
        <Text>We don't have any reviews for this movie.</Text>
      ) : (
        reviews?.results.map(({ id, author, content }) => {
          return (
            <li key={id}>
              <Title>{author}</Title>
              <Text>{content}</Text>
            </li>
          );
        })
      )}
    </List>
  );
}
