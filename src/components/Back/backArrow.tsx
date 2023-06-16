import { FC, memo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { BackButton } from './backArrowStyles'

const BackArrow: FC = () => {
  const navigate = useNavigate()
  const goBack = useCallback(() => {
    navigate(-1)
  }, [navigate])

  return <BackButton onClick={goBack}>Back</BackButton>
}

export default memo(BackArrow)
