import React from 'react'

import { PortalContext } from 'contexts'
import Shortcut from 'atoms/Shortcut'

const OpenGraphShortcut = () => {
  const { openPortal } = React.useContext(PortalContext)

  const handleModalOpen = () => {
    openPortal({ name: 'graph-modal' })
  }

  return (
    <Shortcut
      name="open-graph-modal"
      hint="g"
      handler={handleModalOpen}
    />
  )
}

export default OpenGraphShortcut
