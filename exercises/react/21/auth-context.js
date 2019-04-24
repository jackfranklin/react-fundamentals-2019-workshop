import { createContext } from 'react'

const AuthContext = createContext({
  loggedInUserName: null,
  setLoggedInUser: () => {},
})

export default AuthContext
