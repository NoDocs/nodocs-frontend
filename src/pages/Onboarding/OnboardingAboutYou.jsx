import React from 'react'
import styled from 'styled-components'

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

const StyledIndustriesContainer = styled.div``

const StyledIndustry = styled(Label)`
  border: 1.2px solid #000000;
  padding: 5px 12px;
  color: black;
  display: inline-block;
  border-radius: 80px;
  margin-right: 8px;
  font-size: 12px;
  margin-bottom: 8px;
  font-weight: 500;
`

const roles = [
  'Design',
  'Product',
  'Engineering',
  'Operations',
  'Sales',
  'Marketing',
  'Growth',
  'Finance',
  'Accounting',
  'Business Dev',
  'HHRR',
  'R&D',
  'Data',
  'IT',
  'Support',
  'Legal',
  'Other',
]

const OnboardingAboutYou = React.forwardRef((_, ref) => {
  return (
    <StyledContainer>
      <StyledOnboardingContainer ref={ref}>
        <StyledBox>
          <Label color="black">✍🏼 About your company...</Label>

          <Label color="black">Company name</Label>
          <StyledInput autoFocus />

          <Label color="black">What&#96;s your company industry</Label>
          <StyledIndustriesContainer>
            {roles.map(role => (
              <StyledIndustry key={role}>
                {role}
              </StyledIndustry>
            ))}
          </StyledIndustriesContainer>

          <Label color="black">And... what do you guys do?</Label>
          <StyledInput />
        </StyledBox>

        <StyledButton>Start</StyledButton>
      </StyledOnboardingContainer>
    </StyledContainer>
  )
})

OnboardingAboutYou.displayName = 'OnboardingAboutYou'

export default OnboardingAboutYou
