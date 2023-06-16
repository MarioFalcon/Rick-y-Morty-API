import { FC, memo, useState, useEffect } from 'react'
import {
  Button,
  Container,
  Content,
  ImageContainer,
  Image,
  Title,
} from './containerListstyles'
import { CategoryEpisodes } from '../../models/episodes'
import { RYMEpisodes } from '../../services/rym/rym'

const ContainerList: FC = () => {
  const [chapters, setChapters] = useState<CategoryEpisodes[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const chaptersData = await RYMEpisodes()
      setChapters(chaptersData)
    }

    fetchData()
  }, [])

  return (
    <Container>
      {chapters.map((chapter) => (
        <Content key={chapter.name}>
          <Title>{chapter.name}</Title>
          <Title>{chapter.episode}</Title>
          <ImageContainer>
            {/* <Image src={chapter.characters} /> */}
          </ImageContainer>
          <Button>Details</Button>
          <Button>Remove</Button>
        </Content>
      ))}
    </Container>
  )
}

export default memo(ContainerList)
