import { FC, memo, useState, useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  getFavoritesCharacters,
  toggleFavoritesCharacter,
} from '../../services/storage/storage'
import { RYMChapters } from '../../services/rym/rym'
import type { Props } from './types'
import { Categorycharacters } from '../../models/character'
import {
  Button,
  Container,
  Content,
  ImageContainer,
  Image,
  Title,
  ContainerButton,
} from './cardstyles'

interface ExtendedCategorycharacters extends Categorycharacters {
  isFavorite: boolean
}

const Card: FC<Props> = ({ onRemove }) => {
  const [chapters, setChapters] = useState<ExtendedCategorycharacters[]>([])
  const navigate = useNavigate()

  const handleGoToDetails = useCallback(
    (chapter: ExtendedCategorycharacters) => {
      navigate(`/detailscharacters/${chapter.id}`)
    },
    [navigate]
  )

  const handleToggleFavorites = useCallback(
    (chapter: ExtendedCategorycharacters) => {
      toggleFavoritesCharacter(chapter)

      setChapters((prevChapters) =>
        prevChapters.map((prevChapter) =>
          prevChapter.id === chapter.id
            ? { ...prevChapter, isFavorite: !prevChapter.isFavorite }
            : prevChapter
        )
      )
    },
    []
  )

  const handleCardRemove = useCallback(
    (id: string) => {
      setChapters((prevChapters) =>
        prevChapters.filter((chapter) => chapter.id !== id)
      )

      if (onRemove) {
        onRemove(id)
      }
    },
    [onRemove]
  )

  const handleGetCharacters = useCallback(async () => {
    const chaptersData = await RYMChapters()
    const storedFavorites = getFavoritesCharacters()
    const updatedChapters = chaptersData.map((chapter) => ({
      ...chapter,
      isFavorite: storedFavorites.some((fav) => fav.id === chapter.id),
    }))

    setChapters(updatedChapters)
  }, [])

  useEffect(() => {
    handleGetCharacters()
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
            <Button onClick={() => handleCardRemove(chapter.id)}>Remove</Button>
            <Button onClick={() => handleToggleFavorites(chapter)}>
              {chapter.isFavorite ? 'Remove Favorite' : 'Add Favorite'}
            </Button>
          </ContainerButton>
        </Content>
      ))}
    </Container>
  )
}

export default memo(Card)
