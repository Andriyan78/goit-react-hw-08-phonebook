import styled from 'styled-components';

export const StyledDiv = styled.div`
  display: flex;
  gap: 70px;
  align-items: center;
  padding: 15px;
`;

export const StyledText = styled.p`
  font-size: 25px;
  font-style: italic;
  color: white;
`;

export const StyledButton = styled.button`
  padding: 18px 25px;
  border-radius: 5px;
  display: flex;
  gap: 5px;
  align-items: center;
  font-size: 25px;
  text-shadow: rgb(0, 0, 0, 0.4) 1px 0px 10px;
  border: none;
  transform: scale(1);
  transition: transform 250ms linear;
  box-shadow: rgb(220 231 221) 0px 2px 2px 2px;
  background-color: inherit;
  color: white;
  font-weight: 500;
  cursor: pointer;
  &:hover,
  &:focus {
    transform: scale(1.1);
    background-color: #eff1e9;
    color: green;
  }
`;