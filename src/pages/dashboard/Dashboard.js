import React from 'react'
import { Link } from 'react-router-dom'

import { dashboardPath } from '~/config'

const DashboardPage = () => (
  <>
    <h1>Dashboard</h1>
    <div>
      <Link to={dashboardPath.profile}>Edit Profile</Link>
    </div>
    <div>
      <Link to={dashboardPath.experience}>Add Experience</Link>
    </div>
    <div>
      <Link to={dashboardPath.education}>Add Education</Link>
    </div>
  </>
)

export default DashboardPage
