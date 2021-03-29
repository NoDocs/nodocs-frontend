import React from 'react'
import styled from 'styled-components'

import Label from 'atoms/Label'
import Input from 'atoms/Input'
import Button from 'atoms/Button'
import MentionIcon from 'assets/mention.svg'
import LockIcon from 'assets/lock.svg'
import NoDocsIcon from 'assets/noDocs.svg'
import history from 'utils/history'
import useRelay from 'hooks/useRelay'
import signInMutation from './mutations/signInMutation'

const StyledContentContainer = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 4px 15px rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  padding: 35px;
  width: 600px;
  box-sizing: border-box;
`

const StyledLabel = styled(Label)`
  line-height: 25px;
  margin-top: 30px;
`

const StyledForm = styled.form`
  display: grid;
  grid-row-gap: 8px;
  margin-top: 30px;
`

const StyledRegisterLabel = styled(Label)`
  cursor: pointer;
  text-align: center;
  color: rgba(0, 0, 0, 0.5);
`

const StyledNoDocsImage = styled(NoDocsIcon)`
  height: 35px;
  width: auto;
  display: block;
  margin-right: auto;
`

const LoginForm = React.forwardRef((_, ref) => {
  const relay = useRelay()

  const handleSignIn = (event) => {
    event.preventDefault()

    const { email, password } = document.authForm.elements

    const data = {
      email: email.value,
      password: password.value,
    }

    signInMutation.commit(relay.environment, data)
      .then(() => history.push('/'))
  }

  return (
    <StyledContentContainer ref={ref}>
      <StyledNoDocsImage />
      <StyledLabel weight={700} color="black">✍🏼 Welcome back!</StyledLabel>

      <StyledForm name="authForm" onSubmit={handleSignIn}>
        <Input
          icon={<MentionIcon size={18} />}
          name="email"
          placeholder="email"
        />

        <Input
          icon={<LockIcon size={18} />}
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
    </StyledContentContainer>
  )
})

LoginForm.displayName = 'LoginForm'

export default LoginForm
