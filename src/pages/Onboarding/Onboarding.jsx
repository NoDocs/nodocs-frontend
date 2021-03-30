import React from 'react'
import styled from 'styled-components'
import { Switch, Route, useLocation } from 'react-router-dom'

import ParticlesBoard from 'shared/ParticlesBoard'
import OnboardingStart from './OnboardingStart'
import OnboardingAboutCompany from './OnboardingAboutCompany'
import OnboardingAboutYou from './OnboardingAboutYou'
import OnboardingSendInvites from './OnboardingSendInvites'

const StyledContainer = styled.div`
  min-height: 100vh;
  background-color: #000;
  display: flex;
  align-items: center;
`

const StyledContentContainer = styled.div`
  width: 1250px;
  margin: auto;
  display: inline-grid;
  justify-content: end;
  grid-row-gap: 24px;
  position: relative;
`

const Onboarding = () => {
  const [particle, updateParticle] = React.useState()
  const location = useLocation()
  const boxRef = React.useRef()

  React.useEffect(
    () => {
      const boxCoords = boxRef.current.getBoundingClientRect()
      const offsetLeft = (window.innerWidth - 1250) / 2
      const offsetTop = (window.innerHeight - (boxCoords.height)) / 2

      const p = {
        top: 50,
        left: 100,
        label: 'Our company',
        id: '#our-company',
        children: [],
      }

      if (location.pathname.includes('/onboarding/start')) {
        p.children.push({
          top: 120,
          left: 400,
          label: 'Welcome message',
          id: '#welcome-message',
          children: [{ id: Date.now(), top: boxCoords.top - offsetTop + 30, left: boxCoords.left - offsetLeft }],
        })
      } else if (location.pathname.includes('/onboarding/about-company')) {
        p.children.push({
          top: 120,
          left: 400,
          label: 'About company',
          id: '#about-company',
          children: [{ id: Date.now(), top: boxCoords.top - offsetTop + 30, left: boxCoords.left - offsetLeft }],
        })
        p.children.push({
          top: 200,
          left: 50,
          label: 'welcome message',
          id: '#welcome-message',
          children: [],
        })
      } else if (location.pathname.includes('/onboarding/about-you')) {
        p.children.push({
          top: 120,
          left: 400,
          label: 'About you',
          id: '#about-you',
          children: [{ id: Date.now(), top: boxCoords.top - offsetTop + 30, left: boxCoords.left - offsetLeft }],
        })
        p.children.push({
          top: 200,
          left: 50,
          label: 'welcome message',
          id: '#welcome-message',
          children: [],
        })
        p.children.push({
          top: 300,
          left: 90,
          label: 'Our company',
          id: '#our-company',
          children: [],
        })
      } else if (location.pathname.includes('/onboarding/send-invites')) {
        p.children.push({
          top: 120,
          left: 400,
          label: 'Invites',
          id: '#invites',
          children: [{ id: Date.now(), top: boxCoords.top - offsetTop + 30, left: boxCoords.left - offsetLeft }],
        })
        p.children.push({
          top: 200,
          left: 50,
          label: 'welcome message',
          id: '#welcome-message',
          children: [],
        })
        p.children.push({
          top: 300,
          left: 90,
          label: 'Our company',
          id: '#our-company',
          children: [],
        })
        p.children.push({
          top: 210,
          left: 150,
          label: 'About me',
          id: '#about-me',
          children: [],
        })
      }

      updateParticle(p)
    },
    [location.pathname]
  )

  return (
    <StyledContainer>
      <StyledContentContainer>
        <Switch>
          <Route path="/onboarding/start" component={() => <OnboardingStart ref={boxRef} />} />
          <Route path="/onboarding/about-company" component={() => <OnboardingAboutCompany ref={boxRef} />} />
          <Route path="/onboarding/about-you" component={() => <OnboardingAboutYou ref={boxRef} />} />
          <Route path="/onboarding/send-invites" component={() => <OnboardingSendInvites ref={boxRef} />} />
        </Switch>

        <ParticlesBoard particle={particle} />
      </StyledContentContainer>
    </StyledContainer>
  )
}

export default Onboarding
