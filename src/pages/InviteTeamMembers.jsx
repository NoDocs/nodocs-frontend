import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { List } from 'immutable'

import * as memberService from 'services/member'
import { teamSelectors, teamActions } from 'logic/team'

import backgroundImage from 'assets/background-dark.svg'
import closeIcon from 'assets/close.svg'
import history from 'utils/history'
import Label from 'atoms/Label'
import Input from 'atoms/Input'
import Button from 'atoms/Button'
import Notifications from 'molecules/Notifications'
import IconButton from 'atoms/IconButton'

const StyledContainer = styled.div`
  min-height: 100vh;
  overflow: auto;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
`

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

const StyledCloseIconButton = styled(IconButton)`
  position: absolute;
  top: 30px;
  right: 30px;
`

const InviteTeamMembers = () => {
  const activeTeamId = useSelector(teamSelectors.selectActiveTeamId)
  const [emails, updateEmails] = React.useState(new List(['']))
  const dispatch = useDispatch()

  const close = () => {
    history.push('/')
  }

  const inviteUsers = (e) => {
    e.preventDefault()
    const body = { teamId: activeTeamId, members: emails.toJS() }

    memberService
      .addMembers(body)
      .then(response => {
        const { data } = response

        dispatch(teamActions.addMembers(data, activeTeamId))
      })
  }

  return (
    <StyledContainer>
      <StyledCloseIconButton onClick={close}>
        <img src={closeIcon} alt="go back" />
      </StyledCloseIconButton>

      <StyledForm name="createTeamForm" onSubmit={inviteUsers}>
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

        <Button type="submit">CREATE TEAM</Button>
      </StyledForm>

      <Notifications />
    </StyledContainer>
  )
}

export default InviteTeamMembers
