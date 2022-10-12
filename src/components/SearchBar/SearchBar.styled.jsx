import styled from 'styled-components';

export const Input = styled.input`
  width: 400px;
  height: 20px;
  font-size: 16px;
  padding: 6px 80px 6px 6px;
  outline: none;
  border: 2px solid rgb(204, 204, 204);
  border-radius: 5px;
  transition: border-color 200ms linear 0s;
`;

export const Wrapper = styled.div`
  display: block;
  position: relative;
`;

export const ButtonWrapper = styled.button`
  position: absolute;
  top: 0px;
  right: 0px;
  height: 100%;
  justify-content: center;
  outline: none;
  align-items: center;
  border: 2px solid rgb(204, 204, 204);
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 109, 186);
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 200ms linear 0s;
  :hover {
    background-color: #5e5eef;
    color: white;
    border-color: #5e5eef;
  }
`;

export const Form = styled.form`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  padding: 20px 0px;
`;
