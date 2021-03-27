import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import GlobalStyles from './GlobalStyles'
import NavBar from './NavBar'
import LeftMenu from './LeftMenu'
import InviteTeamMembersModal from 'modals/InviteTeamMembersModal'
import CreateTeamModal from 'modals/CreateTeamModal'

const StyledContainer = styled.div`
  display: grid;
  width: 100%;
  ${({ toggled }) => toggled && 'grid-template-columns: 352px 1fr;'}
  grid-template-rows: 56px auto;
  grid-template-areas: ${({ toggled }) => toggled
    ? `
      "left nav"
      "left content"
    `
    : `
      "nav"
      "content"
    `};
  height: 100vh;
`

const MainLayout = ({ children }) => {
  const [toggled, toggle] = React.useState(true)

  return (
    <React.Fragment>
      <StyledContainer toggled={toggled}>
        {toggled && <LeftMenu toggleNavbar={toggle} />}

        <NavBar toggleNavbar={toggle} navbarToggled={toggled} />
        <div>{children}</div>
      </StyledContainer>

      <GlobalStyles />
      <InviteTeamMembersModal />
      <CreateTeamModal />
    </React.Fragment>
  )
}

MainLayout.propTypes = {
  children: PropTypes.any,
  isTeamError: PropTypes.bool
}

export default MainLayout
