import React from 'react'

import { PortalContext } from 'contexts'

const usePortal = () => {
  const { openPortal, closePortal } = React.useContext(PortalContext)

  return {
    openPortal,
    closePortal,
  }
}

export default usePortal
