import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ListItem = styled.li`
  box-shadow: rgb(204 204 204) 0px 0px 8px 1px;
  border-radius: 5px;
  /* width: 280px; */
  width: calc((100% - 4 * 16px) / 5);
`;
export const Img = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
`;

export const LinkItem = styled(Link)`
  text-decoration: none;
  color: black;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`;

export const Title = styled.h2`
  font-weight: 500;
  margin: 0;
  padding: 10px;
`;

export const Span = styled.span`
  font-weight: 100;
`;
