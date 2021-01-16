import React from 'react'
import PropTypes from 'prop-types'
import { Map } from 'immutable'

import { ShortcutsContext } from 'contexts'

const Shortcut = ({ name, hint, handler, removeOnUnMount = true }) => {
  const { addShortcut, deleteShortcut } = React.useContext(ShortcutsContext)

  React.useEffect(
    () => {
      addShortcut(new Map({ name, hint, handler }))

      return () => {
        if (removeOnUnMount) deleteShortcut(name)
      }
    },
    []
  )

  return null
}

Shortcut.propTypes = {
  name: PropTypes.string,
  hint: PropTypes.any,
  handler: PropTypes.func,
  removeOnUnMount: PropTypes.bool,
}

export default Shortcut
