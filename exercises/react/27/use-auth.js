import React, { useContext, useState, createContext, useMemo } from 'react'

const AuthContext = createContext()

const useAuth = () => {
  const context = useContext(AuthContext)
  return context
}

const AuthProvider = props => {
  const [loggedInUserName, setLoggedInUserName] = useState('')

  const authContext = useMemo(() => {
    return {
      loggedInUserName,
      setLoggedInUserName,
    }
  }, [loggedInUserName])

  const { children, ...otherProps } = props

  return (
    <AuthContext.Provider value={authContext} {...otherProps}>
      {children}
    </AuthContext.Provider>
  )
}

export { useAuth, AuthProvider }
