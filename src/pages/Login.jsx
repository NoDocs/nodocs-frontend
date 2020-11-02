import React from 'react'
import { useDispatch } from 'react-redux'

import * as authServices from 'services/auth'
import { authActions } from 'logic/auth'
import history from 'utils/history'

const Login = () => {
  const [submitting, toggleSubmitting] = React.useState()
  const dispatch = useDispatch()

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
        const { data: { token, ...rest } } = response

        localStorage.setItem('token', token)
        history.push('/')
        dispatch(authActions.signIn({ token, ...rest }))
      })
  }

  return (
    <form name="authForm" onSubmit={handleSignIn}>
      <input name="email" placeholder="email" />
      <input name="password" type="password" placeholder="password" />
      <button disabled={submitting}>Login</button>

      <p onClick={() => history.push('/register')}>Register</p>
    </form>
  )
}

export default Login
