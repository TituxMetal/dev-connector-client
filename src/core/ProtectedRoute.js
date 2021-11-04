import React from 'react'
import { Redirect, Route } from 'react-router-dom'

import { dashboardPath, mainPath } from '~/config'
import { useAuthentication } from '~/store'

const ProtectedRoute = ({ children, isPrivate, ...rest }) => {
  const { isAuthenticated } = useAuthentication()
  const isPublic = !isPrivate && isAuthenticated
  const isProtected = isPrivate && !isAuthenticated

  return isProtected ? (
    <Redirect to={mainPath.home} />
  ) : isPublic ? (
    <Redirect to={dashboardPath.home} />
  ) : (
    <Route {...rest}>{children}</Route>
  )
}

export default ProtectedRoute
