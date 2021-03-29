import React from 'react'
import styled from 'styled-components'

import HoverableContainer from 'atoms/HoverableContainer'
import AutoSizeInput from 'atoms/AutoSizeInput'

const StyledContainer = styled.div`
  margin-left: 25px;
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 5px;
`

const OpenedDocuments = () => {
  return (
    <StyledContainer>
      Opened Docs
    </StyledContainer>
  )
}

export default OpenedDocuments
