import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Login from './pages/Login'
import Register from './pages/Register'
import Document from './pages/Document'

const App = () => {
  return (
    <Switch>
      <Route
        path="/"
        exact
        component={Document}
      />

      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </Switch>
  )
}

export default App
