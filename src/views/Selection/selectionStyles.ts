import styled, { keyframes } from 'styled-components'

export const DashboardContainer = styled.div`
  
 
  align-items: center;
  width: 100%;
`

export const DashboardContent = styled.div`
  width: 80%;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`

const blinkAnimation = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
  100% {
    opacity: 1;
  }
`

export const RightButton = styled.button`
  /* right: 190px;*/
  margin-top: 190px; 
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  color: lime;
  animation: ${blinkAnimation} 1.4s infinite;
  font-size: 8vw;
  min-width: 15px;
  position: relative;
  overflow: hidden;
  text-shadow: 0px 4px 20px black;
  font-family: 'get_schwifty';

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 90%;
    background-color: black;
    opacity: 0;
    z-index: -1;
  }

  &:hover::after {
    opacity: 1;
  }

`

export const LeftButton = styled.button`
  /* right: 190px;
  margin-top: 240px; */
  margin-bottom: 190px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  color: lime;
  animation: ${blinkAnimation} 1.4s infinite;
  font-size: 8vw;
  min-width: 15px;
  position: relative;
  overflow: hidden;
  text-shadow: 0px 4px 20px black;
  font-family: 'get_schwifty';

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 90%;
    background-color: black;
    opacity: 0;
    z-index: -1;
  }

  &:hover::after {
    opacity: 1;
  }

  @media screen and (max-width: 768px) {
    text-align: center;
    margin-bottom: -266px;
  }
`
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 260px;
  gap: 120px; /* Separación horizontal entre los botones */
  
  @media screen and (max-width: 768px) {
    flex-direction: column;
   
    justify-content: center;
   
  }
`