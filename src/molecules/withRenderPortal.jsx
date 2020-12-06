import React from 'react'

import { PortalContext } from 'contexts'

const withRenderPortal = (getPortalName) => Comp => {
  const Hoc = (props) => (
    <PortalContext.Consumer>
      {({ getPortalState, getPortalData, closePortal }) => getPortalState(getPortalName(props))
        ? (
          <Comp
            {...props}
            data={getPortalData(getPortalName(props))}
            closePortal={() => closePortal(getPortalName(props))}
            portalName={getPortalName(props)}
          />
        )
        : null}
    </PortalContext.Consumer>
  )

  return Hoc
}

export default withRenderPortal
