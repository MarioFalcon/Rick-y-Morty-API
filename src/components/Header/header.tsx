import { FC, memo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, ButtonContainer, Gif, Button } from './headerStyles'
import useLogic from './headerLogic'
import { Props } from './headerTypes'
import { resetCache } from '../../services/storage/storage'

const Header: FC<Props> = ({ onLogout }) => {
  const navigate = useNavigate()
  const { handleLogout } = useLogic(onLogout)

  const handleReset = useCallback(() => {
    resetCache?.()
    navigate('/')
  }, [navigate])

  const handleGoToProfile = useCallback(() => {
    navigate('/profile')
  }, [navigate])

  return (
    <Container>
      <Gif src="https://media.giphy.com/media/3o7aD2d7hy9ktXNDP2/giphy.gif" />

      <ButtonContainer>
        <Button onClick={handleReset}>Reset</Button>
        <Button onClick={handleGoToProfile}>Profile</Button>
        <Button onClick={handleLogout}>Logout</Button>
      </ButtonContainer>
    </Container>
  )
}

export default memo(Header)
