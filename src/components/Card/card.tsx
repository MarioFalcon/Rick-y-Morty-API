import  { FC, memo, useState, useEffect } from "react";


import {
  Button,
  Container,
  Content,
  Header,
  ImageContainer,
  Image,
  Title,
} from "./cardstyles";
import { Category } from "../../models/Category";
import { RYMChapters } from "../../services/rym/rym";


const Card: FC = () => {
  const [chapters, setChapters] = useState<Category[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const chaptersData = await RYMChapters();
      setChapters(chaptersData);
    };

    fetchData();
  }, []);

  return (
    <Container>
      {chapters.map((chapter) => (
        <Content key={chapter.name}>
          <Header />
          <Button>Details</Button>
          <Button>Remove</Button>
          <Title>{chapter.name}</Title>
          <ImageContainer>
            <Image src={chapter.image} alt={chapter.name} />
          </ImageContainer>
        </Content>
      ))}
    </Container>
  );
};

export default memo(Card);