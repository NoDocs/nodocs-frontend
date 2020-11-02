import React from 'react'
import styled from 'styled-components'

import * as authServices from 'services/auth'
import history from 'utils/history'

const StyledForm = styled.form`
  display: grid;
  grid-row-gap: 5px;
  width: 300px;
`

const Register = () => {
  const [submitting, toggleSubmitting] = React.useState(false)

  const handleRegister = (event) => {
    event.preventDefault()
    toggleSubmitting(true)

    const { email, password, fullName, repeatPassword } = document.registrationForm.elements

    if (password.value !== repeatPassword.value) {
      alert('Passwords does not match')
      return
    }

    const data = {
      email: email.value,
      password: password.value,
      fullName: fullName.value,
    }

    authServices.register(data)
      .then(response => {
        const { data: { token } } = response

        localStorage.setItem('token', token)
        history.push('/')
      })
  }

  return (
    <StyledForm name="registrationForm" onSubmit={handleRegister}>
      <input name="email" placeholder="Email" />
      <input name="fullName" placeholder="Full name" />
      <input name="password" type="password" placeholder="Password" />
      <input name="repeatPassword" type="password" placeholder="Repeat password" />
      <button disabled={submitting}>Register</button>
    </StyledForm>
  )
}

export default Register
