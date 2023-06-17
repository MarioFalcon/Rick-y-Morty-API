import { FC, memo, useState, useEffect,useCallback } from 'react'
import { CategoryEpisodes } from '../../models/episodes'
import { useNavigate } from 'react-router-dom'
import { RYMEpisodes } from '../../services/rym/rym'
import {
  Button,
  Container,
  Content,
  ImageContainer,
  Title,
  ContainerButton,
} from './containerListstyles'

const ContainerList: FC = () => {

  const navigate = useNavigate()
  const handleGoToDetails = useCallback(
    (episode: CategoryEpisodes) => {
      navigate(`/detailsepisodes/${episode.id}`)
    },
    [navigate]
  )

  const [episodes, setEpisodes] = useState<CategoryEpisodes[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const episdoesData = await RYMEpisodes()
      setEpisodes(episdoesData)
    }

    fetchData()
  }, [])


  return (
    <Container>
      {episodes.map((episode) => (
        <Content key={episode.name}>
          <Title>{episode.id}</Title>
          <Title>{episode.name}</Title>
          
          <ImageContainer>
            { }
          </ImageContainer>
          <ContainerButton>
          <Button onClick={() => handleGoToDetails(episode)}>Details</Button>
          <Button>Remove</Button>
          </ContainerButton>
        </Content>
      ))}
    </Container>
  )
}

export default memo(ContainerList)

