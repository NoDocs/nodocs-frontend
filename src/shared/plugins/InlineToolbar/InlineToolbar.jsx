import React from 'react'
import styled from 'styled-components'
import { useEditor } from 'slate-react'

import useInlineToolbar from './useInlineToolbar'
import Toolbar from './Toolbar'

const StyledInlineToolbarContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-columns-gap: 4px;
  position: absolute;
  border-radius: 6px;
  transition: all 100ms ease-in-out;
  background-color: #ECEFF1;
`

const InlineToolbar = () => {
  const editor = useEditor()
  const toolbarRef = React.useRef()

  const { hidden } = useInlineToolbar({ editor, ref: toolbarRef })

  if (hidden) return null

  return (
    <StyledInlineToolbarContainer ref={toolbarRef}>
      <Toolbar />
    </StyledInlineToolbarContainer>
  )
}

export default InlineToolbar
