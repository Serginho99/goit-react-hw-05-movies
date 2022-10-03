import { NavLink } from 'react-router-dom';
// import { NavList, NavListItem, NavListLink } from './NavBar.styled';

export default function NavBar() {
  return (
    <>
      <ul>
        <li>
          <NavLink to={'/'}>Home</NavLink>
        </li>
        <li>
          <NavLink to={'/movies'}>Movies</NavLink>
        </li>
      </ul>
    </>
  );
}
