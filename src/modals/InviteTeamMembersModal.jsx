import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { graphql, useMutation } from 'react-relay'

import Label from 'atoms/Label'
import Input from 'atoms/Input'
import Button from 'atoms/Button'
import withRenderPortal from 'molecules/withRenderPortal'
import FullScreenModal from 'molecules/FullScreenModal'

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 400px;
`

const StyledTitle = styled(Label)`
  font-size: 24px;
  font-weight: 500;
  margin-top: 100px;
  margin-bottom: 12px;
`

const StyledDescription = styled(Label)`
  font-size: 18px;
  margin-bottom: 40px;
`

const StyledInputsContainer = styled.div`
  display: grid;
  grid-row-gap: 5px;
  width: 100%;
  margin-bottom: 50px;
`

const sendInvitesMutation = graphql`
  mutation InviteTeamMembersModalMutation($input: SendInvitationsInput!) {
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

const InviteTeamMembers = ({ closePortal }) => {
  const [email, updateEmail] = React.useState('')
  const [sendInvites] = useMutation(sendInvitesMutation)

  const inviteUsers = (e) => {
    e.preventDefault()

    sendInvites({
      variables: {
        input: {
          emails: email
        }
      }
    })
  }

  return (
    <FullScreenModal close={closePortal}>
      <StyledForm onSubmit={inviteUsers}>
        <StyledTitle color="active">Invite new members</StyledTitle>
        <StyledDescription color="active">Send invitation links to team members</StyledDescription>

        <StyledInputsContainer>
          <Input
            placeholder="i.e team member email"
            value={email}
            onChange={event => updateEmail(event.target.value)}
          />
        </StyledInputsContainer>

        <Button type="submit">Invite to Team</Button>
      </StyledForm>
    </FullScreenModal>
  )
}

InviteTeamMembers.propTypes = {
  closePortal: PropTypes.func,
}

export default withRenderPortal(() => 'invite-team-members')(InviteTeamMembers)
