import { FC, memo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header/header'
import Footer from '../../components/Footer/footer'
import ContainerList from '../../components/ContainerList/containerlist'
import VideoBackground from '../../components/VideoBackground/videoBackground'
import {
  Back,
  DashboardContainer,
  DashboardContent,
  DashboardCards,
} from './episodesStyles'

const Episodes: FC = () => {
  const navigate = useNavigate()
  const handleGoToBack = useCallback(() => {
    navigate('/selection')
  }, [navigate])

  return (
    <DashboardContainer>
      <Back onClick={handleGoToBack}>Back</Back>
      <Header />
      <VideoBackground videoSrc="/realism.mp4" />
      <DashboardContent>
        <DashboardCards>
          <ContainerList />
        </DashboardCards>
      </DashboardContent>
      <Footer />
    </DashboardContainer>
  )
}

export default memo(Episodes)
