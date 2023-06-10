import { FC, memo, useCallback, useEffect, useState } from "react";
import { fetchCharacters, Character } from "../../services/rym/rym";

import {
  Button,
  Container,
  Content,
  Header,
  ImageContainer,
  Image,
  Title,
} from "./cardstyles";


const Card: FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    const fetchCharactersData = async () => {
      const charactersData = await fetchCharacters();
      setCharacters(charactersData);
    };

    fetchCharactersData();
  }, []);

  return (
    <Container>
      <Content>
        {characters.map((character) => (
          <CardItem key={character.id} character={character} />
        ))}
      </Content>
    </Container>
  );
};

interface CardItemProps {
  character: Character;
}

const CardItem: FC<CardItemProps> = ({ character }) => {
  return (
    <div>
      <Header>
        <Button>Details</Button>
        <Button>Remove</Button>
      </Header>
      <Title>{character.name}</Title>
      <ImageContainer>
        <Image src={character.image} alt={character.name} />
      </ImageContainer>
    </div>
  );
};

export default memo(Card);