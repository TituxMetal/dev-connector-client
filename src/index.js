import React from 'react'
import { render } from 'react-dom'

import { MainStyles } from '~/core'
import Routes from '~/routes'

const element = document.getElementById('root')

render(
  <MainStyles>
    <Routes />
  </MainStyles>,
  element
)
