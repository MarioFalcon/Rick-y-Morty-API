import styled from 'styled-components'


export const DetailsTitle = styled.h1`
  color: #ffffff;
  font-size: 55px;
  margin-top: 20px;
  margin-bottom: 30px;
  text-align: center;
  text-shadow: 0px 0px 20px rgba(81, 185, 249, 1);
`

export const DetailsSpecies = styled.p`
  color: #ffffff;
  font-size: 35px;
  margin-bottom: 30px;
  text-align: center;
  text-shadow: 0px 0px 0px rgba(81, 185, 249, 1);
`

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  height: 100%;
  border-radius: 80px; 
  
`;

export const Image = styled.img`
  width: 30%;
  height: auto;
  object-fit: cover;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`

export const DetailsContent = styled.div`
 
  width:  150vh;
  background-color: rgba(226, 226, 226, 0.1);
  box-shadow: 0px 0px 10px rgba(666, 666, 666, 0.4);

  overflow-y: auto; 
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
margin-bottom: 70px;
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
    border-color: lime;
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
    border-color: lime;
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
    border-color: lime;
    text-decoration: underline;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px #3f51b5;
  }
`