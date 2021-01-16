import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

import { groupSelectors } from 'logic/groups'
import { PortalContext } from 'contexts'
import Shortcut from 'atoms/Shortcut'

import TeamDescription from './TeamDescription'
import TeamHeader from './TeamHeader'
import Group from './Group'

const StyledContentContainer = styled.div`
  margin: 0px 50px;
`

const Team = () => {
  const { openPortal } = React.useContext(PortalContext)
  const groups = useSelector(groupSelectors.groupsDomain)

  return (
    <React.Fragment>
      <TeamDescription />

      <StyledContentContainer>
        <TeamHeader />

        {groups
          .map(group => <Group key={group.get('id')} group={group} />)
          .toList()}
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
