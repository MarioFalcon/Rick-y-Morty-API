import { FC } from 'react';
import { Container, ButtonContainer, Button } from './headerStyles'
import useLogic from './headerLogic';

const Header: FC = () => {
const { handleLogout } = useLogic()

  return (
    <Container>
      <ButtonContainer>
        <Button>Reset</Button>
        <Button>Profile</Button>
        <Button onClick={handleLogout}>Logout</Button>
      </ButtonContainer>
    </Container>
  );
};

export default Header;