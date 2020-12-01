import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'

import * as authServices from 'services/auth'
import mentionIcon from 'assets/mention.svg'
import lockIcon from 'assets/lock.svg'
import loginBackgroundIcon from 'assets/login-background.svg'
import { authActions } from 'logic/auth'
import Label from 'atoms/Label'
import Input from 'atoms/Input'
import Button from 'atoms/Button'
import history from 'utils/history'

const StyledLoginContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #060D17;
  position: relative;
`

const StyledBackgroundImage = styled.img`
  width: 100%;
  position: absolute;
  left: 0px;
  bottom: 0px;
`

const StyledContentContainer = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 4px 15px rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  padding: 50px;
  padding-bottom: 35px;
  position: relative;
  z-index: 1;
`

const StyledLabel = styled(Label)`
  font-size: 16px;
  width: 600px;
  line-height: 25px;
  margin-bottom: 10px;
`

const StyledForm = styled.form`
  display: grid;
  grid-row-gap: 10px;
  width: 250px;
  margin: auto;
  margin-top: 50px;
  margin-bottom: 40px;
`

const RegisterLabel = styled(Label)`
  cursor: pointer;
`

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
    <StyledLoginContainer>
      <StyledContentContainer>
        <StyledLabel weight={700} color="black">✨ Welcome to the Memex for teams!</StyledLabel>
        <StyledLabel color="black">"A place where individuals would compress and store all of their information”, "mechanized so that it may be consulted with exceeding speed and flexibility," Dr. Vannevar Bush writes in 1945, coining the term memex.</StyledLabel>

        <StyledForm name="authForm" onSubmit={handleSignIn}>
          <Input
            icon={<img src={mentionIcon} alt="email" />}
            name="email"
            placeholder="email"
          />

          <Input
            icon={<img src={lockIcon} alt="password" />}
            name="password"
            type="password"
            placeholder="password"
          />

          <Button disabled={submitting}>Login</Button>

          <RegisterLabel
            onClick={() => history.push('/register')}
            color="black"
          >
            Or register
          </RegisterLabel>
        </StyledForm>

        <Label color="black">Do not forget to follow us on Twitter</Label>
        <Label color="black">Keep posted with our latest product updates</Label>
        <Label color="black">Stay in touch with the coolest community ever</Label>
      </StyledContentContainer>

      <StyledBackgroundImage src={loginBackgroundIcon} />
    </StyledLoginContainer>
  )
}

export default Login
