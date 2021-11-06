import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { dashboardPath } from '~/config'
import { ProtectedRoute } from '~/core'
import { AddEducationPage, AddExperiencePage, DashboardPage, EditProfilePage } from '~/pages'

const DashboardRoutes = () => (
  <Routes>
    <Route element={<ProtectedRoute isPrivate />}>
      <Route index element={<DashboardPage />} />
      <Route path={dashboardPath.profile} element={<EditProfilePage />} />
      <Route path={dashboardPath.education} element={<AddEducationPage />} />
      <Route path={dashboardPath.experience} element={<AddExperiencePage />} />
    </Route>
  </Routes>
)

export default DashboardRoutes
