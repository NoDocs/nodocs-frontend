import React from 'react'
import styled from 'styled-components'

import { PortalContext } from 'contexts'
import Shortcut from 'atoms/Shortcut'
import TeamConfigurationBar from './TeamConfigurationBar'

const StyledContentContainer = styled.div`
  margin: 0px 50px;
`

const Team = () => {
  const { openPortal } = React.useContext(PortalContext)

  return (
    <React.Fragment>
      <StyledContentContainer>
        <TeamConfigurationBar />
      </StyledContentContainer>

      <Shortcut
        name="open-team-invitation"
        hint="a"
        handler={() => openPortal({ name: 'invite-team-members' })}
      />
    </React.Fragment>
  )
}

export default Team
