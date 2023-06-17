import { FC, memo, useCallback, useEffect, useState } from 'react'
import {
  DetailsContainer,
  DetailsContent,
  DetailsTitle,
  DetailsSpecies,
  ButtonContainer,
  Buttoneditar,
  ButtonBack,
  Image,
  ImageContainer,
} from './detailsepisodesStyles'

import Footer from '../../components/Footer/footer'
import { useNavigate, useParams } from 'react-router-dom'
import { RYMEpisodes } from '../../services/rym/rym'
import VideoBackground from '../../components/VideoBackground/videoBackground'
import { CategoryEpisodes } from '../../models/episodes'

const DetailsEpisodes: FC = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const [episode, setEpisodes] = useState<CategoryEpisodes | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      const episodesData = await RYMEpisodes()
      const selectedEpisode = episodesData.find(
        (episode) => typeof id === 'string' && episode.id === parseInt(id)
      )
      setEpisodes(selectedEpisode || null)
    }

    fetchData()
  }, [id])

  const handleGoBack = useCallback(() => {
    navigate('/episodes')
  }, [navigate])

  return (
    <DetailsContainer>
      <VideoBackground videoSrc="/realism.mp4" />
      <DetailsContent>
        {episode && (
          <>
            <DetailsTitle>{episode.name}</DetailsTitle>
            <ImageContainer>
  {episode.characters.map((character) => (
    <Image src={character.image} />
  ))}
</ImageContainer>
            <DetailsSpecies>{episode.id}</DetailsSpecies>
            <DetailsSpecies>{episode.air_date}</DetailsSpecies>
            <DetailsSpecies>{episode.episode}</DetailsSpecies>
            
          </>
        )}
        <ButtonContainer>
          <ButtonBack onClick={handleGoBack}>Back</ButtonBack>
          <Buttoneditar>Edit</Buttoneditar>

        </ButtonContainer>
      </DetailsContent>
      <Footer />
    </DetailsContainer>
  )
}

export default memo(DetailsEpisodes)
