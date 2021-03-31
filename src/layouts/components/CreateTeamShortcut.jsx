import React from 'react'

import { PortalContext } from 'contexts'
import Shortcut from 'atoms/Shortcut'

const CreateTeamShortcut = () => {
  const { openPortal } = React.useContext(PortalContext)

  const handleModalOpen = () => {
    openPortal({ name: 'create-team-modal' })
  }

  return (
    <Shortcut
      name="create-team-modal"
      hint="s"
      handler={handleModalOpen}
    />
  )
}

export default CreateTeamShortcut
