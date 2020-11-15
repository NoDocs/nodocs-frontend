import React from 'react'
import styled from 'styled-components'

import Label from 'atoms/Label'
import HoverableContainer from 'atoms/HoverableContainer'

const StyledContainer = styled.div`
  margin-left: 25px;
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 5px;
`

const OpenedDocuments = () => (
  <StyledContainer>
    <HoverableContainer>
      <Label>Product KPIs</Label>
    </HoverableContainer>

    <HoverableContainer>
      <Label>Investment</Label>
    </HoverableContainer>

    <HoverableContainer>
      <Label>Product</Label>
    </HoverableContainer>

    <HoverableContainer>
      <Label>Growth Strategy</Label>
    </HoverableContainer>

    <HoverableContainer>
      <Label>Sales</Label>
    </HoverableContainer>
  </StyledContainer>
)

export default OpenedDocuments
