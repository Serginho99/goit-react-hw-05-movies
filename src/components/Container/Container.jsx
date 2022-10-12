import styled from 'styled-components';

const ContainerBox = styled.section`
  width: 1200px;
  height: 100%;
  margin: 0px auto;
  padding: 0px 15px;
`;

export default function Container({ children }) {
  return <ContainerBox>{children}</ContainerBox>;
}
