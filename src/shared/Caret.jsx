import React from 'react'
import PropTypes from 'prop-types'

const getCursorStyleBase = ({ color, isForward }) => ({
  position: 'absolute',
  top: -2,
  pointerEvents: 'none',
  userSelect: 'none',
  transform: 'translateY(-100%)',
  fontSize: 10,
  color: 'white',
  whiteSpace: 'nowrap',
  background: color || 'palevioletred',
  left: isForward ? '100%' : '0%',
})

const getCaretStyleBase = ({ color, isForward }) => ({
  position: 'absolute',
  pointerEvents: 'none',
  userSelect: 'none',
  height: '1.2em',
  width: 2,
  background: color || 'palevioletred',
  left: isForward ? '100%' : '0%',
  ...(isForward ? { bottom: 0 } : { top: 0 })
})

const Caret = ({ data, isForward }) => {
  const cursorStyles = getCursorStyleBase({ color: data.color, isForward })
  const caretStyles = getCaretStyleBase({ color: data.color, isForward })

  return (
    <>
      <span contentEditable={false} style={caretStyles}>
        <span style={{ position: 'relative' }}>
          <span contentEditable={false} style={cursorStyles}>
            {data.name}
          </span>
        </span>
      </span>
    </>
  )
}

Caret.propTypes = {
  data: PropTypes.object,
  isForward: PropTypes.bool,
}

export default Caret
