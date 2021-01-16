import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

import useInlineToolbar from '../hooks/useInlineToolbar'

const StyledInlineToolbar = styled.div`
  position: absolute;
  z-index: 100;
  background-color: black;
  color: white;
  border-radius: 5px;
  height: 30px;
  display: flex;
  align-items: center;
`

const InlineToolbar = () => {
  const { showInlineToolbar, coords } = useInlineToolbar()

  return showInlineToolbar && ReactDOM.createPortal(
    <StyledInlineToolbar style={coords}>
      Inline Toolbar
    </StyledInlineToolbar>,
    document.getElementById('portals')
  )
}

export default InlineToolbar
