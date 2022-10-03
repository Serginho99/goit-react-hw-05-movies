import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 70px;
  padding-top: 20px;
  margin: 0;
`;

export const NavListItem = styled.li`
  & + & {
    margin-left: 30px;
  }
`;

export const NavListLink = styled(NavLink)`
  text-decoration: none;
`;
