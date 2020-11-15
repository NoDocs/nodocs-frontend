import React from 'react'

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
    left: isForward ? '100%' : '0%'
  }
  const caretStyles = {
    ...caretStyleBase,
    background: color,
    left: isForward ? '100%' : '0%'
  }

  caretStyles[isForward ? 'bottom' : 'top'] = 0

  return (
    <>
      <span contentEditable={false} style={caretStyles}>
        <span style={{ position: 'relative' }}>
          <span contentEditable={false} style={cursorStyles}>
            {name}
          </span>
        </span>
      </span>
    </>
  )
}

const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>
  }

  if (leaf.code) {
    children = <code>{children}</code>
  }

  if (leaf.italic) {
    children = <em>{children}</em>
  }

  if (leaf.underline) {
    children = <u>{children}</u>
  }

  return (
    <span
      {...attributes}
      style={
        {
          position: 'relative',
          backgroundColor: leaf.alphaColor
        }
      }
    >
      {leaf.isCaret ? <Caret {...leaf} /> : null}
      {children}
    </span>
  )
}


export default Leaf