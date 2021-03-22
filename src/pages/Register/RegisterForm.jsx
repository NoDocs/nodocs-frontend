import React from 'react'
import styled from 'styled-components'

import Label from 'atoms/Label'
import Input from 'atoms/Input'
import Button from 'atoms/Button'
import mentionIcon from 'assets/mention.svg'
import lockIcon from 'assets/lock.svg'
import noDocsIcon from 'assets/noDocs.svg'
import history from 'utils/history'
import useRelay from 'hooks/useRelay'
import registerMutation from './mutations/registerMutation'

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

const StyledNoDocsImage = styled.img`
  height: 35px;
  display: block;
  margin-right: auto;
`

const RegisterForm = React.forwardRef((_, ref) => {
  const relay = useRelay()

  const handleRegister = (event) => {
    event.preventDefault()

    const { email, password, fullName } = document.registerForm.elements

    const data = {
      email: email.value,
      password: password.value,
      fullName: fullName.value,
    }

    registerMutation.commit(relay.environment, data)
      .then(console.log)
  }

  return (
    <StyledContentContainer ref={ref}>
      <StyledNoDocsImage src={noDocsIcon} alt="NODOCS" />
      <StyledLabel weight={700} color="black">✍🏼 Welcome back!</StyledLabel>

      <StyledForm name="registerForm" onSubmit={handleRegister}>
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

        <Button>Sign up</Button>

        <StyledRegisterLabel
          onClick={() => history.push('/login')}
          color="black"
        >
          - or sign in -
        </StyledRegisterLabel>
      </StyledForm>
    </StyledContentContainer>
  )
})

RegisterForm.displayName = 'RegisterForm'

export default RegisterForm
