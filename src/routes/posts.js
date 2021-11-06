import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { postsPath } from '~/config'
import { ProtectedRoute } from '~/core'
import { AllPostsPage, SinglePostPage } from '~/pages'

const PostsRoutes = () => (
  <Routes>
    <Route element={<ProtectedRoute isPrivate />}>
      <Route index element={<AllPostsPage />} />
      <Route path={postsPath.single} element={<SinglePostPage />} />
    </Route>
  </Routes>
)

export default PostsRoutes
