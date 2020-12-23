import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fromJS, OrderedMap } from 'immutable'

import * as teamServices from 'services/team'
import * as local from 'utils/local'
import { authActions } from 'logic/auth'
import { teamSelectors, teamActions } from 'logic/team'

const useTeam = () => {
  const activeTeamId = useSelector(teamSelectors.selectActiveTeamId)
  const dispatch = useDispatch()

  React.useEffect(
    () => {
      if (!activeTeamId) return

      teamServices
        .getTeam(activeTeamId)
        .then((response) => {
          const groupBy = local.getTeamGroupBy(activeTeamId)
          const groups = response
            .data
            .members
            .map(curr => curr.user)
            .reduce((acc, curr) => acc.set(curr.id, fromJS(curr)), new OrderedMap())

          if (groupBy === 'tags') {
            // Do something here
          }

          dispatch(teamActions.initializeTeam({ ...response.data, groups }))
        })

      teamServices.setCurrentTeam({ teamId: activeTeamId })
        .then(response => { dispatch(authActions.updateCurrentUserTeam(response.data.id)) })
    },
    [activeTeamId]
  )
}

export default useTeam
