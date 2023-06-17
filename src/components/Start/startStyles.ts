import styled, { keyframes } from 'styled-components';

const blinkAnimation = keyframes`
  0% { color: white; }
  50% { color: black; }
  100% { color: white; }
`;

export const ButtonStart = styled.button`
  background-color: transparent;
  color: pink;
  padding: 10px 20px;
  border: none;
  font-family: 'get_schwifty';
  font-weight: bold;
  animation: ${blinkAnimation} 1s infinite;
  border-radius: 50px;
  cursor: pointer;
  font-size: 49px;
  transition: all 0.3s ease-in-out;
  min-width: 135px;

  &:hover {
   color: black;
   
  }

  &:focus {
    outline: none;
  
    text-shadow: 0px 0px 10px white;
  }
`
