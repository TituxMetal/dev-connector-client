import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { dashboardPath, mainPath, postsPath, profilesPath } from '~/config'
import { Layout } from '~/core'

import DashboardRoutes from './dashboard'
import MainRoutes from './main'
import PostsRoutes from './posts'
import ProfilesRoutes from './profiles'

const Routing = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path={`${mainPath.home}*`} element={<MainRoutes />} />
        <Route path={`${dashboardPath.home}/*`} element={<DashboardRoutes />} />
        <Route path={`${profilesPath.all}/*`} element={<ProfilesRoutes />} />
        <Route path={`${postsPath.all}/*`} element={<PostsRoutes />} />
      </Route>
    </Routes>
  </BrowserRouter>
)

export default Routing
