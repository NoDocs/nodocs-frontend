import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { List } from 'immutable'

import * as memberService from 'services/member'
import { teamSelectors, teamActions } from 'logic/team'
import withRenderPortal from 'molecules/withRenderPortal'

import history from 'utils/history'
import Label from 'atoms/Label'
import Input from 'atoms/Input'
import Button from 'atoms/Button'
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
`

const StyledCaption = styled(Label)`
  margin-top: 20px;
  margin-bottom: 100px;
  width: 100%;
  text-align: left;
  cursor: pointer;
`

const InviteTeamMembers = ({ closePortal }) => {
  const activeTeamId = useSelector(teamSelectors.selectActiveTeamId)
  const [emails, updateEmails] = React.useState(new List(['']))
  const dispatch = useDispatch()

  const inviteUsers = (e) => {
    e.preventDefault()
    const body = { teamId: activeTeamId, emails: emails.toJS() }

    memberService
      .addMembers(body)
      .then(response => {
        const { data } = response

        dispatch(teamActions.addMembers(data.members, activeTeamId))
        closePortal()
      })
      .catch(error => console.log(error))
  }

  return (
    <FullScreenModal close={closePortal}>
      <StyledForm onSubmit={inviteUsers}>
        <StyledTitle color="active">Invite new members</StyledTitle>
        <StyledDescription color="active">Send invitation links to team members</StyledDescription>

        <StyledInputsContainer>
          {emails.map((email, index) => (
            <Input
              key={index}
              placeholder="i.e team member email"
              value={email}
              onChange={event => updateEmails(emails.set(index, event.target.value))}
            />
          ))}
        </StyledInputsContainer>

        <StyledCaption onClick={() => updateEmails(emails.push(''))}>+ Add another</StyledCaption>

        <Button type="submit">Invite to TEAM</Button>
      </StyledForm>
    </FullScreenModal>
  )
}

InviteTeamMembers.propTypes = {
  closePortal: PropTypes.func,
}

export default withRenderPortal(() => 'invite-team-members')(InviteTeamMembers)
