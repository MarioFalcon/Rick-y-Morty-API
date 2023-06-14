import  { FC, memo, useState, useEffect } from "react";


import {
  Button,
  Container,
  Content,
  ImageContainer,
  Image,
  Title,
} from "./cardstyles";
import { Category } from "../../models/character";
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
         
          <Title>{chapter.name}</Title>
          <ImageContainer>
            <Image src={chapter.image}  />
          </ImageContainer>
          
          <Button>Details</Button>
          <Button>Remove</Button>
          
        </Content>
      ))}
    </Container>
  );
};

export default memo(Card);