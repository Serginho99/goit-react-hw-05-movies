import Loader from 'components/Loader/Loader';
import { useState, useEffect, Suspense } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { movieDetailsById } from 'services/fetchMovies';
import defaultImage from '../../Images/default-poster.jpg';
import {
  LinkEl,
  Box,
  Img,
  Content,
  Title,
  Text,
  Info,
  ListInfo,
  ItemListInfo,
  LinkListInfo,
  TitleInfo,
} from './MovieDetails.styled';
import { CgArrowLeftR } from 'react-icons/cg';

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
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    }
    movieById();
  }, [movieId]);

  const isCast = location.pathname.includes('cast');
  const castLink = isCast ? `/movies/${movieId}` : `cast`;
  const isReviews = location.pathname.includes('reviews');
  const reviewsLink = isReviews ? `/movies/${movieId}` : `reviews`;

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
  const IMG = poster_path ? `${IMG_URL}/${poster_path}` : defaultImage;
  return (
    <>
      <LinkEl to={backLink}>
        <CgArrowLeftR />
        go back
      </LinkEl>

      {loading && <Loader />}
      <Box>
        <Img src={IMG} width="300" alt={original_title} />
        <Content>
          <Title>
            {original_title} ({date ? date : `N/A`})
          </Title>
          <Text>User score: {voteAverage}%</Text>
          <Title>Genres</Title>
          <Text>{genre}</Text>
          <Title>Overview</Title>
          <Text>{overview}</Text>
        </Content>
      </Box>
      <Info>
        <TitleInfo>Additional information </TitleInfo>
        <ListInfo>
          <ItemListInfo>
            <LinkListInfo to={castLink} state={{ from: backLink }}>
              Cast
            </LinkListInfo>
          </ItemListInfo>
          <ItemListInfo>
            <LinkListInfo to={reviewsLink} state={{ from: backLink }}>
              Reviews
            </LinkListInfo>
          </ItemListInfo>
        </ListInfo>
      </Info>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
}
