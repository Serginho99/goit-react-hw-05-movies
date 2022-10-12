import NavBar from 'components/NavBar/NavBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Main } from './Layout.styled';
import Loader from 'components/Loader/Loader';
import Container from 'components/Container/Container';

export default function Layout() {
  return (
    <>
      <Header>
        <Container>
          <NavBar />
        </Container>
      </Header>
      <Main>
        <Container>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Container>
      </Main>
    </>
  );
}
