import React from 'react'
import styled from 'styled-components'

import logoIcon from 'assets/logo.svg'

const StyledContainer = styled.div`
  height: 56px;
  display: flex;
  align-items: center;
  background-color: black;
  grid-area: nav;
  padding-left: 30px;
`

const Navigation = () => (
  <StyledContainer>
    <img src={logoIcon} alt="NoDocs" />
  </StyledContainer>
)

export default Navigation
