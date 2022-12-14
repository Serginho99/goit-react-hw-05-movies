import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
// import Cast from './Cast/Cast';
import Layout from './Layout/Layout';
import PageContextProvider from './PageContext/PageContext';
// import MovieDetails from './MovieDetails/MovieDetails';
// import HomePage from './Pages/HomePage/HomePage';
// import MoviesPage from './Pages/MoviesPage';
// import Reviews from './Reviews/Reviews';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const MoviesPage = lazy(() =>
  import('../pages/HomePage/MoviesPage/MoviesPage')
);
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <PageContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </PageContextProvider>
  );
};
