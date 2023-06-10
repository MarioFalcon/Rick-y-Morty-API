import { FC } from 'react';
import { Container, ButtonContainer, Button } from './headerStyles'

const Header: FC = () => {
  return (
    <Container>
      <ButtonContainer>
        <Button>Reset</Button>
        <Button>Profile</Button>
        <Button>Logout</Button>
      </ButtonContainer>
    </Container>
  );
};

export default Header;