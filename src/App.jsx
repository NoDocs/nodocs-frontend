import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { Switch, Route } from 'react-router-dom'

import Socket from './socket'

import MainLayout from './layouts/MainLayout'
import FullHeightPageLayout from './layouts/FullHeightPageLayout'
import ProtectedRoute from './atoms/ProtectedRoute'
import Login from './pages/Login'
import Register from './pages/Register'
import Team from './pages/Team'
import Document from './pages/Document'
import CreateCompany from './pages/CreateCompany'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
  }
`

const App = () => {
  React.useEffect(() => { Socket.connect() }, [])

  return (
    <React.Fragment>
      <Switch>
        <ProtectedRoute
          path="/"
          exact
          Layout={MainLayout}
          component={Team}
        />

        <ProtectedRoute
          path="/d/:documentId"
          Layout={MainLayout}
          component={Document}
        />

        <ProtectedRoute
          path="/create-company"
          Layout={FullHeightPageLayout}
          component={CreateCompany}
        />

        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>

      <GlobalStyles />
    </React.Fragment>
  )
}

export default App
