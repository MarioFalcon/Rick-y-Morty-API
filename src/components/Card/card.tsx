import { FC, memo, useState, useCallback, useEffect } from 'react'
import { Categorycharacters } from '../../models/character'
import { useNavigate } from 'react-router-dom'
import { RYMChapters } from '../../services/rym/rym'
import {
  Button,
  Container,
  Content,
  ImageContainer,
  Image,
  Title,
  ContainerButton,
} from './cardstyles'

const Card: FC = () => {
  
  const navigate = useNavigate()
  const handleGoToDetails = useCallback(
    (chapter: Categorycharacters) => {
      navigate(`/detailscharacters/${chapter.id}`)
    },
    [navigate]
  )

  const [chapters, setChapters] = useState<Categorycharacters[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const chaptersData = await RYMChapters()
      setChapters(chaptersData)
    }

    fetchData()
  }, [])

  return (
    <Container>
      {chapters.map((chapter) => (
        <Content key={chapter.id}>
          <Title>{chapter.name}</Title>
          <ImageContainer>
            <Image src={chapter.image} />
          </ImageContainer>
          <ContainerButton>
            <Button onClick={() => handleGoToDetails(chapter)}>Details</Button>
            <Button>Remove</Button>
          </ContainerButton>
        </Content>
      ))}
    </Container>
  )
}

export default memo(Card)
