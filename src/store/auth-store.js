import React, { createContext, useContext, useState } from 'react'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setAuthenticated] = useState(false)

  return (
    <AuthContext.Provider value={{ isAuthenticated, setAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuthentication = () => {
  const { isAuthenticated, setAuthenticated } = useContext(AuthContext)

  const fakeLoginOrRegister = () => setAuthenticated(prev => !prev)

  return { isAuthenticated, fakeLoginOrRegister }
}

export { AuthProvider, useAuthentication }
