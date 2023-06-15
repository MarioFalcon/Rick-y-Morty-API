import styled, { keyframes } from 'styled-components';

const blinkAnimation = keyframes`
  0% { color: white; }
  50% { color: lime; }
  100% { color: white; }
`;

export const ButtonStart = styled.button`
  background-color: transparent;
  color: white;
  padding: 10px 20px;
  border: none;
  
  animation: ${blinkAnimation} 1s infinite;
  border-radius: 50px;
  cursor: pointer;
  font-size: 32px;
  transition: all 0.3s ease-in-out;
  min-width: 135px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-color: lime;
    animation: ${blinkAnimation} 1s infinite;
    text-decoration-line: underline;
    text-shadow: 0px 0px 10px lime;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px lime;
    text-shadow: 0px 0px 10px lime;
  }
`
