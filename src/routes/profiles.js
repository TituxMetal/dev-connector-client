import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { profilesPath } from '~/config'
import { AllProfilesPage, SingleProfilePage } from '~/pages'

const ProfileRoutes = () => (
  <Routes>
    <Route index element={<AllProfilesPage />} />
    <Route path={profilesPath.single} element={<SingleProfilePage />} />
  </Routes>
)

export default ProfileRoutes
