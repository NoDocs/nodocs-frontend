import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import GlobalStyles from './GlobalStyles'
import NavBar from './NavBar'
import LeftMenu from './LeftMenu'
import usePageLoadFlow from './hooks/usePageLoadFlow'
import useCompany from './hooks/useCompany'
import useTeam from './hooks/useTeam'
import InviteTeamMembersModal from 'modals/InviteTeamMembersModal'
import CreateTeamModal from 'modals/CreateTeamModal'

const StyledContainer = styled.div`
  display: grid;
  width: 100%;
  ${({ navbarToggled }) => navbarToggled && 'grid-template-columns: 300px 1fr;'}
  grid-template-rows: 56px auto;
  grid-template-areas: ${({ navbarToggled }) => navbarToggled
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

const MainLayout = ({ children, isTeamError }) => {
  const [navbarToggled, toggleNavbar] = React.useState(false)

  const { userId, isTeamLoaded } = usePageLoadFlow()
  useCompany()
  useTeam()

  if (!userId) return <div>Fetching user...</div>

  return (
    <React.Fragment>
      <StyledContainer navbarToggled={navbarToggled}>
        {navbarToggled && <LeftMenu toggleNavbar={toggleNavbar} />}

        <NavBar
          toggleNavbar={toggleNavbar}
          navbarToggled={navbarToggled}
        />

        {<div>{children}</div>}
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
