import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import { dashboardPath, mainPath } from '~/config'
import { useAuthentication } from '~/store'

const ProtectedRoute = ({ isPrivate }) => {
  const { isAuthenticated } = useAuthentication()
  const isPublic = !isPrivate && isAuthenticated
  const isProtected = isPrivate && !isAuthenticated

  return isProtected ? (
    <Navigate to={mainPath.home} />
  ) : isPublic ? (
    <Navigate to={dashboardPath.home} />
  ) : (
    <Outlet />
  )
}

export default ProtectedRoute
