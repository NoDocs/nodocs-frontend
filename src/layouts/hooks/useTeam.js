import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fromJS, OrderedMap } from 'immutable'

import * as teamServices from 'services/team'
import * as local from 'utils/local'
import history from 'utils/history'
import { authActions, authSelectors } from 'logic/auth'
import { teamSelectors, teamActions } from 'logic/team'

const useTeam = () => {
  const activeTeamId = useSelector(teamSelectors.selectActiveTeamId)
  const currUserId = useSelector(authSelectors.selectCurrUserProperty('id'))
  const dispatch = useDispatch()

  React.useEffect(
    () => {
      if (!activeTeamId) return

      teamServices
        .getTeam(activeTeamId)
        .then((response) => {
          const groupBy = local.getTeamGroupBy(activeTeamId)
          const members = response
            .data
            .members
            .map(curr => curr.user)

          const currMember = members.find(member => member.id === currUserId)
          const initialValue = new OrderedMap({ [currUserId]: fromJS(currMember) })

          const groups = members
            .filter(curr => curr.id !== currUserId)
            .reduce((acc, curr) => acc.set(curr.id, fromJS(curr)), initialValue)

          if (groupBy === 'tags') {
            // Do something here
          }

          dispatch(teamActions.initializeTeam({ ...response.data, groupBy, groups }))
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
}

export default useTeam
