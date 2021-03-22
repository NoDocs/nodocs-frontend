import React from 'react'
import styled from 'styled-components'

import Box from 'atoms/Box'
import Label from 'atoms/Label'
import Button from 'atoms/Button'

import ParticlesBoard from 'shared/ParticlesBoard'

const StyledContainer = styled.div`
  min-height: 100vh;
  background-color: #000;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const StyledOnboardingContainer = styled.div`
  max-width: 600px;
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

const Onboarding = () => {
  const [particle, updateParticle] = React.useState()
  const boxRef = React.useRef()

  React.useEffect(
    () => {
      const { top: boxTop, left: boxLeft } = boxRef.current.getBoundingClientRect()

      const p = {
        top: 50,
        left: 100,
        label: 'Our company',
        id: '#our-company',
        children: [],
      }

      p.children.push({
        top: 120,
        left: 400,
        label: 'Company profile',
        id: '#company-profile',
        children: [{ id: Date.now(), top: boxTop + 30, left: boxLeft }],
      })

      updateParticle(p)
    },
    []
  )

  return (
    <React.Fragment>
      <StyledContainer>
        <StyledOnboardingContainer ref={boxRef}>
          <StyledBox>
            <Label color="black">✍🏼 “Learning while building” — humanity</Label>
            <Label color="black">Hey fella, we’re glad to have you around!</Label>
            <Label color="black">
              We will ask some questions for each member who signup in your organization, the answers will be stored in Neurons, the system will integrate them into a shared Document that will be visible for all the team members. In this way, all members will have collaborated in the construction of the first document from its dimensions. 🌊
            </Label>
          </StyledBox>

          <StyledButton>Start</StyledButton>
        </StyledOnboardingContainer>
      </StyledContainer>

      <ParticlesBoard particle={particle} />
    </React.Fragment>
  )
}

export default Onboarding
