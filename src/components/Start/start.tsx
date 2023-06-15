import { FC, memo, useCallback } from 'react'
import { ButtonStart } from './startStyles'
import { useNavigate } from 'react-router-dom'

export const Start: FC = () => {
  const navigate = useNavigate()
  const handleGoToLogin = useCallback(() => {
    navigate('/login')
  }, [navigate])

  return <ButtonStart onClick={handleGoToLogin}> Start </ButtonStart>
}

export default memo(Start)
