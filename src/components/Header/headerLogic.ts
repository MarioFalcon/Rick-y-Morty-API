import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { logout } from '../../services/firebase/auth'
import { resetUserInfo } from '../../services/storage/user'
import { removeToken } from '../../services/storage/token'

const useLogic = () => {
  const navigate = useNavigate()

  const handleLogout = useCallback(async () => {
    await logout()
    removeToken()
    resetUserInfo()
    navigate('/login')
  }, [navigate])

  return {
    handleLogout,
  }
}

export default useLogic
