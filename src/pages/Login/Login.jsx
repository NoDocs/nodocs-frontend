import React from 'react'
import styled from 'styled-components'

import signInMutation from './mutations/signInMutation'
import history from 'utils/history'
import useRelay from 'hooks/useRelay'

import Label from 'atoms/Label'
import Input from 'atoms/Input'
import Button from 'atoms/Button'

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

const StyledContentContainer = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 4px 15px rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  padding: 50px;
  padding-top: 35px;
  padding-bottom: 20px;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  min-width: 450px;
`

const StyledLabel = styled(Label)`
  line-height: 25px;
  margin-top: 30px;
`

const StyledForm = styled.form`
  display: grid;
  grid-row-gap: 8px;
  width: 250px;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 30px;
`

const StyledRegisterLabel = styled(Label)`
  cursor: pointer;
  text-align: center;
  color: rgba(0, 0, 0, 0.5);
`

const StyledBackgroundImage = styled.img`
  position: absolute;
  height: 400px;
  ${({ left }) => left ? 'left: -300px' : 'right: -300px;'};
  top: calc(50% - 220px);
`

const StyledLinksContainer = styled.div`
  margin-bottom: 20px;
`

const StyledLinkRow = styled.div``

const StyledUnderLine = styled.span`
  text-decoration: underline;
  cursor: pointer;
`

const StyledNoDocsImage = styled.img`
  height: 35px;
`

const Login = () => {
  const relay = useRelay()

  const handleSignIn = (event) => {
    event.preventDefault()

    const { email, password } = document.authForm.elements

    const data = {
      email: email.value,
      password: password.value,
    }

    signInMutation.commit(relay.environment, data)
      .then(console.log)
  }

  return (
    <StyledLoginContainer>
      <div style={{ position: 'relative' }}>
        <StyledContentContainer>
          <StyledNoDocsImage src={noDocsIcon} alt="NODOCS" />
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

            <Button>Login</Button>

            <StyledRegisterLabel
              onClick={() => history.push('/register')}
              color="black"
            >
              - or sign up -
            </StyledRegisterLabel>
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
