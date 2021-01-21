import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

import * as authServices from 'services/auth'
import * as companyServices from 'services/company'
import { authActions, authSelectors } from 'logic/auth'
import { companyActions } from 'logic/company'
import { teamSelectors, teamActions } from 'logic/team'

const usePageLoadFlow = () => {
  const { search } = useLocation()
  const dispatch = useDispatch()
  const userId = useSelector(authSelectors.selectCurrUserProperty('id'))
  const isTeamLoaded = useSelector(teamSelectors.selectIsTeamLoaded)

  React.useEffect(
    () => {
      if (!localStorage.getItem('token')) return

      const handleThen = (response) => {
        const { data } = response

        try {
          dispatch(authActions.signIn(data))
          dispatch(companyActions.setCompanies([data.currentCompany]))
          dispatch(companyActions.setActiveCompany(data.currentCompany.id))
        } catch (error) {
          console.log(error)
        }
      }

      const handleCatch = (error) => {
        if (error.message === 'NotAuthorized') {
          localStorage.clear()
          history.push('/login')
        }
      }

      authServices
        .me()
        .then(handleThen)
        .catch(handleCatch)

      companyServices
        .getCompanies()
        .then(response => { dispatch(companyActions.setCompanies(response.data)) })
    },
    []
  )

  React.useEffect(
    () => {
      const query = new URLSearchParams(search)

      const teamId = query.get('teamId')
      const companyId = query.get('companyId')

      if (companyId) { dispatch(companyActions.setActiveCompany(companyId)) }
      if (teamId) { dispatch(teamActions.setActiveTeam(teamId)) }
    },
    [search]
  )

  return {
    userId,
    isTeamLoaded,
  }
}

export default usePageLoadFlow
