import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import Box from 'atoms/Box'
import Label from 'atoms/Label'
import Button from 'atoms/Button'

const StyledContainer = styled.div`
  min-height: 100vh;
  background-color: #000;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

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
`

const OnboardingSendInvites = React.forwardRef((_, ref) => {
  const history = useHistory()

  return (
    <StyledContainer>
      <StyledOnboardingContainer ref={ref}>
        <StyledBox>
          <Label color="black">✍🏼 Let’s bring some teammates to the club...</Label>

          <Label color="black">Emails, comma separated</Label>
          <StyledInput autoFocus />

          <Label color="black">* You can skip and do it later by pressing “Finish”</Label>
        </StyledBox>

        <StyledButton onClick={() => history.push('/')}>Finish</StyledButton>
      </StyledOnboardingContainer>
    </StyledContainer>
  )
})

OnboardingSendInvites.displayName = 'OnboardingSendInvites'

export default OnboardingSendInvites
