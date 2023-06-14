import styled from 'styled-components';
import { keyframes } from 'styled-components';
export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const DashboardContent = styled.div`
  width: 80%;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 80px;
  
`;

const blinkAnimation = keyframes`
  0% {
    opacity: 0.7;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0.7;
  }
`;

export const LeftButton = styled.button`
  margin: 50px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  color:lime;
  font-size: 86px;
  min-width: 15px;
  position: relative;
  overflow: hidden;

  &:focus {
    outline: none;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius:30%;
    background-color: black;
    opacity: 0;
    z-index: -1;
    animation: ${blinkAnimation} 1.2s infinite;
  }

  &:hover::after {
    opacity: 1;
    
  }

  span {
    position: relative;
    z-index: 1;
    text-shadow: 0px 0px 30px black;
    color: white;

    &:hover {
      
      text-decoration: underline;
      text-shadow: 0px 0px 10px #ffffff;
    }
  }
`;

export const RightButton = styled.button`
  margin: 50px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  color:lime;
  font-size: 86px;
  min-width: 15px;
  position: relative;
  overflow: hidden;

  &:focus {
    outline: none;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius:30%;
    background-color: black;
    opacity: 0;
    z-index: -1;
    animation: ${blinkAnimation} 1.2s infinite;
  }

  &:hover::after {
    opacity: 1;
    
  }

  span {
    position: relative;
    z-index: 1;
    text-shadow: 0px 0px 30px black;
    color: white;

    &:hover {
      
      text-decoration: underline;
      text-shadow: 0px 0px 10px #ffffff;
    }
  }
`;