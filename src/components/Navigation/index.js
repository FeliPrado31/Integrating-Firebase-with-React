import React from 'react'
import { Link } from 'react-router-dom'

import * as ROUTE from '../../constants/routes'

const Navigation = () => (
  <div>
    <ul>
      <li>
        <Link to={ROUTE.SIGN_IN}>Sign In</Link>
      </li>
      <li>
        <Link to={ROUTE.LANDING}>Landing</Link>
      </li>
      <li>
        <Link to={ROUTE.HOME}>Home</Link>
      </li>
      <li>
        <Link to={ROUTE.ACCOUNT}>Account</Link>
      </li>
      <li>
        <Link to={ROUTE.ADMIN}>Admin</Link>
      </li>
    </ul>
  </div>
)

export default Navigation