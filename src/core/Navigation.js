import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Code } from 'styled-icons/fa-solid'
import tw, { styled } from 'twin.macro'

import { dashboardPath, mainPath, postsPath, profilesPath } from '~/config'
import { useAuthentication } from '~/store'

const Brand = styled.section(tw`flex flex-row text-2xl w-8/12 items-center`)
const Button = styled.button(tw`font-bold text-center cursor-pointer`)
const Icon = styled(Code)(tw`h-6 w-6 ml-2`)
const Nav = styled.ul(tw`flex items-center content-center`)
const NavBar = styled.nav(tw`flex flex-1 justify-between items-center max-w-screen-lg m-auto py-2`)
const NavItem = styled.li(tw`px-4 py-2 font-bold`)

const Navigation = () => {
  const { isAuthenticated, fakeLoginOrRegister } = useAuthentication()

  return (
    <NavBar>
      <Brand>
        <Icon />
        <NavItem as={Link} to={isAuthenticated ? dashboardPath.home : mainPath.home}>
          Dev Connector
        </NavItem>
      </Brand>
      <Nav>
        <NavItem>
          <NavLink to={profilesPath.all}>Devloppers</NavLink>
        </NavItem>
        {isAuthenticated ? (
          <>
            <NavItem>
              <NavLink to={postsPath.all}>Posts</NavLink>
            </NavItem>
            <NavItem>
              <Button onClick={fakeLoginOrRegister}>Logout</Button>
            </NavItem>
          </>
        ) : (
          <>
            <NavItem>
              <NavLink to={mainPath.auth}>Authenticate</NavLink>
            </NavItem>
            <NavItem>
              <Button onClick={fakeLoginOrRegister}>Login</Button>
            </NavItem>
          </>
        )}
      </Nav>
    </NavBar>
  )
}

export default Navigation
