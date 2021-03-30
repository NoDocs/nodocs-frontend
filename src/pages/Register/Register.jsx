import React from 'react'
import styled from 'styled-components'

import ParticlesBoard from 'shared/ParticlesBoard'
import RegisterCommunity from './RegisterCommunity'
import RegisterForm from './RegisterForm'

const StyledContainer = styled.div`
  min-height: 100vh;
  background-color: #000;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const StyledRegisterContainer = styled.div`
  width: 1250px;
  margin: auto;
  display: inline-grid;
  justify-content: end;
  grid-row-gap: 24px;
  position: relative;
`

const Register = () => {
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
        label: 'Registration page',
        id: '#register-page',
        children: [],
      }

      p.children.push({
        top: 120,
        left: 400,
        label: 'register',
        id: '#register',
        children: [{
          id: Date.now(),
          top: formCoords.top - offsetTop + 50,
          left: formCoords.left - offsetLeft,
        }],
      })
      p.children.push({
        top: 370,
        left: 450,
        label: 'community',
        id: '#community',
        children: [{
          id: Date.now(),
          top: contactCoords.top - offsetTop + 50,
          left: contactCoords.left - offsetLeft,
        }],
      })

      setParticle(p)
    },
    []
  )

  return (
    <StyledContainer>
      <StyledRegisterContainer>
        <RegisterForm ref={formRef} />
        <RegisterCommunity ref={contactRef} />
        <ParticlesBoard particle={particle} />
      </StyledRegisterContainer>
    </StyledContainer>
  )
}

export default Register
