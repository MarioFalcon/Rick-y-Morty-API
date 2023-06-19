import styled from 'styled-components'

export const Container = styled.div``

export const ButtonContainer = styled.div`
  margin-top: 58px;
  margin-left: 30px;
`

export const Back = styled.button`
  position: fixed;
  top: 90px;
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

export const Form = styled.form`
  height: 560px;
  width: 340px;
  background-color: rgba(245, 245, 245, 0.1);
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  border-radius: 10px;
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  padding: 30px;
  color: #ffffff;
  letter-spacing: 0.5px;
  outline: none;
  border: none;

  @media screen and (max-width: 768px) {
    width: auto;
    height: auto;
  }
`

export const InputController = styled.div`
  display: flex;
  flex-flow: column;

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`

export const Label = styled.label<{ $hasError?: boolean }>`
  margin-top: 30px;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  color: ${({ theme, $hasError }) =>
    $hasError ? theme.colors.danger : theme.colors.white};

  @media screen and (max-width: 768px) {
    font-size: 14px;
    margin-top: 5px;
  }
`

export const Error = styled.span`
  color: ${({ theme }) => theme.colors.danger};
  font-size: 14px;
  margin-top: 5px;
`

export const Input = styled.input<{ $hasError?: boolean }>`
  border-color: ${({ theme, $hasError }) =>
    $hasError ? theme.colors.danger : theme.colors.white};
  height: 50px;
  width: 95%;
  background-color: rgba(199, 215, 245, 0.8);
  border-radius: 3px;
  padding: 0 10px;
  margin-top: 15px;
  font-size: 16px;
  font-weight: 300;
  color: #000000;

  &:-webkit-autofill {
    -webkit-text-fill-color: #000000;
    box-shadow: 0 0 0px 1000px rgba(199, 215, 245, 0.8) inset;
  }

  &:focus {
    background-color: rgba(199, 215, 245, 0.8);
  }

  @media screen and (max-width: 768px) {
    height: 30px;
    font-size: 14px;
  }
`
