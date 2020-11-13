import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

import * as authServices from 'services/auth'
import * as documentServices from 'services/document'
import { authActions } from 'logic/auth'
import { documentActions } from 'logic/document'
import history from 'utils/history'

import Navigation from './Navigation'
import LeftMenu from './LeftMenu'

const StyledContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 300px 1fr;
  grid-template-rows: 56px auto;
  grid-template-areas:
    "left nav"
    "left content";
  height: 100vh;
`

const GlobalStyles = createGlobalStyle`
  *, body {
    margin: 0px;
    padding: 0px;
  }
`

const MainLayout = ({ children }) => {
  const userId = useSelector(state => state.getIn(['auth', 'id']))
  const dispatch = useDispatch()

  React.useEffect(
    () => {
      if (userId) return
      if (!localStorage.getItem('token')) return

      const handleThen = (response) => {
        dispatch(authActions.signIn(response.data))
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

      documentServices
        .getDocuments()
        .then(response => dispatch(documentActions.putDocuments(response.data)))
    },
    []
  )

  if (!userId) return <div>Loading...</div>

  return (
    <React.Fragment>
      <StyledContainer>
        <LeftMenu />
        <Navigation />
        <div>{children}</div>
      </StyledContainer>

      <GlobalStyles />
    </React.Fragment>
  )
}

export default MainLayout
