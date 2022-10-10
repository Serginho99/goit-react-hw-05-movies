import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  margin-left: 200px;
  margin-right: 200px;
`;

export const LinkEl = styled(Link)`
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  display: flex;
  align-items: center;
  color: black;
  text-decoration: none;
  margin-bottom: 20px;
  font-size: 22px;
  text-transform: uppercase;
  svg {
    margin-right: 10px;
    color: #5e5eef;
  }
`;

export const Img = styled.img`
  display: inline-block;
  margin-right: 10px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
`;

export const Box = styled.div`
  display: flex;
  padding-bottom: 20px;
`;

export const Title = styled.h2`
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  display: block;
  margin: 0;
`;

export const Text = styled.p`
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  margin: 0;
`;

export const Info = styled.div`
  border-top: 1px solid blue;
  border-bottom: 1px solid blue;
  padding-bottom: 20px;
  padding-top: 20px;
`;

export const ListInfo = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ItemListInfo = styled.li`
  & + & {
    margin-left: 20px;
  }
`;

export const LinkListInfo = styled(NavLink)`
  text-decoration: none;
  font-size: 22px;
  transition: color 250ms;
  color: black;
  padding: 10px;
  transition: color 250ms;
  border-radius: 20px;
  &.active {
    color: white;
    background-color: #5e5eef;
  }
  &:hover:not(.active) {
    color: #9696e9;
  }
`;

export const TitleInfo = styled.h2`
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  display: block;
  margin: 0;
  margin-bottom: 20px;
`;
