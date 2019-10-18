import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const Logout = props => {
  useEffect(() => {
    localStorage.removeItem('token')
  })
  return (
    <div>
      <p>You are logged out</p>
      <p>
        <NavLink to="/">Login here</NavLink>
      </p>
    </div>
  )
}

export default Logout
