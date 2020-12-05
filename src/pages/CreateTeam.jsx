import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'

import backgroundImage from 'assets/background-dark.svg'
import closeIcon from 'assets/close.svg'
import { notificationActions } from 'logic/notification'
import { teamActions } from 'logic/team'
import * as teamServices from 'services/team'
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

const StyledInput = styled(Input)`
  width: 70%;
`

const StyledCaption = styled(Label)`
  margin-top: 20px;
  margin-bottom: 100px;
`

const StyledCloseIconButton = styled(IconButton)`
  position: absolute;
  top: 30px;
  right: 30px;
`

const CreateTeam = () => {
  const dispatch = useDispatch()

  const close = () => {
    history.push('/')
  }

  const createTeam = (e) => {
    e.preventDefault()

    const { name } = document.createTeamForm.elements

    if (!name.value) {
      dispatch(notificationActions.notify({ type: 'error', message: 'Please fill the team name' }))
      return
    }

    teamServices
      .createTeam({ name: name.value })
      .then(({ data }) => {
        dispatch(teamActions.createTeam(data))
        history.push('/')
      })
      .catch(error => console.log(error))
  }

  return (
    <StyledContainer>
      <StyledCloseIconButton onClick={close}>
        <img src={closeIcon} alt="go back" />
      </StyledCloseIconButton>

      <StyledForm name="createTeamForm" onSubmit={createTeam}>
        <StyledTitle color="active">Create team</StyledTitle>
        <StyledDescription color="active">Send invitation links to team members</StyledDescription>

        <StyledInput name="name" placeholder="i.e team name" />
        <StyledCaption color="active">After creating a workspace, you can invite others to join.</StyledCaption>

        <Button type="submit">CREATE TEAM</Button>
      </StyledForm>

      <Notifications />
    </StyledContainer>
  )
}

export default CreateTeam
