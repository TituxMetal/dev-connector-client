import React from 'react'
import { Switch } from 'react-router-dom'

import { postsPath } from '~/config'
import { ProtectedRoute } from '~/core'
import { AllPostsPage, SinglePostPage } from '~/pages'

const PostsRoutes = () => (
  <Switch>
    <ProtectedRoute isPrivate exact path={postsPath.all}>
      <AllPostsPage />
    </ProtectedRoute>
    <ProtectedRoute isPrivate path={postsPath.single}>
      <SinglePostPage />
    </ProtectedRoute>
  </Switch>
)

export default PostsRoutes
