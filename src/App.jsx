import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Socket from './socket'

import ProtectedRoute from './atoms/ProtectedRoute'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Document from './pages/Document'

const App = () => {
  React.useEffect(() => { Socket.connect() }, [])

  return (
    <Switch>
      <ProtectedRoute path="/" exact component={Home} />
      <ProtectedRoute path="/d/:documentId" exact component={Document} />

      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </Switch>
  )
}

export default App
