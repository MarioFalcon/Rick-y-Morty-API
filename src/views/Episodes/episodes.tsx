import {FC, memo} from 'react'

import Header from '../../components/Header/header'
import Footer from '../../components/Footer/footer'
import ContainerList from '../../components/ContainerList/containerlist'
import BackArrow from '../../components/Back/backArrow'
import VideoBackground from '../../components/VideoBackground/videoBackground'
import {
  DashboardContainer,
  DashboardContent,
  DashboardCards,
} from './episodesStyles'


const Episodes: FC = () => {

  return (
    <DashboardContainer>
         <BackArrow />
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