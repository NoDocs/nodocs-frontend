import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import Box from 'atoms/Box'
import Label from 'atoms/Label'
import Button from 'atoms/Button'
import { graphql } from 'relay-runtime'
import { useMutation } from 'react-relay'

const StyledOnboardingContainer = styled.div`
  width: 600px;
  margin-right: 48px;
  display: grid;
  grid-row-gap: 16px;
`

const StyledBox = styled(Box)`
  display: grid;
  grid-row-gap: 12px;
`

const StyledButton = styled(Button)`
  margin: auto;
`

const StyledInput = styled.input`
  border: none;
  width: 100%;
  outline: none;
  border-left: 1px solid rgba(0, 0, 0, 0.2);
  padding-left: 5px;

  &:focus {
    border-left: none;
  }
`

const sendInvitesMutation = graphql`
  mutation OnboardingSendInvitesMutation($input: SendInvitationsInput!) {
    sendInvitations(input: $input) {
      teamMembers {
        id
        user {
          email
        }
      }
    }
  }
`

const OnboardingSendInvites = React.forwardRef((_, ref) => {
  const history = useHistory()
  const [emails, setEmails] = React.useState()
  const [sendInvitations] = useMutation(sendInvitesMutation)

  const handleFinish = () => {
    if (!emails) {
      history.push('/')
      return
    }

    sendInvitations({
      variables: {
        input: {
          emails,
        },
      },
      onCompleted: () => {
        history.push('/')
      }
    })
  }

  return (
    <StyledOnboardingContainer ref={ref}>
      <StyledBox>
        <Label color="black">✍🏼 Let’s bring some teammates to the club...</Label>

        <Label color="black">Emails, comma separated</Label>
        <StyledInput
          autoFocus
          value={emails}
          onChange={event => setEmails(event.target.value)}
        />

        <Label color="black">* You can skip and do it later by pressing “Finish”</Label>
      </StyledBox>

      <StyledButton onClick={handleFinish}>Finish</StyledButton>
    </StyledOnboardingContainer>
  )
})

OnboardingSendInvites.displayName = 'OnboardingSendInvites'

export default OnboardingSendInvites
