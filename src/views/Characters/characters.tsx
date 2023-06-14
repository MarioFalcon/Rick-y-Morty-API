import { FC, memo } from 'react'

import Header from '../../components/Header/header'
import Footer from '../../components/Footer/footer'
import Card from '../../components/Card/card'
import VideoBackground from '../../components/VideoBackground/videoBackground'


import { Container, DashboardCards } from './charactersStyles'


const Characters: FC = () => {
  return (
    <Container>
    <DashboardCards>
      <Header />
      <VideoBackground videoSrc="/realism.mp4" />
      <Card />
      <Footer />
    </DashboardCards>
    </Container>
  )
}

export default memo(Characters)
