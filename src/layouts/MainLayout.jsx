import React from 'react'
import PropTypes from 'prop-types'
import styled, { createGlobalStyle } from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

import * as authServices from 'services/auth'
import * as documentServices from 'services/document'
import * as teamService from 'services/team'
import { authActions } from 'logic/auth'
import { documentActions } from 'logic/document'
import { teamActions, teamSelectors } from 'logic/team'
import history from 'utils/history'

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

const MainLayout = ({ children }) => {
  const [navbarToggled, toggleNavbar] = React.useState(false)

  const userId = useSelector(state => state.getIn(['auth', 'id']))
  const activeTeamId = useSelector(teamSelectors.selectActiveTeamId)
  const isTeamLoaded = useSelector(teamSelectors.selectIsTeamLoaded)
  const dispatch = useDispatch()

  React.useEffect(
    () => {
      if (userId) return
      if (!localStorage.getItem('token')) return

      const handleThen = (response) => {
        dispatch(authActions.signIn(response.data))
        if (!response.data.currentCompany) {
          history.push('/create-company')
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

      teamService
        .getTeams()
        .then(response => {
          dispatch(teamActions.putTeams(response.data))
          dispatch(teamActions.setActiveTeam(response.data[0].id))
        })
    },
    []
  )

  React.useEffect(
    () => {
      if (!activeTeamId) return

      teamService
        .getTeam(activeTeamId)
        .then((response) => { console.log('response', response.data)
          dispatch(teamActions.initializeTeam(response.data)) })
    },
    [activeTeamId]
  )

  if (!userId) return <div>Fetching user...</div>

  return (
    <React.Fragment>
      <StyledContainer navbarToggled={navbarToggled}>
        {navbarToggled && <LeftMenu toggleNavbar={toggleNavbar} />}

        <NavBar
          toggleNavbar={toggleNavbar}
          navbarToggled={navbarToggled}
        />

        {isTeamLoaded && <div>{children}</div>}
      </StyledContainer>

      <GlobalStyles />
    </React.Fragment>
  )
}

MainLayout.propTypes = {
  children: PropTypes.any,
}

export default MainLayout
