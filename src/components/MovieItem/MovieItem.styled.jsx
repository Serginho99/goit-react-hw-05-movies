import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ListItem = styled.li`
  box-shadow: rgb(204 204 204) 0px 0px 8px 1px;
  border-radius: 5px;
  /* & + & {
    margin-left: 20px;
  } */
  margin-bottom: 10px;
  width: 320px;
`;
export const Img = styled.img`
  width: 100%;
  height: 400px;
  /* object-fit: cover; */
`;

export const LinkItem = styled(Link)`
  text-decoration: none;
  color: black;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`;

export const Title = styled.h2`
  font-weight: 200;
`;
