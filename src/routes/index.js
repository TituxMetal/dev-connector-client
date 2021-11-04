import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'

import { Layout } from '~/core'

import DashboardRoutes from './dashboard'
import MainRoutes from './main'
import PostsRoutes from './posts'
import ProfilesRoutes from './profiles'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Layout>
        <DashboardRoutes />
        <ProfilesRoutes />
        <PostsRoutes />
        <MainRoutes />
      </Layout>
    </Switch>
  </BrowserRouter>
)

export default Routes
