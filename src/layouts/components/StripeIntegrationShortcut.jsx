import React from 'react'

import { PortalContext } from 'contexts'
import Shortcut from 'atoms/Shortcut'
import StripeIntegrationModal from 'modals/StripeIntegrationModal'

const StripeIntegrationShortcut = () => {
  const { openPortal } = React.useContext(PortalContext)

  const handleModalOpen = () => {
    openPortal({ name: 'stripe-integration-portal' })
  }

  return (
    <React.Fragment>
      <Shortcut
        name="stripe-integration-portal"
        hint="s"
        handler={handleModalOpen}
      />

      <StripeIntegrationModal />
    </React.Fragment>
  )
}

export default StripeIntegrationShortcut
