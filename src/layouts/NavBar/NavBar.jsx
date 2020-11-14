import React from 'react'
import styled from 'styled-components'

import logoIcon from 'assets/logo.svg'
import OpenedDocuments from './OpenedDocuments'

const StyledContainer = styled.div`
  height: 56px;
  display: flex;
  align-items: center;
  background-color: black;
  grid-area: nav;
  padding-left: 30px;
`

const NavBar = () => (
  <StyledContainer>
    <img src={logoIcon} alt="NoDocs" />

    <OpenedDocuments />
  </StyledContainer>
)

export default NavBar
