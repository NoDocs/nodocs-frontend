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
  display: grid;
  grid-row-gap: 24px;
  margin-right: 48px;
`

const Register = () => {
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
        label: 'Registration page',
        id: '#register-page',
        children: [],
      }

      p.children.push({
        top: 120,
        left: 400,
        label: 'register',
        id: '#register',
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
        <StyledRegisterContainer>
          <RegisterForm ref={formRef} />
          <RegisterCommunity ref={contactRef} />
        </StyledRegisterContainer>
      </StyledContainer>

      <ParticlesBoard particle={particle} />
    </React.Fragment>
  )
}

export default Register
