import styled from 'styled-components'
import DefaultButton from '../../components/Button/button'

export const Container = styled.div`
  border-radius: 4px;
  width: 90%;
  max-width: 60vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 120px;
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    max-width: 90vw;
  }
`

export const Content = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid white;
  background-color: rgba(226, 226, 226, 0.1);
  box-shadow: 0px 0px 20px rgba(81, 185, 249, 1);
`

export const Button = styled(DefaultButton)`
  margin-bottom: 80px;
  margin-top: 100px;
  background-color: transparent;
  color: white;
  padding: 10px 20px;
  border: none;
  margin-right: 10px;
  border-radius: 8px;
  cursor: pointer;
  border: 2px solid white;
  font-size: 16px;
  transition: all 0.3s ease-in-out;
  min-width: 135px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-color: #3f51b5;
    text-decoration: underline;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px #3f51b5;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 30px;
    margin-top: 60px;
    padding: 8px 16px;
    font-size: 11px;
    min-width: 70px;
  }
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 4rem;
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    justify-content: center;
    margin-bottom: 20px;
  }
`

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
  margin-bottom: 30px;

  @media screen and (max-width: 768px) {
    height: 300px;
  }
`

export const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border: 2px solid black;
  background-color: rgba(226, 226, 226, 0.1);
  box-shadow: 0px 0px 15px #ffffff;
`

export const Title = styled.div`
  color: #ffffff;
  font-weight: bold;
  font-size: 38px;
  margin-top: 20px;
  font-family: 'Arial', sans-serif;
  margin-bottom: 30px;
  text-shadow: 0px 0px 20px rgba(81, 185, 249, 1);

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`
