import React from 'react'
import PropTypes from 'prop-types'

import Label from 'atoms/Label'
import Caret from './Caret'

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
    <Label
      as="span"
      color="black"
      {...attributes}
      style={
        {
          position: 'relative',
          backgroundColor: leaf.alphaColor,
        }
      }
    >
      {leaf.isCaret && <Caret {...leaf} />}
      {children}
    </Label>
  )
}

Leaf.propTypes = {
  attributes: PropTypes.object,
  children: PropTypes.any,
  leaf: PropTypes.object,
}

export default Leaf