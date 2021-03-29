import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'

import { notificationActions } from 'logic/notification'
import Label from 'atoms/Label'
import Input from 'atoms/Input'
import Button from 'atoms/Button'
import Notifications from 'molecules/Notifications'
import FullScreenModal from 'molecules/FullScreenModal'
import withRenderPortal from 'molecules/withRenderPortal'

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

const CreateTeamModal = ({ closePortal }) => {
  const dispatch = useDispatch()

  const createTeam = (e) => {
    e.preventDefault()

    const { name } = document.createTeamForm.elements

    if (!name.value) {
      dispatch(notificationActions.notify({ type: 'error', message: 'Please fill the team name' }))
      return
    }

    // Creat team mutation
  }

  return (
    <FullScreenModal close={closePortal}>
      <StyledForm name="createTeamForm" onSubmit={createTeam}>
        <StyledTitle color="active">Create team</StyledTitle>
        <StyledDescription color="active">Send invitation links to team members</StyledDescription>

        <StyledInput name="name" placeholder="i.e team name" autoFocus />
        <StyledCaption color="active">After creating a workspace, you can invite others to join.</StyledCaption>

        <Button type="submit">CREATE TEAM</Button>
      </StyledForm>

      <Notifications />
    </FullScreenModal>
  )
}

CreateTeamModal.propTypes = {
  closePortal: PropTypes.func,
}

export default withRenderPortal(() => 'create-team-modal')(CreateTeamModal)
