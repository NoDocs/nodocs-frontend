import React from 'react'
import PropTypes from 'prop-types'
import { Map } from 'immutable'

import { ShortcutsContext } from 'contexts'

const macRegex = /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/

const ShortcutsProvider = ({ children }) => {
  const [shortcuts, updateShortcuts] = React.useState(new Map())

  const onKeyDown = React.useCallback(
    (event) => {
      if (event.repeat) return

      const key = event.key
      const isMac = new RegExp(macRegex).test(navigator.platform)

      if (isMac && !event.metaKey) return
      if (!isMac && !event.ctrlKey) return

      const shortcut = shortcuts.find(curr => curr.get('hint').toString() === key)

      if (!shortcut) return

      event.preventDefault()
      event.stopPropagation()

      shortcut.get('handler')()
    },
    [shortcuts.size]
  )

  const addShortcut = shortcut => {
    updateShortcuts(state => state.set(
      shortcut.get('name'),
      shortcut
    ))
  }

  const deleteShortcut = name => updateShortcuts(state => state.delete(name))

  React.useEffect(
    () => {
      window.addEventListener('keydown', onKeyDown, true)

      return () => window.removeEventListener('keydown', onKeyDown, true)
    },
    [shortcuts.size]
  )

  return (
    <ShortcutsContext.Provider value={{ addShortcut, deleteShortcut }}>
      {children}
    </ShortcutsContext.Provider>
  )
}

ShortcutsProvider.propTypes = {
  children: PropTypes.any,
}

export default ShortcutsProvider
