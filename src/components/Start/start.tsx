import { FC, memo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { ButtonStart } from './startStyles'

export const Start: FC = () => {
  const navigate = useNavigate()
  const handleGoToLogin = useCallback(() => {
    navigate('/login')
  }, [navigate])

  return <ButtonStart onClick={handleGoToLogin}> Start </ButtonStart>
}

export default memo(Start)
