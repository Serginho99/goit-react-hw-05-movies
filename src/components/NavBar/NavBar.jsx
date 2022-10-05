// import { NavLink } from 'react-router-dom';
import { NavList, NavListItem, NavListLink } from './NavBar.styled';

export default function NavBar() {
  return (
    <>
      <NavList>
        <NavListItem>
          <NavListLink to={'/'} end>
            Home
          </NavListLink>
        </NavListItem>
        <NavListItem>
          <NavListLink to={'/movies'}>Movies</NavListLink>
        </NavListItem>
      </NavList>
    </>
  );
}
