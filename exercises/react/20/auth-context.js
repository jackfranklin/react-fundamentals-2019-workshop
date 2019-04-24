import { createContext } from 'react'

const AuthContext = createContext({
  loggedInUserName: null,
})

export default AuthContext
