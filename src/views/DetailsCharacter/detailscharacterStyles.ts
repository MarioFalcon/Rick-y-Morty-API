import styled from 'styled-components'

export const ImageContainer = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
`

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

export const DetailsContent = styled.div`
  width: 80%;
  margin-top: 20px;
  background-color: rgba(226, 226, 226, 0.1);
  box-shadow: 0px 0px 20px rgba(81, 185, 249, 0.5);
`

export const DetailsTitle = styled.h1`
  color: #ffffff;
  font-size: 35px;
  margin-top: 50px;
  margin-bottom: 30px;
  text-align: center;
  text-shadow: 0px 0px 20px rgba(81, 185, 249, 1);
`

export const DetailsExplanation = styled.p`
  color: #ffffff;
  font-size: 20px;
  text-align: center;
  text-shadow: 0px 0px 10px #000;
  margin: 20px;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`

export const Buttoneditar = styled.button`
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
`

export const Buttonfavorito = styled.button`
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
`

export const Buttoneliminar = styled.button`
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
`
