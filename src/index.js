import React from 'react'
import { render } from 'react-dom'

import { MainStyles } from '~/core'
import Routes from '~/routes'
import { AuthProvider } from '~/store'

const element = document.getElementById('root')

render(
  <AuthProvider>
    <MainStyles>
      <Routes />
    </MainStyles>
  </AuthProvider>,
  element
)
