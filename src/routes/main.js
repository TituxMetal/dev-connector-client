import React from 'react'
import { Switch } from 'react-router-dom'

import { mainPath } from '~/config'
import { ProtectedRoute } from '~/core'
import { AuthPage, HomePage } from '~/pages'

const MainRoutes = () => (
  <Switch>
    <ProtectedRoute exact path={mainPath.home}>
      <HomePage />
    </ProtectedRoute>
    <ProtectedRoute path={mainPath.auth}>
      <AuthPage />
    </ProtectedRoute>
  </Switch>
)

export default MainRoutes
