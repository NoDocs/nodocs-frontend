import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

import MainLayout from '../layouts/MainLayout'

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={({ location }) => {
      if (!localStorage.getItem('token')) {
        return <Redirect to={{ pathname: '/login', state: { from: location } }} />
      }

      return (
        <MainLayout>
          <Component />
        </MainLayout>
      )
    }}
  />
)

ProtectedRoute.propTypes = {
  component: PropTypes.any,
}

export default ProtectedRoute
