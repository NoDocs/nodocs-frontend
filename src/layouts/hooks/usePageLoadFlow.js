import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import * as authServices from 'services/auth'
import * as companyServices from 'services/company'
import { authActions, authSelectors } from 'logic/auth'
import { companyActions } from 'logic/company'
import { teamSelectors } from 'logic/team'

const usePageLoadFlow = () => {
  const dispatch = useDispatch()
  const userId = useSelector(authSelectors.selectCurrUserProperty('id'))
  const isTeamLoaded = useSelector(teamSelectors.selectIsTeamLoaded)

  React.useEffect(
    () => {
      if (!localStorage.getItem('token')) return

      const handleThen = (response) => {
        const { data } = response

        dispatch(authActions.signIn(data))
        dispatch(companyActions.setCompanies([data.currentCompany]))
        dispatch(companyActions.setActiveCompany(data.currentCompany.id))
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

  return {
    userId,
    isTeamLoaded,
  }
}

export default usePageLoadFlow
