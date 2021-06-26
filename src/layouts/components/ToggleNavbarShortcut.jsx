import React from 'react'
import PropTypes from 'prop-types'

import Shortcut from 'atoms/Shortcut'

const ToggleNavbarShortcut = ({ toggleNavbar }) => {
  return (
    <Shortcut
      name="open-spotlight-portal"
      hint="b"
      handler={() => toggleNavbar(toggled => !toggled)}
    />
  )
}

ToggleNavbarShortcut.propTypes = {
  toggleNavbar: PropTypes.func,
}

export default ToggleNavbarShortcut
