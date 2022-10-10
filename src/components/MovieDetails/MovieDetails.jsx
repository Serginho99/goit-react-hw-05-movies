import Loader from 'components/Loader/Loader';
import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { movieDetailsById } from 'services/fetchMovies';
import {
  LinkEl,
  Wrapper,
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
    <Wrapper>
      <LinkEl to={backLink}>
        <CgArrowLeftR />
        go back
      </LinkEl>

      {loading && <Loader />}
      <Box>
        <Img
          src={`${IMG_URL}/${poster_path}`}
          width="250"
          alt={original_title}
        />
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
            <LinkListInfo to="cast" state={{ from: backLink }}>
              Cast
            </LinkListInfo>
          </ItemListInfo>
          <ItemListInfo>
            <LinkListInfo to="reviews" state={{ from: backLink }}>
              Reviews
            </LinkListInfo>
          </ItemListInfo>
        </ListInfo>
      </Info>
      <Outlet />
    </Wrapper>
  );
}
