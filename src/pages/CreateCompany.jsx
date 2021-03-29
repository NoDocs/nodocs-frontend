import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'

import backgroundImage from 'assets/background-dark.svg'
import logoWhite from 'assets/logo-white.svg'
import { notificationActions } from 'logic/notification'
import Label from 'atoms/Label'
import Input from 'atoms/Input'
import Button from 'atoms/Button'
import Notifications from 'molecules/Notifications'

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

const CreateCompany = () => {
  const dispatch = useDispatch()

  const createCompany = (e) => {
    e.preventDefault()

    const { name } = document.createCompanyForm.elements

    if (!name.value) {
      dispatch(notificationActions.notify({ type: 'error', message: 'Please fill the company name' }))
      return
    }
  }

  return (
    <StyledContainer>
      <StyledForm name="createCompanyForm" onSubmit={createCompany}>
        <img src={logoWhite} />

        <StyledTitle color="active">Name your workspace</StyledTitle>
        <StyledDescription color="active">Send invitation links to team members</StyledDescription>

        <StyledInput name="name" placeholder="i.e company name" autoFocus />
        <StyledCaption color="active">After creating a workspace, you can invite others to join.</StyledCaption>

        <Button type="submit">CREATE WORKSPACE</Button>
      </StyledForm>

      <Notifications />
    </StyledContainer>
  )
}

export default CreateCompany
