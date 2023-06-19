import styled from 'styled-components'

export const Gif = styled.img`
  width: 4vw;
  z-index: 5;
  position: absolute;
  left: 40px;
`

export const Container = styled.header`
  background: rgba(17, 17, 17, 0.7);
  color: #fff;
  height: 90px;
  position: fixed;
  width: 100%;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 100;

  @media screen and (max-width: 768px) {
    justify-content: center;
  
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  margin-right: 40px;

 
`

export const Button = styled.button`
  background-color: transparent;
  color: lime;
  padding: 10px 20px;
  border: lime;

  border-radius: 50px;
  cursor: pointer;

  font-size: 25px;
  transition: all 0.3s ease-in-out;
  min-width: 115px;

  &:hover {
    color: white;
    background-color: rgba(255, 255, 255, 0.1);
    border-color: lime;
    text-shadow: 0px 0px 10px #ffffff;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px #3f51b5;
  }

  @media screen and (max-width: 768px) {
    min-width: auto;
    padding: 8px 16px;
    font-size: 14px;
  }
`
