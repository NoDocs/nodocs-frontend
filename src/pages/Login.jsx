import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'

import * as authServices from 'services/auth'
import { authActions } from 'logic/auth'
import history from 'utils/history'

import Label from 'atoms/Label'
import Input from 'atoms/Input'
import Button from 'atoms/Button'

import gMailIcon from 'assets/gmail.svg'
import mentionIcon from 'assets/mention.svg'
import lockIcon from 'assets/lock.svg'
import authBackground from 'assets/authBackground.svg'
import noDocsIcon from 'assets/noDocs.svg'

const StyledLoginContainer = styled.div`
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
  margin-top: 53px;
`

const StyledForm = styled.form`
  display: grid;
  grid-row-gap: 17px;
  width: 250px;
  margin: auto;
  margin-top: 88px;
  margin-bottom: 156px;
`

const StyledRegisterLabel = styled(Label)`
  cursor: pointer;
  text-align: center;
  color: rgba(0, 0, 0, 0.5);
`
const StyledMailsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`

const StyledMailLabel = styled(Label)`
  cursor: pointer;
`
const StyledGoogleContent = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
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
      <div style={{ position: 'relative' }}>
        <StyledContentContainer>
          <img src={noDocsIcon} alt="NODOCS" />
          <StyledLabel weight={700} color="black">✨ Welcome back!</StyledLabel>

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

            <StyledRegisterLabel
              onClick={() => history.push('/register')}
              color="black"
            >
              - or sign up with - 
            </StyledRegisterLabel>
            <StyledMailsContainer>
              <StyledMailLabel color="#000000">Email</StyledMailLabel>
              <StyledGoogleContent style={{ display: 'flex' }}>
                <img src={gMailIcon} alt="google" />
                <StyledGoogleLabel color="#000000">Google</StyledGoogleLabel>
              </StyledGoogleContent>
            </StyledMailsContainer>
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
    </StyledLoginContainer>
  )
}

export default Login
