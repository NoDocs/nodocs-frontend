import React from 'react'
import PropTypes from 'prop-types'
import { OrderedMap, fromJS } from 'immutable'

import { PortalContext } from 'contexts'

const PortalsProvider = ({ children }) => {
  const [portals, updatePortals] = React.useState(new OrderedMap())

  const openPortal = React.useCallback(
    ({ name, data = {} }) => {
      updatePortals(state => state.set(name, fromJS({ open: true, data })))
    },
    []
  )

  const closePortal = React.useCallback(
    name => updatePortals(state => state.delete(name)),
    []
  )

  const getPortalData = React.useCallback(
    name => portals.getIn([name, 'data']),
    [portals]
  )

  const getPortalState = React.useCallback(
    name => portals.getIn([name, 'open']) || false,
    [portals]
  )

  const value = React.useMemo(
    () => ({ getPortalData, portals, getPortalState, openPortal, closePortal }),
    [portals, closePortal, getPortalData, getPortalState, openPortal]
  )

  return (
    <PortalContext.Provider value={value}>
      {children}
    </PortalContext.Provider>
  )
}

PortalsProvider.propTypes = {
  children: PropTypes.any,
}

export default PortalsProvider
