import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'

import { authActions } from 'logic/auth'
import { notificationActions } from 'logic/notification'
import * as authServices from 'services/auth'
import history from 'utils/history'

import Label from 'atoms/Label'
import Input from 'atoms/Input'
import Button from 'atoms/Button'

import mentionIcon from 'assets/mention.svg'
import lockIcon from 'assets/lock.svg'
import authBackground from 'assets/authBackground.svg'
import gMailIcon from 'assets/gmail.svg'
import noDocsIcon from 'assets/noDocs.svg'

const StyledRegisterContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
  position: relative;
`

const StyledBackgroundImage = styled.img`
  position: absolute;
  ${({ left }) => left ? 'left: -370px' : 'right: -370px;'};
  top: calc(50% - 270px);
`

const StyledContentContainer = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 4px 15px rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  padding: 50px;
  padding-bottom: 35px;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
`

const StyledLabel = styled(Label)`
  font-size: 16px;
  width: 600px;
  line-height: 25px;
  ${({ mr }) => mr && 'margin-top: 53px;'}
`

const StyledForm = styled.form`
  display: grid;
  grid-row-gap: 17px;
  width: 250px;
  margin: auto;
  margin-top: 54px;
  margin-bottom: 64px;
`

const RegisterLabel = styled(Label)`
  cursor: pointer;
  cursor: pointer;
  text-align: center;
  color: rgba(0, 0, 0, 0.5);
`

const StyledGoogleContent = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
`

const StyledGoogleLabel = styled(Label)`
  margin-left: 8px;
  font-size: 13px;
`
const StyledLinksContainer = styled.div`
  margin-bottom: 50px;
`

const StyledLinkRow = styled.div`
/* display: inline-grid;
grid-auto-flow: column;
justify-items: center;
align-items: center; */
`

const StyledUnderLine = styled.span`
  text-decoration: underline;
  cursor: pointer;
`

const Register = () => {
  const [submitting, toggleSubmitting] = React.useState()
  const dispatch = useDispatch()

  const handleRegister = (event) => {
    event.preventDefault()
    toggleSubmitting(true)

    const { email, password, confirmPassword, fullName } = document.authForm.elements

    if (password.value !== confirmPassword.value) {
      return dispatch(notificationActions.notify({ type: 'error', message: 'passwords do not match' }))
    }

    const data = {
      email: email.value,
      password: password.value,
      fullName: fullName.value,
    }

    authServices.register(data)
      .then(response => {
        const { data: { token, user } } = response

        localStorage.setItem('token', token)
        history.push(user.currentCompany
          ? `/?companyId=${user.currentCompany.id}`
          : '/create-company')
        dispatch(authActions.register({ token, ...user }))
      })
  }

  return (
    <StyledRegisterContainer>
      <div style={{ position: 'relative' }}>
        <StyledContentContainer>
          <img src={noDocsIcon} alt="NODOCS" />
          <StyledLabel weight={700} color="black" mr>✨ Welcome to the Memex for teams!</StyledLabel>
          <StyledLabel color="black">“A place where individuals would compress and store all of their information”, "mechanized so that it may be consulted with exceeding speed and flexibility," Dr. Vannevar Bush writes in 1945, coining the term memex.</StyledLabel>

          <StyledForm name="authForm" onSubmit={handleRegister}>
            <Input
              icon={<img src={mentionIcon} alt="Full Name" />}
              name="fullName"
              placeholder="Full Name"
            />

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

            <Input
              icon={<img src={lockIcon} alt="Confirm Password" />}
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
            />

            <Button disabled={submitting}>Sign up</Button>

            <RegisterLabel
              onClick={() => history.push('/login')}
              color="black"
            >
              - or sign up with - 
            </RegisterLabel>
            <StyledGoogleContent style={{ display: 'flex' }}>
              <img src={gMailIcon} alt="google" />
              <StyledGoogleLabel color="#000000">Google</StyledGoogleLabel>
            </StyledGoogleContent>
          </StyledForm>

          <StyledLinksContainer>
            <StyledLinkRow>
              <Label color="#000000">Follow us on <StyledUnderLine>Twitter.</StyledUnderLine></Label>
            </StyledLinkRow>
            <StyledLinkRow>
              <Label color="#000000"><StyledUnderLine>Product updates.</StyledUnderLine></Label>
            </StyledLinkRow>
            <StyledLinkRow>
              <Label color="#000000"><StyledUnderLine>Community.</StyledUnderLine></Label>
            </StyledLinkRow>
          </StyledLinksContainer>
          <Label color="#000000">Here are our <StyledUnderLine>terms and conditions</StyledUnderLine></Label>
        </StyledContentContainer>
        <StyledBackgroundImage src={authBackground} left />
        <StyledBackgroundImage src={authBackground} />
      </div>
    </StyledRegisterContainer>
  )
}

export default Register
