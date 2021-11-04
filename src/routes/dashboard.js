import React from 'react'
import { Switch } from 'react-router-dom'

import { dashboardPath } from '~/config'
import { ProtectedRoute } from '~/core'
import { AddEducationPage, AddExperiencePage, DashboardPage, EditProfilePage } from '~/pages'

const DashboardRoutes = () => (
  <Switch>
    <ProtectedRoute isPrivate exact path={dashboardPath.home}>
      <DashboardPage />
    </ProtectedRoute>
    <ProtectedRoute isPrivate path={dashboardPath.profile}>
      <EditProfilePage />
    </ProtectedRoute>
    <ProtectedRoute isPrivate path={dashboardPath.education}>
      <AddEducationPage />
    </ProtectedRoute>
    <ProtectedRoute isPrivate path={dashboardPath.experience}>
      <AddExperiencePage />
    </ProtectedRoute>
  </Switch>
)

export default DashboardRoutes
