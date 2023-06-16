import { FC, memo } from 'react'
import Start from '../../components/Start/start'
import Footer from '../../components/Footer/footer'
import VideoBackground from '../../components/VideoBackground/videoBackground'
import { WelcomeDiv, Title, Subtitle } from './welcomeStyles'

const Welcome: FC = () => {
  return (
    <WelcomeDiv>
      <VideoBackground videoSrc="/realism.mp4" />
      <Title>"The Ultimate Guide to Rick and Morty: Welcome!"</Title>
      <Subtitle></Subtitle>
      <Start />
      <Footer />
    </WelcomeDiv>
  )
}

export default memo(Welcome)
