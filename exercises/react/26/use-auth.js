import { useContext } from 'react'
import AuthContext from './auth-context'

const useAuth = () => {
  const context = useContext(AuthContext)
  return context
}

export { useAuth }
