import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import {
  AddEducation,
  AddExperience,
  Dashboard,
  EditProfile,
  Home,
  Login,
  Post,
  Posts,
  Profile,
  Profiles,
  Register
} from '~/pages'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/register' component={Register} />
      <Route path='/login' component={Login} />
      <Route path='/post' component={Post} />
      <Route path='/posts' component={Posts} />
      <Route path='/profiles' component={Profiles} />
      <Route path='/profile' component={Profile} />
      <Route path='/dashboard' component={Dashboard} />
      <Route path='/edit-profile' component={EditProfile} />
      <Route path='/add-experience' component={AddExperience} />
      <Route path='/add-education' component={AddEducation} />
    </Switch>
  </BrowserRouter>
)

export default Routes
