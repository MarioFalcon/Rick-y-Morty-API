import { FC, memo, useCallback, useState } from "react";
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
  return (
    <Container>
      <Content>
        <Header>
          <Button>Details</Button>

          <Button>Remove</Button>
        </Header>

        <Title> TITULO </Title>
        <ImageContainer>
          <Image />
        </ImageContainer>
      </Content>
    </Container>
  );
};

export default memo(Card);
