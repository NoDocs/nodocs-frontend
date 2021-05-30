import React from 'react'

import { PortalContext } from 'contexts'
import Shortcut from 'atoms/Shortcut'
import SpotlightModal from 'modals/SpotlightModal'

const OpenSpotlightShortcut = () => {
  const { openPortal } = React.useContext(PortalContext)

  const handleModalOpen = () => {
    openPortal({ name: 'spotlight-portal' })
  }

  return (
    <React.Fragment>
      <Shortcut
        name="open-spotlight-portal"
        hint="k"
        handler={handleModalOpen}
      />

      <SpotlightModal />
    </React.Fragment>
  )
}

export default OpenSpotlightShortcut
