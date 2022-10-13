import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  flex-wrap: wrap;
  gap: 8px;
`;

export const ListItem = styled.li`
  box-shadow: rgb(204 204 204) 0px 0px 8px 1px;
  border-radius: 5px;
  width: calc((100% - 4 * 10px) / 6);
`;

export const Title = styled.h3`
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 0;
`;

export const Text = styled.p`
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 0;
`;

export const Img = styled.img`
  width: 100%;
`;
