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
  Titlecharacters,
  DetailsTitle,
  DetailsSpecies,
  DetailsContent,
} from './perfilStyles'
import { getUserInfo } from '../../services/storage/user'
import Header from '../../components/Header/header'
import Footer from '../../components/Footer/footer'
import VideoBackground from '../../components/VideoBackground/videoBackground'
import {
  getFavoritesCharacters,
  getFavoritesEpisodes,
} from '../../services/storage/storage'

const Perfil: FC = () => {
  const user = getUserInfo()

  const cardFavorites = getFavoritesCharacters()
  const cardFavoritesEpisodes = getFavoritesEpisodes()

  const navigate = useNavigate()
  const handleGoToBack = useCallback(() => {
    navigate('/selection')
  }, [navigate])

  return (
    <>
      <Back onClick={handleGoToBack}>Back</Back>
      <Header />
      <VideoBackground videoSrc="/realism.mp4" />
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

      <Titlecharacters>your favorite characters</Titlecharacters>
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

      <Titlecharacters>your favorite episodes</Titlecharacters>
      {cardFavoritesEpisodes.map((episode) => (
        <DetailsContent>
          <DetailsTitle>{episode.name}</DetailsTitle>
          <DetailsSpecies>{episode.id}</DetailsSpecies>
          <DetailsSpecies>{episode.air_date}</DetailsSpecies>
          <DetailsSpecies>{episode.episode}</DetailsSpecies>
        </DetailsContent>
      ))}
      <Footer />
    </>
  )
}

export default memo(Perfil)
