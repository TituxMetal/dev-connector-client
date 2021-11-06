import React from 'react'
import { Outlet } from 'react-router-dom'

import Navigation from './Navigation'
import Ui from './ui'

const Footer = ({ children }) => (
  <Ui.Bar>
    <Ui.Wrapper>
      <Ui.Text>{children}</Ui.Text>
    </Ui.Wrapper>
  </Ui.Bar>
)

const Layout = () => (
  <Ui>
    <Ui.Bar>
      <Navigation />
    </Ui.Bar>
    <Ui.Main>
      <Outlet />
    </Ui.Main>
    <Footer>Created with love by Titux Metal</Footer>
  </Ui>
)

export default Layout
