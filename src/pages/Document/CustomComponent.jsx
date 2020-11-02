import React from 'react'
import styled from 'styled-components'

const StyledComponentContainer = styled.div`
  border: 1px solid black;
  padding: 10px;
`

const CustomComponent = ({ id, content }) => {
  return (
    <StyledComponentContainer data-component-id={id}>
      {content}
    </StyledComponentContainer>
  )
}

export default CustomComponent
