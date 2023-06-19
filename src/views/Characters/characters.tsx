import { FC, memo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header/header'
import Footer from '../../components/Footer/footer'
import Card from '../../components/Card/card'
import VideoBackground from '../../components/VideoBackground/videoBackground'
import { Container, DashboardCards, Back, Button } from './charactersStyles'
import { removeCachedChapters } from '../../services/storage/storage'

const Characters: FC = () => {
  const navigate = useNavigate()

  const handleGoToCreateForm = useCallback(() => {
    navigate('/create')
  }, [navigate])

  const handleGoToBack = useCallback(() => {
    navigate('/selection')
  }, [navigate])

  const handleRemove = useCallback((id: string) => {
    removeCachedChapters(id)
  }, [])

  return (
    <Container>
      <Back onClick={handleGoToBack}>Back</Back>
      <Button onClick={handleGoToCreateForm}>New Card</Button>
      <DashboardCards>
        <Header />
        <VideoBackground videoSrc="/realism.mp4" />
        <Card onRemove={handleRemove} />
        <Footer />
      </DashboardCards>
    </Container>
  )
}

export default memo(Characters)
