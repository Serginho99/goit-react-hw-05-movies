import NavBar from 'components/NavBar/NavBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Main } from './Layout.styled';
import Loader from 'components/Loader/Loader';

export default function Layout() {
  return (
    <>
      <Header>
        <NavBar />
      </Header>
      <Main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Main>
    </>
  );
}
