import { FC, memo, useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { toggleFavoritesEpisode } from '../../services/storage/storage'
import { RYMEpisodes } from '../../services/rym/rym'
import type { Props } from './types'
import { CategoryEpisodes } from '../../models/episodes'
import {
  Button,
  Container,
  Content,
  ImageContainer,
  Title,
  ContainerButton,
} from './containerListstyles'

interface ExtendedCategoryEpisodes extends CategoryEpisodes {
  isFav: boolean
}

const ContainerList: FC<Props> = () => {
  const [episodes, setEpisodes] = useState<CategoryEpisodes[]>([])
  const navigate = useNavigate()
  const handleGoToDetails = useCallback(
    (episode: CategoryEpisodes) => {
      navigate(`/detailsepisodes/${episode.id}`)
    },
    [navigate]
  )

  const handleToggleFavorites = useCallback(
    (episode: ExtendedCategoryEpisodes) => {
      toggleFavoritesEpisode(episode)
      setEpisodes((prevEpisodes) =>
        prevEpisodes.map((prevEpisodes) =>
          prevEpisodes.id === episode.id
            ? { ...prevEpisodes, isFavorite: !prevEpisodes.isFav }
            : prevEpisodes
        )
      )
    },
    []
  )

  useEffect(() => {
    const fetchData = async () => {
      const episdoesData = await RYMEpisodes()
      const episodesWithFavorites = episdoesData.map((episode) => ({
        ...episode,
        isFavorite: false,
      }))
      setEpisodes(episodesWithFavorites)
    }

    fetchData()
  }, [])

  return (
    <Container>
      {episodes.map((episode) => (
        <Content key={episode.name}>
          <Title>{episode.id}</Title>
          <Title>{episode.name}</Title>

          <ImageContainer>{}</ImageContainer>
          <ContainerButton>
            <Button onClick={() => handleGoToDetails(episode)}>Details</Button>
            <Button>Remove</Button>
            <Button onClick={() => handleToggleFavorites(episode)}>
              {episode.isFav ? 'Remove Favorite' : 'Add Favorite'}
            </Button>
          </ContainerButton>
        </Content>
      ))}
    </Container>
  )
}

export default memo(ContainerList)
