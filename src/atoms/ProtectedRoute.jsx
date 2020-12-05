import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

const ProtectedRoute = ({ component: Component, Layout, ...rest }) => (
  <Route
    {...rest}
    render={({ location }) => {
      if (!localStorage.getItem('token')) {
        return <Redirect to={{ pathname: '/login', state: { from: location } }} />
      }

      if (!Layout) return <Component />

      return (
        <Layout>
          <Component />
        </Layout>
      )
    }}
  />
)

ProtectedRoute.propTypes = {
  component: PropTypes.any,
  Layout: PropTypes.element,
}

export default ProtectedRoute
