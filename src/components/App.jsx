import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import Movies from './Movies/Movies';
import HomePage from './Pages/HomePage';

export const App = () => {
  return (
    <>
      <Layout />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </>
  );
};
