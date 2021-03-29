import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useRouteMatch } from 'react-router-dom'

import NoDocsLogoIcon from 'assets/logo.svg'
import MenuIcon from 'assets/menu.svg'
import IconButton from 'atoms/IconButton'
import history from 'utils/history'

import OpenedDocuments from './OpenedDocuments'
import CreateDocument from './CreateDocument'

const StyledContainer = styled.div`
  height: 56px;
  display: flex;
  align-items: center;
  background-color: black;
  grid-area: nav;
  padding-left: 30px;
`

const NavBar = ({ navbarToggled, toggleNavbar }) => {
  const match = useRouteMatch()

  return (
    <StyledContainer>
      {!navbarToggled && (
        <IconButton onClick={() => toggleNavbar(true)}>
          <MenuIcon />
        </IconButton>
      )}

      <IconButton onClick={() => history.push('/')}>
        <NoDocsLogoIcon />
      </IconButton>

      {match.path === '/d/:documentId' && <OpenedDocuments />}
      <CreateDocument />
    </StyledContainer>
  )
}

NavBar.propTypes = {
  navbarToggled: PropTypes.bool,
  toggleNavbar: PropTypes.func,
}

export default NavBar
