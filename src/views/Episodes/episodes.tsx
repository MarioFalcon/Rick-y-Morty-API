import {FC, memo, useCallback} from 'react'

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
import { useNavigate } from 'react-router-dom'

const Episodes: FC = () => {


  const navigate = useNavigate()
  const handleGoToBack = useCallback(() => {
    navigate('/selection')
  }, [navigate])


  return (
    <DashboardContainer>
      <Back onClick={handleGoToBack}>Back</Back>
      <Header onLogout={function (): void {}} />
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