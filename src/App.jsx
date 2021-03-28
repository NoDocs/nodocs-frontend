import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { Switch, Route } from 'react-router-dom'

import NeuronModal from 'modals/NeuronModal/NeuronModal'
import LoadingDocument from 'loadings/LoadingDocument'
import MainLayout from './layouts/MainLayout'
import ProtectedRoute from './atoms/ProtectedRoute'
import Notifications from './molecules/Notifications'
import Login from './pages/Login'
import Register from './pages/Register'
import Team from './pages/Team'
import Document from './pages/Document'
import CreateCompany from './pages/CreateCompany'
import NotFoundTeam from './pages/NotFoundTeam'
import Onboarding from './pages/Onboarding'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
  }
`

const App = () => {
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
          component={() => (
            <React.Suspense fallback={<LoadingDocument />}>
              <Document />
            </React.Suspense>
          )}
        />

        <ProtectedRoute
          path="/team/404"
          Layout={MainLayout}
          component={NotFoundTeam}
          isTeamError
        />

        <ProtectedRoute path="/create-company" component={CreateCompany} />

        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/onboarding" component={Onboarding} />
      </Switch>

      <Notifications />
      <NeuronModal />
      <GlobalStyles />
    </React.Fragment>
  )
}

export default App
