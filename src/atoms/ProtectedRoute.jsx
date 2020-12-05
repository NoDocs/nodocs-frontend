import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

const ProtectedRoute = ({ component: RouteComponent, Layout, ...rest }) => (
  <Route
    {...rest}
    render={({ location }) => {
      if (!localStorage.getItem('token')) {
        return <Redirect to={{ pathname: '/login', state: { from: location } }} />
      }

      if (!Layout) return <RouteComponent />

      return (
        <Layout>
          <RouteComponent />
        </Layout>
      )
    }}
  />
)

ProtectedRoute.propTypes = {
  component: PropTypes.any,
  Layout: PropTypes.any,
}

export default ProtectedRoute
