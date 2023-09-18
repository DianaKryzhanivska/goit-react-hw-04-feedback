import styled from 'styled-components';

export const ButtonList = styled.ul`
  padding: 0;
  margin-top: 30px;
  list-style: none;
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

export const ButtonItem = styled.li`
  margin-right: 10px;
`;

export const Button = styled.button`
  cursor: pointer;
  text-transform: capitalize;
  width: 130px;
  height: 40px;
  padding: 5px;
  font-size: 22px;
  color: #fff;
  background: #000;
  border-radius: 5px;
  border: none;
`;
