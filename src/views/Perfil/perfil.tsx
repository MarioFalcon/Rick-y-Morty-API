import { FC, memo, useCallback } from 'react'
import {
  PerfilContainer,
  Avatar,
  InfoContainer,
  InfoItem,
  AdditionalContainer,
  ButtonContainer,
  Back,
} from './perfilStyles'

import Header from '../../components/Header/header'
import Footer from '../../components/Footer/footer'
import VideoBackground from '../../components/VideoBackground/videoBackground'
import { useNavigate } from 'react-router-dom'



const Perfil: FC = () => {




  const navigate = useNavigate()
  const handleGoToBack = useCallback(() => {
    navigate('/selection')
  }, [navigate])




  return (
    <>
          <Back onClick={handleGoToBack}>Back</Back>
      <Header onLogout={function (): void {}} />
      <VideoBackground videoSrc="/dragon.mp4" />
      <ButtonContainer>

      </ButtonContainer>
      <PerfilContainer>
        <Avatar />
        <InfoContainer>
          <InfoItem>Email:</InfoItem>
          <InfoItem>Nombre:</InfoItem>
          <InfoItem>Numero:</InfoItem>
        </InfoContainer>
      </PerfilContainer>
      <AdditionalContainer></AdditionalContainer>
      <Footer />
    </>
  )
}

export default memo(Perfil)
