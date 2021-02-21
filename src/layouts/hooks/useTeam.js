import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import * as teamServices from 'services/team'
import * as local from 'utils/local'
import history from 'utils/history'
import { authActions } from 'logic/auth'
import { teamSelectors, teamActions } from 'logic/team'
import { groupActions } from 'logic/groups'

const useTeam = () => {
  const members = useSelector(state => state.getIn(['entities', 'members']))
  const tags = useSelector(state => state.getIn(['entities', 'tags']))
  const activeTeamId = useSelector(teamSelectors.selectActiveTeamId)
  const groupBy = useSelector(state => state.getIn(['ui', 'activeTeam', 'groupBy']))
  const dispatch = useDispatch()

  React.useEffect(
    () => {
      if (!activeTeamId) return
      teamServices
        .getTeam(activeTeamId)
        .then((response) => { dispatch(teamActions.initializeTeam(response.data)) })
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
