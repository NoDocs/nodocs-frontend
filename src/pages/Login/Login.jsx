import React from 'react'
import styled from 'styled-components'

import ParticlesBoard from 'shared/ParticlesBoard'
import LoginCommunity from './LoginCommunity'
import LoginForm from './LoginForm'

const StyledContainer = styled.div`
  min-height: 100vh;
  background-color: #000;
  display: flex;
  align-items: center;
`

const StyledLoginContainer = styled.div`
  width: 1250px;
  margin: auto;
  display: inline-grid;
  justify-content: end;
  grid-row-gap: 24px;
  position: relative;
`

const Login = () => {
  const formRef = React.useRef()
  const contactRef = React.useRef()
  const [particle, setParticle] = React.useState()

  React.useEffect(
    () => {
      const formCoords = formRef.current.getBoundingClientRect()
      const contactCoords = contactRef.current.getBoundingClientRect()

      const offsetLeft = (window.innerWidth - 1250) / 2
      const offsetTop = (window.innerHeight - (formCoords.height + contactCoords.height)) / 2

      const p = {
        top: 30,
        left: 25,
        label: 'Login page',
        id: '#login-page',
        children: [],
      }

      p.children.push({
        top: 120,
        left: 400,
        label: 'login',
        id: '#login',
        children: [{ id: Date.now(), top: formCoords.top - offsetTop + 50, left: formCoords.left - offsetLeft }],
      })
      p.children.push({
        top: 370,
        left: 450,
        label: 'community',
        id: '#community',
        children: [{ id: Date.now(), top: contactCoords.top - offsetTop + 50, left: contactCoords.left - offsetLeft }],
      })

      setParticle(p)
    },
    []
  )

  return (
    <StyledContainer>
      <StyledLoginContainer>
        <LoginForm ref={formRef} />
        <LoginCommunity ref={contactRef} />
        <ParticlesBoard particle={particle} />
      </StyledLoginContainer>
    </StyledContainer>
  )
}

export default Login
