import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import Box from 'atoms/Box'
import Label from 'atoms/Label'
import Button from 'atoms/Button'

const StyledOnboardingContainer = styled.div`
  max-width: 500px;
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

const OnboardingStart = React.forwardRef((_, ref) => {
  const history = useHistory()

  return (
    <StyledOnboardingContainer ref={ref}>
      <StyledBox>
        <Label color="black">✍🏼 “Learning while building” — humanity</Label>
        <Label color="black">Hey fella, we’re glad to have you around!</Label>
        <Label color="black">
          We will ask some questions for each member who signup in your organization, the answers will be stored in Neurons, the system will integrate them into a shared Document that will be visible for all the team members. In this way, all members will have collaborated in the construction of the first document from its dimensions. 🌊
        </Label>
      </StyledBox>

      <StyledButton onClick={() => history.push('/onboarding/about-company')}>Start</StyledButton>
    </StyledOnboardingContainer>
  )
})

OnboardingStart.displayName = 'OnboardingStart'

export default OnboardingStart
