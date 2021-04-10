import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

const ProtectedRoute = ({ component: RouteComponent, fallback, Layout, ...rest }) => (
  <Route
    {...rest}
    render={({ location }) => {
      if (!localStorage.getItem('token')) {
        return <Redirect to={{ pathname: '/login', state: { from: location } }} />
      }

      const ReturnedComponent = !Layout
        ? <RouteComponent />
        : <Layout><RouteComponent /></Layout>

      if (fallback) {
        return (
          <React.Suspense fallback={fallback}>
            {ReturnedComponent}
          </React.Suspense>
        )
      }

      return ReturnedComponent
    }}
  />
)

ProtectedRoute.propTypes = {
  component: PropTypes.any,
  Layout: PropTypes.any,
  fallback: PropTypes.element,
  isTeamError: PropTypes.bool
}

export default ProtectedRoute
