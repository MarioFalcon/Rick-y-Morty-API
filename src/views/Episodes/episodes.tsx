import {FC, memo} from 'react'

import Header from '../../components/Header/header'
import Footer from '../../components/Footer/footer'
import Card from '../../components/Card/card'
import VideoBackground from '../../components/VideoBackground/videoBackground'
import {
  DashboardContainer,
  DashboardContent,
  DashboardCards,
} from './episodesStyles'


const Episodes: FC = () => {

  return (

    <DashboardContainer>
    <Header/>
      <VideoBackground videoSrc="/realism.mp4" />
      <DashboardContent>
        <DashboardCards>
        <Card/>
        </DashboardCards>
      </DashboardContent>
      <Footer />
      </DashboardContainer>
  )

}

export default memo(Episodes)