import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { mainPath } from '~/config'
import { ProtectedRoute } from '~/core'
import { AuthPage, HomePage } from '~/pages'

const MainRoutes = () => (
  <Routes>
    <Route element={<ProtectedRoute />}>
      <Route index element={<HomePage />} />
      <Route path={mainPath.auth} element={<AuthPage />} />
    </Route>
  </Routes>
)

export default MainRoutes
