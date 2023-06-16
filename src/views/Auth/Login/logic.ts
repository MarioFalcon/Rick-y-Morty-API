import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../../../services/firebase/auth'
import { setToken } from '../../../services/storage/storage'
import { Props } from './types'

const useLogic = (onLogin: Props['onLogin']) => {
  const navigate = useNavigate()

  const handleOnSubmit = useCallback(
    async (values: { email: string; password: string }) => {
      try {
        const user = await login(values.email, values.password)
        console.log(user)
        if (user) {
          const token = await user.getIdToken()
          setToken(token)
          onLogin()
          navigate('/selection')
        }
      } catch (e) {
        console.log(e)
      }
    },
    [navigate, onLogin]
  )

  return {
    handleOnSubmit,
  }
}

export default useLogic
