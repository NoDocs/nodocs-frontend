import React from 'react'
import styled from 'styled-components'

import { PortalContext } from 'contexts'
import LoadingTeamMembers from 'loadings/LoadingTeamMembers'
import TeamMembers from './TeamMembers'

const StyledTeamConfigurationBarContainer = styled.div`
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #CFD8DC;
  margin: 0px -50px;
  padding: 0px 50px;
`

const LeftContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 6px;
  align-items: center;
`

const TeamConfigurationBar = () => {
  const { closePortal } = React.useContext(PortalContext)

  return (
    <StyledTeamConfigurationBarContainer>
      <LeftContainer>
        <React.Suspense fallback={<LoadingTeamMembers />}>
          <TeamMembers />
        </React.Suspense>
      </LeftContainer>
    </StyledTeamConfigurationBarContainer>
  )
}

export default TeamConfigurationBar
