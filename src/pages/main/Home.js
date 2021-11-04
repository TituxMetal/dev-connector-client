import React from 'react'
import { Link } from 'react-router-dom'

import { mainPath } from '~/config'
import { useAuthentication } from '~/store'

const HomePage = () => {
  const { fakeLoginOrRegister } = useAuthentication()

  return (
    <>
      <h1>Welcome on Dev Connector</h1>
      <p>Create a developper profile/portfolio, share posts and get help from other developpers</p>
      <div>
        <button onClick={fakeLoginOrRegister}>Fake Login</button>
      </div>
      <div>
        <Link to={mainPath.auth}>Authenticate</Link>
      </div>
    </>
  )
}

export default HomePage
