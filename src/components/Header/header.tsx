import { FC } from 'react'
import { Container, ButtonContainer, Button } from './headerStyles'
import useLogic from './headerLogic'
import { Props } from './headerTypes'

const Header: FC<Props> = ({ onLogout }) => {
  const { handleLogout } = useLogic(onLogout)

  return (
    <Container>
      <ButtonContainer>
        <Button>Reset</Button>
        <Button>Profile</Button>
        <Button onClick={handleLogout}>Logout</Button>
      </ButtonContainer>
    </Container>
  )
}

export default Header
