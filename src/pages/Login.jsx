import React from 'react'

import * as authServices from 'services/auth'
import history from 'utils/history'

const Login = () => {
  const [submitting, toggleSubmitting] = React.useState()

  const handleSignIn = (event) => {
    event.preventDefault()
    toggleSubmitting(true)

    const { email, password } = document.authForm.elements

    const data = {
      email: email.value,
      password: password.value,
    }

    authServices.signIn(data)
      .then(response => {
        const { data: { token } } = response

        localStorage.setItem('token', token)
        history.push('/')
      })
  }

  return (
    <form name="authForm" onSubmit={handleSignIn}>
      <input placeholder="email" />
      <input type="password" placeholder="password" />
      <button>Login</button>

      <p onClick={() => history.push('/register')}>Register</p>
    </form>
  )
}

export default Login
