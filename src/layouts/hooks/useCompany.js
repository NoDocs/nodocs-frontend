import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import * as companyServices from 'services/company'
import * as teamServices from 'services/team'
import { companySelectors } from 'logic/company'
import { teamActions } from 'logic/team'
import { authSelectors, authActions } from 'logic/auth'

const useCompany = () => {
  const userCompanyId = useSelector(authSelectors.selectCurrUserProperty('currentCompanyId'))
  const userTeamId = useSelector(authSelectors.selectCurrUserProperty('currentTeamId'))
  const activeCompanyId = useSelector(companySelectors.selectActiveCompanyId)

  const dispatch = useDispatch()

  React.useEffect(
    () => {
      if (!activeCompanyId) return

      companyServices
        .setCurrentCompany({ companyId: activeCompanyId })
        .then(response => { dispatch(authActions.updateCurrentUserCompany(response.data.id)) })

      teamServices
        .getTeams({ companyId: activeCompanyId })
        .then(response => {
          dispatch(teamActions.putTeams(response.data))
          dispatch(teamActions.setActiveTeam(activeCompanyId === userCompanyId
            ? userTeamId
            : response.data[0].id))
        })
    },
    [activeCompanyId]
  )
}

export default useCompany
