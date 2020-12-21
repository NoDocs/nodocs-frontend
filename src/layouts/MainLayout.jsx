import React from 'react'
import PropTypes from 'prop-types'
import styled, { createGlobalStyle } from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'

import * as authServices from 'services/auth'
import * as teamService from 'services/team'
import * as companyServices from 'services/company'
import { authActions, authSelectors } from 'logic/auth'
import { companySelectors } from 'logic/company'
import { teamActions, teamSelectors } from 'logic/team'
import { companyActions } from 'logic/company'
import history from 'utils/history'

import Socket from '../socket'

import NavBar from './NavBar'
import LeftMenu from './LeftMenu'

const StyledContainer = styled.div`
  display: grid;
  width: 100%;
  ${({ navbarToggled }) => navbarToggled && 'grid-template-columns: 300px 1fr;'}
  grid-template-rows: 56px auto;
  grid-template-areas: ${({ navbarToggled }) => navbarToggled
    ? `
      "left nav"
      "left content"
    `
    : `
      "nav"
      "content"
    `};
  height: 100vh;
`

const GlobalStyles = createGlobalStyle`
  body {
    background-color: #F9F9F9;
  }

  .selection-area {
    background-color: rgba(0, 0, 0, 0.2);
  }

  .selected {
    background: rgba(211,218,225,0.5);
    padding: 0 5px;
    border-left: 2px solid black;
  }
`

const MainLayout = ({ children, isTeamError }) => {
  const [navbarToggled, toggleNavbar] = React.useState(false)
  const { search, pathname } = useLocation()

  const userId = useSelector(authSelectors.selectCurrUserProperty('id'))
  const userCompanyId = useSelector(authSelectors.selectCurrUserProperty('currentCompanyId'))
  const userTeamId = useSelector(authSelectors.selectCurrUserProperty('currentTeamId'))
  const activeCompanyId = useSelector(companySelectors.selectActiveCompanyId)
  const activeTeamId = useSelector(teamSelectors.selectActiveTeamId)
  const isTeamLoaded = useSelector(teamSelectors.selectIsTeamLoaded)
  const dispatch = useDispatch()


  React.useEffect(
    () => {
      const { companyId, teamId } = queryString.parse(search)
      if (companyId) { dispatch(companyActions.setActiveCompany(companyId)) }
      if (teamId) { dispatch(teamActions.setActiveTeam(teamId)) }
    },
    [search]
  )

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

  React.useEffect(
    () => {
      if (!activeCompanyId) return

      companyServices
        .setCurrentCompany({ companyId: activeCompanyId })
        .then(response => { dispatch(authActions.updateCurrentUserCompany(response.data.id)) })

      teamService
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

  React.useEffect(
    () => {
      if (!activeTeamId) return

      const body = { teamId: activeTeamId }
      teamService
        .getTeamsWithGrouped(body)
        .then((response) => {
          if (pathname === '/team/404') {
            history.push('/')
          }
          dispatch(teamActions.initializeTeam(response.data))
        })
        .catch(err => {
          if (err.message === 'NotAuthorized') {
            history.push('team/404')
          }
        })

      teamService.setCurrentTeam({ teamId: activeTeamId })
        .then(response => { dispatch(authActions.updateCurrentUserTeam(response.data.id)) })
    },
    [activeTeamId]
  )

  React.useEffect(() => {
    if (!activeCompanyId) return
    Socket.connect(activeCompanyId)
  }, [activeCompanyId])

  if (!userId) return <div>Fetching user...</div>

  return (
    <React.Fragment>
      <StyledContainer navbarToggled={navbarToggled}>
        {navbarToggled && <LeftMenu toggleNavbar={toggleNavbar} />}

        <NavBar
          toggleNavbar={toggleNavbar}
          navbarToggled={navbarToggled}
        />

        {(isTeamError || isTeamLoaded) && <div>{children}</div>}
      </StyledContainer>

      <GlobalStyles />
    </React.Fragment>
  )
}

MainLayout.propTypes = {
  children: PropTypes.any,
  isTeamError: PropTypes.bool
}

export default MainLayout
