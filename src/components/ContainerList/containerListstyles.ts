import styled from 'styled-components'
import DefaultButton from '../Button/button'

export const ContainerButton = styled.div`
  display: flex;
  margin-top: 5px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`

export const Container = styled.div`
  margin-top: 100px;
  margin-bottom: 100px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 120px;
  justify-items: center;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 1668px) {
    grid-template-columns: 2fr;
  }
`

export const Content = styled.div`
  display: flex;
  margin-top: 140px;
  flex-direction: column;
  align-items: center;
`

export const ImageContainer = styled.div`
  width: 330px;
  border-radius: 50%;
  overflow: hidden;
`

export const Image = styled.img``

export const Title = styled.div`
  color: #ffffff;
  font-weight: bold;
  font-size: 24px;
  font-family: 'Arial', sans-serif;
  margin-bottom: 10px;
  text-shadow: 0px 0px 20px rgba(81, 185, 249, 1);

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`

export const Button = styled(DefaultButton)`
  background-color: transparent;
  color: white;
  cursor: pointer;
  margin: 3px;
  font-size: 14px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-color: lime;
    text-decoration: underline;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px #3f51b5;
  }
`

export const DashboardCards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
