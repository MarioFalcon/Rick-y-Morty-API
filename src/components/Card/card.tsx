import { FC, memo, useState, useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getFavoritesCharacters, toggleFavoritesCharacter } from '../../services/storage/storage'
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
} from './cardstyles';

interface ExtendedCategorycharacters extends Categorycharacters {
  isFavorite: boolean;
}

const Card: FC<Props> = ({onRemove}) => {
  const [chapters, setChapters] = useState<ExtendedCategorycharacters[]>([]);
  const navigate = useNavigate();

  const handleGoToDetails = useCallback(
    (chapter: ExtendedCategorycharacters) => {
      navigate(`/detailscharacters/${chapter.id}`);
    },
    [navigate]
  );

  const handleToggleFavorites = useCallback(
    (chapter: ExtendedCategorycharacters) => {

      toggleFavoritesCharacter(chapter)

      setChapters((prevChapters) =>
        prevChapters.map((prevChapter) =>
          prevChapter.id === chapter.id
            ? { ...prevChapter, isFavorite: !prevChapter.isFavorite }
            : prevChapter
        )
      );
    },
    []
  );

  useEffect(() => {
    const fetchData = async () => {
      const chaptersData = await RYMChapters();
      const chaptersWithFavorites = chaptersData.map((chapter) => ({
        ...chapter,
        isFavorite: false,

      }))


      const storedFavorites = getFavoritesCharacters()
      const updatedChapters = chaptersWithFavorites.map((chapter) => ({
        ...chapter,
        isFavorite: storedFavorites.some((fav) => fav.id === chapter.id),
      }))



      setChapters(updatedChapters)
    }


    fetchData();
  }, []);

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
            <Button onClick={() => onRemove?.(chapter)}>Remove</Button>
            <Button onClick={() => handleToggleFavorites(chapter)}>
              {chapter.isFavorite ? 'Remove Favorite' : 'Add Favorite'}
            </Button>
          </ContainerButton>
        </Content>
      ))}
    </Container>
  );
};

export default memo(Card);