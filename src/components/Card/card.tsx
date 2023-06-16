import { FC, memo, useState, useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import {
  Button,
  Container,
  Content,
  ImageContainer,
  Image,
  Title,
} from './cardstyles'
import { Props } from './types'
import { Categorycharacters } from '../../models/character'
import { RYMChapters } from '../../services/rym/rym'

const Card: FC = () => {
  const navigate = useNavigate()

  const handleGoToDetails = useCallback(() => {
    navigate(`/detailscharacters/`)
  }, [navigate])

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
        <Content key={chapter.name}>
          <Title>{chapter.name}</Title>
          <ImageContainer>
            <Image src={chapter.image} />
          </ImageContainer>
          <Button onClick={handleGoToDetails}>Details</Button>
          <Button>Remove</Button>
        </Content>
      ))}
    </Container>
  )
}

export default memo(Card)
