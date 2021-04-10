import React from 'react'
import PropTypes from 'prop-types'

import { PortalContext } from 'contexts'

const withOpenPortal = (Component) => {
  const EnhancedComponent = ({ opens, closes, onClick, data, ...rest }) => {
    const { openPortal, closePortal } = React.useContext(PortalContext)

    const onOpen = (event) => {
      event.stopPropagation()

      openPortal({ name: opens, data })
      if (closes) closePortal({ name: closes })
      if (onClick) onClick(event)
    }

    return <Component onClick={opens ? onOpen : onClick} {...rest} />
  }

  EnhancedComponent.propTypes = {
    opens: PropTypes.string,
    closes: PropTypes.string,
    onClick: PropTypes.func,
    data: PropTypes.object,
  }

  return EnhancedComponent
}

export default withOpenPortal
