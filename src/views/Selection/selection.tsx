import { FC, memo, useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header/header'
import Footer from '../../components/Footer/footer'
import VideoBackground from '../../components/VideoBackground/videoBackground'
import {
  DashboardContainer,
  DashboardContent,
  ButtonContainer,
  LeftButton,
  RightButton,
} from './selectionStyles'

const Selection: FC = () => {
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()

  const handleGoToCharacters = useCallback(() => {
    navigate('/characters')
  }, [navigate])

  const handleGoToEpisodes = useCallback(() => {
    navigate('/episodes')
  }, [navigate])

  return (
    <DashboardContainer>
      <Header onLogout={function (): void {}} />
      <VideoBackground videoSrc="/duo.mp4" />
      <DashboardContent>
        <ButtonContainer>
          <LeftButton onClick={handleGoToCharacters}>CHARACTERS</LeftButton>
          <RightButton onClick={handleGoToEpisodes}>EPISODES</RightButton>
        </ButtonContainer>
      </DashboardContent>
      <Footer />
    </DashboardContainer>
  )
}

export default memo(Selection)
