import React from 'react'
import PropTypes from 'prop-types'

const cursorStyleBase = {
  position: 'absolute',
  top: -2,
  pointerEvents: 'none',
  userSelect: 'none',
  transform: 'translateY(-100%)',
  fontSize: 10,
  color: 'white',
  background: 'palevioletred',
  whiteSpace: 'nowrap'
}

const caretStyleBase = {
  position: 'absolute',
  pointerEvents: 'none',
  userSelect: 'none',
  height: '1.2em',
  width: 2,
  background: 'palevioletred'
}

const Caret = ({ color, isForward, name }) => {
  const cursorStyles = {
    ...cursorStyleBase,
    background: color,
    left: isForward ? '100%' : '0%',
  }

  const caretStyles = {
    ...caretStyleBase,
    ...(isForward ? { bottom: 0 } : { top: 0 }),
    background: color,
    left: isForward ? '100%' : '0%'
  }

  return (
    <span contentEditable={false} style={caretStyles}>
      <span style={{ position: 'relative' }}>
        <span contentEditable={false} style={cursorStyles}>
          {name}
        </span>
      </span>
    </span>
  )
}

Caret.propTypes = {
  color: PropTypes.string,
  isForward: PropTypes.bool,
  name: PropTypes.string,
}

export default Caret
