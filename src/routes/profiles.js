import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { profilesPath } from '~/config'
import { AllProfilesPage, SingleProfilePage } from '~/pages'

const ProfileRoutes = () => (
  <Switch>
    <Route exact path={profilesPath.all}>
      <AllProfilesPage />
    </Route>
    <Route path={profilesPath.single}>
      <SingleProfilePage />
    </Route>
  </Switch>
)

export default ProfileRoutes
