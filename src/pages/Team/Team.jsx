import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { Map } from 'immutable'

import { groupActions, groupSelectors } from 'logic/groups'
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
  const dispatch = useDispatch()
  const groups = useSelector(groupSelectors.groupsDomain)
  const teamMembers = useSelector(state => state.getIn(['entities', 'members']))

  React.useEffect(
    () => {
      const groups = teamMembers.map(member => new Map({
        id: member.get('id'),
        name: member.get('fullName')
      }))

      dispatch(groupActions.initializeGroup(groups))
    },
    []
  )

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
