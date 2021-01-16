import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fromJS, OrderedMap } from 'immutable'

import * as teamServices from 'services/team'
import * as local from 'utils/local'
import history from 'utils/history'
import { authActions, authSelectors } from 'logic/auth'
import { teamSelectors, teamActions } from 'logic/team'
import { groupActions } from 'logic/groups'

const useTeam = () => {
  const members = useSelector(state => state.getIn(['entities', 'members']))
  const tags = useSelector(state => state.getIn(['entities', 'tags']))
  const activeTeamId = useSelector(teamSelectors.selectActiveTeamId)
  const groupBy = useSelector(state => state.getIn(['ui', 'activeTeam', 'groupBy']))
  const currUserId = useSelector(authSelectors.selectCurrUserProperty('id'))
  const dispatch = useDispatch()

  React.useEffect(
    () => {
      if (!activeTeamId) return
      teamServices
        .getTeam(activeTeamId)
        .then((response) => {
          const groupBy = local.getTeamGroupBy(activeTeamId)
          let groupedMembers,groupedTags
          const members = response
            .data
            .members
            .map(curr => curr.user)

          const currMember = members.find(member => member.id === currUserId)
          const initialValue = new OrderedMap({ [currUserId]: fromJS(currMember) })

          const memberGroups = members
            .filter(curr => curr.id !== currUserId)
            .reduce((acc, curr) => acc.set(curr.id, fromJS(curr)), initialValue)
          groupedMembers = memberGroups

          const tags = response.data.tags
          const initialTagValue = new OrderedMap({ ['noTagAssigned']: fromJS({ fullName: 'No Tag Assigned', id: 'noTagAssigned' }) })
          const tagsGroups = tags.reduce((acc, curr) => acc.set(curr.id, fromJS({ id: curr.id, fullName: curr.name })), initialTagValue)
          groupedTags = tagsGroups

          const groups = groupBy === 'members' ? memberGroups : tagsGroups
          const newTeams = { ...response.data, members: groupedMembers, tags: groupedTags }
          dispatch(teamActions.initializeTeam({ ...newTeams, groupBy, groups }))
        })
        .catch(err => {
          if (err.message === 'NotAuthorized') {
            history.push('team/404')
          }
        })

      teamServices.setCurrentTeam({ teamId: activeTeamId })
        .then(response => { dispatch(authActions.updateCurrentUserTeam(response.data.id)) })
    },
    [activeTeamId]
  )

  React.useEffect(() => {
    const localGroupBy = local.getTeamGroupBy(activeTeamId)
    if (groupBy !== localGroupBy) {
      if (groupBy === 'members') {
        dispatch(groupActions.reInitializeGroups({ groups: members }))
        local.setTeamGroupBy(activeTeamId, 'members')
      } else if (groupBy === 'tags') {
        dispatch(groupActions.reInitializeGroups({ groups: tags }))
        local.setTeamGroupBy(activeTeamId, 'tags')
      }
    }
  }, [groupBy])
}

export default useTeam
