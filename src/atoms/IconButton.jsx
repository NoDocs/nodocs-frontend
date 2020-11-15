import React from 'react'
import styled from 'styled-components'

const StyledButtonContainer = styled.button`
  border: none;
  padding: 6px;
  background-color: transparent;
  border-radius: 5px 10px;
  cursor: pointer;

  &:hover {
    background-color: #F3F3F3;
  }
`

const IconButton = ({ icon, onClick }) => (
  <StyledButtonContainer onClick={onClick}>
    <img src={icon} />
  </StyledButtonContainer>
)

export default IconButton
