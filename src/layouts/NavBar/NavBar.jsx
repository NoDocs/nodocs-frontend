import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import logoIcon from 'assets/logo.svg'
import menuIcon from 'assets/menu.svg'
import IconButton from 'atoms/IconButton'
import history from 'utils/history'
import OpenedDocuments from './OpenedDocuments'

const StyledContainer = styled.div`
  height: 56px;
  display: flex;
  align-items: center;
  background-color: black;
  grid-area: nav;
  padding-left: 30px;
`

const NavBar = ({ navbarToggled, toggleNavbar }) => (
  <StyledContainer>
    {!navbarToggled && <IconButton icon={menuIcon} onClick={() => toggleNavbar(true)} />}
    <img onClick={() => history.push('/')} src={logoIcon} alt="NoDocs" />

    <OpenedDocuments />
  </StyledContainer>
)

NavBar.propTypes = {
  navbarToggled: PropTypes.bool,
  toggleNavbar: PropTypes.func,
}

export default NavBar
