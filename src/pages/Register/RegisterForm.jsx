import React from 'react'
import styled from 'styled-components'
import { graphql, useMutation } from 'react-relay'

import NoDocsIcon from 'assets/noDocs.svg'
import MentionIcon from 'assets/mention.svg'
import LockIcon from 'assets/lock.svg'
import Label from 'atoms/Label'
import Input from 'atoms/Input'
import Button from 'atoms/Button'
import history from 'utils/history'

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

const registerMutation = graphql`
  mutation RegisterFormMutation($input: SignUpInput!) {
    signUp(input: $input) {
      clientMutationId
      user {
        id
        fullName
        token
        email
      }
    }
  }
`

const RegisterForm = React.forwardRef((_, ref) => {
  const [register] = useMutation(registerMutation)

  const handleRegister = (event) => {
    event.preventDefault()

    const { email, password, fullName } = document.registerForm.elements

    register({
      variables: {
        input: {
          email: email.value,
          password: password.value,
          fullName: fullName.value,
        },
      },
      onCompleted: () => {
        history.push('/onboarding/start')
      },
      updater: (store) => {
        const user = store.getRootField('signUp').getLinkedRecord('user')
        store.getRoot().setLinkedRecord(user, 'me')

        const token = store
          .getRoot()
          .getLinkedRecord('me')
          .getValue('token')

        localStorage.setItem('token', token)
      }
    })
  }

  return (
    <StyledContentContainer ref={ref}>
      <StyledNoDocsImage />
      <StyledLabel weight={700} color="black">✍🏼 Welcome back!</StyledLabel>

      <StyledForm name="registerForm" onSubmit={handleRegister}>
        <Input
          icon={<MentionIcon size={20} />}
          name="fullName"
          placeholder="Full Name"
        />

        <Input
          icon={<MentionIcon size={20} />}
          name="email"
          placeholder="email"
        />

        <Input
          icon={<LockIcon size={20} />}
          name="password"
          type="password"
          placeholder="password"
        />

        <Input
          icon={<LockIcon size={20} />}
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
