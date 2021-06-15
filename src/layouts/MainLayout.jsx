import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'

import { PortalContext } from 'contexts'
import InviteTeamMembersModal from 'modals/InviteTeamMembersModal'
import CreateTeamModal from 'modals/CreateTeamModal'
import GraphModal from 'modals/GraphModal/GraphModal'
import GlobalStyles from './GlobalStyles'
import NavBar from './NavBar'
import LeftMenu from './LeftMenu'
import CreateNeuronShortcut from './components/CreateNeuronShortcut'
import CreateTeamShortcut from './components/CreateTeamShortcut'
import OpenGraphShortcut from './components/OpenGraphShortcut'
import OpenSpotlightShortcut from './components/OpenSpotlightShortcut'
import { graphql, useLazyLoadQuery } from 'react-relay'

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

const StyledChildContainer = styled.div`
  overflow-y: auto;
`

const meQuery = graphql`
  query MainLayoutQuery {
    me {
      currentTeam {
        id
      }
    }
  }
`

const MainLayout = ({ children }) => {
  const [toggled, toggle] = React.useState(false)
  const { openPortal } = React.useContext(PortalContext)
  const { me } = useLazyLoadQuery(meQuery)
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
      <GlobalStyles />

      <StyledContainer toggled={toggled}>
        {toggled && <LeftMenu toggleNavbar={toggle} />}

        <NavBar toggleNavbar={toggle} navbarToggled={toggled} />

        <StyledChildContainer>
          {children}
        </StyledChildContainer>
      </StyledContainer>

      <GraphModal />
      <CreateTeamModal />
      <InviteTeamMembersModal />

      <OpenSpotlightShortcut />
      <OpenGraphShortcut />
      <CreateNeuronShortcut />
      <CreateTeamShortcut />
    </React.Fragment>
  )
}

MainLayout.propTypes = {
  children: PropTypes.any,
  isTeamError: PropTypes.bool
}

export default MainLayout
