import NavBar from 'components/NavBar/NavBar';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main></main>
      <Outlet />
    </>
  );
}
