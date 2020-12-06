import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

import { teamSelectors } from 'logic/team'
import { PortalContext } from 'contexts'
import InviteTeamMembers from 'modals/InviteTeamMembers'
import Shortcut from 'atoms/Shortcut'
import TeamDescription from './TeamDescription'
import TeamHeader from './TeamHeader'
import Collection from './Collection'
import CreateCollection from './CreateCollection'

const StyledContentContainer = styled.div`
  margin: 0px 130px;
`

const Team = () => {
  const { openPortal } = React.useContext(PortalContext)
  const collections = useSelector(teamSelectors.selectTeamProperty('collections'))
  const [newCollection, toggleNewCollection] = React.useState(false)

  return (
    <React.Fragment>
      <TeamDescription />

      <StyledContentContainer>
        <TeamHeader toggleNewCollection={toggleNewCollection} />
        {newCollection && <CreateCollection onDone={() => toggleNewCollection(false)} />}

        {collections.map(collectionId => <Collection key={collectionId} id={collectionId} />)}
      </StyledContentContainer>

      <InviteTeamMembers />

      <Shortcut
        name="open-team-invitation"
        hint="a"
        handler={() => openPortal({ name: 'invite-team-members' })}
      />
    </React.Fragment>
  )
}

export default Team
