import React, { useState } from 'react'
import axios from 'axios'

const Login = props => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [user, setUser] = useState({
    username: 'Lambda School',
    password: 'i<3Lambd4'
  })

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    axios
      .post('/login', user)
      .then(res => {
        localStorage.setItem('token', res.data.payload)
        props.history.push('/bubble-page')
      })
      .catch(err => {
        console.log(err)
      })
  }
  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          type="text"
          placeholder="username"
          value={user.username}
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="password"
          value={user.password}
          onChange={handleChange}
        />
        <button>Log In</button>
      </form>
    </div>
  )
}

export default Login
