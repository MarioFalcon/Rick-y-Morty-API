import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { addNewCard } from '../../services/storage/storage'

const useLogic = () => {
  const navigate = useNavigate()
  const handleCreate = useCallback(
    (values: { id: string; name: string; species: string }) => {
      addNewCard(values)
      navigate('/characters')
    },
    [navigate]
  )

  return { handleCreate }
}

export default useLogic
