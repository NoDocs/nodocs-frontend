import React from 'react'

import history from 'utils/history'

const Login = () => {
  return (
    <React.Fragment>
      <input placeholder="email" />
      <input placeholder="password" />
      <button>Login</button>

      <p onClick={() => history.push('/register')}>Register</p>
    </React.Fragment>
  )
}

export default Login
