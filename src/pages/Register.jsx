import React from 'react'
import styled from 'styled-components'

import * as authServices from 'services/auth'

const StyledForm = styled.form`
  display: grid;
  grid-row-gap: 5px;
  width: 300px;
`

const Register = () => {
  const handleRegister = (event) => {
    event.preventDefault()

    const { email, password, repeatPassword } = document.registrationForm.elements

    if (password.value !== repeatPassword.value) {
      alert('Passwords does not match')
      return
    }

    const data = {
      email: email.value,
      password: password.value,
    }

    authServices.register(data)
  }

  return (
    <StyledForm name="registrationForm" onSubmit={handleRegister}>
      <input name="email" placeholder="Email" />
      <input name="password" type="password" placeholder="Password" />
      <input name="repeatPassword" type="password" placeholder="Repeat password" />
      <button>Register</button>
    </StyledForm>
  )
}

export default Register
