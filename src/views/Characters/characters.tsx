import { FC, memo, useCallback } from 'react'

import Header from '../../components/Header/header'
import Footer from '../../components/Footer/footer'
import Card from '../../components/Card/card'
import VideoBackground from '../../components/VideoBackground/videoBackground'

import { Container, DashboardCards, Back } from './charactersStyles'
import { useNavigate } from 'react-router-dom'

const Characters: FC = () => {
  const navigate = useNavigate()
  const handleGoToBack = useCallback(() => {
    navigate('/selection')
  }, [navigate])

  return (
    <Container>
      <Back onClick={handleGoToBack}>Back</Back>
      <DashboardCards>
        <Header onLogout={function (): void {}} />
        <VideoBackground videoSrc="/realism.mp4" />
        <Card />
        <Footer />
      </DashboardCards>
    </Container>
  )
}

export default memo(Characters)
