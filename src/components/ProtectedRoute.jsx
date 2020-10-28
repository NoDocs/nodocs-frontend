import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

const ProtectedRoute = ({ children, ...rest }) => (
  <Route
    {...rest}
    render={({ location }) => {
      if (!localStorage.getItem('token')) {
        return <Redirect to={{ pathname: '/login', state: { from: location } }} />
      }

      return children
    }}
  />
)

ProtectedRoute.propTypes = {
  children: PropTypes.any,
}

export default ProtectedRoute
