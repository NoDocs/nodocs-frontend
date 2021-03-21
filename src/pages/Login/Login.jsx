import React from 'react'
import styled from 'styled-components'

import ParticlesBoard from 'shared/ParticlesBoard'
import LoginCommunity from './LoginCommunity'
import LoginForm from './LoginForm'

const StyledContainer = styled.div`
  min-height: 100vh;
  background-color: #000;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const StyledLoginContainer = styled.div`
  display: grid;
  grid-row-gap: 24px;
  margin-right: 48px;
`

const Login = () => {
  const formRef = React.useRef()
  const contactRef = React.useRef()
  const [particle, setParticle] = React.useState()

  React.useEffect(
    () => {
      const { top: formTop, left: formLeft } = formRef.current.getBoundingClientRect()
      const { top: contactTop, left: contactLeft } = contactRef.current.getBoundingClientRect()

      const p = {
        top: 50,
        left: 100,
        label: 'login page',
        id: '#login-page',
        children: [],
      }

      p.children.push({
        top: 120,
        left: 400,
        label: 'login',
        id: '#login',
        children: [{ id: Date.now(), top: formTop + 30, left: formLeft }],
      })
      p.children.push({
        top: 370,
        left: 450,
        label: 'community',
        id: '#community',
        children: [{ id: Date.now(), top: contactTop + 30, left: contactLeft }],
      })

      setParticle(p)
    },
    []
  )

  return (
    <React.Fragment>
      <StyledContainer>
        <StyledLoginContainer>
          <LoginForm ref={formRef} />
          <LoginCommunity ref={contactRef} />
        </StyledLoginContainer>
      </StyledContainer>

      <ParticlesBoard particle={particle} />
    </React.Fragment>
  )
}

export default Login
