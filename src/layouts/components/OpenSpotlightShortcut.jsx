import React from 'react'

import { PortalContext } from 'contexts'
import Shortcut from 'atoms/Shortcut'

const OpenSpotlightShortcut = () => {
  const { openPortal } = React.useContext(PortalContext)

  const handleModalOpen = () => {
    openPortal({ name: 'spotlight-portal' })
  }

  return (
    <Shortcut
      name="open-spotlight-portal"
      hint="k"
      handler={handleModalOpen}
    />
  )
}

export default OpenSpotlightShortcut
