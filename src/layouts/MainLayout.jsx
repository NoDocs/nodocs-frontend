import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'

import { PortalContext } from 'contexts'
import InviteTeamMembersModal from 'modals/InviteTeamMembersModal'
import CreateTeamModal from 'modals/CreateTeamModal'
import GlobalStyles from './GlobalStyles'
import NavBar from './NavBar'
import LeftMenu from './LeftMenu'
import CreateNeuronShortcut from './CreateNeuronShortcut'

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
  const [toggled, toggle] = React.useState(false)
  const { openPortal } = React.useContext(PortalContext)
  const { search } = useLocation()

  React.useEffect(
    () => {
      const params = new URLSearchParams(search)

      if (params.get('neuronId')) {
        openPortal({ name: 'neuron-modal' })
      }
    },
    [search]
  )

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
      <CreateNeuronShortcut />
    </React.Fragment>
  )
}

MainLayout.propTypes = {
  children: PropTypes.any,
  isTeamError: PropTypes.bool
}

export default MainLayout
