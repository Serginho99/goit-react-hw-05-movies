import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavList = styled.ul`
  display: flex;
  text-align: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const NavListItem = styled.li`
  & + & {
    margin-left: 30px;
  }
`;

export const NavListLink = styled(NavLink)`
  text-decoration: none;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  color: black;
  font-weight: 300;
  font-size: 30px;
  padding: 10px;
  transition: 250ms;
  border-radius: 5px;
  &.active {
    color: white;
    background-color: #5e5eef;
  }
  &:hover:not(.active) {
    color: #9696e9;
  }
`;
