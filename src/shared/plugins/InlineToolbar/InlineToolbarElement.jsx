import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useEditor } from 'slate-react'

import IconButton from 'atoms/IconButton'
import { isMarkActive, toggleMark } from './utils'

const StyledIconButton = styled(IconButton)`
  padding: 0px;
`

const InlineToolbarElement = ({ icon, format, ...rest }) => {
  const editor = useEditor()
  const active = isMarkActive(editor, format)

  const onMouseDown = (event) => {
    event.preventDefault()
    toggleMark(editor, format)
  }

  return (
    <StyledIconButton size={24} onMouseDown={onMouseDown} {...rest}>
      {icon(active)}
    </StyledIconButton>
  )
}

InlineToolbarElement.propTypes = {
  icon: PropTypes.any,
  format: PropTypes.string,
}

export default InlineToolbarElement
