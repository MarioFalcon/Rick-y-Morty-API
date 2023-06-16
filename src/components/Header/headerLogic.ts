import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { logout } from '../../services/firebase/auth'
import { Props } from './headerTypes'

const useLogic = (onLogout: Props['onLogout']) => {
  const navigate = useNavigate()

  const handleLogout = useCallback(async () => {
    await logout()
    window.localStorage.removeItem('userToken')
    onLogout()
    navigate('/login')
  }, [navigate, onLogout])

  return {
    handleLogout,
  }
}

export default useLogic
