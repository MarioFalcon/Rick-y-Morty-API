import styled from 'styled-components'

export const ButtonContainer = styled.div`
  margin-top: 158px;
  margin-left: 50px;
`

export const Back = styled.button`
  position: fixed;
  top: 110px;
  left: 20px;
  z-index: 9;

  background-color: transparent;
  color: lime;
  padding: 10px 20px;
  border: lime;
  border-radius: 50px;
  cursor: pointer;
  font-size: 25px;
  transition: all 0.3s ease-in-out;
  width: 115px;

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
    width: auto;
    padding: 8px 16px;
    font-size: 14px;
  }
`


export const PerfilContainer = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 500px;
  padding: 20px;
  border-radius: 28px;
  background-color: rgba(245, 245, 245, 0.6);
  margin: 10px auto;
`

export const Avatar = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
 
  background-image: url('https://i.pinimg.com/originals/1f/20/55/1f20558bc93e0b2f73ef15ab38d626a9.gif');
  background-size: 200%; 
  background-position: center; 
  
`;

export const InfoContainer = styled.div`
margin-top:30px;
  color: #ffffff;
  font-weight: bold;
  font-size: 31px;

  font-family: 'Arial', sans-serif;
 
  
`

export const InfoItem = styled.p`
 
  color: black;
  font-size: 28px;
  .email {
    font-size: 32px;
  }

`

export const AdditionalContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`
