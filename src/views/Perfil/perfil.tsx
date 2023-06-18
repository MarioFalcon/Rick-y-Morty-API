import { FC, memo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  PerfilContainer,
  Avatar,
  InfoContainer,
  InfoItem,
  Container,
  Content,
  Title,
  Image,
  ImageContainer,
  Back,
} from './perfilStyles'
import { getUserInfo } from '../../services/storage/user'
import Header from '../../components/Header/header'
import Footer from '../../components/Footer/footer'
import VideoBackground from '../../components/VideoBackground/videoBackground'
import { getFavorites } from '../../services/storage/storage'

const Perfil: FC = () => {
  const user = getUserInfo()

  const cardFavorites = getFavorites()

  const navigate = useNavigate()
  const handleGoToBack = useCallback(() => {
    navigate('/selection')
  }, [navigate])

  return (
    <>
      <Back onClick={handleGoToBack}>Back</Back>
      <Header onLogout={function (): void {}} />
      <VideoBackground videoSrc="/dragonattack.mp4" />
      <PerfilContainer>
        <Avatar />
        <InfoContainer>
          <InfoItem>{user[0].email}</InfoItem>
          <InfoItem>
            <b>Welcome to your profile </b>
            {user[0].displayName}
          </InfoItem>
        </InfoContainer>
      </PerfilContainer>

      <Container>
        {cardFavorites.map((chapter) => (
          <Content key={chapter.id}>
            <Title>{chapter.name}</Title>
            <ImageContainer>
              <Image src={chapter.image} />
            </ImageContainer>
          </Content>
        ))}
      </Container>
      <Footer />
    </>
  )
}

export default memo(Perfil)
