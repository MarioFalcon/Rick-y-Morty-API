import { FC, memo, useCallback } from 'react'
import { Container, ButtonContainer, Button } from './headerStyles'
import { useNavigate } from 'react-router-dom'
import useLogic from './headerLogic'
import { Props } from './headerTypes'

const Header: FC<Props> = ({ onLogout }) => {
  const navigate = useNavigate()
  const { handleLogout } = useLogic(onLogout)




  const handleGoToProfile = useCallback(() => {
    navigate('/profile')
  }, [navigate])


  return (
    <Container>
      <ButtonContainer>
        <Button>Reset</Button>
        <Button onClick={handleGoToProfile}>Profile</Button>
        <Button onClick={handleLogout}>Logout</Button>
      </ButtonContainer>
    </Container>
  )
}

export default memo(Header)
